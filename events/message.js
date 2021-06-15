const cooldowns = new Map();
const Discord = require("discord.js");
module.exports = async (client, message) => {
    const prefix = require("../models/prefix");
    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    if (message.author.bot) return;
  

    if(data) {
        const prefix = data.Prefix;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (message.content.indexOf(prefix) !== 0) return;

        const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
        if (!cmd) return 

        if (cmd) 
        if(!cooldowns.has(cmd.name)){
            cooldowns.set(cmd.name, new Discord.Collection());
        }
    
        const current_time = Date.now();
        const time_stamps = cooldowns.get(cmd.name);
        const cooldown_amount = (cmd.cooldown) * 1000;
    
        //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
        if(time_stamps.has(message.author.id)){
            const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
    
            if(current_time < expiration_time){
                const time_left = (expiration_time - current_time) / 1000;

                if(time_left.toFixed(1) >= 3600){
                    let hour = (time_left.toFixed(1) / 3600).toLocaleString();
                    if(hour.includes('.')) hour = (hour.split('.'))[0]
                    const waitembedhour = new Discord.MessageEmbed ()
                        .setTitle('<:830448708272914493:854340917448146955>  **Lets Slow It Down**')
                        .setDescription(`Please wait **${hour.toLocaleString()}** more hour(s) before using this command!`)
                        .setColor('RED')
                    return message.lineReply(waitembedhour)
                }
                if(time_left.toFixed(1) >= 60) {
                    let minute = (time_left.toFixed(1) / 60).toLowerCase();
                    if(minute.includes('.')) minute = (minute.split('.'))[0]
                    const waitembedmin = new Discord.MessageEmbed ()
                        .setTitle('<:830448708272914493:854340917448146955>  **Lets Slow It Down**')
                        .setDescription(`Please wait **${minute}** more minute(s) before using this command!`)
                        .setColor('RED')
                    return message.lineReply(waitembedmin)
                }
                let seconds = (time_left.toFixed(1)).toLocaleString();
                if(seconds.includes('.')) seconds = (seconds.split('.'))[0]
                const waitembedsec = new Discord.MessageEmbed ()
                    .setTitle('<:830448708272914493:854340917448146955>  **Lets Slow It Down**')
                    .setDescription(`Please wait **${seconds}** more second(s) before using this command!`)
                    .setColor('RED')
                return message.lineReply(waitembedsec)
    
                
    
                
            }
        }
    
        //If the author's id is not in time_stamps then add them with the current time.
        time_stamps.set(message.author.id, current_time);
        //Delete the user's id once the cooldown is over.
        setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
        

        cmd.run(client, message, args);
    } else if (!data) {

        const prefix = "*";
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (message.content.indexOf(prefix) !== 0) return;

        const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
        if (!cmd) return 

        if (cmd) 
        if(!cooldowns.has(cmd.name)){
            cooldowns.set(cmd.name, new Discord.Collection());
        }
    
        const current_time = Date.now();
        const time_stamps = cooldowns.get(cmd.name);
        const cooldown_amount = (cmd.cooldown) * 1000;
    
        //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
        if(time_stamps.has(message.author.id)){
            const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
    
            if(current_time < expiration_time){
                const time_left = (expiration_time - current_time) / 1000;

                if(time_left.toFixed(1) >= 3600){
                    let hour = (time_left.toFixed(1) / 3600).toLocaleString();
                    if(hour.includes('.')) hour = (hour.split('.'))[0]
                    const waitembedhour = new Discord.MessageEmbed ()
                        .setTitle('<:830448708272914493:854340917448146955>  **Lets Slow It Down**')
                        .setDescription(`Please wait **${hour.toLocaleString()}** more hour(s) before using this command!`)
                        .setColor('RED')
                    return message.lineReply(waitembedhour)
                }
                if(time_left.toFixed(1) >= 60) {
                    let minute = (time_left.toFixed(1) / 60).toLowerCase();
                    if(minute.includes('.')) minute = (minute.split('.'))[0]
                    const waitembedmin = new Discord.MessageEmbed ()
                        .setTitle('<:830448708272914493:854340917448146955>  **Lets Slow It Down**')
                        .setDescription(`Please wait **${minute}** more minute(s) before using this command!`)
                        .setColor('RED')
                    return message.lineReply(waitembedmin)
                }
                let seconds = (time_left.toFixed(1)).toLocaleString();
                if(seconds.includes('.')) seconds = (seconds.split('.'))[0]
                const waitembedsec = new Discord.MessageEmbed ()
                    .setTitle('<:830448708272914493:854340917448146955>  **Lets Slow It Down**')
                    .setDescription(`Please wait **${seconds}** more second(s) before using this command!`)
                    .setColor('RED')
                return message.lineReply(waitembedsec)
            }
        }
    
        //If the author's id is not in time_stamps then add them with the current time.
        time_stamps.set(message.author.id, current_time);
        //Delete the user's id once the cooldown is over.
        setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

        cmd.run(client, message, args);

        
    }
}