const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
     name: 'sudo',
     aliases: ['sudo'],
     usage: '<user>',
     description: 'Talk as whoever you want',
     
     /** 
      * @param {Client} client 
      * @param {Message} message 
      * @param {String[]} args 
      */

      run: async(client, message, args) => {
          const user = message.mentions.members.first();
          if(!user) return message.reply('<:xmark:848019597907329085> **Please mention a member!**')
          const content = args.slice(1).join(" ");
          if(content.length > 2000) return message.reply('<:xmark:848019597907329085> **The content can not be above 2000 characters!**');

         await message.channel.createWebhook(message.author.username, {
              avatar: user.user.displayAvatarURL({ dynamic: true }),
              reason: `${message.author.username} used the sudo command!`
          })

          message.delete({timeout: 1000})

          let webhooks = await message.channel.fetchWebhooks();
          let webhook = webhooks.first();

          await webhook.send(content, {
            username: user.user.username,
            avatarURL: user.user.displayAvatarURL({ dyamic: true }),
        });

          
      }
}