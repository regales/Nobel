const Discord = require("discord.js");
const ownerid = "623553796160618517";

module.exports = {
  name: "selfdestruct",
  aliases: ['sdbye'],
  description: "Automatically Leaves From A Server",
  usage: '<->',
    
  run: async (client, message, args) => {
        if (message.author.id == ownerid) {
        
            message.guild.leave()
            .catch(err => {
                console.log(`There was an error leaving the guild: \n ${err.message}`);
            })
        }
        if(!message.author.id == ownerid) {
            return message.channel.send("<:xmark:848019597907329085> **You Are Not My Owner.**").catch(err => console.log(err));
        }
    }
}
