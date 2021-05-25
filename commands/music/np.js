const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error")

module.exports = {
  name: "np",

  run: async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("<:xmark:314349398824058880> **I Am Not Playing Anything!**", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setTitle("<a:loading_plus:675395739949727774> Currently Playing")
      .setDescription('[© YouTube](https://support.google.com/youtube/topic/2676339?hl=en&ref_topic=6151248)')
      .setThumbnail('https://media.discordapp.net/attachments/778283828099809283/822353825624883200/unknown_1.png')
      .setColor("PURPLE")
      .addField("Name", song.title, true)
      .addField("Song Commanded by", `\`\`\`\n${song.req.username}\n\`\`\``, true)
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
    return message.channel.send(thing)
  },
};