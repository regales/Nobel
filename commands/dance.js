const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../util/error")

module.exports = {
    name: "dance",
    aliases: ["yo yo"],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:314349398824058880> Try run again the command but next time please specify a user!` , message.channel);
        if(user.id === message.author.id) return sendError(`Cheer up! Don't dance with yourself.` , message.channel);
        const jsonDance = fs.readFileSync(
          '../roleplay.json'
          );
         const danceArray = JSON.parse(jsonDance).dance;
      
         const randomDance =
           danceArray[Math.floor(Math.random() * danceArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${user}** Is Dancing With **${message.author.username}**  Yay!`)
     .setImage(`${randomDance}`)
      message.channel.send(embed)
    }
 }