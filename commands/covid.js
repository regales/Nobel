const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    name: "covid",
    aliases: ["corona", "rona"],


run: async(client, message, args) => {
        if (!args[0]) {

        
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setAuthor(
                    "ռօɮɛʟ",
                    "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
                .setTitle(`<:coronaS:840831289132449793> COVID-19 Stats World Wide!`)
                .addField('<:coronaS:840831289132449793> `Confirmed Cases`', confirmed)
                .addField('<:coronaS:840831289132449793> `Recovered`', recovered)
                .addField('<:coronaS:840831289132449793> `Deaths`', deaths)
                .setFooter(`Stay Safe`)
                .setColor('RED')
                .setTimestamp()

                message.channel.send(embed)
            })
         } else {
          let countries = args.join(" ")
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setAuthor(
                    "ռօɮɛʟ",
                    "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
                .setTitle(`<:coronaS:840831289132449793> COVID-19 Stats for **${countries}**`)
                .addField('<:coronaS:840831289132449793> `Confirmed Cases`', confirmed)
                .addField('<:coronaS:840831289132449793> `Recovered`', recovered)
                .addField('<:coronaS:840831289132449793> `Deaths`', deaths)
                .setFooter(`Stay Safe`)
                .setColor('RED')
                .setTimestamp()

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send(`<:xmark:314349398824058880> Invalid country provided!`)
            })
        }
    }
}