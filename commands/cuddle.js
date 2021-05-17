const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error")

module.exports = {
    name: "cuddle",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Why are you cuddling with yourself?**` , message.channel);
        const jsoncuddle = fs.readFileSync(
          './roleplay.json'
          );
         const cuddleArray = JSON.parse(jsoncuddle).cuddle;
      
         const randomcuddle =
           cuddleArray[Math.floor(Math.random() * cuddleArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Cuddling With **${user}** !`)
       .setImage(`${randomcuddle}`)
      message.channel.send(embed)
    }
 }