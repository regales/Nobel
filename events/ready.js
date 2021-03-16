module.exports = (client) => {
  console.log(`${client.user.username} ✅`)

  setInterval(function () {
    // bot activity
    client.user.setActivity('*help', { type: 'WATCHINNG' })

    client.user.setActivity('Live Music', { type: 'LISTENING' })
  }, 5000)
}

