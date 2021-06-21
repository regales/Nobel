const { TicTacToe } = require('weky');

module.exports = {
    name : 'tictactoe',
    aliases: ['ttt'],
    usage: '<user>',
    description: 'Plays Tic Tac Toe with another user',
    run: async(client, message, args) => {
        const opponent = message.mentions.users.first();
        if (!opponent) return message.channel.send(`<:xmark:848019597907329085> **Please mention who you want to challenge at tictactoe.**`);

        const game = new TicTacToe({
            message: message,
            opponent: opponent, //opponent
            xColor: 'red', //x's color
            oColor: 'blurple', //zero's color
            xEmoji: '❌',  //the x emoji
            oEmoji: '0️⃣' ,//the zero emoji
        })
        game.start()//start da game

    }
}
