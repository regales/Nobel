const covid = require('novelcovid');
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'covid',
    description: 'Covid-19 Statistics',

    run: async(client, message, args) => {
        const covidStats = await covid.all()
        
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(
              "ռօɮɛʟ",
              "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
            .setTitle('😷 COVID-19 STATISTICS')
            .setColor("RED")
            .setFooter(`𝗖𝗢𝗩𝗜𝗗-𝟭𝟵 Stay at home`)
            .addFields(
                { name: `🦠 \`Cases\``, value: covidStats.cases.toLocaleString(), inline: true},
                { name: `🦠 \`Cases Today\``, value: covidStats.todayCases.toLocaleString(), inline: true},
                { name: `🦠 \`Deaths\``, value: covidStats.deaths.toLocaleString(), inline: true},
                { name: `🦠 \`Deaths Today\``, value: covidStats.todayDeaths.toLocaleString(), inline: true},
                { name: `🦠 \`Recovered\``, value: covidStats.recovered.toLocaleString(), inline: true},
                { name: `🦠 \`Recovered Today\``, value: covidStats.todayRecovered.toLocaleString(), inline: true},
                { name: `🦠 \`Active Cases\``, value: covidStats.active.toLocaleString(), inline: true},
                { name: `🦠 \`In Critical Condition\``, value: covidStats.critical.toLocaleString(), inline: true},
                { name: `🦠 \`Tested\``, value: covidStats.tests.toLocaleString(), inline: true}
            )
        )
    }
}