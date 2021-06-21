const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsonLaugh = require("../../assets/json/roleplay.json")

module.exports = {
    name: "laugh",
    aliases: ["hehe"],
    description: "Laughs at someone",
    usage: '<user>',
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:848019597907329085> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`<:xmark:848019597907329085> **Cheer up! Don't laugh on yourself.**` , message.channel);
        
         const laughArray = (jsonLaugh).laugh;
      
         const randomLaugh =
           laughArray[Math.floor(Math.random() * laughArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Laughed On **${user}!** Hehe!`)
     .setImage(`${randomLaugh}`)
      message.channel.send(embed)
    }
 }