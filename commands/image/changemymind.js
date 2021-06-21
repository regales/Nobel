  
const Discord = require("discord.js")
const canvacord = require("canvacord")

module.exports = {
 name: "changemymind",
 aliases: ['cmm'],
 description: "Try to change my mind!",
 usage: "<text>",
 run: async (client, message, args) => {
  try {
   if (!args[0]) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: "<:xmark:848019597907329085> You must enter a text!",
     },
    })
   }
   if (args.join(" ") > 20) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: "<:xmark:848019597907329085> Max length for the text is 20!",
     },
    })
   }
   const wait = await message.lineReply("<a:loading_plus:675395739949727774> Please wait... I'm generating your image")
    
   const changemymind = await canvacord.Canvas.changemymind(args.join(" "))
   const attachment = new Discord.MessageAttachment(changemymind, "changemymind.png")
   return message.channel.send(attachment)
  } catch (err) {
   console.log(err)
   message.lineReply({
    embed: {
     color: 16734039,
     description: "Something went wrong",
    },
   })
  }
 },
}