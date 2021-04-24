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
      .setAuthor(
        "ռօɮɛʟ",
        "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
      .setTitle(`<a:music:738887962754023445> Lyrics For ${queue.songs[0].title}`)
      .setDescription(lyrics)
      .setColor("RANDOM")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
}