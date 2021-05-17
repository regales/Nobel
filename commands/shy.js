const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error")

module.exports = {
    name: "shy",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`**Cheer up! Don't be shy at yourself.**` , message.channel);
        const jsonshy = fs.readFileSync(
          './roleplay.json'
          );
         const shyArray = JSON.parse(jsonshy).shy;
      
         const randomshy =
           shyArray[Math.floor(Math.random() * shyArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Shy Towards **${user}** !.`)
       .setImage(`${randomshy}`)
      message.channel.send(embed)
    }
 }