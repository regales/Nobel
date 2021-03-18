exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: '🎸__Help Page For Nobel__🎸',
            description: `
            **__Music__**
            ****play <songName>*** - Play a song from youtube
            ****pause*** - pause music
            ****resume*** - resume music
            ****np*** - Get now playing song's info
            ****skip*** - Skip to next song
            ****stop*** - Stop playing music
            ****volume <value>*** - adjust volume of the music from 1-10 
            ****queue*** - to see the full song queue
            ****lyrics*** - lyrics for th ecurrent song playing in queue

            **__Fun__**
            ****coinflip*** - flips a coin
            ****rps*** - plays a game of rock, paper and scissors
            ****reverse*** - reverses a text 
            ****8ball*** - gives you an answer for those essential questions
            `,
            color: 'RANDOM'
        }
    })
    message.react('✅')
}
