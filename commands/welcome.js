const Discord = require('discord.js')
var jimp = require('jimp');
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

	let permission = message.member.hasPermission("MANAGE_CHANNELS");

 if(!permission) return message.channel.send("<:xmark:314349398824058880> Sorry you need `MANAGE_CHANNELS` permissions!")

 let channel = message.mentions.channels.first()
    
 if(!channel) {
  return message.channel.send("<:xmark:314349398824058880> Please mention the channel first!")
 }

 //Now we gonna use quick.db

 db.set(`welchannel_${message.guild.id}`, channel.id)

message.channel.send(`<a:water_green_Okay:825929495164223528> Welcome Channel is set as ${channel}!`)
 
}