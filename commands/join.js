module.exports = {
    
    run: async (client, message, args) => {
      
      const Channel = message.member.voice.channel;
      
      if (!Channel) return message.channel.send("<:xmark:314349398824058880> Please Join A Voice Channel!");
      
      if (!Channel.joinable) return message.channel.send("<:xmark:314349398824058880> I Can't Join The Voice Channel!");
      
      await Channel.join().catch(() => {
        return message.channel.send("<:xmark:314349398824058880> Unable To Join The Voice Channel!");
      });
      const Discord = require("discord.js");
      const Embed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle("Success")
      .setDescription("<a:playing:799562690129035294> **Joined The Voice Channel, Use \`*play <music name>\` To Play Music!**")
      .setTimestamp();
      
      return message.channel.send(Embed).catch(() => message.channel.send("<a:playing:799562690129035294> **Joined The Voice Channel, Use \`*play <music name>\` Command To Play Music!**"));
    }
  };