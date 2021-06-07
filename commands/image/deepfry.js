const fetch = require("node-fetch")
const { MessageEmbed, MessageMentions } = require('discord.js')
const { execute } = require("../utility/mjl")
module.exports = {
    name: "deepfry",
    description: "Deepfry someone!",
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member || message.guild.users.cache.get(u => u.id === args[0])
        const avatar = user.user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setAuthor(
                "ռօɮɛʟ",
                "https://i.imgur.com/o3xDQbB.jpeg")
            .setTitle("Deepfried!")
            .setImage(data.message)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("RANDOM")
            message.channel.send(embed)
        })
    }
}