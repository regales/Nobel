const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const ytdlDiscord = require("ytdl-core-discord");
var ytpl = require("ytpl");
const sendError = require("../../util/error");
const fs = require("fs");

module.exports = {
    name: "playlist",
    aliases: ['pl'],
    description: "Plays a playlist of songs in a voice channel",
    usage: '<url>',
    cooldown: 30,

    run: async(client, message, args) => {
        const channel = message.member.voice.channel;
        if (!channel) return sendError("<:xmark:848019597907329085> **I'm Sorry But You Need To Be In A Voice Channel To Play Music!**", message.channel);
        const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
        var searchString = args.join(" ");
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return sendError("<:xmark:848019597907329085> **I Cannot Connect To Your Voice Channel, Make Sure I Have The Proper Permissions!**", message.channel);
        if (!permissions.has("SPEAK")) return sendError("<:xmark:848019597907329085> **I Cannot Connect To Your Voice Channel, Make Sure I Have The Proper Permissions!**", message.channel);

        if (!searchString || !url) return sendError(`<:xmark:848019597907329085> **Usage:** **•** \`*playlist <YouTube Playlist URL | Playlist Name>\``, message.channel)   
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            try {
                const playlist = await ytpl(url.split("list=")[1]);
                if (!playlist) return sendError("<:xmark:848019597907329085> **Playlist Not Found**", message.channel);
                const videos = await playlist.items;
                for (const video of videos) {
                    // eslint-disable-line no-await-in-loop
                    await handleVideo(video, message, channel, true); // eslint-disable-line no-await-in-loop
                }
                return message.channel.send({
                    embed: {
                        color: "#5539cc",
                        description: `**•** **Playlist:** **\`${videos[0].title}\`** **Has Been Added To The Queue**`,
                    },
                });
            } catch (error) {
                console.error(error);
                return sendError("<:xmark:848019597907329085> **Playlist Not Found**", message.channel).catch(console.error);
            }
        } else {
            try {
                var searched = await yts.search(searchString);

                if (searched.playlists.length === 0) return sendError("<:xmark:848019597907329085> **Looks Like I Was Unable To Find The Playlist On YouTube**", message.channel);
                var songInfo = searched.playlists[0];
                let listurl = songInfo.listId;
                const playlist = await ytpl(listurl);
                const videos = await playlist.items;
                for (const video of videos) {
                    // eslint-disable-line no-await-in-loop
                    await handleVideo(video, message, channel, true); // eslint-disable-line no-await-in-loop
                }
                let thing = new MessageEmbed()
                    .setTitle("<a:playing:799562690129035294> Playlist Added To Queue")
                    .setColor("#5539cc")
                    .setThumbnail('https://media.discordapp.net/attachments/796358841038143488/851878274179399751/youtube.png')
                    .setDescription(`**•**  **Playlist:** **\`${songInfo.title}\`** **Has Been Added** **\`${songInfo.videoCount}\`** **Video To The Queue**`)
                    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                return message.channel.send(thing);
            } catch (error) {
                let bruh = new MessageEmbed()
                    .setDescription(`<:xmark:848019597907329085> **An Unexpected Error Has Occurred.** **•** **Please Retry The Command :C**`)
                    .setColor("#5539cc")
                    .setTimestamp()
                return queue.textChannel.send(bruh).then(message=>message.delete({timeout:"10000"/*Time until delete in milliseconds*/}));
            }
        }

        async function handleVideo(video, message, channel, playlist = false) {
            const serverQueue = message.client.queue.get(message.guild.id);
            const song = {
                id: video.id,
                title: Util.escapeMarkdown(video.title),
                views: video.views ? video.views : "-",
                ago: video.ago ? video.ago : "-",
                duration: video.duration,
                url: `https://www.youtube.com/watch?v=${video.id}`,
                img: video.thumbnail,
                req: message.author,
            };
            if (!serverQueue) {
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

                try {
                    var connection = await channel.join();
                    queueConstruct.connection = connection;
                    play(message.guild, queueConstruct.songs[0]);
                } catch (error) {
                    console.error(`<:xmark:848019597907329085> **I Could Not Join The Voice Channel:** ${error}`);
                    message.client.queue.delete(message.guild.id);
                    return sendError(`<:xmark:848019597907329085> **I Could Not Join The Voice Channel:** ${error}`, message.channel);
                }
            } else {
                serverQueue.songs.push(song);
                if (playlist) return;
                let thing = new MessageEmbed()
                    .setTitle("<a:playing:799562690129035294> Song Has Been Added To Queue")
                    .setDescription(`\`${song.title}\` \n**Requested By** **[**${message.author}**]**`)
                    .setThumbnail('https://media.discordapp.net/attachments/796358841038143488/851878274179399751/youtube.png')
                    .setColor("#5539cc")
                    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                return message.channel.send(thing);
            }
            return;
        }

        async function play(guild, song) {
            const serverQueue = message.client.queue.get(message.guild.id);
            if (!song) {
                sendError(
                    "<a:exclamationred:919234912857501716> **Playlist Of Songs Has Ended**",
                    message.channel
                )
                //message.guild.me.voice.channel.leave(); //If you want your bot stay in vc 24/7 remove this line :D
                message.client.queue.delete(message.guild.id);
                return;
            }
            let stream = null;
            if (song.url.includes("youtube.com")) {
                stream = await ytdl(song.url);
                stream.on("error", function (er) {
                    if (er) {
                        if (serverQueue) {
                            serverQueue.songs.shift();
                            play(guild, serverQueue.songs[0]);
                            let bruh = new MessageEmbed()
                                .setDescription(`<:xmark:848019597907329085> **An Unexpected Error Has Occurred.** **•** **Please Retry The Command :c** `)
                                .setColor("#5539cc")
                                .setTimestamp()
                            return queue.textChannel.send(bruh).then(message=>message.delete({timeout:"10000"/*Time until delete in milliseconds*/}));
                        }
                    }
                });
            }

            serverQueue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
            const dispatcher = serverQueue.connection.play(ytdl(song.url, { quality: "highestaudio", highWaterMark: 1 << 25, type: "opus" })).on("finish", () => {
                const shiffed = serverQueue.songs.shift();
                if (serverQueue.loop === true) {
                    serverQueue.songs.push(shiffed);
                }
                play(guild, serverQueue.songs[0]);
            });

            dispatcher.setVolume(serverQueue.volume / 100);
            let thing = new MessageEmbed()
                .setTitle("<a:playing:799562690129035294> Started Playing Music")
                .setDescription(`\`${song.title}\` \n**Requested By** **[**${message.author}**]**`)
                .setThumbnail('https://media.discordapp.net/attachments/796358841038143488/851878274179399751/youtube.png')
                .setColor("#5539cc")
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
            serverQueue.textChannel.send(thing).then(message=>message.delete({timeout:"10000"/*Time until delete in milliseconds*/}))
        }
    },
};