const Discord = require('discord.js')
const fetch = require('node-fetch')


module.exports = {
    name: 'ytt',
    aliases: ['youtubetogether'],
    description: "Watch Youtube on Discord",
    usage: '',
 
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const channel = message.member.voice.channel

        if(!channel) return message.channel.send(
            new Discord.MessageEmbed()
            .setDescription("<:xmark:848019597907329085> **You must be connected to a voice channel to use this command.**")
            .setColor("#5539cc")
        )

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary : false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.channel.send(
                new Discord.MessageEmbed()
                .setDescription("<:xmark:848019597907329085> **I was unable to start a YT together session.**")
                .setColor("#5539cc")
            )
            const bruh = new Discord.MessageEmbed()
           .setAuthor('Welcome to YouTube!' ,'https://media.discordapp.net/attachments/796358841038143488/851878274179399751/youtube.png' )
           
           .setColor('RED')
           
           .setDescription(`\n**To watch Youtube in Discord Voice Channels :** \n[Click Me](https://discord.com/invite/${invite.code})`)
           .setTimestamp()

            message.channel.send(bruh)
        })
    }
}