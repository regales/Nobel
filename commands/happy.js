const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error")

module.exports = {
    name: "happy",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Why are you directing your happiness at yourself?**` , message.channel);
        const jsonhappy = fs.readFileSync(
          './roleplay.json'
          );
         const happyArray = JSON.parse(jsonhappy).happy;
      
         const randomhappy =
           happyArray[Math.floor(Math.random() * happyArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Joyful Towards **${user}** !`)
       .setImage(`${randomhappy}`)
      message.channel.send(embed)
    }
 }