const Discord = require('discord.js')

exports.run = async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setAuthor(
            "ռօɮɛʟ",
            "https://i.imgur.com/o3xDQbB.jpeg")
        .setTitle('<:settings:843041534609850370> **Support Page For Nobel**')
        .setDescription(
            `[Link For Inviting Nobel](https://bit.ly/3tF4azp)

             [Link For Support Server](https://discord.gg/Zv2haAtKyc)
            
             [Link For Social Media Account](https://www.instagram.com/nobel.support/)
            
             [Privacy Policy](https://bit.ly/3rsrtLv)`

            
        )
        
        .setFooter(`Problems? Please Dm Me At Regales#0320`)
        .setColor('RANDOM')
        
        message.reply(embed); 
    } 

}