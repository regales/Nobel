const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "flips a coin!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setAuthor(
            "ռօɮɛʟ",
            "https://i.imgur.com/o3xDQbB.jpeg")
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        .setColor("RANDOM")
        .setThumbnail("https://media.giphy.com/media/DvDGtCpnP3r4A/source.gif")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.reply(embed)
    }
}