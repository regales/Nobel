///command file make it to your command handler and require it correctly 
const Discord = require('discord.js');
module.exports = {
    name: 'hack',
    run: async(client, message, args) => {

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

module.exports = { sleep }
const query = args.join(" ");
    if (!query) return message.channel.send("<:xmark:848019597907329085> User not found!");
        const hacked = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const genemail = [
            `${hacked.user.username}noob@`
        ]
        const genending = [
            'gmail.com'
        ]
        const genpass = [
            `82jfsk9aw1`
        ]
        await message.channel.send(`\`Hacking ${hacked.user.username} Now...\``)
        .then(async msg => {
            await sleep(1500);
            await msg.edit(`[▖] \`Finding Discord Login... (2FA bypassed)\``)
            await sleep(2000);
            await msg.edit(`[▘] Found:\n**Email:** \`${genemail}${genending}\`\n**Password:** \`${genpass}\``)
            await sleep(2500);
            await msg.edit(`[▝] \`Connecting To ${hacked.user.username}'s Steam Account\``)
            await sleep(2000);
            await msg.edit(`[▗] \`Mass Purchasing Fallout 76\``)
            await sleep(2000);
            await msg.edit(`[▖] \`Deleting Spotify Playlists\``)
            await sleep(2000);
            await msg.edit(`[▘] \`Downloading Trojan Into C:Local Disk\``)
            await sleep(2000);
            await msg.edit(`[▝] \`Reporting ${hacked.user.username} To Gaben And Jason Citron\``)
            await sleep(2000);
            await msg.edit(`\`${hacked.user.username} Won't Be Online Anytime Soon\``)
            await sleep(2000);
        })
    }
}