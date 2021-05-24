const { Util, MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "skip",
    description: "To skip the current music",
    usage: "",
    aliases: ["s"],
  },

  run: async(client, message, args) => {
    const channel = message.member.voice.channel
    if (!channel)return sendError("<:xmark:314349398824058880> **I'm Sorry But You Need To Be In A Voice Channel To Skip Music!**", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("<:xmark:314349398824058880> **There Is Nothing Playing That I Could Skip For You.**", message.channel);
        if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Music Skipped!")
      .setColor("PURPLE")
      .setTitle("Skipped!")
       
   return message.channel.send(xd).catch(err => console.log(err));
      
    }


       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return sendError(`<:xmark:314349398824058880> **The Music Has Skipped And The Queue Has Been Cleared:** ${error}`, message.channel);
      }
    message.react("<a:water_green_Okay:825929495164223528>")
  },
};