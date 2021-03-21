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
    const embed = new MessageEmbed()
            .setTitle('Now Playing')
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