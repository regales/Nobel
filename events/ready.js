module.exports = (client) => {
  console.log(`${client.user.username} ✅`) 
  const activities = [
    `Music Videos`,
    `*help`,
    `Support Server ====> discord.gg/ZJevrUQ46Q`
    `In ${client.guilds.cache.size} Servers`,
  ];

  let i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 5000);

}