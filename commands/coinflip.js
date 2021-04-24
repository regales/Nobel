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
            "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        .setColor("RANDOM")
        .setThumbnail("https://media.giphy.com/media/DvDGtCpnP3r4A/source.gif")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.reply(embed)
    }
}