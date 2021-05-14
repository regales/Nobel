const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["goaway", "disconnect", "dc"],
        description: "Leave The Voice Channel!",
        usage: "Leave",
    },

    run: async(client, message, args) => {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("<:xmark:314349398824058880> You Should Join A VC First Before Using This Command!", message.channel);
        if (!message.guild.me.voice.channel) return sendError("<:xmark:314349398824058880> I Am Not In Any Voice Channel!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("<a:loading_plus:675395739949727774> Trying To Leave The Voice Channel", message.channel);
        }

        const Embed = new MessageEmbed()
            .setColor("PURPLE")
            .setDescription("<a:water_green_Okay:825929495164223528> I Left The VC.")

        return message.channel.send(Embed).catch(() => message.channel.send("<a:water_green_Okay:825929495164223528> Left The Voice Channel"));
    },
};