const Discord = require("discord.js");
const lineReply = require('discord-reply');
const fs = require("fs");
const weather = require("weather-js");
const recon = require('reconlx');


const client = new Discord.Client();
const got = require('got');
const config = require("./config.json");
client.config = config;
client.queue = new Map()
prefix = config.prefix

client.on('message', async message => {
    
  if (/<@!820939172491427840>|<@820939172491427840>/.test(message.content)) {
      const embed = new Discord.MessageEmbed()
          .setTitle("You Pinged Me! <a:WavingBlob:825931440402595840>")
          .addFields(
            { name: '**Prefix**', value: '\`My Prefix Is *\`' },
            
            { name: '**Help Page**', value: '\`To Learn How To Use Me, Type *help\`', inline: true },
            
          )
          .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM')
          .setThumbnail('https://cdn.discordapp.com/avatars/820939172491427840/f174bcc62d9e2665806d2b63236c25fb.webp')
      message.channel.send(embed)
  }
},

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
}))

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('message', async message => { 
  if(message.channel.name == 'nb-chat' && !message.author.bot){
    client.guilds.cache.forEach(guild=>{
      if(guild == message.guild) return;
      let channel = guild.channels.cache.find(ch=>ch.name === 'nb-chat');
      if(!channel) return;
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag +" ", message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(message.content)
      .setFooter("Server: " + message.guild.name)
      .setTimestamp()
      channel.send(embed)
    })
  }
})

 const AutoPoster = require('topgg-autoposter');
 const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMDkzOTE3MjQ5MTQyNzg0MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4NDc0NTkzfQ.xUA47WBV0GHYK3cWDWHCTsbjoVswD-dIEQRF_ARz8GQ', client);

client.on('guildCreate', guild => {
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(
    "ռօɮɛʟ",
    "https://i.pinimg.com/236x/d5/e2/c5/d5e2c5c0315e6b1f3cc30189f9dccd82.jpg")
  .setTitle(`Hey There, I'm Nobel. \n\`Thanks For Inviting Me To ${guild.name}!\` <a:WavingBlob:825931440402595840>`)
  
  .addFields(
    { name: '**Prefix**', value: '\`\`\`My Prefix Is *\`\`\`' },
          
    { name: '**Help Page**', value: '\`\`\`For All Of My Commands, Type *help\`\`\`', inline: true },
          
  )
  .setThumbnail(guild.iconURL({ dynamic: true }))
  .setTimestamp()
  .setColor('PURPLE')
  
guild.systemChannel.send(embed) 
});
client.login(process.env.TOKEN)
