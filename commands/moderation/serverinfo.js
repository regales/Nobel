const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "serverinfo",
    description: "Information regarding a server",
    usage: '',
    aliases: ['serverinfo'],

    run: async(client, message, args) => {

        const { guild } = message
        const icon = message.guild.iconURL({ dynamic: true }) // Icon Of Server
        const roles = message.guild.roles.cache.map(e => e.toString()) // Roles Of Server
        const emojis = message.guild.emojis.cache.map(e =>  e.toString()) // Emojis Of Server
        const emojicount = message.guild.emojis.cache // EmojiCount If Server
        const members = message.guild.members.cache // Members In Server
        const create = message.guild.createdAt.toLocaleDateString() // Server Created Date

        const embed = new MessageEmbed()
        .setColor('#5539cc')
        .setAuthor(`${message.guild.name} Info`, icon)
        .setThumbnail(`${icon}`)
        .addField('**•** **Server Owner**', `${guild.owner}`, true)
        .addField('**•** **Server ID**', `\`${guild.id}\``, true)
        .addField('**•** **Server Creation Date**', `\`${create}\``, true)
        .addField('**•** **Boost Count**', `<:DiscordServerBoost:834953235633668117> \`${guild.premiumSubscriptionCount}\``, true)
        .addField('**•** **Boost Level**', `<:DiscordServerBoost:834953235633668117> \`${guild.premiumTier}\``, true)
        .addField('**•** **Highest Role**', `${guild.roles.highest}`, true)
        .addField('**•** **Member Count**', `Total :${members.size}\nHuman :${members.filter(member => !member.user.bot).size}\nBot(s) :${members.filter(member => member.user.bot).size}`, true)
        .addField('**•** **Member Stat**', `\`${guild.members.cache.filter(member => member.presence.status == 'online').size}\` **•** <:online:825069525170520135>\n\`${guild.members.cache.filter(member => member.presence.status == 'idle').size}\` **•** <:idle:825069524201373707>\n\`${guild.members.cache.filter(member => member.presence.status == 'dnd').size}\` **•** <:dnd:825069525044428810>\n\`${guild.members.cache.filter(member => member.presence.status == 'offline').size}\` **•** <:offline:825069524574535762>`, true)
        // .addField('Roles:-', `${roles}`, true) // <true> Means All Roles Will Come In Line
        .addField('**•** **Emoji Count**', `**Total :**\`${emojicount.size}\`\n**Non Animated :**\`${emojicount.filter(emoji => !emoji.animated).size}\`\n**Animated :**\`${emojicount.filter(emoji => emoji.animated).size}\``, true)
        // .addField('Emojis:-', `${emojis}`, true) // <true> Means All Emojis Will Come In Line // This Will All Emojis Of Server
        .addField('**•** **Server Stats**', `\`\`\`⌨️Text Channels :${guild.channels.cache.filter(channel => channel.type == 'text').size}\n🔈Voice Channels :${guild.channels.cache.filter(channel => channel.type == 'voice').size}\n📢Announcement Channels :${guild.channels.cache.filter(channel => channel.type == 'news').size}\n📁Categories :${guild.channels.cache.filter(channel => channel.type == 'category').size}\`\`\``, true)
        .setTimestamp()
        .setFooter('Server Info', icon)
        message.channel.send(embed)
    }
}