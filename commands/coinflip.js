const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "flips a coin!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        .setColor("RANDOM")
        .setImage("https://media.giphy.com/media/DvDGtCpnP3r4A/source.gif")
        message.reply(embed)
    }
}