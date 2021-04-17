const Discord = require('discord.js')

exports.run = async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setAuthor(
            "ռօɮɛʟ",
            "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
        .setTitle('<a:music:738887962754023445>\`\`\`Support Page For Nobel\`\`\`<a:music:738887962754023445>')
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