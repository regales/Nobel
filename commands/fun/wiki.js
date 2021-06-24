const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: "wiki",
    aliases: ['wikipedia'],
    usage: 'text',
    description: 'Searches wiki for top tier answers',

    run: async(client, message, args) => {

        const wiki = args.slice().join(' ')
       
        if(!wiki) return message.channel.send(`<:xmark:848019597907329085> Please provide a valid query`)
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }      
        catch (e) {
            
            message.channel.send(`<:xmark:848019597907329085> Wikipedia doesn't seem to know what you're talking about. \n\`Search for typos or maybe this topic doesn't exist on Wikipedia.\``)
        }

        try {
            if(response.type === 'disambiguation') { 
                const embed = new MessageEmbed()
                .setColor('#5539cc')
                .setTitle(response.title)
                .setURL(response.content_urls.desktop.page)
                .setDescription([`
                **Multiple Results Found**

                Results For Topic You Searched : [Link](${response.content_urls.desktop.page}).`])
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                message.channel.send(embed)
            }
            else { 
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title)
                .setThumbnail(response.thumbnail.source)
                .setURL(response.content_urls.desktop.page)
                .setDescription(response.extract)
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                message.channel.send(embed)
            }
        }
        catch {

            message.channel.send(`<:xmark:848019597907329085> Wikipedia doesn't seem to know what you're talking about. \n\`Search for typos or maybe this topic doesn't exist on Wikipedia.`)
        }
}}