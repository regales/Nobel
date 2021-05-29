const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsonsad = require("../../assets/json/roleplay.json")

module.exports = {
    name: "sad",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:848019597907329085> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`<:xmark:848019597907329085> **Cheer up! Don't be sad at yourself.**` , message.channel);
        
         const sadArray = (jsonsad).sad;
      
         const randomsad =
           sadArray[Math.floor(Math.random() * sadArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${user}** Was Consoled By **${message.author.username}** .`)
       .setImage(`${randomsad}`)
      message.channel.send(embed)
    }
 }