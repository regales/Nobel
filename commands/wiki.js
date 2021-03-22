const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {

    run: async(client, message, args) => {

        const wiki = args.slice().join(' ')
        if(!wiki) return message.reply(':x: | Provide A Query To Search.')
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }      
        catch (e) {
            return message.send(':x: | An Error Occured, Try Again.')
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
                message.channel.send(embed)
            }
            else { 
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title)
                .setThumbnail(response.thumbnail.source)
                .setURL(response.content_urls.desktop.page)
                .setDescription(response.extract)
                message.channel.send(embed)
            }
        }
        catch {
            return message.reply(':x: | Provide A Valid Query To Search.')
        }
    }
}