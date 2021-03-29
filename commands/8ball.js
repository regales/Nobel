const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  run: async(client, message, args) => {

    const question = args.join(' ')
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<:xmark:314349398824058880> Please specify a question')
            
    if (!question) return message.reply(embed)

    const answers = [

      'Yes', 'No', 'Maybe', 'Never', 'Totally!'


    ];
    const a = answers[Math.floor(Math.random() * answers.length)];

    return message.channel.send(
      new MessageEmbed()
        .setAuthor('🎱 The 8Ball Rolls')
        .setDescription(
          `Question: 
          ${question}
          \nAnswer:
          ${a}`
        )
        .setColor('RANDOM')
    );
  }
}