const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {

    run: async(client, message, args) => {

        const wiki = args.slice().join(' ')
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Please provide a valid query')
        if(!wiki) return message.reply(embed)
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }      
        catch (e) {
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('What was that again?')
            .setDescription(`Even Wikipedia doesn't seem to know what you're talking about.`)
            .setFooter("Check for typos or try searching for something else!")
            message.channel.send(embed)
        }

        try {
            if(response.type === 'disambiguation') { 
                const embed = new MessageEmbed()
                .setColor('RANDOM')
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
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('What was that again?')
            .setDescription(`Even Wikipedia doesn't seem to know what you're talking about.`)
            .setFooter("Check for typos or try searching for something else!")
            message.channel.send(embed)
        }
}}