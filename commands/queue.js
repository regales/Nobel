const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "queue",
    description: "To show the server songs queue",
    usage: "",
    aliases: ["q", "list", "songlist", "song-list"],
  },

  run: async(client, message, args) => {
 
  const permissions = message.channel.permissionsFor(message.client.user);
    if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"]))
      return sendError("<:xmark:314349398824058880> Missing Permission To Manage Messages Or Add Reactions",message.channel);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("<:xmark:314349398824058880> There Is Nothing Playing In This Server.",message.channel)

    let currentPage = 0;
    const embeds = generateQueueEmbed(message, queue.songs);

    const queueEmbed = await message.channel.send(
      `<a:playing:799562690129035294> **Server Queue** [**${currentPage + 1}**/**${embeds.length}**]`,
      embeds[currentPage]
    );//here is the thingy

    try {
      await queueEmbed.react("⬅️");
      await queueEmbed.react("🛑");
      await queueEmbed.react("➡️");
    } catch (error) {
      console.error(error);
      message.channel.send(error.message).catch(console.error);
    }

    const filter = (reaction, user) =>
      ["⬅️", "🛑", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
    const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });

    collector.on("collect", async (reaction, user) => {
      try {
        if (reaction.emoji.name === "➡️") {
          if (currentPage < embeds.length - 1) {
            currentPage++;
            queueEmbed.edit(`**\`${currentPage + 1}\`**/**${embeds.length}**`, embeds[currentPage]);
          }
        } else if (reaction.emoji.name === "⬅️") {
          if (currentPage !== 0) {
            --currentPage;
            queueEmbed.edit(`**\`${currentPage + 1}\`**/**${embeds.length}**`, embeds[currentPage]);
          }
        } else {
          collector.stop();
          reaction.message.reactions.removeAll();
        }
        await reaction.users.remove(message.author.id);
      } catch (error) {
        console.error(error);
        return message.channel.send(error.message).catch(console.error);
      }
    });
  }
};

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;

  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;

    const info = current.map((track) => `**\`${++j}\`** | \`${track.title}\``).join("\n\n");
  
    const serverQueue =message.client.queue.get(message.guild.id);
    const embed = new MessageEmbed()
    .setTitle('')
    .setThumbnail(`https://media.discordapp.net/attachments/778283828099809283/822353825624883200/unknown_1.png`)
    .setColor("PURPLE")
    .setDescription(`${info}`)
    .setFooter(`Songs Source ~ YouTube`, `https://cdn.discordapp.com/emojis/782125440873660417.png?v=1`)
     if(serverQueue.songs.length === 1)embed.setDescription(`**No Queued Up Songs** - Add Next Songs By \`\`*play <song_name>\`\``)

    embeds.push(embed);
  }

  return embeds;
 
};