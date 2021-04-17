const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;
const Discord = require("discord.js");

module.exports = {
    run: async(client, message, args) => {
        const embed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:music:738887962754023445>\`\`\`Help Page For Nobel\`\`\`<a:music:738887962754023445>')
            .setDescription(`
            \`Music Commands\`

            \`play\` - Plays a song from youtube
            \`pause\` - Pauses music
            \`resume\` - Resumes music
            \`np\` - Gets now playing song's info
            \`skip\` - Skips to next song
            \`stop\` - Stops playing music
            \`volume\` - Adjusts volume of the music from 1-10 
            \`queue\` - To see the full song queue
            \`lyrics\` - Lyrics for the current song playing in queue
            
            \`Fun Commands\`

            \`rps\` - Plays a game of rock, paper and scissors
            \`reverse\` - Reverses a text
            \`8ball\` - Gives you an answer for those essential questions
            \`text\` - Rewrites a text in Ascii art
            \`tictactoe\` - Plays Tic Tac Toe with another user
            \`meme\` - Scavenges reddit for currently top memes
            \`hack\` - Hacks a user
            \`owo\` - Sends an OwO in chat
            \`avatar\` - Displays someone's avatar
            \`deepfry\` - Deepfries a user's profile picture
            \`tweet\` - Tweets something on twitter
            \`trivia\` - Oh yeah, it's big brain time
            \`sp\` - Displays what a user is currently listening to on Spotify
            \`weather\` - Weather for mentioned cities (not countries)
            \`wiki\` - Searches wiki for top tier answers
            \`worldclock\` - Time all around the world
            \`translate\` - Translates a text
            \`anime\` - Searches information of an anime series`)
    
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        
        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:music:738887962754023445>\`\`\`Help Page For Nobel\`\`\`<a:music:738887962754023445>')
            .setDescription(`
            \`NSFW Commands\`

            \`All NSFW Commands Require NSFW Channels\`
            \`hentai\` - Images of anime and manga pornography
            \`ahegao\` - Images of anime girls being fucked silly
            \`neko\` - Images of NSFW nekomimi
            \`pantsu\` - Images of panty shots
            \`oppai\` - Images of big tiddies
            \`bondage\` - Images of extreme sex-plays
            \`ecchi\` - Images of borderline SFW hentai
            \`futa\` - Images of 2-in-1 packages

            \`Utility Commands\`

            \`ping\` - Returns latency and API ping
            \`help\` - Displays all commands for Nobel
            \`mjl\` - Member Joined LeaderBoard
            \`userinfo\` - Information regarding a user
            \`serverinfo\` - Information regarding current server
            \`nobelinfo\` - Information regarding Nobel
            \`support\` - Link for inviting Nobel or support server
            \`uptime\` - How long Nobel has been online
            \`globalchat\` - Help on how to set up Nobel's global chat
            \`covid\` - Information regarding the COVID-19 pandemic`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        const pages = [embed1, embed2];
        const emojis = ['◀', '▶'];
    
        ReactionPages(message, pages, true, emojis);
        message.react('<a:water_green_Okay:825929495164223528>')
    }
    
}

