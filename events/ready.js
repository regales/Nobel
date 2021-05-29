module.exports = (client) => {
  console.log(`${client.user.username} ✅`) 
  const activities = [
    `@Nobel *help`,
    `@Nobel *help`,
    `In ${client.guilds.cache.size} Servers`,
    `Support Server ====> discord.gg/ZJevrUQ46Q`
  ];
  
  let i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 20000);
  

}