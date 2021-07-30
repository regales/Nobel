const Discord = require("discord.js");
const ownerid = "623553796160618517";

module.exports = {
  name: "selfdestruct",
    
  run: async (client, message, args) => {
        if (message.author.id == ownerid) {
        
            message.guild.leave()
            .catch(err => {
                console.log(`There was an error leaving the guild: \n ${err.message}`);
            })
        }
    }
}
