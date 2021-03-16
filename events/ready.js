module.exports = (client) => {
  console.log('Im alive as ' + client.user.tag)
  setInterval(function () {
      
    

    client.user.setActivity("Live Music", {
      type: "STREAMING",
      url: "https://www.twitch.tv/chillhopmusic"
    });

    client.user.setActivity('*help', { type: 'LISTENING' })
  }, 10000)
}