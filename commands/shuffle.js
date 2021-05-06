exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('<:xmark:314349398824058880> You should join a voice channel before using this command!');
    const queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send('<:xmark:314349398824058880> There are no songs in queue to shuffle')
    let songs = queue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    queue.songs = songs;
    message.client.queue.set(message.guild.id, queue);
    message.channel.send(`<a:playing:799562690129035294> Shuffled the current queue 🔀`).catch(console.error);
}
