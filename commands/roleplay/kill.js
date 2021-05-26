const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsonkill = require("../../assets/json/roleplay.json")

module.exports = {
    name: "kill",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Why are you killing yourself?**` , message.channel);
        
         const killArray = (jsonkill).kill;
      
         const randomkill =
           killArray[Math.floor(Math.random() * killArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Killed **${user}** ! **Oh Shit** !`)
       .setImage(`${randomkill}`)
      message.channel.send(embed)
    }
 }