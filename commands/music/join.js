const sendError = require("../../util/error");

module.exports = {
  name: "join",
  aliases: ['jn'],
  description: "Joins a voice channel",
  usage: '',
    
    
    run: async (client, message, args) => {
      
      const Channel = message.member.voice.channel;
      
      if (!Channel) return sendError("<:xmark:848019597907329085> **Please Join A Voice Channel!**", message.channel);
      
      if (!Channel.joinable) return sendError("<:xmark:848019597907329085> **I Can't Join The Voice Channel!**", message.channel);
      
      await Channel.join().catch(() => {
        return sendError("<:xmark:848019597907329085> **Unable To Join The Voice Channel!**", message.channel);
      });
      const Discord = require("discord.js");
      const Embed = new Discord.MessageEmbed()
      .setColor('PURPLE')
      .setTitle("Success")
      .setDescription("<a:803688736323665951:843036647331201046>  **Joined The Voice Channel, Use \`*play <music name>\` To Play Music!**")
      .setTimestamp();
      
      return message.channel.send(Embed).catch(() => message.channel.send("<a:803688736323665951:843036647331201046>  **Joined The Voice Channel, Use \`*play <music name>\` Command To Play Music!**"));
    }
  };