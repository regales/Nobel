const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;
const Discord = require("discord.js");
const pagination = require('discord.js-pagination')

module.exports = {
    name: "help",
    run: async(client, message, args) => {
        const page1 = new Discord.MessageEmbed()
            .setAuthor(
               "Nobel Help",
               "https://i.imgur.com/o3xDQbB.jpeg")
            .setColor('PURPLE')
            
            .setDescription(`
            <a:playing:799562690129035294> **Music Commands [17]**

            \n\`play\` - Plays a song from Youtube\n\`playlist\` - Plays a playlist for Youtube\n\`pause\` - Pauses music\n\`resume\` - Resumes music\n\`np\` - Gets now playing song's info\n\`skip\` - Skips to next song\n\`skipto\` - Skips to requested song number\n\`remove\` - Remove songs from the queue\n\`stop\` - Stops playing music\n\`volume\` - Adjusts volume of the music\n\`queue\` - To see the full song queue\n\`join\` - Joins a voice channel 24/7\n\`leave\` - Leaves a voice channel\n\`loop\` - Loops The queue\n\`shuffle\` - Shuffles the queue\n\`bassboost\` - Cheeki Breeki V Damke\n\`lyrics\` - Bee boo la lu
            
            \n<:d6:843041076306640896> **Fun Commands [21]**

            \n\`anime\` - Searches information of an anime series\n\`snake\` - Classic game from Nokia\n\`snipe\` - I saw that and I have proof\n\`editsnipe\` - No edits allowed sonny\n\`rps\` - Plays a game of rock, paper and scissors\n\`reverse\` - Reverses a text\n\`8ball\` - Gives you an answer for those essential questions\n\`text\` - Rewrites a text in Ascii art\n\`tictactoe\` - Plays Tic Tac Toe with another user\n\`meme\` - Scavenges reddit for currently top memes\n\`hack\` - Hacks a user\n\`owofy\` - OwO whowts twhis?\n\`trivia\` - Oh yeah, it's big brain time\n\`spotify\` - Displays what a user is currently listening to on Spotify\n\`spimg\` - Displays a Spotify card of what a user is listening to\n\`wiki\` - Searches wiki for top tier answers\n\`urban\` - Searches meaning of words Boomers won't understand\n\`weather\` - Weather for mentioned cities (not countries)\n\`worldclock\` - Time all around the world\n\`translate\` - Translates a text\n\`github\` - Searches a profile on Github`)
    
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        
        const page2 = new Discord.MessageEmbed()
            .setColor('PURPLE')
            .setAuthor(
                "Nobel Help",
                "https://i.imgur.com/o3xDQbB.jpeg")
            
            .setDescription(`

            \n<:DPSRole:843830825044803625> **Roleplay Commands [14]**

            \n\`sad\` - Don't be\n\`smug\` - Nice grin bro\n\`shy\` - Introverts smh\n\`happy\` - Someone's over cloud nine\n\`hug\` - Huggies for everyone\n\`shoot\` - Bam, you ded\n\`lick\` - Kinky much?\n\`cuddle\` - Extra touchy than hug\n\`tickle\` - Please hahah stwap\n\`pat\` - Ara ara\n\`kiss\` - Ranging from french to sweet ones\n\`slap\` - Ow, that hurts\n\`dance\` - Bille Jean is not my lover\n\`laugh\` - Lolmao Rofl

            \n<:blurple_image:851465590744940594>  **Image Commands [6]**

            \n\`maps\` - Geography time\n\`changemymind\` - Try me\n\`drake\` - Hotline bling\n\`tweet\` - Tweet something on twitter\n\`avatar\` - Displays someone's avatar\n\`deepfry\` - Deepfries a user's profile picture
            
            `)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        
        const page3 = new Discord.MessageEmbed()
            .setColor('PURPLE')
            .setAuthor(
                "Nobel Help",
                "https://i.imgur.com/o3xDQbB.jpeg")
            
            .setDescription(`

            \n<:settings:843041534609850370> **Moderation Commands [11]**

            \n\`setwelcome\` - Sets mentioned server to welcome new members\n\`setprefix\` - Sets typed prefix as custom prefix for server\n\`ping\` - Returns latency and API ping\n\`help\` - Displays all commands for Nobel\n\`mjl\` - Member Joined LeaderBoard\n\`userinfo\` - Information regarding a user\n\`serverinfo\` - Information regarding current server\n\`stats\` - Information regarding Nobel\n\`support\` - Link for inviting Nobel or support server\n\`invite\` - Invite Nobel to your server\n\`globalchat\` - Help on how to set up Nobel's global chat`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        const pages = [page1, page2, page3];
        const emojis = ['◀', '▶'];
        const timeout = '60000'

        pagination(message, pages, emojis, timeout)
    
        message.react('<a:water_green_Okay:825929495164223528>')
    }
    
}

