const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error")

module.exports = {
    name: "smug",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Why are you directing your smug at yourself?**` , message.channel);
        const jsonsmug = fs.readFileSync(
          './roleplay.json'
          );
         const smugArray = JSON.parse(jsonsmug).smug;
      
         const randomsmug =
           smugArray[Math.floor(Math.random() * smugArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Looked Down Upon **${user}** !`)
       .setImage(`${randomsmug}`)
      message.channel.send(embed)
    }
 }