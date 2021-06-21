const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "loop",
  aliases: ['lp'],
  description: "Loops a queue",
  usage: '',

  run: async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "PURPLE",
                    description: `🔁 **Loop is** **\`${serverQueue.loop === true ? "Enabled" : "Disabled"}\`**`
                }
            });
        };
    return sendError("<:xmark:848019597907329085> **There Is Nothing Being Played!**", message.channel);
  },
};