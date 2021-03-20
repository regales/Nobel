var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: "image",
    description: "image",
    run: async(client, message, args) => {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send(':x: | Please enter an image name!');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    
    }
}

var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

var discord = require("discord.js");
var client = new discord.Client();
