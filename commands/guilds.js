
exports.run = async (client, message, args) => {
    const guilds = client.guilds.cache.array()
    const { MessageEmbed } = require('discord.js');

/**
 * 
 * @param {number} start The index to start from.
 */
const generateEmbed = start => {
  const current = guilds.slice(start, start + 10)

  
  const embed = new MessageEmbed()
    .setTitle(`\`Showing guilds ${start + 1}-${start + current.length} out of ${guilds.length}\``)
    .setColor('PURPLE')
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp();
  current.forEach(g => embed.addField(g.name, `**ID:** ${g.id}`))
  return embed
}


const author = message.author


message.channel.send(generateEmbed(0)).then(message => {
  
  if (guilds.length <= 10) return
  
  message.react('➡️')
  const collector = message.createReactionCollector(
    
    (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,
    
    {time: 60000}
  )

  let currentIndex = 0
  collector.on('collect', reaction => {
   
    message.reactions.removeAll().then(async () => {
      
      reaction.emoji.name === '⬅️' ? currentIndex -= 10 : currentIndex += 10
      
      message.edit(generateEmbed(currentIndex))
      
      if (currentIndex !== 0) await message.react('⬅️')
      
      if (currentIndex + 10 < guilds.length) message.react('➡️')
    })
  })
})
}