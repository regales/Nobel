const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;
const Discord = require("discord.js");

module.exports = {
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:music:738887962754023445>\`\`\`Help Page For Nobel\`\`\`<a:music:738887962754023445>')
            .setDescription(`
            \`Music Commands\`

            ****play*** - Plays a song from youtube
            ****pause*** - Pauses music
            ****resume*** - Resumes music
            ****np*** - Gets now playing song's info
            ****skip*** - Skips to next song
            ****stop*** - Stops playing music
            ****volume*** - Adjusts volume of the music from 1-10 
            ****queue*** - To see the full song queue
            ****lyrics*** - Lyrics for the current song playing in queue
            
            \`Fun Commands\`

            ****rps*** - Plays a game of rock, paper and scissors
            ****reverse*** - Reverses a text
            ****8ball*** - Gives you an answer for those essential questions
            ****text*** - Rewrites a text in Ascii art
            ****tictactoe*** - Plays Tic Tac Toe with another user
            ****meme*** - Scavenges reddit for currently top memes
            ****hack*** - Hacks a user
            ****owo*** - Sends an OwO in chat
            ****avatar*** - Displays someone's avatar
            ****deepfry*** - Deepfries a user's profile picture
            ****trivia*** - Oh yeah, it's big brain time
            ****sp*** - Displays what a user is currently listening to on Spotify
            ****weather*** - Weather for mentioned cities (not countries)
            ****wiki*** - Searches wiki for top tier answers
            ****worldclock*** - Time all around the world
            
            \`Utility Commands\`

            ****ping*** - Returns latency and API ping
            ****help*** - Displays all commands for Nobel
            ****mjl*** - Member Joined LeaderBoard
            ****userinfo*** - Information regarding a user
            ****serverinfo*** - Information regarding current server
            ****nobelinfo*** - Information regarding Nobel
            ****support*** - Link for inviting Nobel or support server
            ****uptime*** - How long Nobel has been online`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        
        message.channel.send(embed)
        message.react('<a:water_green_Okay:825929495164223528>')
    }
    
}

