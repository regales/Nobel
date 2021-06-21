const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    aliases: ['snipe'],
    usage: '',
    description: 'No deletes allowed sonny',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.lineReply('<:xmark:848019597907329085> There\'s nothing to snipe!')
        const embed = new MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .setDescription(msg.content)
            .setFooter('Get Sniped Fool')
            .setColor("RED")
            .setTimestamp()
        
        if (msg.image) embed.setImage(msg.image);
        message.lineReply(embed)
    }
}