module.exports = {
  
    run: async (client, message, args) => {
      
      const Channel = message.member.voice.channel;
      
      if (!Channel) return message.channel.send("<:xmark:314349398824058880> Please Join A Voice Channel!");
      
      if (!message.guild.me.voice) return message.channel.send("<:xmark:314349398824058880> I Am Not In Any Voice Channel!");
      
      try {
      
      await message.guild.me.voice.kick(client.user.id);
        
      } catch (error) {
        await message.guild.me.voice.kick(message.guild.me.id);
        return message.channel.send("<a:loading_plus:675395739949727774>  Trying To Leave The Voice Channel");
      };
      const Discord = require("discord.js");
      const Embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle("Success")
      .setDescription("<a:playing:799562690129035294>  **Left The Voice Channel**")
      .setTimestamp();
      
      return message.channel.send(Embed).catch(() => message.channel.send("<a:playing:799562690129035294>  **Left The Voice Channel**"));
    }
  };