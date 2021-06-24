const Discord = require('discord.js')

module.exports = {
    name: "globalchat",
    description: "Set up Nobel Global Chat",
    usage: '',
    aliases: ['global'],
    run: async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`How To Set Up Nobel's Global Chat`)
        .setDescription(
            `
            <:1_first:831090552773935114> \`First, create a channel called nb-chat \`

            <:2_second:831090610479693856> \`That's it! \``

            
        )
        
        .setFooter(`Problems? Please Dm Me At Regales#0320`)
        .setColor('#5539cc')
        .setTimestamp()
        
        message.reply(embed); 
    } 

}
}