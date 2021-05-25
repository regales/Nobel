const welcomeModel = require("../../models/welcome")

module.exports = {
    name: "setwelcome",
    run: async (client, message, args) => {
    const data = await welcomeModel.findOne({
        GuildID: message.guild.id
    });
    let permission = message.member.hasPermission("ADMINISTRATOR");

    if(!permission) return message.channel.send("<:xmark:314349398824058880> Sorry you need `ADMINISTRATOR` permissions!")

    if (!args[0]) return message.channel.send('You must mention a **CHANNEL**!');


    if (data) {
        await welcomeModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`The welcome channel is set to **\`${args[0]}\`**`);

        let newData = new welcomeModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`The welcome channel is set to **\`${args[0]}\`**`);

        let newData = new welcomeModel({
            ChannelID: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}
}