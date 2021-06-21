const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "bassboost",
  aliases: ['bb'],
  usage: '<number>',
  description: 'Cheeky Breeky Uv Damke',
    
  

  run: async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("<:xmark:848019597907329085> **I'm sorry but you need to be in a voice channel to set volume level of music!**", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("<:xmark:848019597907329085> **There is nothing playing.**", message.channel);
    if (!serverQueue.connection) return sendError("<:xmark:848019597907329085> **There is nothing playing.**", message.channel);
    if (!args[0])return sendError(`<:xmark:848019597907329085> **Use \`*bassboost <level>\`**`);
     if(isNaN(args[0])) return sendError('<:xmark:848019597907329085> **Numbers only!**').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('<:xmark:848019597907329085> **You can\'t set the bass boosting more than 100. or lower than 0**',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`<a:playing:799562690129035294> **DJ is now bass boosting songs:** **\`${args[0]/1}/100\`**`)
    .setColor("PURPLE")
    return message.channel.send(xd);
  },
};