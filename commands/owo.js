const Discord = require('discord.js')

exports.run = async(client, message) => {
    if (message.content === "*owo") {
        const embed = new Discord.MessageEmbed()
        .setDescription(`<a:oo:813972974243414056><a:ww:813973748133789697><a:oo:813972974243414056>`)
        .setImage('https://cdn2.scratch.mit.edu/get_image/gallery/25844046_170x100.png')
        .setColor('RANDOM')
        
        message.reply(embed); 
    } 

}