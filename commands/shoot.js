const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error");
const jsonshoot = require("../assets/json/roleplay.json")

module.exports = {
    name: "shoot",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Why are you shooting at yourself?**` , message.channel);
        
         const shootArray = (jsonshoot).shoot;
      
         const randomshoot =
           shootArray[Math.floor(Math.random() * shootArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Shooting At **${user}** !`)
       .setImage(`${randomshoot}`)
      message.channel.send(embed)
    }
 }