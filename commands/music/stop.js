const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "stop",
  aliases: ['clear'],
  description: "Stops music a voice channel",
  usage: '',

  run: async(client, message, args) => {
    const channel = message.member.voice.channel
    if (!channel)return sendError("<:xmark:848019597907329085> **I'm Sorry But You Need To Be In A Voice Channel To Stop Music!**", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("<:xmark:848019597907329085> **There Is Nothing Playing That I Could Stop For You.**", message.channel);
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return sendError(`<:xmark:848019597907329085> **Music Has Stopped And The Queue Has Been Cleared:** ${error}`, message.channel);
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react(":octagonal_sign:")
  },
}; 