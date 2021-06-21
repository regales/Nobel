const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsonDance = require("../../assets/json/roleplay.json")

module.exports = {
    name: "dance",
    aliases: ["yoyo"],
    description: "Bille Jean is not my lover",
    usage: '<user>',
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:848019597907329085> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`<:xmark:848019597907329085> **Cheer up! Don't dance with yourself.**` , message.channel);
        
         const danceArray = (jsonDance).dance;
      
         const randomDance =
           danceArray[Math.floor(Math.random() * danceArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${user}** Is Dancing With **${message.author.username}**  Yay!`)
     .setImage(`${randomDance}`)
      message.channel.send(embed)
    }
 }