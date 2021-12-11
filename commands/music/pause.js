const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "pause",
  aliases: ['ps'],
  description: "Pauses the current playing song",
  usage: '',

  run: async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
        serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`<:xmark:848019597907329085> **Music Has Been Stopped And The Queue Has Been Cleared**: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ **•** **Paused music!**")
      .setColor("#5539cc")
      
      return message.channel.send(xd);
    } else if(!serverQueue.playing) {

			return sendError('<:xmark:848019597907329085> **The Music Has Already Been Paused!**' ,message.channel);
    }
    return sendError("<:xmark:848019597907329085> **There Is Nothing Playing In This Server!**", message.channel);
  },
};