const mongoose = require('mongoose');

const WelcomeSchema = new mongoose.Schema({
    
    ChannelID: String,
    
    GuildID: String
});

const MessageModel = module.exports = mongoose.model('welcomes', WelcomeSchema);