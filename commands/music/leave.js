const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
    name: "leave",
    aliases: ['lv'],
    description: "Leaves a voice channel",
    usage: '',

    run: async(client, message, args) => {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("<:xmark:848019597907329085> **You Should Join A VC First Before Using This Command!**", message.channel);
        if (!message.guild.me.voice.channel) return sendError("<:xmark:848019597907329085> **I Am Not In Any Voice Channel!**", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("<a:loading_plus:675395739949727774> **Trying To Leave The Voice Channel**", message.channel);
        }

        const Embed = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle("Success")
        .setDescription("<a:655682046873567253:843036646915440660>  **Left The Voice Channel, Thanks For Using Me!**")
        .setTimestamp();
        return message.channel.send(Embed).catch(() => message.channel.send("<a:655682046873567253:843036646915440660> **Left The Voice Channel**"));
    },
};