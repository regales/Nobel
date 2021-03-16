var fortunes = [
  "yes",
  "no",
  "maybe",
  "dont know, try again"
];

exports.run = (bot, msg, params) => {

  if(!params[0]){
    return msg.reply(":x: " + "| Please Enter A Question You Would Like Answered")
  }
  if (params[0]) msg.reply(fortunes[Math.floor(Math.random() * fortunes.length)]);
  else msg.reply(":x: " + "| I Wasnt Able To Read That :(");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ball'],
  permLevel: 0
};


