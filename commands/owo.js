const Discord = require('discord.js')

exports.run = async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setDescription(`<a:oo:813972974243414056><a:ww:813973748133789697><a:oo:813972974243414056>`)
        .setImage('https://steamuserimages-a.akamaihd.net/ugc/919175113694613329/38E37B4D65D93124E34CAB18A80D367364A70C61/')
        .setColor('RANDOM')
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        
        message.reply(embed); 
    } 

}