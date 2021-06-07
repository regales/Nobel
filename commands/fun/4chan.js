const Discord = require("discord.js")
const https = require("https")
const prefix = "*";

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */

module.exports = {
 name: "4chan",
 
 run: async (client, message, args) => {
  try {
   var maxlength = 500
   if (!message.channel.nsfw) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: "<:xmark:848019597907329085> You can use this command only in an NSFW Channel!",
     },
    })
   }
   let chanargs = args.slice(0).join(" ")
   if (!chanargs) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: "<:xmark:848019597907329085> Please enter a board! To see all boards check `" + `${prefix}` + " 4chan boards`",
     },
    })
   }
   if (chanargs === "boards") {
    let vboards = new Discord.MessageEmbed().setColor("RANDOM").setTitle("All boards:").setTimestamp().setDescription("`a`, `b`, `c`, `d`, `e`, `f`, `g`, `gif`, `h`, `hr`, `k`, `m`, `o`, `p`, `r`, `s`, `t`, `u`, `v`, `vg`, `vr`, `w`, `wg`, `i`, `ic`, `r9k`, `s4s`, `vip`, `qa`, `cm`, `hm`, `lgbt`, `y`, `3`, `aco`, `adv`, `an`, `asp`, `bant`, `biz`, `cgl`, `ck`, `co`, `diy`, `fa`, `fit`, `gd`, `hc`, `his`, `int`, `jp`, `lit`, `mlp`, `mu`, `n`, `news`, `out`, `po`, `pol`, `qst`, `sci`, `soc`, `sp`, `tg`, `toy`, `trv`, `tv`, `vp`, `wsg`, `wsr`")
    return message.lineReply(vboards)
   }
   const boards = ["a", "b", "c", "d", "e", "f", "g", "gif", "h", "hr", "k", "m", "o", "p", "r", "s", "t", "u", "v", "vg", "vr", "w", "wg", "i", "ic", "r9k", "s4s", "vip", "qa", "cm", "hm", "lgbt", "y", "3", "aco", "adv", "an", "asp", "bant", "biz", "cgl", "ck", "co", "diy", "fa", "fit", "gd", "hc", "his", "int", "jp", "lit", "mlp", "mu", "n", "news", "out", "po", "pol", "qst", "sci", "soc", "sp", "tg", "toy", "trv", "tv", "vp", "wsg", "wsr"]
   var board = chanargs
   if (boards.indexOf(board) == -1) {
    let vb = new Discord.MessageEmbed().setColor(16734039).setDescription("<:xmark:848019597907329085> Please enter a vaild board! To see all boards check `" + `${prefix}` + " 4chan boards`")
    return message.lineReply(vb)
   }
   var board = args
   var page = Math.floor(Math.random() * 10 + 1) // page 1 to 10
   var url = "https://a.4cdn.org/" + board + "/" + page + ".json"
   https.get(url, (res) => {
    res.setEncoding("utf8")
    let body = ""
    res.on("data", (data) => {
     body += data
    })
    res.on("end", (end) => {
     body = JSON.parse(body)
     var postNr = Math.floor(Math.random() * body.threads.length)
     var imgId = body.threads[postNr].posts[0].tim
     var imgExt = body.threads[postNr].posts[0].ext
     var com = body.threads[postNr].posts[0].com
     var sub = body.threads[postNr].posts[0].sub
     if (!sub) {
      sub = "Random 4chan thread"
     }
     if (com == null) {
      com = "**No description!**"
     } else {
      /* (/A/g, "B") = replace all A's with B's */
      com = com.replace(/<br>/g, "\n")
      com = com.replace(/<span class=\"quote\">&gt;/g, ">")
      com = com.replace(/<span class=\"deadlink\">&gt;/g, ">")
      com = com.replace(/<\/span>/g, "")
      com = com.replace(/&quot/g, '"')
      com = com.replace(/&#039;/g, "'")
     }
     var thread = "https://boards.4chan.org/" + board + "/thread/"
     thread += body.threads[postNr].posts[0].no
     var imgUrl = "https://i.4cdn.org/" + board + "/"
     imgUrl += imgId + "" + imgExt
     let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("🍀 " + sub, message.guild.iconURL({ dynamic: true, format: "png" }), thread)
      .setDescription(com)
      .addField("Thread:", thread)
      .addField("Image:", imgUrl)
      .setURL(thread)
      .setTimestamp()
      .setFooter("Requested by " + `${message.author.username}` + " • Image from 4chan boards", message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }))
     if (embed.description.length >= 2048) {
      embed.description = `${embed.description.substr(0, 2045)}...`
     }
     message.lineReply(embed)
     return message.channel.send({
      files: [imgUrl],
     })
    })
   })
  } catch (err) {
   message.lineReply({
    embed: {
     color: 16734039,
     description: "Something went wrong",
    },
   })
  }
 },
}