const Discord = require('discord.js')

exports.run = async(client, message) => {
    if (message.content === "*support") {
        const embed = new Discord.MessageEmbed()
        .setDescription(
            `**Link For Inviting Nobel**
            https://bit.ly/3tF4azp

            **Link For Support Server**
            https://discord.gg/Zv2haAtKyc`
        )
        
        .setFooter(`Problems? Please Dm Me At Regales#0320`)
        .setColor('RANDOM')
        
        message.reply(embed); 
    } 

}