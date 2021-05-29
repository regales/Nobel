const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsontickle = require("../../assets/json/roleplay.json")

module.exports = {
    name: "tickle",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:848019597907329085> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`<:xmark:848019597907329085> **Why are you tickling yourself?**` , message.channel);
        
         const tickleArray = (jsontickle).tickle;
      
         const randomtickle =
           tickleArray[Math.floor(Math.random() * tickleArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Tickleing **${user}** ! No~ Stop It!`)
       .setImage(`${randomtickle}`)
      message.channel.send(embed)
    }
 }