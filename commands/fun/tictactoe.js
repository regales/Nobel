const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    run: async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('<:xmark:314349398824058880> Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}