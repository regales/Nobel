const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "resume",
  aliases: ['res'],
  description: "Resumes music a voice channel",
  usage: '',

  run: async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
	    try{
      serverQueue.connection.dispatcher.resume()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`<:xmark:848019597907329085> **Music Has Been Stopped And The Queue Has Been Cleared**: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription(":arrow_forward: **•** **Resumed music !**")
      .setColor("#5539cc")
      
      return message.channel.send(xd);
    }
    return sendError("<:xmark:848019597907329085> **There Is Nothing Playing In This Server!**", message.channel);
  },
};