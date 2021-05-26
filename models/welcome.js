const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    guildId: String,
    channelId: String
})

module.exports = mongoose.model('welcomes', Schema)