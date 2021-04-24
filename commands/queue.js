const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
    const channel = message.member.voice.channel;
    let num = 0;
    if (!channel) return message.channel.send('<:xmark:314349398824058880> You should join a voice channel before using this command!');
    const queue = message.client.queue.get(message.guild.id)
    let status;
    if(!queue) status = '<:xmark:314349398824058880> There is nothing in queue!'
    else status = queue.songs.map(x => `**${num++}) **` + x.title + ' -Requested by ' + `<@${x.requester.id}>`).join('\n')
    if(!queue) np = status
    else np = queue.songs[0].title
    if(queue) thumbnail = queue.songs[0].thumbnail
    else thumbnail = message.guild.iconURL()
    let embed = new MessageEmbed()
    .setAuthor(
        "ռօɮɛʟ",
        "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
    .setTitle('<a:music:738887962754023445> Queue')
    .setThumbnail(thumbnail)
    .setColor('RANDOM')
    .setDescription(status)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
}