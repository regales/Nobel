const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
const { promisifyAll } = require('tsubaki');
const xml = promisifyAll(require('xml2js'));
module.exports = {
    name: "pantsu",
    run: async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("<:xmark:848019597907329085> Cannot send NSFW content in a SFW channel.")
    const query = args.join(' ');
    if (query < 1) {
        const { body } = await snekfetch
            .get('https://www.reddit.com/r/pantsu.json?sort=top&t=week')
            .query({ limit: 800 });
    const allowed = !message.channel.nsfw ? body.data.children : body.data.children.filter(post => post.data.over_18);
    if (!allowed.length) return message.channel.send('<:xmark:848019597907329085> It seems we are out of fresh images for you!, Try again later.');
    const randomnumber = Math.floor(Math.random() * allowed.length)
    const hook = allowed[randomnumber].data.title;
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`\`\`\`${hook}\`\`\``)
        .setImage(allowed[randomnumber].data.url)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
    message.channel.send(embed)
    }}
}
