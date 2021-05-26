const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsondisagree = require("../../assets/json/roleplay.json")

module.exports = {
    name: "disagree",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Why are you disagreeing with yourself?**` , message.channel);
        
         const disagreeArray = (jsondisagree).disagree;
      
         const randomdisagree =
           disagreeArray[Math.floor(Math.random() * disagreeArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Disagreeing With **${user}** !`)
       .setImage(`${randomdisagree}`)
      message.channel.send(embed)
    }
 }