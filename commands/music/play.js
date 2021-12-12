const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const ytdlDiscord = require("ytdl-core-discord");
const yts = require("yt-search");
const fs = require("fs");
const sendError = require("../../util/error");



module.exports = {
    name: "play",
    aliases: ['p'],
    description: "Plays a song in a voice channel",
    usage: '<song name> or <url>',

    run: async(client, message, args) => {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("<:xmark:848019597907329085> **I'm Sorry But You Need To Join In A Voice Channel To Play Music!**", message.channel);


        var searchString = args.join(" ");
        if (!searchString) return sendError("<:xmark:848019597907329085> **Usage:** **•** \`*play <Song> | <Song URL>\`", message.channel)
        const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
        var serverQueue = message.client.queue.get(message.guild.id);

        let songInfo = null;
        let song = null;
        if (url.match(/^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi)) {
            try {
                songInfo = await ytdl.getInfo(url);
                if (!songInfo) return sendError("<:xmark:848019597907329085> **Looks Like I Was Unable To Find The Song On YouTube**", message.channel);
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
                if (searched.videos.length === 0) return sendError("<:xmark:848019597907329085> **Looks Like I Was Unable To Find The Song On YouTube**", message.channel);

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
                .setColor("#5539cc")
                .setDescription(`\`${song.title}\` \n**Requested By** **[**${message.author}**]**`)
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setThumbnail('https://media.discordapp.net/attachments/796358841038143488/851878274179399751/youtube.png')
                .setTimestamp()
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
                    "<a:exclamationred:919234912857501716> **The Song Has Ended**",
                    message.channel
                )
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
                            let bruh = new MessageEmbed()
                                .setDescription(`<:xmark:848019597907329085> **An Unexpected Error Has Occurred.** **•** **Please Retry The Command** `)
                                .setColor("#5539cc")
                                .setTimestamp()
                            queue.textChannel.send(bruh).then(message=>message.delete({timeout:"10000"/*Time until delete in milliseconds*/}));
                           
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
                .setDescription(`\`${song.title}\` \n**Requested By** **[**${message.author}**]**`)
                .setColor("#5539cc")
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setThumbnail('https://media.discordapp.net/attachments/796358841038143488/851878274179399751/youtube.png')
                .setTimestamp()
            queue.textChannel.send(thing).then(message=>message.delete({timeout:"10000"/*Time until delete in milliseconds*/}))
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`<:xmark:848019597907329085> **I Could Not Join The Voice Channel**: ${error}`);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return sendError(`<:xmark:848019597907329085> **I Could Not Join The Voice Channel**\n**Make Sure That You Gave Me Proper Permissions** : ${error}`, message.channel);
        }
    },
};