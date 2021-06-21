const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "shuffle",
  aliases: ['shuf'],
  description: "Shuffles music a voice channel",
  usage: '',

  run: async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("<:xmark:848019597907329085> **There Is No Queue.**",message.channel).catch(console.error);
try{
    let songs = serverQueue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    serverQueue.songs = songs;
    message.client.queue.set(message.guild.id, serverQueue);
    message.react("<a:water_green_Okay:825929495164223528>")
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return sendError(`<:xmark:848019597907329085> **Music Has Been Stopped:** \`${error}\``, message.channel);
     }
  },
};