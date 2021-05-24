const Discord = require("discord.js");
const lineReply = require('discord-reply');
const fs = require("fs");
const weather = require("weather-js");
const recon = require('reconlx');
const mongoose = require("mongoose");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const db =require("quick.db"); 
const client = new Discord.Client();
const got = require('got');
const config = require("./config.json");
client.config = config;
client.queue = new Map()
pb = config.pb
prefix = config.prefix
client.snipes = new Discord.Collection()

client.on('message', async message => {
    
  if(message.author.bot) {

  } else if (/<@!820939172491427840>|<@820939172491427840>/.test(message.content)) {
      const embed = new Discord.MessageEmbed()
          .setTitle("You Pinged Me! <a:WavingBlob:825931440402595840>")
          .addFields(
            { name: '**Prefix**', value: `\`My Prefix Is ${prefix}\`` },
            
            { name: '**Help Page**', value: `\`To Learn How To Use Me, Type ${prefix}help\``, inline: true },
            
          )
          .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM')
          .setThumbnail('https://i.imgur.com/o3xDQbB.jpeg')
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
    "https://i.imgur.com/o3xDQbB.jpeg")
  .setTitle(`Hey There, I'm Nobel. \n\`Thanks For Inviting Me To ${guild.name}!\` <a:WavingBlob:825931440402595840>`)
  
  .addFields(
    { name: '**Prefix**', value: `\`\`\`My Prefix Is ${prefix}\`\`\`` },
          
    { name: '**Help Page**', value: `\`\`\`For All Of My Commands, Type ${prefix}help\`\`\``, inline: true },
          
  )
  .setThumbnail(guild.iconURL({ dynamic: true }))
  .setTimestamp()
  .setColor('PURPLE')
  
guild.systemChannel.send(embed) 
});

client.on("guildMemberAdd", async member => {

  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {

    return;

  }

  

   let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })

   const attachment = new Discord.MessageAttachment(

    data,

    "welcome-image.png"

  );
  client.channels.cache.get(chx).send(`**Welcome to ${member.guild.name}, ${member.user}**\n**You are our ${member.guild.memberCount}th Member**.\n**Enjoy your time here!**` ,attachment);

});
client.on("messageDelete", (message) => {
  client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author.tag,
      member: message.member,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})
  
client.login(process.env.TOKEN)
