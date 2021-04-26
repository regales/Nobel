const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("<:xmark:314349398824058880> Sorry you need Administration permissions!");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("<:xmark:314349398824058880> Please mention the channel first!")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`<a:water_green_Okay:825929495164223528> Welcome Channel is set as ${channel}!`)
  }
}
