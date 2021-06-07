const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    run: async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setAuthor(
            "ռօɮɛʟ",
            "https://i.imgur.com/o3xDQbB.jpeg")
        
        .setDescription(
            `<:settings:843041534609850370> [**Link For Inviting Nobel**](https://bit.ly/3tF4azp)

            
        `)
        
        .setFooter(`Problems? Please Dm Me At Regales#0320`)
        .setColor('RANDOM')
        
        message.reply(embed); 
    } 

}
}