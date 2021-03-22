const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;
const Discord = require("discord.js");

module.exports = {
    run: async(client, message, args) => {
        const embed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('🎸__Help Page For Nobel__🎸')
            .setDescription(`
            **:musical_note: __Music__ :musical_note:**

            ****play*** - Plays a song from youtube
            ****pause*** - Pauses music
            ****resume*** - Resumes music
            ****np*** - Gets now playing song's info
            ****skip*** - Skips to next song
            ****stop*** - Stops playing music
            ****volume*** - Adjusts volume of the music from 1-10 
            ****queue*** - To see the full song queue
            ****lyrics*** - Lyrics for the current song playing in queue`)
            
                
            

        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('🎸__Help Page For Nobel__🎸')
            .setDescription(`
            **:video_game:  __Fun__ :video_game:  **

            ****rps*** - Plays a game of rock, paper and scissors
            ****reverse*** - Reverses a text
            ****8ball*** - Gives you an answer for those essential questions
            ****tictactoe*** - Plays Tic Tac Toe with another user
            ****meme*** - Scavenges reddit for currently top memes
            ****owo*** - Sends an OwO in chat
            ****avatar*** - Displays someone's avatar
            ****deepfry*** - Deepfries a user's profile picture
            ****trivia*** - Oh yeah, it's big brain time
            ****weather*** - Weather for mentioned cities (not countries)
            ****wiki*** - Searches wiki for top tier answers`)
            

        const embed3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('🎸__Help Page For Nobel__🎸')
            .setDescription(`
            **:gear: __Utility__ :gear: **

            ****ping*** - Returns latency and API ping
            ****help*** - Displays all commands for Nobel
            ****mjl*** - Member Joined LeaderBoard
            ****serverinfo*** - Information regarding current server
            ****nobelinfo*** - Information regarding Nobel
            ****support*** - Link for inviting Nobel or support server`)
        
                
                
        

        

        const pages = [embed1, embed2, embed3];
        const emojis = ['◀', '▶'];

        ReactionPages(message, pages, true, emojis);
        message.react('✅')
    }
    
}

//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' }, 
//                { name: '', value: '' },
//                { name: '', value: '' },
//                { name: '', value: '' },