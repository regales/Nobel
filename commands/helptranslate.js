const recon = require('reconlx');
const { MessageEmbed } = require("discord.js");
const ReactionPages = recon.ReactionPages;
const Discord = require("discord.js");

module.exports = {
    run: async(client, message, args) => {
        const embed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:music:738887962754023445>\`\`\`Help Page For Translation\`\`\`<a:music:738887962754023445>')
            .setDescription(`
            ***Use***\`*translate <language> <text>\`

            **af**: 'Afrikaans',
            **sq**: 'Albanian',
            **am**: 'Amharic',
            **ar**: 'Arabic',
            **hy**: 'Armenian',
            **az**: 'Azerbaijani',
            **eu**: 'Basque',
            **be**: 'Belarusian',
            **bn**: 'Bengali',
            **bs**: 'Bosnian',
            **bg**: 'Bulgarian',
            **ca**: 'Catalan',
            **ceb**: 'Cebuano',
            **ny**: 'Chichewa',
            **zh-cn**: 'Chinese Simplified',
            **zh-tw**: 'Chinese Traditional',
            **co**: 'Corsican',
            **hr**: 'Croatian',
            **cs**: 'Czech',
            **da**: 'Danish',
            **nl**: 'Dutch',
            **en**: 'English',
            **eo**: 'Esperanto',
            **et**: 'Estonian',
            **tl**: 'Filipino',
            **fi**: 'Finnish',
            **fr**: 'French',
            **fy**: 'Frisian',
            `)
            
     
    
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        
        
        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:music:738887962754023445>\`\`\`Help Page For Translation\`\`\`<a:music:738887962754023445>')
            .setDescription(`
            ***Use***\`*translate <language> <text>\`

            **gl**: 'Galician',
            **ka**: 'Georgian',
            **de**: 'German',
            **el**: 'Greek',
            **gu**: 'Gujarati',
            **ht**: 'Haitian Creole',
            **ha**: 'Hausa',
            **haw**: 'Hawaiian',
            **iw**: 'Hebrew',
            **hi**: 'Hindi',
            **hmn**: 'Hmong',
            **hu**: 'Hungarian',
            **is**: 'Icelandic',
            **ig**: 'Igbo',
            **id**: 'Indonesian',
            **ga**: 'Irish',
            **it**: 'Italian',
            **ja**: 'Japanese',
            **jw**: 'Javanese',
            **kn**: 'Kannada',
            **kk**: 'Kazakh',
            **km**: 'Khmer',
            **ko**: 'Korean',
            **ku**: 'Kurdish (Kurmanji)'`)

            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        const embed3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:music:738887962754023445>\`\`\`Help Page For Translation\`\`\`<a:music:738887962754023445>')
            .setDescription(`
            ***Use***\`*translate <language> <text>\`

            **ky**: 'Kyrgyz',
            **lo**: 'Lao',
            **la**: 'Latin',
            **lv**: 'Latvian',
            **lt**: 'Lithuanian',
            **lb**: 'Luxembourgish',
            **mk**: 'Macedonian',
            **mg**: 'Malagasy',
            **ms**: 'Malay',
            **ml**: 'Malayalam',
            **mt**: 'Maltese',
            **mi**: 'Maori',
            **mr**: 'Marathi',
            **mn**: 'Mongolian',
            **my**: 'Myanmar (Burmese)',
            **ne**: 'Nepali',
            **no**: 'Norwegian',
            **ps**: 'Pashto',
            **fa**: 'Persian',
            **pl**: 'Polish',
            **pt**: 'Portuguese',
            **pa**: 'Punjabi',
            **ro**: 'Romanian',
            **ru**: 'Russian',
            **sm**: 'Samoan',
            **gd**: 'Scots Gaelic',
            **sr**: 'Serbian',
            **st**: 'Sesotho',
            **sn**: 'Shona',
            **sd**: 'Sindhi'`)

            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        const embed4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('<a:music:738887962754023445>\`\`\`Help Page For Translation\`\`\`<a:music:738887962754023445>')
            .setDescription(`
            ***Use***\`*translate <language> <text>\`

            **si**: 'Sinhala',
            **sk**: 'Slovak',
            **sl**: 'Slovenian',
            **so**: 'Somali',
            **es**: 'Spanish',
            **su**: 'Sundanese',
            **sw**: 'Swahili',
            **sv**: 'Swedish',
            **tg**: 'Tajik',
            **ta**: 'Tamil',
            **te**: 'Telugu',
            **th**: 'Thai',
            **tr**: 'Turkish',
            **uk**: 'Ukrainian',
            **ur**: 'Urdu',
            ** uz**: 'Uzbek',
            **vi**: 'Vietnamese',
            **cy**: 'Welsh',
            **xh**: 'Xhosa',
            **yi**: 'Yiddish',
            **yo**: 'Yoruba',
            **zu**: 'Zulu'`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        const pages = [embed1, embed2, embed3, embed4];
        const emojis = ['◀', '▶'];
    
        ReactionPages(message, pages, true, emojis);
        message.react('<a:water_green_Okay:825929495164223528>')
    }
    
}

