const Discord = require('discord.js')

exports.run = async(client, message) => {
    if (message.content === "*nsfw") {
        const embed = new Discord.MessageEmbed()
        .setDescription(`**Never Gonna Give You Up**`)
        .setImage('https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif')
        .setURL('https://youtu.be/o-YBDTqX_ZU')
        .setFooter('No Horny')
        .setColor('RANDOM')
        
        message.reply(embed); 
    } 

}