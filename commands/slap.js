const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error")

module.exports = {
    name: "slap",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Cheer up! Don't slap yourself.**` , message.channel);
        const jsonSlap = fs.readFileSync(
          './roleplay.json'
          );
         const slapArray = JSON.parse(jsonSlap).slap;
      
         const randomSlap =
           slapArray[Math.floor(Math.random() * slapArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${user}** Got Slapped By **${message.author.username}** ! Oof!`)
       .setImage(`${randomSlap}`)
      message.channel.send(embed)
    }
 }