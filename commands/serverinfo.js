const { MessageEmbed } = require('discord.js');



module.exports = {

    name: "serverinfo",

    category: "extra",

    run: async(client, message, args) => {

        let region;

        switch (message.guild.region) {

            case "europe":

                region = ':flag_eu:  Europe';

                break;

            case "us-east":

                region = ':flag_us:  US-East'

                break;

            case "us-west":

                region = ':flag_us:  US-West';

                break;

            case "us-south":

                region = ':flag_us:  US-South'

                break;

            case "us-central":

                region = ':flag_us:  US-Central'

                break;

            case "singapore":

                region = ':flag_sg:  Singapore'

                break;

            case "brazil":

                region = ':flag_br:  Brazil'

                break;

            case "hongkong":

                region = ':flag_hk:  Hong Kong'

                break;

            case "india":

                region = ':flag_in:  India'

                break;

            case "japan":

                region = ':flag_jp:  Japan'

                break;

            case "russia":

                region = ':flag_ru:  Russia'

                break;

            case "southafrica":

                region = ':flag_za:  South Africa'

                break;

            case "sydney":

                region = ':flag_au:  Sydney'

                break;

        }



        const embed = new MessageEmbed()

            .setThumbnail(message.guild.iconURL({ dynamic: true }))

            .setColor('RANDOM')

            .setTitle(`${message.guild.name} server stats`)

            .addFields(

                {

                    name: "Owner: ",

                    value: message.guild.owner.user.tag,

                    inline: true

                },

                {

                    name: "Members: ",

                    value: `There are ${message.guild.memberCount} users!`,

                    inline: true

                },

                {

                    name: "Members Online: ",

                    value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,

                    inline: true

                },

                {

                    name: "Total Bots: ",

                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,

                    inline: true

                },

                {

                    name: "Creation Date: ",

                    value: message.guild.createdAt.toLocaleDateString("en-us"),

                    inline: true

                },

                {

                    name: "Roles Count: ",

                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,

                    inline: true,

                },

                {

                    name: `🗺 Region: `,

                    value: region,

                    inline: true

                },

                {

                    name: `Verified: `,

                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,

                    inline: true

                },

                {

                    name: 'Boosters: ',

                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,

                    inline: true

                },

                {

                    name: "Emojis: ",

                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis',

                    inline: true

                }

            )

        await message.channel.send(embed)

    }

}