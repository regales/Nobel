const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const ytdlDiscord = require("ytdl-core-discord");
const yts = require("yt-search");
const fs = require("fs");
const sendError = require("../util/error");



module.exports = {
    info: {
        name: "play",
        description: "To play songs",
        usage: "<YouTube_URL> | <song_name>",
        aliases: ["p"],
    },

    run: async(client, message, args) => {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("<:xmark:314349398824058880> I'm Sorry But You Need To Join In A Voice Channel To Play Music!", message.channel);


        var searchString = args.join(" ");
        if (!searchString) return sendError("<:xmark:314349398824058880> What To Play? \n `*play <song name_url>` ? ", message.channel);
        const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
        var serverQueue = message.client.queue.get(message.guild.id);

        let songInfo = null;
        let song = null;
        if (url.match(/^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi)) {
            try {
                songInfo = await ytdl.getInfo(url);
                if (!songInfo) return sendError("<:xmark:314349398824058880> Looks Like I Was Unable To Find The Song On YouTube", message.channel);
                song = {
                    id: songInfo.videoDetails.videoId,
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url,
                    img: songInfo.player_response.videoDetails.thumbnail.thumbnails[0].url,
                    duration: songInfo.videoDetails.lengthSeconds,
                    ago: songInfo.videoDetails.publishDate,
                    views: String(songInfo.videoDetails.viewCount).padStart(10, " "),
                    req: message.author,
                };
            } catch (error) {
                console.error(error);
                return message.reply(error.message).catch(console.error);
            }
        } else {
            try {
                var searched = await yts.search(searchString);
                if (searched.videos.length === 0) return sendError("<:xmark:314349398824058880> Looks Like I Was Unable To Find The Song On YouTube", message.channel);

                songInfo = searched.videos[0];
                song = {
                    id: songInfo.videoId,
                    title: Util.escapeMarkdown(songInfo.title),
                    views: String(songInfo.views).padStart(10, " "),
                    url: songInfo.url,
                    ago: songInfo.ago,
                    img: songInfo.image,
                    req: message.author,
                };
            } catch (error) {
                console.error(error);
                return message.reply(error.message).catch(console.error);
            }
        }

        if (serverQueue) {
            serverQueue.songs.push(song);
            let thing = new MessageEmbed()
                .setTitle('<a:playing:799562690129035294> Song Added To Queue')
                .setColor("PURPLE")
                .setDescription(`${song.title} ~ Requested By ${message.author.username}`)
                .setFooter(`Song Source ~ YouTube`, `https://cdn.discordapp.com/emojis/782125440873660417.png?v=1`)
            return message.channel.send(thing);
        }

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: channel,
            connection: null,
            songs: [],
            volume: 80,
            playing: true,
            loop: false,
        };
        message.client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        const play = async (song) => {
            const queue = message.client.queue.get(message.guild.id);
            if (!song) {
                sendError(
                    "<:xmark:314349398824058880> The Song Has Ended!",
                    message.channel
                );
                message.client.queue.delete(message.guild.id);
                return;
            }
            let stream = null;
            if (song.url.includes("youtube.com")) {
                stream = await ytdl(song.url);
                stream.on("error", function (er) {
                    if (er) {
                        if (queue) {
                            queue.songs.shift();
                            play(queue.songs[0]);
                            return sendError(`<:xmark:314349398824058880> An Unexpected Error Has Occurred.\nPossible Type \`${er}\``, message.channel);
                        }
                    }
                });
            }
            queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));

            const dispatcher = queue.connection.play(ytdl(song.url, { quality: "highestaudio", highWaterMark: 1 << 25, type: "opus" })).on("finish", () => {
                const shiffed = queue.songs.shift();
                if (queue.loop === true) {
                    queue.songs.push(shiffed);
                }
                play(queue.songs[0]);
            });

            dispatcher.setVolumeLogarithmic(queue.volume / 100);
            let thing = new MessageEmbed()
                .setTitle(`<a:playing:799562690129035294> Started Playing Song`)
                .setDescription('[©️ YouTube](https://support.google.com/youtube/topic/2676339?hl=en&ref_topic=6151248)')
                .setThumbnail('https://media.discordapp.net/attachments/778283828099809283/822353825624883200/unknown_1.png')
                .setColor("PURPLE")
                .setImage(song.img)
                .addField("Song Name", song.title, true)
                .addField("Commanded By", `\`\`\`\n${song.req.username}\n\`\`\``, true)
            queue.textChannel.send(thing);
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`<:xmark:314349398824058880> I Could Not Join The Voice Channel: ${error}`);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return sendError(`<:xmark:314349398824058880> I Could Not Join The Voice Channel\nMake Sure That You Gave Me Proper Permissions : ${error}`, message.channel);
        }
    },
};