module.exports = async (client, message) => {
    const prefix = require("../models/prefix");
    const default_prefix = "*";
    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    if (message.author.bot) return;
  

    if(data) {
        const prefix = data.Prefix;
  

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (message.content.indexOf(prefix) !== 0) return;

        const cmd = client.commands.get(command);
        if (!cmd) return 

        cmd.run(client, message, args);
    } else if (!data) {

        const prefix = "*";
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (message.content.indexOf(prefix) !== 0) return;

        const cmd = client.commands.get(command);
        if (!cmd) return 

        cmd.run(client, message, args);

        
    }
}