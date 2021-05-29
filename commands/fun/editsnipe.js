const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'editsnipe',
   
    run: async (client, message, args) => {
        const msg = client.editedMessage.get(message.channel.id)
        if (!msg) return message.lineReply('<:xmark:848019597907329085> There\'s nothing edited to snipe!')
        const embed = new MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .setDescription(msg.content)
            .setFooter('No Edits Allowed Fool')
            .setColor("RED")
            .setTimestamp()
        
        if (msg.image) embed.setImage(msg.image);
        message.lineReply(embed)
    }
}