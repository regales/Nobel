exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: '🎸__Help Page For Nobel__🎸',
            description: `
            **:musical_note: __Music__ :musical_note:**
            ****play <songName>*** - Play a song from youtube
            ****pause*** - pause music
            ****resume*** - resume music
            ****np*** - get now playing song's info
            ****skip*** - skip to next song
            ****stop*** - stop playing music
            ****volume <value>*** - adjust volume of the music from 1-10 
            ****queue*** - to see the full song queue
            ****lyrics*** - lyrics for the current song playing in queue

            **:japanese_goblin: __Fun__ :japanese_goblin: **
            ****coinflip*** - flips a coin
            ****rps*** - plays a game of rock, paper and scissors
            ****reverse*** - reverses a text 
            ****8ball*** - gives you an answer for those essential questions
            ****meme*** - scavenges reddit for currently top memes
            ****owo*** - sends an OwO in chat
            ****deepfry*** - deepfries a user's profile picture
            ****trivia*** - oh yeah, it's big brain time

            **:gear: __Utility__ :gear: **
            ****ping*** - returns latency and API ping
            ****avatar*** - displays someone's avatar!
            ****mjl*** - Member Joined LeaderBoard!
            ****serverinfo*** - information regarding current server 
            `,
            color: 'RANDOM'
        }
    })
    message.react('✅')
}
