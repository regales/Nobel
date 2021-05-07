exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('<:xmark:314349398824058880> You should join a voice channel before using this command!');

    let queue = message.client.queue.get(message.guild.id)

    if(!args[0]) return message.channel.send({
        embed: {
            description: `<a:playing:799562690129035294>` + 'The current volume is set to' + queue.volume + '/10',
            color: 'RANDOM'
        }
    })

    const deek = args[0]

    if(deek > 10) return message.channel.send('<:xmark:314349398824058880> Please enter a value from 1-10')
    if(deek < 0) return message.channel.send('<:xmark:314349398824058880> Please enter a value from 1-10')
    if(args[0] > `<0>`)return message.channel.send(`<:xmark:314349398824058880> You don't need to literally put <1-10> just 1-10 will do `)

    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    queue.volume = args[0]
    message.channel.send({
        embed: {
            description: `<a:playing:799562690129035294>  `  + 'Volume is set to ' + args[0] + '/10' ,
            color: 'RANDOM'
        }
    })
}