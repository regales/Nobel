const Discord = require('discord.js')

exports.run = async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setTitle("Information About Nobel <a:WavingBlob:825931440402595840>")
        .setDescription(
            `**Servers Nobel Is Currently In**:
             ${client.guilds.cache.size} servers
        
             **Users Nobel Is Currrently Serving**:
             ${client.users.cache.size} users`)
        
             
        .setColor('RANDOM')
        .setFooter('Developed By Regales#0320')
        .setThumbnail('https://cdn.discordapp.com/avatars/820939172491427840/f174bcc62d9e2665806d2b63236c25fb.webp')
        
        message.reply(embed); 
    } 

}