module.exports = (client) => {
  console.log(`${client.user.username} ✅`) 
  const activities = [
    `Music Videos`,
    `*help`,
    `Support Server ====> discord.gg/ZJevrUQ46Q`
  ];

  let i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 5000);

}