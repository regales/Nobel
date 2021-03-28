const moment = require('moment');
const Discord = require('discord.js');
const DEVICES = {
    web: "🌐",
    desktop: "💻",
    mobile: "📱"
};
 
const BADGES = {
    DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

const STATUSES = {
    "online": `  <:online:825069525170520135>`,
    "idle": `  <:idle:825069524201373707>`,
    "dnd": `  <:dnd:825069525044428810>`,
    "streaming": `  <:streaming:825070918313312286>`,
    "offline": `  <:offline:825069524574535762>`
};
 

 
module.exports = {
    
    run: async(client, message, args) => {
        const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;
 
        const trimArray = (arr, maxLen = 10) => {
            if (arr.length > maxLen) {
                const len = arr.length - maxLen;
                arr = arr.slice(0, maxLen);
                arr.push(` and ${len} more roles...`);
            }
            return arr;
        };
 
        const upperCase = str => {
            return str.toUpperCase().replace(/_/g, " ").split(" ")
                .join(" ");
        };
 
        const titleCase = str => {
            return str.toLowerCase().split(" ")
                .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
                .join(" ");
        };
 
        let roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
 
        let userFlags;
        if (member.user.flags === null) {
            userFlags = '';
        } else {
            userFlags = member.user.flags.toArray();
        }
        if (member.user.presence.status == "offline") { userDevice = ""; } else if (!member.user.bot) { userDevice = DEVICES[Object.keys(member.user.presence.clientStatus)[0]]; } else if (member.user.bot) { userDevice = ""; }
        if (!member.user.bot) { userInfo = "Not"; } else if (member.user.bot) { userInfo = "Yes"; }
        if (member.user.presence.status == "dnd") { status = "DND"; } else status = titleCase(member.user.presence.status);
        if (roles.length < 10) {
            roles = roles.join(", ");
        } else if (roles.length > 10) {
            roles = trimArray(roles).join(", ");
        }
        if (roles.length === 0) {
            roles = "None";
        }
 
        let hasNitro;
        if (member.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
            hasNitro = "Yes";
        } else if (!member.user.displayAvatarURL({ dynamic: true }).endsWith('.gif')) {
            hasNitro = "None";
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor(`${member.user.tag} ${userDevice}`, member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .addFields(
                { name: "**User Badges:**", value: `${userFlags.length ? userFlags.map(flag => BADGES[flag]).join("") : "None"}`, inline: false },
                { name: "**Joined Discord:**", value: `${moment(member.user.createdTimestamp).format("DD MMM YYYY")}`, inline: true },
                { name: "**Joined Server:**", value: `${moment(member.joinedAt).format("DD MMM YYYY")}`, inline: true },
                { name: "**Nickname:**", value: `${member.displayName}` || "None", inline: true },
                { name: "**Discriminator:**", value: `${member.user.discriminator}`, inline: true },
                { name: "**Bot:**", value: `${userInfo}`, inline: true },
                { name: "**Nitro:**", value: `${hasNitro}`, inline: true },
                { name: "**Status:**", value: `${status}${STATUSES[member.user.presence.status]}`, inline: true },
                { name: "**User Colour:**", value: `${upperCase(member.displayHexColor)}`, inline: true },
                { name: "**User ID:**", value: `${member.user.id}`, inline: true },
                { name: "**Highest Role:**", value: `${member.roles.highest.id === message.guild.id ? "None" : member.roles.highest}`, inline: true },
                { name: "**Roles:**", value: `${roles}` }
            )
            .setColor(`RANDOM`);
        message.channel.send(embed);
    }
 
};