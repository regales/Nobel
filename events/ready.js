module.exports = (client) => {
  console.log(`${client.user.username} ✅`) 
  const activities = [
    `*help`,
  ];
  
  let i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'LISTENING' }), 20000);
  

}
