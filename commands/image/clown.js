const Discord = require('discord.js');
module.exports = {
  name: "clown",
  description: 'Makes someone a clown',
  usage: '<user>',
  aliases: ['honk'],
  run: async(client, message, args) => {
     const user =
      message.mentions.members.first() || message.member;
      
      let msg = await message.channel.send('<a:loading_plus:675395739949727774> Loading')
            let att = new Discord.MessageAttachment(`https://api.popcatdev.repl.co/clown?image=${user.user.displayAvatarURL({ dynamic: false, format: "png"})}`, `${user.user.username}_clown.png`)

            message.channel.send(att)
            msg.delete()
      }
}