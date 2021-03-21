const { MessageEmbed } = require("discord.js")
const skip = require("./skip")

module.exports = {
    
    run: async(client, message, args) => {
        const serverQueue = message.client.queue.get(message.guild.id)
        if(isNaN(parseInt(args[0])) || !args[0]) return message.reply('Enter A Valid Number.\nUse `+queue` To See Number Of Song.') // If Number Is Not A Number or Not A Valid Number.
        if(!serverQueue) return message.reply('No Song Being Played, Cant Remove Song.')
        let remove = args[0] - 1
        let arr = serverQueue.songs
        if(remove > arr.length || remove < 0 ) { return message.reply('Thats Not A Valid Number.') } 

        const embed = new MessageEmbed()
        .setTitle('Song Removed')
        .setColor('RANDOM')
        .addField(`Removed:- **${arr[remove].title}**`, '<a:Next:803138566091309057>')
        .addField('Song Removed by:-', message.author)
        .setTimestamp()
        .setFooter('Song Removed')
        message.channel.send(embed)

        if(remove === 0) { skip.execute(message, ags) }
        else { arr.splice(remove, 1) }
        message.client.queue.set(message.guild.id, serverQueue)
    } 
}