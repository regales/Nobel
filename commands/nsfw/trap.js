const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
module.exports = {
    name: "trap",
    run: async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("<:xmark:848019597907329085> Cannot send NSFW content in a SFW channel.")
    if (!message.guild) return;
            async function trap() {
            const GIF = await neko.nsfw.trap();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setImage(GIF.url)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed);
            }
            trap();
    }
}
