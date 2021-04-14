const { Client, Message, MessageEmbed } = require("discord.js");
const { searchAnime } = require("@freezegold/anime.js");


module.exports = {
  name: "anime",
  cooldown: 3,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.inlineReply("<:xmark:314349398824058880> Please type a name of an anime!");
    const anime = await searchAnime(query, 1).then((res) => {
      return res[0];
    });
    function trim(input) {
      return input.length > 1024 ? `${input.slice(0, 1015)} [...]` : input;
    }

    const embed = new MessageEmbed()
      .setColor("PURPLE")
      .setAuthor(
        anime.titles.english,
        "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
      )
      .setTitle("\`Anime\`")
      .addFields(
        {
          name: "\`Titles\` ",
          value: anime.titles.english
            ? `➥ English: ${anime.titles.english}\n`
            : "➥ English: :x:\n" +
              `➥ Romaji: ${anime.titles.romaji}\n` +
              `➥ Japanese: ${anime.titles.japanese}`,
          inline: true,
        },
        {
          name: "\`Ratings\` ",
          value:
            `➥ Watchers: ${anime.userCount}\n` +
            `➥ Favourites: ${anime.favoritesCount}\n` +
            `➥ Ratings: ${anime.averageRating} ⭐`,
          inline: true,
        },
        {
          name: "\`Synopsis\` ",
          value: trim(anime.synopsis),
          inline: false,
        }
      )
      .setThumbnail(anime.posterImage.original)
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed);
  },
};