module.exports = (client) => {
    console.log('Im alive as ' + client.user.tag)
    setInterval(function () {
        // bot activity
        client.user.setActivity('#help', { type: 'LISTENING' })
    
        client.user.setActivity('Coding Tutorials', { type: 'WATCHING' })
      }, 1000)
}