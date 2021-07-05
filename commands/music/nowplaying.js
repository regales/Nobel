const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error")

module.exports = {
  name: "nowplaying",
  aliases: ['np'] ,
  description: "Gets information of a currently playing song",
  usage: '',

  run: async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("<:xmark:848019597907329085> **I Am Not Playing Anything!**", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setTitle("<a:playing:799562690129035294> Currently Playing")
      .setDescription(`\`${song.title}\` \n**Requested By** **[**${song.req}**]**`)
      .setColor("#5539cc")
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
    return message.channel.send(thing)
  },
};