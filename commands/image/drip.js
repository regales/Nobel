const Discord = require("discord.js");
module.exports = {
  name: "drip",
  aliases: ['swag'],
  description: 'You got that drip bro!',
  usage: '<user>',
  
  run: async(client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const img = `https://api.popcatdev.repl.co/drip?image=${user.displayAvatarURL({ dynamic: false, format: "png" })}`
    const attachment = new Discord.MessageAttachment(img, `Drip_${user.username}.jpg`);
    message.channel.send(attachment);
  }
}