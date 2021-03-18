exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send(':x: | You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: ':x: | There is nothing playing to be stopped!',
            color: 'RANDOM'
        }
    })
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Stopped!')
}