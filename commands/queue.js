const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('<:xmark:314349398824058880> You should join a voice channel before using this command!');
    const queue = message.client.queue.get(message.guild.id)
    let status;
    if(!queue) status = '<:xmark:314349398824058880> There is nothing in queue!'
    else status = queue.songs.map(x => '• ' + x.title + ' -Requested by ' + `<@${x.requester.id}>`).join('\n')
    if(!queue) np = status
    else np = queue.songs[0].title
    if(queue) thumbnail = queue.songs[0].thumbnail
    else thumbnail = message.guild.iconURL()
    let embed = new MessageEmbed()
    .setTitle('Queue')
    .setThumbnail(thumbnail)
    .setColor('RANDOM')
    .addField(`<a:music:738887962754023445> Now Playing <a:music:738887962754023445>`, np, true)
    .setDescription(status)
    message.channel.send(embed)
}