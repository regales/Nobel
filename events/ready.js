module.exports = (client) => {
  console.log('Im alive as ' + client.user.tag)
  setInterval(function () {
      // bot activity
      client.user.setActivity('#help | codes', { type: 'LISTENING' })

      client.user.setActivity('Live Music',{
        type: 'STREAMING',
        url: 'https://www.twitch.tv/chillhopmusic'
      })
    }, 2000)
}