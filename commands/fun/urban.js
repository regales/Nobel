const urban = require('relevant-urban');
const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "urban",
        aliases: ['urban'],
        description: 'Searches meaning of words',
        usage: '<text>',
    
        
    
    run: async (bot, message, args) => {
        if(!args[0])
        return message.channel.send("<:xmark:848019597907329085> Please Enter Something To Search");

        let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
        try {
            let res = await urban(args.join(' '))
                if (!res) return message.channel.send("<:xmark:848019597907329085> No results found for this topic, sorry!");
                let { word, urbanURL, definition, example, thumbsUp, thumbsDown, author } = res;

                let embed = new MessageEmbed()
                    .setColor("PURPLE")
                    .setAuthor(
                        "ռօɮɛʟ",
                        "https://github.com/regales/Nobel/blob/main/assets/img/newnobelpfp.jpg?raw=true")
                    .setTitle(`**Urban - ${word}**`)
                    .setThumbnail(image)
                    .setDescription(`**Meaning:**\n*${definition || "No meaning"}*\n\n**Example:**\n*${example || "No Example"}*`)
                    .addField('**Rating:**', `**\`Upvotes: ${thumbsUp} | Downvotes: ${thumbsDown}\`**`)
                    .addField("**Link**",  `[link to ${word}](${urbanURL})`)
                    .addField("**Author:**", `${author || "unknown"}`)
                    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()

                message.channel.send(embed)
            
        } catch (e) {
            console.log(e)
            return message.channel.send("<:xmark:848019597907329085> Looks like I'm broken! Try again")
        }
    }
}
