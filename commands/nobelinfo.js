const Discord = require('discord.js')

exports.run = async(client, message) => {
    if (message.content === "*nobelinfo") {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Information About Nobel`)
        .setDescription(
            `**Servers Nobel Is Currently In**:
             ${client.guilds.cache.size} servers
        
             **Users Nobel Is Currrently Serving**:
             ${client.users.cache.size} users`)
        .setColor('RANDOM')
        
        message.reply(embed); 
    } 

}