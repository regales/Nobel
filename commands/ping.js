const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setAuthor(
                "ռօɮɛʟ",
                "https://i.imgur.com/o3xDQbB.jpeg")
            .setTitle('Pong! 🏓')
            .setDescription(`WebSocket ping is \`${client.ws.ping}MS\`\nMessage edit ping is \`${Math.floor(msg.createdAt - message.createdAt)}MS!\``)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            await message.channel.send(embed)
            msg.delete()

    }
}
