module.exports = (client, message) => {

    if (message.author.bot) return;
  

    if (message.content.indexOf(client.config.prefix) !== 0) return;
  

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    const aliases = client.commands.find(x => x.info.aliases.includes(command))

    if(cmd){
      cmd.run(client, message, args);
    }else if(aliases){
      aliases.run(client, message, args);
    }else return
  };