exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send(':x: | You should join a voice channel before using this command!');

    let queue = message.client.queue.get(message.guild.id)

    if(!args[0]) return message.channel.send({
        embed: {
            description: 'The current volume is set to: ' + queue.volume ,
            color: 'RANDOM'
        }
    })

    if(args[0] > 10) return message.channel.send(':x: | Please enter a value from 1-10')
    if(args[0] > `<0>`)return message.channel.send(`:x: | You don't need to literally put <1-10> just 1-10 will do `)

    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    queue.volume = args[0]
    message.channel.send({
        embed: {
            description: 'Volume is set to ' + args[0] ,
            color: 'RANDOM'
        }
    })
}