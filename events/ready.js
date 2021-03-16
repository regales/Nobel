module.exports = (client) => {
  console.log(`${client.user.username} ✅`)

  console.log(`${bot.user.username} is online`)
  setInterval(function() {
    // bot activity
    client.user.setActivity('Live Music', { type: 'LISTENING' })

    client.user.setActivity('Live Music', { type: 'LISTENING' })

    client.user.setActivity('Over *help', { type: 'WATCHING' })

  },10000)
}

