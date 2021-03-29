exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('<:xmark:314349398824058880> You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: '<:xmark:314349398824058880> There is nothing playing to be stopped!',
            color: 'RANDOM'
        }
    })
    message.react(`<a:water_green_Okay:825929495164223528>`)
    queue.songs = []
    queue.connection.dispatcher.end('Stopped!')
}