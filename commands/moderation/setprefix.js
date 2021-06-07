const prefixModel = require("../../models/prefix")

module.exports = {
    name: "setprefix",
    run: async (client, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    let permission = message.member.hasPermission("ADMINISTRATOR");

    if(!permission) return message.channel.send("<:xmark:848019597907329085> Sorry you need `ADMINISTRATOR` permissions!")

    if (!args[0]) return message.channel.send('<:xmark:848019597907329085> You must provide a **New Prefix**!');

    if (args[0].length > 5) return message.channel.send('<:xmark:848019597907329085> Your new prefix must be under \`5\` characters!')

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