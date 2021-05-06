const { MessageEmbed } = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('<:xmark:314349398824058880> You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: '<:xmark:314349398824058880> There is nothing playing right now!',
            color: 'RANDOM'
        }
    })
    const embed = new MessageEmbed()
            .setTitle(`<a:playing:799562690129035294> Now Playing`)
            .setAuthor(
                "ռօɮɛʟ",
                "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
            .setColor('RANDOM')
            .setThumbnail(queue.songs[0].thumbnail)
            .addFields(
                {
                    name: "Song Name:",

                    value: queue.songs[0].title,

                    inline: true

                },

                
            )

            .addFields(
            {
                name: "Requested By:",

                value: '<@' + queue.songs[0].requester + '>',

                inline: true

            },
        )
            
    message.channel.send(embed)
}