const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'role1',


    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const embed = new MessageEmbed()
           
            
            .setDescription(`\n**__Reaction Role For Pings__**\n<a:giveaway:780103641519358013> **-** <@&852402786711633960>\n<:5470stardewtrader:853283904994934875> **-** <@&852402676041908265>\n<:HypeSquad_Events:845672050974261298> **-** <@&852402848502906880>`)
            
            
            .setColor('BLACK')
            await message.channel.send(embed)
            

    }
}
