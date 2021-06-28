const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "skipto",
  aliases: ['jump'],
  description: "Jumps to a certain music in the queue",
  usage: '<queue number>',

  run: async(client, message, args) => {
    if (!args.length || isNaN(args[0]))
      return message.channel.send({
                        embed: {
                            color: "#5539cc",
                            description: `<:xmark:848019597907329085> **Usage:** **\`*skipto <number>\`**`
                        }
   
                   }).catch(console.error);
        

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("<:xmark:848019597907329085> **There Is No Queue.**",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`<:xmark:848019597907329085> **The Queue Is Only ${queue.songs.length} Songs Long!**`,message.channel).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
     try{
    queue.connection.dispatcher.end();
      }catch (error) {
        queue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
       return sendError(`<:xmark:848019597907329085> **The Player Has Stopped And The Queue Has Been Cleared:** ${error}`, message.channel);
      }
    
    queue.textChannel.send({
                        embed: {
                            color: "GREEN",
                            description: `${message.author} ⏭ **Skipped \`${args[0] - 1}\` Songs**`
                        }
   
                   }).catch(console.error);
                   message.react("<a:water_green_Okay:825929495164223528>")

  },
};