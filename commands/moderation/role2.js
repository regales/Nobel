const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'role2',


    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const embed = new MessageEmbed()
           
            
            .setDescription(`\n**__Reaction Role For Games__**\n<:9233_CSGO_SN:853283905633648650> **-** <@&852402918735872030>\n<:3670phoenixthinkaboutit:853286124854968320> **-** <@&852403011250815026>\n<:AmongUs_POG:774200272410247200> **-** <@&852403027499679745>\n<a:3048_Pepe_Sword:846728664069701632> **-** <@&851005635393749032>`)
            
            
            .setColor('BLACK')
            await message.channel.send(embed)
            

    }
}
