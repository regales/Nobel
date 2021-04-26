const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { news_API } = require('../config.json');

module.exports = {
    
        name: 'news',
        aliases: ['globalnews', 'reuters'],
        description: 'Replies with the 5 latest world news headlines',
        category: "info",
        usage: " ",
        
   
    run: async (client, message, args) => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?sources=reuters&pageSize=5&apiKey=${news_API}`
            );
            const json = await response.json();
            const articleArr = json.articles;
            let processArticle = article => {
                const embed = new MessageEmbed()
                    .setColor('PURPLE')
                    .setAuthor(
                        "ռօɮɛʟ",
                        "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
                    .setTitle(article.title)
                    .setURL(article.url)
                    .setAuthor(article.author)
                    .setDescription(article.description)
                    .setThumbnail(article.urlToImage)
                    .setTimestamp(article.publishedAt)
                    .setFooter(message.guild.name, message.guild.iconURL());
                return embed;
            };
            async function processArray(array) {
                for (const article of array) {
                    const msg = await processArticle(article);
                    message.channel.send(msg);
                }
            }
            await processArray(articleArr);
        } catch (e) {
            message.channel.send('<:xmark:314349398824058880> Something failed along the way');
        }
    }
};
