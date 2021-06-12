const Discord = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
name: 'drake',

    run: async (client, message, args) => {

        const split = args.join(" ").split(",")
        if (!args.length) return message.channel.send("<:xmark:848019597907329085> **Usage:  \`\`drake <text1> , <text2>\`\`**")
        
        
        const user = split[0];
        const user2 = split[1];
        if(!user2) return message.channel.send('<:xmark:848019597907329085> **Usage:   \`\`drake <text1> , <text2>\`\`**')
        const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/drake/?text1=${user}&text2=${user2}`, {

        });
        let Image = await res.buffer();
        const drakememe = new Discord.MessageAttachment(Image);
        message.channel.send(drakememe);

    }
}