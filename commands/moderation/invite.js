const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    description: "Invite Nobel to your server",
    usage: '',
    aliases: ['invite'],
    run: async(client, message) => {
    {
        const embed = new Discord.MessageEmbed()
        .setAuthor(
            "ռօɮɛʟ",
            "https://i.imgur.com/o3xDQbB.jpeg")
        
        .setDescription(
            `**•** [**Link For Inviting Nobel**](https://bit.ly/3tF4azp)

            
        `)
        
        .setFooter(`Problems? Please Dm Me At Regales#0320`)
        .setColor('#5539cc')
        
        message.reply(embed); 
    } 

}
}