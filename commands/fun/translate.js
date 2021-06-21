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
    try {
      const query = args.slice(1).join(" ");
    if (!query) return message.channel.send(`<:xmark:848019597907329085> Please type a valid text to translate.\n\`\`Refer To *helptranslate\`\``)
const arg = args[0]

    const translated = await translate(query, {to: `${arg}`});
    const embed = new MessageEmbed()
    .setTitle("<:tr:819825362665078784> Translated Successfully.")
    .setAuthor(
      "ռօɮɛʟ",
      "https://i.imgur.com/o3xDQbB.jpeg")
    .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
    .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
    .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
    .setColor("RANDOM")
    message.channel.send(embed)

    } catch (error) {
      return message.channel.send("<:xmark:848019597907329085> Your translation is invalid! \n\`\`Check *helptranslate\`\`")
      .then(() => console.log(error));
    }
  }
}