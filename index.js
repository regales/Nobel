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
const prefix = require("./models/prefix");
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
require('discord-buttons')(client)
client.config = config;
client.queue = new Map();
client.snipes = new Discord.Collection();
client.editedMessage = new Discord.Collection();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
default_prefix = config.prefix


// events loader
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


// command loader
const { readdirSync } = require("fs");

readdirSync('./commands').forEach(dir => {
  
    const commandFiles = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
    const command = require(`./commands/${dir}/${file}`);
    console.log(`Attempting to load command ${command.name}`);
    client.commands.set(command.name, command)
    
    }})

// mention bot to get info
client.on('message',  async message  => {
  const data = await prefix.findOne({
    GuildID: message.guild.id
  
  });
    
  if(data) {
    const prefix = data.Prefix;
    if(message.author.bot) {


    } else if (/<@!820939172491427840>|<@820939172491427840>/.test(message.content)) {
        const embed = new Discord.MessageEmbed()
          .setTitle("You Pinged Me! <a:WavingBlob:825931440402595840>")
          .addFields(
            { name: '**Prefix**', value: `\`My Custom Prefix In This Server Is ${prefix}\`` },

            { name: '**Default Prefix**', value: `\`My Default Prefix Is *\``},
            
            { name: '**Help Page**', value: `\`To Learn How To Use Me, Type ${prefix}help\``, inline: true },
            
            )
          .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM')
          .setThumbnail('https://i.imgur.com/o3xDQbB.jpeg')
          message.channel.send(embed)
  }

} else if (!data) {

    const prefix = "*";
    if(message.author.bot) {


    } else if (/<@!820939172491427840>|<@820939172491427840>/.test(message.content)) {
        const embed = new Discord.MessageEmbed()
          .setTitle("You Pinged Me! <a:WavingBlob:825931440402595840>")
          .addFields(
            { name: '**Prefix**', value: `\`My Custom Prefix In This Server Is ${prefix}\`` },

            { name: '**Default Prefix**', value: `\`My Default Prefix Is *\``},
            
            { name: '**Help Page**', value: `\`To Learn How To Use Me, Type ${prefix}help\``, inline: true },
            
            )
          .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM')
          .setThumbnail('https://i.imgur.com/o3xDQbB.jpeg')
          message.channel.send(embed)
    }

    
}
},


// global chat feature
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
}))

// Message when nobel joins a server
client.on('guildCreate', guild => {
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(
    "ռօɮɛʟ",
    "https://i.imgur.com/o3xDQbB.jpeg")
  .setTitle(`Hey There, I'm Nobel. \n\`Thanks For Inviting Me To ${guild.name}!\` <a:WavingBlob:825931440402595840>`)
  
  .addFields(
    { name: '**Prefix**', value: `\`\`\`My Prefix Is ${default_prefix}\`\`\`` },

    { name: '**Custom Prefix**', value: `\`\`\`Prefix Is Changable Via ${default_prefix}setprefix\`\`\`` },
          
    { name: '**Help Page**', value: `\`\`\`For All Of My Commands, Type ${default_prefix}help\`\`\``, inline: true },
          
  )
  .setThumbnail(guild.iconURL({ dynamic: true }))
  .setTimestamp()
  .setColor('PURPLE')
  
guild.systemChannel.send(embed) 
});


// welcome message
const WelcomeSchema = require('./models/welcome');

client.on("guildMemberAdd", async (member, guild) => {
    WelcomeSchema.findOne({ guildId: member.guild.id }, async (err, data) => {
        if(!data) return;

        const user = member.user;
        const channel = member.guild.channels.cache.get(data.channelId);
        const welcomeEmbed = new Discord.MessageEmbed()

        welcomeEmbed.setColor('PURPLE')
        welcomeEmbed.setTitle('Welcome')
        welcomeEmbed.setDescription(`<a:629155002505756672:846970724836442142>**Welcome ${member.user.username}, to ${member.guild.name}**\n<a:629155002505756672:846970724836442142>**You are the ${member.guild.memberCount}th member to join ${member.guild.name}!**\n<a:629155002505756672:846970724836442142>**Enjoy your time here!** `)
        welcomeEmbed.setImage('https://raw.githubusercontent.com/regales/Nobel/main/assets/gif/welcome.gif')

        channel.send(welcomeEmbed);
    })
})



// snipe command
client.on("messageDelete", (message) => {
  client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author.tag,
      member: message.member,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})

//editsnipe command
client.on("messageUpdate", message => {
  client.editedMessage.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
})
})

// utility area

// top.gg api and info poster
const AutoPoster = require('topgg-autoposter');
const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMDkzOTE3MjQ5MTQyNzg0MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4NDc0NTkzfQ.xUA47WBV0GHYK3cWDWHCTsbjoVswD-dIEQRF_ARz8GQ', client);

// connecting to mongoose
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// connect bot token
client.login(process.env.TOKEN)
