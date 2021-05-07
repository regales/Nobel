const ytdl = require('ytdl-core-discord');
var scrapeYt = require("scrape-yt");
const discord = require('discord.js')

exports.run = async (client, message, args) => {

    if(!args[0]) return message.channel.send('<:xmark:314349398824058880> You didn\'t provide a song to play!')
    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send('<:xmark:314349398824058880> You need to join a voice channel to play a music!')

    if (!channel.permissionsFor(message.client.user).has("CONNECT")) return message.channel.send('<:xmark:314349398824058880> I don\'t have permission to join the voice channel')
    if (!channel.permissionsFor(message.client.user).has("SPEAK"))return message.channel.send('<:xmark:314349398824058880> I don\'t have permission to speak in the voice channel')


    const server = message.client.queue.get(message.guild.id);
    let video = await scrapeYt.search(args.join(' '))
    let result = video[0]

    const song = {
        id: result.id,
        title: result.title,
        duration: result.duration,
        thumbnail: result.thumbnail,
        upload: result.uploadDate,
        views: result.viewCount,
        requester: message.author,
        channel: result.channel.name,
        channelurl: result.channel.url
      };

    var date = new Date(0);
    date.setSeconds(song.duration); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);

      if (server) {
        server.songs.push(song);
        console.log(server.songs);
        let embed = new discord.MessageEmbed()
        .setAuthor(
          "ռօɮɛʟ",
          "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
        .setTitle(`<a:playing:799562690129035294>  Added to queue!`)
        .setColor('RANDOM')
        .addField('Name', song.title, true)
        .setThumbnail(song.thumbnail)
        .addField('Views', song.views, true)
        .addField('Reqeusted By', song.requester, true)
        .addField('Duration', timeString, true)
        message.channel.send(embed);
        
    }

    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: channel,
        connection: null,
        songs: [],
        volume: 2,
        playing: true
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);


    const play = async song => {
        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
            queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            message.channel.send('<:xmark:314349398824058880> There are no songs in queue, I\'m leaving the voice channel!')
            return;
        }

        const dispatcher = queue.connection.play(await ytdl(`https://youtube.com/watch?v=${song.id}`, {
            filter: format => ['251'],
            highWaterMark: 1 << 25
        }), {
            type: 'opus'
        })
            .on('finish', () => {
                queue.songs.shift();
                play(queue.songs[0]);
            })
            .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(queue.volume / 5);
        let noiceEmbed = new discord.MessageEmbed()
        .setAuthor(
          "ռօɮɛʟ",
          "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
        .setTitle(`<a:playing:799562690129035294>  Started Playing`)
        .setThumbnail(song.thumbnail)
        .setColor('RANDOM')
        .addField('Name', song.title, true)
        .addField('Requested By', song.requester, true)
        .addField('Views', song.views, true)
        .addField('Duration', timeString, true)
        let embedmessage= await message.channel.send(noiceEmbed);
        setTimeout(()=>{
            embedmessage.delete()
        },5000);
        
    };


    try {
        const connection = await channel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0]);
    } catch (error) {
        console.error(`<:xmark:314349398824058880> I could not join the voice channel`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(`<:xmark:314349398824058880> I could not join the voice channel: ${error}`);
    }
}