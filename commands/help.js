exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: '🎸Help Page For Nobel🎸',
            description: `
            ****play <songName>*** - Play a song from youtube
            ****pause*** - pause music
            ****resume*** - resume music
            ****np*** - Get now playing song's info
            ****skip*** - Skip to next song
            ****stop*** - Stop playing music
            ****volume <value>*** - adjust volume of the music
            ****queue*** - to see the full song queue
            ****coinflip*** - flips a coin
            ****rps*** - plays a game of rock, paper and scissors
            ****reverse*** - reverses a text 
            ****8ball*** - gives you an answer for those essential questions
            `,
            color: 'RED'
        }
    })
    message.react('✅')
}
