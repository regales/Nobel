const prefixModel = require("../../models/prefix")

module.exports = {
    name: "setprefix",
    run: async (client, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    let permission = message.member.hasPermission("ADMINISTRATOR");

    if(!permission) return message.channel.send("<:xmark:314349398824058880> Sorry you need `ADMINISTRATOR` permissions!")

    if (!args[0]) return message.channel.send('You must provide a **new prefix**!');

    if (args[0].length > 5) return message.channel.send('Your new prefix must be under \`5\` characters!')

    if (data) {
        await prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}
}