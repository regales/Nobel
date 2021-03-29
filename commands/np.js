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
            .setTitle(`<a:music:738887962754023445> Now Playing <a:music:738887962754023445>`)
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