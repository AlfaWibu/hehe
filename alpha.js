require("./settings")
const {
    Telegraf,
    Context
} = require('telegraf')
const {
    simple
} = require("./lib/myfunc")
const fs = require('fs')
const os = require('os')
const speed = require('performance-now')

if (BOT_TOKEN == 'YOUR_TELEGRAM_BOT_TOKEN') {
    return console.log(lang.noToken)
}

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')

const bot = new Telegraf(BOT_TOKEN)
async function startalpha() {
    bot.on('callback_query', async (alpha) => {
        //console.log(alpha)
        action = alpha.callbackQuery.data.split(' ')
        args = action
        user_id = Number(action[1])
        if (alpha.callbackQuery.from.id != user_id) return alpha.answerCbQuery('Uppss... this button not for you!', {
            show_alert: true
        })
        const timestampi = speed();
        const latensii = speed() - timestampi
        const user = simple.getUserName(alpha.callbackQuery.from)
        const {
            isUrl,
            fetchJson
        } = simple
        const pushname = user.full_name;
        const username = user.username ? user.username : "zeeone_ofc";
        const isCreator = [alpha.botInfo.username, ...global.OWNER].map(v => v.replace("https://t.me/", '')).includes(user.username ? user.username : "-")
        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await alpha.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
    })
    bot.command('start', async (alpha) => {
        let user = simple.getUserName(alpha.message.from)
        await alpha.reply('Haii Aku Bisa Membantu Keseharianmu Seperti Download Video TikTok, Ig, Fb, Dll. Bot Dalam Status Pengembangan Ketik /allmenu Untuk Melihat Semua Menu Bot', {
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'YT 🎄',
                        url: "https://youtube.com/@cacachanz"
                    }, {
                        text: 'Owner',
                        url: OWNER[0]
                    }]
                ]
            }
        })
    })
    bot.on('message', async (alpha) => {
        require("./index")(alpha, bot)
    })

    bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/zeeoneofc"
        })
    })
}
startalpha()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))