const {Client, Message, MessageEmbed } = require ('discord.js');
const translate = require('@iamtraction/google-translate')
module.exports = {
  name: 'translate',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

   run: async(client, message, args) => {
    try {
      const query = args.slice(1).join(" ");
    if (!query) return message.channel.send(`<:xmark:314349398824058880> Please type a valid text to translate.\n\`\`Refer To *helptranslate\`\``)
const arg = args[0]

    const translated = await translate(query, {to: `${arg}`});
    const embed = new MessageEmbed()
    .setTitle("Translated Successfully.")
    .addField("Your Query", `\`\`\`fix\n${query}\`\`\``)
    .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
    .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
    .setColor("RANDOM")
    message.channel.send(embed)

    } catch (error) {
      return message.channel.send("<:xmark:314349398824058880> Your translation is invalid! \n\`\`Check *helptranslate\`\`")
      .then(() => console.log(error));
    }
  }
}