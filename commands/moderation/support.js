const Discord = require('discord.js')

module.exports = {
    name: 'support',
    aliases: ['support'],
    description: 'Support is here for your needs',
    run: async(client, message) => {
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
        .setColor('#5539cc')
        
        message.reply(embed); 
    } 

}
}