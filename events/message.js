module.exports = (client, message) => {

    if (message.author.bot) return;
  

    if (message.content.indexOf(client.config.prefix) !== 0) return;
  

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd) return message.lineReply("<:xmark:314349398824058880> This command doesn't exist!\n\`\`Try typing [*help] for my available commands!\`\`");
  
    cmd.run(client, message, args);
  };