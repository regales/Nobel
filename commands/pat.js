const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error");
const jsonpat = require("../assets/json/roleplay.json")

module.exports = {
    name: "pat",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Why are you patting yourself?**` , message.channel);
        
         const patArray = (jsonpat).pat;
      
         const randompat =
           patArray[Math.floor(Math.random() * patArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Patting **${user}** !`)
       .setImage(`${randompat}`)
      message.channel.send(embed)
    }
 }