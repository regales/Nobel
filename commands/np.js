const { MessageEmbed } = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send(':x: | You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: ':x: | There is nothing playing right now!',
            color: 'RANDOM'
        }
    })
    message.channel.send({
        embed:{
            title: 'Now Playing',
            description: queue.songs[0].title + ' Requested By: ' + '<@' + queue.songs[0].requester + '>',
            thumbnail: queue.songs[0].thumbnail,
            color: 'RANDOM',
        }
    })
}