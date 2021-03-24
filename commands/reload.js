const glob = require("glob");


module.exports = {
    name: "reload",
    
    run: async(client, message, args) => {
        if (message.author.id !== "623553796160618517") return message.channel.send("Unknown Command.");
        client.commands.sweep(() => true)
        glob(`${__dirname}/**/*.js`, async (err, filePaths) => {
            filePaths.forEach((file) => {
                delete require.cache[require.resolve(file)];

                const pull = require(file);

                if (pull.name) {
                    client.commands.set(pull.name, pull);
                }
                if (pull.aliases && Array.isArray(pull.aliases)) {
                    pull.aliases.forEach((alias) => {
                        client.aliases.set(alias, pull.name);
                    });
                }
            });
            message.channel.send('Reloaded commands!')
            
        });
    },
};