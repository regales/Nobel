const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsonkiss = require("../../assets/json/roleplay.json")

module.exports = {
    name: "kiss",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:848019597907329085> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`<:xmark:848019597907329085> **Why are you kissing yourself?**` , message.channel);
        
         const kissArray = (jsonkiss).kiss;
      
         const randomkiss =
           kissArray[Math.floor(Math.random() * kissArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Kissing **${user}** !`)
       .setImage(`${randomkiss}`)
      message.channel.send(embed)
    }
 }