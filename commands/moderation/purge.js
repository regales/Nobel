const {
    Client,
    Message,
    MessageEmbed
  } = require('discord.js');
  
  module.exports = {
    name: 'purge',
    description: 'Deletes any messages in the current channel!',
    aliases: ["purge"],
    usage: '<amount> [limit: 100]',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
  
    run: async (client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_CHANNELS")) return message.reply("<:xmark:848019597907329085> You do not have permsission to use this command!")
  
      const {
        channel
      } = message;
  
  
      if (!channel.permissionsFor(message.guild.me).has(['MANAGE_MESSAGES']))
        return message.channel.send('<:xmark:848019597907329085> I do not have permission to manage messages in the provided channel');
  
  
      const amount = parseInt(args[0]);
      if (isNaN(amount) === true || !amount || amount < 0 || amount > 100)
        return message.channel.send('<:xmark:848019597907329085> Please provide a message count between 1 and 100');
  
      
  
  
      await message.delete(); // Delete command message
  
      
      let messages = (await channel.messages.fetch({
        limit: amount
      }))
  
      if (messages.size === 0) {
  
        message.channel.send(
          new MessageEmbed()
          .setTitle('<:botdeleted:652482092545998891> **Purge**')
          .setDescription(`
                  Unable to find any messages to purge. 
                  This message will be deleted after \`10 seconds\`.
                `)
          .addField('Channel', channel, true)
          .addField('Found Messages', `\`${messages.size}\``, true)
          .setFooter(message.member.displayName, message.author.displayAvatarURL({
            dynamic: true
          }))
          .setTimestamp()
          .setColor("RED")
        ).then(msg => msg.delete({
          timeout: 10000
        })).catch(err => console.log(err));
  
      } else {
  
        channel.bulkDelete(messages, true).then(messages => {
          const embed = new MessageEmbed()
            .setTitle('<:botdeleted:652482092545998891> **Purge**')
            .setDescription(`
                  Successfully deleted **${messages.size}** message(s). 
                  This message will be deleted after \`10 seconds\`.
                `)
            .addField('Channel', channel, true)
            .addField('Message Count', `\`${messages.size}\``, true)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({
              dynamic: true
            }))
            .setTimestamp()
            .setColor("GREEN");
  
          message.channel.send(embed).then(msg => msg.delete({
              timeout: 10000
            }))
            .catch(err => console.log(err));
        });
      }
  
    }
  }