const {Client, Message, MessageEmbed } = require ('discord.js');
const translate = require('@iamtraction/google-translate')
module.exports = {
  name: 'translate',
  aliases: ['trans'],
  usage: '<text>',
  description: 'Translates a text',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

   run: async(client, message, args) => {
        const prefix = require("../../models/prefix");
        const data = await prefix.findOne({
          GuildID: message.guild.id
      });

      if (message.author.bot) return;


      if(data) {
        const prefix = data.Prefix;
        try {
          const query = args.slice(1).join(" ");
        if (!query) return message.channel.send(`<:xmark:848019597907329085> Please type a valid text to translate.\n\`\`Refer To ${prefix}languages\`\``)
        const arg = args[0]

        const translated = await translate(query, {to: `${arg}`});
        const embed = new MessageEmbed()
        .setTitle("<:thinkink_translate:919049266146721822> Translated Successfully.")
        .setAuthor(
          "ռօɮɛʟ",
          "https://i.imgur.com/o3xDQbB.jpeg")
        .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
        .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
        .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
        .setColor("#5539cc")
        message.channel.send(embed)

        } catch (error) {
          return message.channel.send(`<:xmark:848019597907329085> Your translation is invalid! \n\`\`Check ${prefix}languages\`\``)
          .then(() => console.log(error));
        }
      } else if (!data) {
        const prefix = "*";
        try {
          const query = args.slice(1).join(" ");
        if (!query) return message.channel.send(`<:xmark:848019597907329085> Please type a valid text to translate.\n\`\`Refer To ${prefix}languages\`\``)
        const arg = args[0]

        const translated = await translate(query, {to: `${arg}`});
        const embed = new MessageEmbed()
        .setTitle("<:thinkink_translate:919049266146721822> Translated Successfully.")
        .setAuthor(
          "ռօɮɛʟ",
          "https://i.imgur.com/o3xDQbB.jpeg")
        .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
        .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
        .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
        .setColor("#5539cc")
        message.channel.send(embed)

        } catch (error) {
          return message.channel.send(`<:xmark:848019597907329085> Your translation is invalid! \n\`\`Check ${prefix}languages\`\``)
          .then(() => console.log(error));
        }

      }
    } 
}