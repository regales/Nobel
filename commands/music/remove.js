const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "remove",

  run: async function (client, message, args) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("<:xmark:314349398824058880> **There Are No Songs Queued On This Server.**",message.channel).catch(console.error);
    if (!args.length) return sendError(`<:xmark:314349398824058880> **Usage:** \`*remove <Queue Number>\``);
    if (isNaN(args[0])) return sendError(`<:xmark:314349398824058880> **Usage:** \`*remove <Queue Number>\``);
    if (queue.songs.length == 1) return sendError("<:xmark:314349398824058880> **The Queue Is Only ${queue.songs.length} Songs Long!**",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`<:xmark:314349398824058880> **The Queue Is Only ${queue.songs.length} Songs Long!**`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    sendError(`**Removed:** **\`${song[0].title}\`** **From The Queue.**`,queue.textChannel).catch(console.error);
                   message.react("<a:water_green_Okay:825929495164223528>")
} catch (error) {
        return sendError(`<:xmark:314349398824058880> **An Unexpected Error Occurred.**\nPossible Type: ${error}`, message.channel);
      }
  },
};