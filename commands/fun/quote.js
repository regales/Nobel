const { MessageEmbed } = require(`discord.js`);
const fetch = require(`node-fetch`)
module.exports = {
    name: 'quote',
    aliases: ['getquote'], 
    usage: '', 
    description: 'Get a random quote',
    

    run: async(client, message, args) => {
        const nidhish = require(`nidhishpackage`)
        const quote = await nidhish.generateQuote({
            Color: "#5539cc"
        })
        return message.channel.send(quote);
            }
}