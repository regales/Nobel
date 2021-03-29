const discord = require('discord.js')
module.exports = {
	name: "rps",
	description: "Plays a game of rock, paper and scissors",
	run: async(client, message, args) => {
		let embed = new discord.MessageEmbed()
		.setTitle("ROCK PAPER SCISSORS ")
		.setDescription("React [🗻 | ✂ | 📰] to play!")
        .setColor("RANDOM")
		.setImage("https://media.giphy.com/media/3ohzdGnD5vAud1NCZW/source.gif")
		.setTimestamp()
		let msg = await message.reply(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULT")
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)
				.setColor("RANDOM")
				.setImage("https://media.giphy.com/media/3ohzdGnD5vAud1NCZW/source.gif")
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("You lost!");
            } else if (me === reaction.emoji.name) {
                return message.reply("It's a tie!");
            } else {
                return message.reply("You won!");
            }
        })
        .catch(collected => {
                message.reply('<:xmark:314349398824058880> Process has been cancelled since you did not respond in time!');
            })
}
}