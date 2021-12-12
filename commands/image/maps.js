const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: 'maps',
  description: "Use Google Maps on Discord",
  usage: '<place name>',
  aliases: ['maps'],


run: async(client, message, args) => {
   
   const sit = args.join(" ")
if (!args.length) return message.lineReply("<:xmark:848019597907329085> Provide a valid location")
    const site = `https://maps.google.com/?q=${args.join("+")}`
    try {
      const msg = await message.channel.send('**•** **Please wait, This may take up to 10 seconds.**')
          msg.delete({ timeout: 5000 })
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
let att = new Discord.MessageAttachment(body, `${sit}.png`)
      return message.channel.send(att)
  
    } catch (err) {
      
      return message
        .lineReply(`<:xmark:848019597907329085> **Oh no, an error occurred: \`${err.message}\`. Try again later!**`)
        
    };
    }
  }