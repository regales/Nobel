const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: 'owofy',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
    const text = args.join(' ')

    if(!text || text.length > 200) return message.channel.send(`<:xmark:848019597907329085> **Oopsies, thats over the text limit or no text was provided UwU.**`)

    if(text.includes('@')) return message.lineReply(`<:xmark:848019597907329085> **OwO, no pings**`)

    const { owo } = await fetch(`https://nekos.life/api/v2/owoify?text=${encodeURIComponent(text)}`)
      .then(res => res.json())

      return message.channel.send(owo);
    }
}