const Discord = require('discord.js')

exports.run = async(client, message) => {
    if (message.content === "*owo") {
        const embed = new Discord.MessageEmbed()
        .setTitle(`OwO`)
        .setURL(`https://www.urbandictionary.com/define.php?term=%C3%92w%C3%93`)
        .setImage('https://steamuserimages-a.akamaihd.net/ugc/919175113694613329/38E37B4D65D93124E34CAB18A80D367364A70C61/')
        .setColor('RANDOM')
        
        message.reply(embed); 
    } 

}