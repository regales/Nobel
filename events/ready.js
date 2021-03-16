module.exports = (client) => {
  console.log(`${client.user.username} ✅`)
  setInterval(function () {
    client.user.setActivity('Music Videos', { type: 'WATCHING' })
    client.user.setActivity('*help', { type: 'LISTENING' })
  }, 3000)
}