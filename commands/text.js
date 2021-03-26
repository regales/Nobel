const { Client, Message, MessageEmbed } = require("discord.js");
const figlet = require('figlet');

module.exports = {
    name: "text",

    run: async(client, message, args) => {
        figlet.text(args.join(" "), {
            font: "Graffiti",
        }, async (err, data) => {
            message.channel.send(`\`\`\`${data}\`\`\``);
        });
    }
}