const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error")

module.exports = {
    name: "laugh",
    aliases: ["hehe"],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> Try run again the command but next time please specify a user!`);
        if(user.id === message.author.id) return sendError(`Cheer up! Don't laugh on yourself.`);
        const jsonLaugh = fs.readFileSync(
          '../roleplay.json'
          );
         const laughArray = JSON.parse(jsonLaugh).laugh;
      
         const randomLaugh =
           laughArray[Math.floor(Math.random() * laughArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Laughed On **${user}!** Hehe!`)
     .setImage(`${randomLaugh}`)
      message.channel.send(embed)
    }
 }