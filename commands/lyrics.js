const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

exports.run = async(client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("<:xmark:314349398824058880> There is nothing playing.").catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `<:xmark:314349398824058880> No lyrics found for ${queue.songs[0].title} `;
    } catch (error) {
      lyrics = `<:xmark:314349398824058880> No lyrics found for ${queue.songs[0].title} `;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle(`<a:music:738887962754023445> Lyrics For ${queue.songs[0].title}`)
      .setDescription(lyrics)
      .setColor("RANDOM")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
}