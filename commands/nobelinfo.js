const Discord = require('discord.js')

exports.run = async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Information About Nobel <a:WavingBlob:825931440402595840>`)
        .setDescription(
            `**Servers Nobel Is Currently In**:
             ${client.guilds.cache.size} servers
        
             **Users Nobel Is Currrently Serving**:
             ${client.users.cache.size} users`)
        
             
        .setColor('RANDOM')
        .setFooter('Developed By Regales#0320')
        
        message.reply(embed); 
    } 

}