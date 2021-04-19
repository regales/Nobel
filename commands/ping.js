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
                "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
            .setTitle('Pong! 🏓')
            .setDescription(`WebSocket ping is \`${client.ws.ping}MS\`\nMessage edit ping is \`${Math.floor(msg.createdAt - message.createdAt)}MS!\``)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            await message.channel.send(embed)
            msg.delete()

    }
}
