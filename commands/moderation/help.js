const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const {
    readdirSync
} = require("fs");

let color = "#5539cc"

module.exports = {
    name: "help",
    aliases: ['h'],
    description: "Shows all available bot commands.",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
    run: async (client, message, args) => {
        const prefix = require("../../models/prefix");
        const data = await prefix.findOne({
            GuildID: message.guild.id
        });

        if(data) {
            const prefix = data.Prefix;

            if (!args[0]) {
                let categories = [];


                //categories to ignore
                let ignored = [
                    "owner",
                    "nsfw"
                ];

                const emo = {
                    fun: "<:d6:843041076306640896>",
                    moderation: "<:settings:843041534609850370>",
                    music: "<a:799562690129035294:848019748003643392>",
                    roleplay: "<:DPSRole:843830825044803625>",
                    image: "<:blurple_image:851465590744940594>",
                    nsfw: "<a:nsfw:847155010701492265>"

                }
            

                readdirSync("./commands").forEach((dir) => {
                    if (ignored.includes(dir.toLowerCase())) return;
                    const name = `${emo[dir.toLowerCase()]} ${dir.charAt(0).toUpperCase() + dir.substr(1).toLowerCase()}`
                    let cats = new Object();

                    cats = {
                        name: name,
                        value: `\`${prefix}help ${dir.toLowerCase()}\``,
                        inline: true
                    }


                    categories.push(cats);
                    //cots.push(dir.toLowerCase());
                });

                const embed = new MessageEmbed()
                    .setAuthor(
                        "Nobel Help",
                        "https://i.imgur.com/o3xDQbB.jpeg")
                    .setDescription(
                        `\`\`\`js\nPrefix: ${prefix}\nParameters: <> = required , [] = optional\`\`\`\n[Invite me](https://nobel.ga)\n\nTo check out a category, use command \`${prefix}help [category]\` \n\n **Categories**`
                    )
                    .addFields(categories)
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp()
                    .setThumbnail(client.user.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(color);

                return message.lineReply(embed);
            } else {
                let cots = [];
                let catts = [];

                readdirSync("./commands/").forEach((dir) => {
                    if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                    const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                        file.endsWith(".js")
                    );


                    const cmds = commands.map((command) => { 
                        let file = require(`../../commands/${dir}/${command}`);

                        if (!file.name) return "No command name.";

                        let name = file.name.replace(".js", "");

                        let des = client.commands.get(name).description;
                        let emo = client.commands.get(name).emoji;

                        let obj = {
                            cname: `${emo}  \`${name}\``,
                            des
                        }

                        return obj;
                    });

                    let dota = new Object();

                    cmds.map(co => {
                        dota = {
                            name: `${cmds.length === 0 ? "In progress." : co.cname}`,
                            value: co.des ? co.des : 'No Description',
                            inline: true,
                        }
                        catts.push(dota)
                    });

                    cots.push(dir.toLowerCase());
                });

                console.log(cots);

                const command =
                    client.commands.get(args[0].toLowerCase()) ||
                    client.commands.find(
                        (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                    );

                if (cots.includes(args[0].toLowerCase())) {
                    const combed = new MessageEmbed()
                        .setTitle(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} Commands`)
                        .setDescription(`Use \`${prefix}help\` followed by a command name to get more information on a command.\nFor example: \`${prefix}help ping\`.\n\n`)
                        .addFields(catts)
                        .setColor(color)

                    return message.lineReply(combed)
                }

                if (!command) {
                    const embed = new MessageEmbed()
                        .setDescription(`<:xmark:848019597907329085> **Use \`${prefix}help\` for all of my commands!**`)
                        .setColor("RED");
                    return message.lineReply(embed);
                }

                const embed = new MessageEmbed()
                    .setAuthor(
                    "Command Details",
                    "https://i.imgur.com/o3xDQbB.jpeg")
                    .addField(
                        "Command:",
                        command.name ? `\`${command.name}\`` : "No name for this command."
                    )
                    .addField(
                        "Aliases:",
                        command.aliases ?
                        `\`${command.aliases.join("` `")}\`` :
                        "No aliases for this command."
                    )
                    .addField(
                        "Usage:",
                        command.usage ?
                        `\`${prefix}${command.name} ${command.usage}\`` :
                        `\`${prefix}${command.name}\``
                    )
                    .addField(
                        "Command Description:",
                        command.description ?
                        command.description :
                        "No description for this command."
                    )
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp()
                    .setColor(color);
                return message.lineReply(embed);
            }
        
        
        }else if (!data) {
            
            const prefix = "*";

            if (!args[0]) {
                let categories = [];


                //categories to ignore
                let ignored = [
                    "owner",
                    "nsfw"
                ];

                const emo = {
                    fun: "<:d6:843041076306640896>",
                    moderation: "<:settings:843041534609850370>",
                    music: "<a:799562690129035294:848019748003643392>",
                    roleplay: "<:DPSRole:843830825044803625>",
                    image: "<:blurple_image:851465590744940594>",
                    nsfw: "<a:nsfw:847155010701492265>"

                }

                readdirSync("./commands").forEach((dir) => {
                    if (ignored.includes(dir.toLowerCase())) return;
                    const name = `${emo[dir.toLowerCase()]} ${dir.charAt(0).toUpperCase() + dir.substr(1).toLowerCase()}`
                    let cats = new Object();

                    cats = {
                        name: name,
                        value: `\`${prefix}help ${dir.toLowerCase()}\``,
                        inline: true
                    }


                    categories.push(cats);
                    //cots.push(dir.toLowerCase());
                });

                const embed = new MessageEmbed()
                    .setTitle("Help Menu:")
                    .setDescription(
                        `\`\`\`js\nPrefix: ${prefix}\nParameters: <> = required, [] = optional\`\`\`\n[Invite me](https://nobel.ga)\n\nTo check out a category, use command \`${prefix}help [category]\`\n\n **Categories**`
                    )
                    .addFields(categories)
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp()
                    .setThumbnail(client.user.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(color);

                return message.lineReply(embed);
            } else {
                let cots = [];
                let catts = [];

                readdirSync("./commands/").forEach((dir) => {
                    if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                    const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                        file.endsWith(".js")
                    );


                    const cmds = commands.map((command) => { 
                        let file = require(`../../commands/${dir}/${command}`);

                        if (!file.name) return "No command name.";

                        let name = file.name.replace(".js", "");

                        let des = client.commands.get(name).description;
                        let emo = client.commands.get(name).emoji;

                        let obj = {
                            cname: `${emo}  \`${name}\``,
                            des
                        }

                        return obj;
                    });

                    let dota = new Object();

                    cmds.map(co => {
                        dota = {
                            name: `${cmds.length === 0 ? "In progress." : co.cname}`,
                            value: co.des ? co.des : 'No Description',
                            inline: true,
                        }
                        catts.push(dota)
                    });

                    cots.push(dir.toLowerCase());
                });

                console.log(cots);

                const command =
                    client.commands.get(args[0].toLowerCase()) ||
                    client.commands.find(
                        (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                    );

                if (cots.includes(args[0].toLowerCase())) {
                    const combed = new MessageEmbed()
                        .setTitle(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} Commands`)
                        .setDescription(`Use \`${prefix}help\` followed by a command name to get more information on a command.\nFor example: \`${prefix}help ping\`.\n\n`)
                        .addFields(catts)
                        .setColor(color)

                    return message.lineReply(combed)
                }

                if (!command) {
                    const embed = new MessageEmbed()
                        .setDescription(`<:xmark:848019597907329085> **Use \`${prefix}help\` for all of my commands!**`)
                        .setColor("RED");
                    return message.lineReply(embed);
                }

                const embed = new MessageEmbed()
                    .setAuthor(
                    "Command Details",
                    "https://i.imgur.com/o3xDQbB.jpeg")
                    .addField(
                        "Command:",
                        command.name ? `\`${command.name}\`` : "No name for this command."
                    )
                    .addField(
                        "Aliases:",
                        command.aliases ?
                        `\`${command.aliases.join("` `")}\`` :
                        "No aliases for this command."
                    )
                    .addField(
                        "Usage:",
                        command.usage ?
                        `\`${prefix}${command.name} ${command.usage}\`` :
                        `\`${prefix}${command.name}\``
                    )
                    .addField(
                        "Command Description:",
                        command.description ?
                        command.description :
                        "No description for this command."
                    )
                    .setFooter(
                        `Requested by ${message.author.tag}`,
                        message.author.displayAvatarURL({
                            dynamic: true
                        })
                    )
                    .setTimestamp()
                    .setColor(color);
                return message.lineReply(embed);
            }
        }
        
    },
};