const { Snake } = require('weky');

module.exports = {
    name: "snake",
    aliases: ['snake'],
    usage: '',
    description: 'Plays a game of nokia snake',
    run: async (client, message, args) => {
        new Snake({
            message: message,
            embed: {
            title: '🐍 **Snake**', //embed title
            color: "PURPLE", //embed color
            gameOverTitle: "<:xmark:848019597907329085> **Game Over**", //game over embed title
            },
            emojis: {
              empty: '⬛', //zone emoji
              snakeBody: '♿', //snake
              food: ':hamburger:', //food emoji
              //control
              up: '⬆️', 
              right: '⬅️',
              down: '⬇️',
              left: '➡️',
              },
            }).start()
    }
}
