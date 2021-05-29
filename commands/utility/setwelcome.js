const Discord = require('discord.js');
const Schema = require('../../models/welcome');
const sendError = require("../../util/error")

module.exports = {
    name: "setwelcome",

    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return sendError(`<:xmark:848019597907329085> **You require \`ADMINSTRATOR\` permissions**`, message.channel);

        const channel = message.mentions.channels.first();
        if(!channel) return sendError("<:xmark:848019597907329085> **Please specify a channel you would like to be your welcome channel!**", message.channel);

        Schema.findOne({ guildId: message.guild.id }, async (err, data) => {
            if (data){
                data.channelId = channel.id;
                data.save();
            } else {
                new Schema({
                    guildId: message.guild.id,
                    channelId: channel.id,
                }).save();
            }
            sendError(`**New welcome channel is now set as: \`${channel}\`!**`, message.channel);
        })
    }
}