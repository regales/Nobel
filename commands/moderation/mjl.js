//mjs = Member Joined LeaderBoard

const { ReactionPages } = require('reconlx');
const { client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'mjl',
    description: "Member Join LeaderBoard",
    usage: '',
    aliases: ['memberjoinleaderboard'],
    run: async(client, message, args) => {
        const members = message.guild.members.cache
            .filter((m) => !m.user.bot)
            .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp);

        const arrayofMembers = members.array();
        const ids = [];
        arrayofMembers.forEach((mem) => {
            ids.push(mem.user.id);
        })

        let index = 1;
        if (ids.length > 10) {
            const chunks = convertChunk(ids, 10);
            const arry = [];
            for (chunk of chunks) {
                const description = chunk.map((v) => `#${index++} **${message.guild.members.cache.get(v).user.tag}**`);
                arry.push(
                    new MessageEmbed()
                        .setAuthor(
                          "ռօɮɛʟ",
                          "https://i.imgur.com/o3xDQbB.jpeg")
                        .setTitle('Join Leaderboard in ' + message.guild.name)
                        .setDescription(description)
                        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setColor('#5539cc')
                )
            }
            ReactionPages(message, arry, true)
        } else {
            const description = ids.map((v) => `#${index++} **${message.guild.members.cache.get(v).user.tag}**`);
            message.channel.send(
                new MessageEmbed()
                    .setAuthor(
                       "ռօɮɛʟ",
                       "https://i.imgur.com/o3xDQbB.jpeg")
                    .setTitle('Join Leaderboard in ' + message.guild.name)
                    .setDescription(description)
                    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor('RANDOM')
            )
        }
    }
}

function convertChunk(arr, size) {
    const array = [];
    for (let i = 0; i < arr.length; i += size) {
        array.push(arr.slice(i, i + size))
    }
    return array;
}