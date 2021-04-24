const fetch = require("node-fetch")
const { MessageEmbed, MessageMentions } = require('discord.js')
const { execute } = require("./mjl")
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
                "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
            .setTitle("Deepfried!")
            .setImage(data.message)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("RANDOM")
            message.channel.send(embed)
        })
    }
}