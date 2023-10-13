require("./settings")
const {
    Telegraf,
    Context
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const os = require('os')
const simi = require('chats-simsimi')
const { exec, spawn, execSync } = require('child_process')
const speed = require('performance-now')
const util = require('util')
const moment = require('moment-timezone')
const yts = require('ytsearch.js')
const ytdl = require('ytdl-core')
const { sizeFormatter } = require('human-readable')
const { onGoing, BatchAnimeS, quotesanime, pornovid, hentaivid, WibuDl, xnxxs, xnxxdl, tikhd, WibuSearch, BokepRandom, OtakuS, tikcd, ighd, pin, ytplay, ytvid, ytmplay, ytmpvid, fbimg, fbvid, ai, kfdl, tts, txtoimg } = require('./lib/myscrape')
const { lwdneko, foxgirl, nekos, foxgirls, ass, bdsm, bj, cum, doujin, feet, femdom, gls, hentai, net, maid, mstr, orgy, pants, pussy, skul, sucubus, tentakel, thgs, ugly, uni, yuri, zetr } = require('./lib/akaneko')
const { gpt, dalle, lexica, prodia } = require('gpti')

const {
    simple
} = require('./lib/myfunc')

module.exports = alpha = async (alpha, bot) => {
    //console.log(alpha)
    try {
        const body = alpha.message.text || alpha.message.caption || ''
        const budy = (typeof alpha.message.text == 'string' ? alpha.message.text : '')
        const {
            isUrl,
            fetchJson
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? body[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(alpha.message.from)
        const pushname = user.full_name;
        const user_id = alpha.message.from.id + " "
        const username = alpha.message.from.username ? alpha.message.from.username : "zeeone_ofc";
        const isCreator = OWNER[0].replace("https://t.me/", '') == alpha.update.message.from.username
        const from = alpha.message.chat.id

        const isGroup = alpha.chat.type.includes('group')
        const groupName = isGroup ? alpha.chat.title : ''
        const isImage = alpha.message.hasOwnProperty('photo')
        const isVideo = alpha.message.hasOwnProperty('video')
        const isAudio = alpha.message.hasOwnProperty('audio')
        const isSticker = alpha.message.hasOwnProperty('sticker')
        const isContact = alpha.message.hasOwnProperty('contact')
        const isLocation = alpha.message.hasOwnProperty('location')
        const isDocument = alpha.message.hasOwnProperty('document')
        const isAnimation = alpha.message.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const quotedMessage = alpha.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isQuoted = alpha.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi
        const date = new Date()
        const waktu = date.getTime()
        const detik = date.getSeconds()
        const menit = date.getMinutes()
        const jam = date.getHours()
        const hari = date.getDay()
        const tanggal = date.getDate()
        const bulan = date.getMonth()
        const tahun = date.getFullYear()
    
        // FUNCTION
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./index.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await alpha.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }
                global.formatp = sizeFormatter({
std: 'JEDEC', 
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
        const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        // AKHIR FUNCTION
        // WAKTU
        moment.tz.setDefault("Asia/Jakarta").locale("id")
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        // MESSAGE
        const b = '`'
        const wait = `${b}Wait . . . ${b}`
        const erorcuy = `_invalid ${q ? q : ''} / server down_`
        const okeh = `Result Dari: ${q ? q : command}`
        async function failed(tok) {
       await fetch(`https://api.telegram.org/bot6483981163:AAF9hMhavGJNB86Cdab9Cy8O2ZUCXuj5-xE/sendMessage?text=${tok}&chat_id=${alpha.chat.id}`, ({ method: 'POST' })).catch((e) => { reply(e) })
        }
        // AKHIR MESSAGE
        let dnew = new Date(new Date + 3600000)
                let week = dnew.toLocaleDateString('en', {
                    weekday: 'long'
                })
                let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
                let oke = dnew.toLocaleDateString('en', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })
                let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }).format(dnew)
        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'
        // LAIN LAIN
    const atosim = JSON.parse(fs.readFileSync('./lib/db/simi.json'));
const AutoSim = atosim.includes(from) ? true : false
const ai = JSON.parse(fs.readFileSync('./lib/db/ai.json'));
const AutoAi = ai.includes(from) ? true : false
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
if (AutoSim) {
if (!prefix) {
 if (alpha.message.text) {
            
            
            simi(alpha.message.text, 'id').then((ko) => {
            
               reply(ko.result)
                
            })
        }
        }
        }
if (AutoAi) {
if (!prefix) {
 if (alpha.message.text) {
 gpt({
    prompt: alpha.message.text,
    model: "gpt-4",                        
    type: "json"                            
}, (err, data) => {
    if(err != null){
        console.log(err)
    } else {
        console.log(data.gpt)
        reply(data.gpt).catch((e) => { failed(e) })
    }
})
}
        }
        }
        //push message to console
        if (alpha.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', alpha.message.chat.id))
        }
const menus = `
 ❀ _Search_ ❀
╔══════════
║↬ ${prefix}yts <text>
║↬ ${prefix}play <text>
║↬ ${prefix}otaku <text/link>
║↬ ${prefix}xnxx <text/link>
║↬ ${prefix}wibu <text/link>
╚══════════
`
let menud = `
 ❀ _Downloader_ ❀
╔══════════
║↬ ${prefix}ytmp4 <link>
║↬ ${prefix}ytmp3 <link>
║↬ ${prefix}ytvid <text>
║↬ ${prefix}play <text>
║↬ ${prefix}igvid <link>
║↬ ${prefix}igfoto <link>
║↬ ${prefix}fbvid <link>
║↬ ${prefix}fbmp3 <link>
║↬ ${prefix}fbimg <link>
║↬ ${prefix}tiktokv2/ttv2 <link>
║↬ ${prefix}tiktok/tt <link>
║↬ ${prefix}tiktokhd/tthd <link>
║↬ ${prefix}tiktokmp3/ttmp3 <link>
║↬ ${prefix}xnxx <text/link>
║↬ ${prefix}wibu <text/link>
╚══════════
`
let menuran  = `
 ❀ _Random_ ❀
╔══════════
║↬ ${prefix}storyanime
║↬ ${prefix}ongoing
║↬ ${prefix}quotes
║↬ ${prefix}bokep
║↬ ${prefix}ukhty
║↬ ${prefix}ghea
║↬ ${prefix}hijab
║↬ ${prefix}cecan
║↬ ${prefix}bocil
╚══════════
`
let mensfw = `
 ❀ _Nsfw_ ❀
╔══════════
║↬ ${prefix}ahegao
║↬ ${prefix}ass
║↬ ${prefix}bdsm
║↬ ${prefix}blowjob
║↬ ${prefix}cuckold
║↬ ${prefix}cum
║↬ ${prefix}eba
║↬ ${prefix}ero
║↬ ${prefix}femdom
║↬ ${prefix}foot
║↬ ${prefix}gangbang
║↬ ${prefix}panties
║↬ ${prefix}neko
║↬ ${prefix}neko2
║↬ ${prefix}pussy
║↬ ${prefix}zettai
║↬ ${prefix}yuri
║↬ ${prefix}masturbation
╚══════════
`
let menumain = `
 ❀ _Main_ ❀
╔══════════
║↬ ${prefix}ai <text>
║↬ ${prefix}isgd <link/text>
║↬ ${prefix}nsfw <function>
║↬ ${prefix}owner
║↬ ${prefix}sc
║↬ ${prefix}simi <text>
║↬ ${prefix}ping
║↬ ${prefix}totalfitur
║↬ ${prefix}on <simi/ai>
║↬ ${prefix}off <simi/ai>
║Catatan : on atau off untuk aktifkan / nonaktifkan fitur yang tertera di samping nya
╚══════════
`
const listaka = `
${q} Tidak Ada Di Dalam List
    ❀ _List_ ❀
 ╔══════════
 ║↬ ${prefix+command} lwdneko
 ║↬ ${prefix+command} foxgirl
 ║↬ ${prefix+command} nekos
 ║↬ ${prefix+command} foxgirls
 ║↬ ${prefix+command} ass
 ║↬ ${prefix+command} bdsm
 ║↬ ${prefix+command} bj
 ║↬ ${prefix+command} cum
 ║↬ ${prefix+command} doujin
 ║↬ ${prefix+command} feet
 ║↬ ${prefix+command} femdom
 ║↬ ${prefix+command} gls
 ║↬ ${prefix+command} hentai
 ║↬ ${prefix+command} net
 ║↬ ${prefix+command} maid
 ║↬ ${prefix+command} mstr
 ║↬ ${prefix+command} orgy
 ║↬ ${prefix+command} pants
 ║↬ ${prefix+command} pussy
 ║↬ ${prefix+command} skul
 ║↬ ${prefix+command} sucubus
 ║↬ ${prefix+command} tentakle
 ║↬ ${prefix+command} thgs
 ║↬ ${prefix+command} ugly
 ║↬ ${prefix+command} uni
 ║↬ ${prefix+command} yuri
 ║↬ ${prefix+command} zetr
 ╚══════════
`

const allmenu = `
Selamat ${ucapanWaktu} Kak ${pushname}
 ❀ _Info Bot_ ❀
╔══════════
║Author : Alfa
║Name Bot : NoNameBot
║Language : JavaScript
║Total Fitur : ${totalFitur()}
║Bot On : ${runtime(process.uptime())}
║Os : ${runtime(os.uptime())}
║Jam : ${wib}
║Tanggal : ${hariini}
║Auto Ai : ${AutoAi ? 'ON' : 'OFF'}
║Auto Simi : ${AutoSim ? 'ON' : 'OFF'}
╚══════════
 ❀ _All Menu_ ❀
╔══════════
║↬ ${prefix}menu main
║↬ ${prefix}menu download
║↬ ${prefix}menu nsfw
║↬ ${prefix}menu search
║↬ ${prefix}menu random
╚══════════
_Bot Cr By Alfa_
Note: Bot Dalam Status Perkembangan Jadi Fiturnya Masih Sedikit Gunakanlah Fitur Seadanya
`
        switch (command) {
        case 'tiktokv2':
        case 'ttv2': {
        if (!q) return failed(`Example: ${prefix+command} https://www.tiktok.com/@satokizaki/video/7280851276986961159?_d=secCgYIASAHKAESPgo8H2m2c2Zt94OsGfyoSSamY5o0wxAkL%2BwFxRHyKlczhVxxvy6ZnejPMvPUDtG9V%2FZcgVxxxk46krF8mSDUGgA%3D&_r=1&checksum=1224a67e7b2acb8b8fe767763dcb3e02b1c196a7bfb78a1e8eba21d46b2445b5&sec_uid=MS4wLjABAAAAVc4LyjJc6TZhaCK-60NWItPYgOQgYUfv-buvRMjNuxNcjz29XD9xl6OP9eow5Fzf&sec_user_id=MS4wLjABAAAA2PSy5VA9g48heMNPylbEe0X5vsq0SR3pJkpqjUpkDTejR5aVKH7HEeLOUiZBuRkA&share_app_id=1340&share_author_id=7246669464325030917&share_link_id=3754b69f-dfca-4aff-b328-3d4c6df8cc6a&sharer_language=id&timestamp=1696322545&u_code=dlgc75jc4d9mj0&ugbiz_name=Account&user_id=7028434958628865030&utm_campaign=client_share&utm_source=copy`)
        if (!q.includes('tiktok.com')) throw 'Itu Bukan Link TikTok'
        await tts(q).then((x) => {
        let jumnya = x.link_dl
        failed(`Sedang mengirim ${jumnya.length -1} foto`)
        for (let i = 0; i < jumnya.length -1; i++) {
        alpha.replyWithPhoto({
        url: x.link_dl[i].url
        }, {
        caption: `TikTok Slide`
        }).catch((err) => { failed('Hanya Support Foto') })
        }
        })
        }
        break
        case 'ai': {
        if (!q) return failed(`Example: ${prefix+command} Hai Apa Kabar`)
        try {
        gpt({
    prompt: q,
    model: "gpt-4",                        
    type: "json"                            
}, (err, data) => {
    if(err != null){
        console.log(err)
    } else {
        console.log(data.gpt)
        reply(data.gpt).catch((e) => { failed(e) })
    }
})
        } catch (e) {
        console.log(e)
        reply(e)
        }
        }
        break
        case 'fbmp3': {
        if (!q) return failed(`Example: ${prefix+command} https://www.facebook.com/100091125724283/videos/1281410139243697/?mibextid=vPdvX0B5T65af74v`)
      if (!q.includes('facebook.com')) return failed('Itu Bukan Link Fb Kak')
        reply(wait)
        try {
        fbvid(q).then((x) => {
        alpha.replyWithAudio({
        url: x.audio,
        filename: x.title
        }, {
        caption: `Title : ${x.title}`
        }).catch((e) => {
         isgd(x.hd).then((o) => {
        reply(`Error Bang Download Sendiri Ya 🗿\nLink : ${o.hasil}`)
        })
          })
        })
        } catch (e) {
        console.log(e)
        failed(e)
        }
        }
        break
        case 'fbvid': {
        if (!q) return failed(`Example: ${prefix+command} https://www.facebook.com/100091125724283/videos/1281410139243697/?mibextid=vPdvX0B5T65af74v`)
      if (!q.includes('facebook.com')) return failed('Itu Bukan Link Fb Kak')
        reply(wait)
        try {
        fbvid(q).then((x) => {
        alpha.replyWithVideo({
        url: x.hd
        }, {
        caption: `Title : ${x.title}`
        }).catch((e) => {
         isgd(x.hd).then((o) => {
        reply(`Error Bang Download Sendiri Ya 🗿\nLink : ${o.hasil}`)
        })
          })
        })
        } catch (e) {
        console.log(e)
        failed(e)
        }
        }
        break
        case 'fbimg': {
        if (!q) return failed(`Example: ${prefix+command} https://www.facebook.com/100044431959659/posts/pfbid02YyB8t3KES8bUk97pAf5m6Y1prSDFyWTcRyodhuBdisDn26cfCFKLPosHkGuWCRuol/`)
      if (!q.includes('facebook.com')) return failed('Itu Bukan Link Fb Kak')
        reply(wait)
        try {
      fbimg(q).then((z) => {
        alpha.replyWithPhoto({
        url: z.img
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        })
        } catch (e) {
        console.log(e)
        failed(e)
        }
        }
        break
        case 'isgd': {
        if (!q) return reply(`For Not Custom Link\nExample: ${prefix+command} https://google.com\n\nFor Custom Link\nExample: ${prefix+command} https://google.com-AnjayBisaGituYak`)
        try {
        const { isgd } = require('./lib/myscrape')
        let urlnya = q.split('-')[0]
        let txtnya = q.split('-')[1]
        if (txtnya) {
        isgd(urlnya, txtnya).then((x) => {
        if (x.code != 200) throw erorcuy
        reply(`Link : ${urlnya}\nShort : ${x.hasil}\nCustom Link : ${txtnya}`)
        })
        } else if (isUrl(q)) {
        isgd(urlnya, '').then((x) => {
        if (x.code != 200) throw erorcuy
        reply(`Link : ${urlnya}\nShort : ${x.hasil}\n\nFor Custom Link .isgd https://google.com-AnjayBisaGituYa`)
        })
        } else {
        failed(erorcuy)
        }
        } catch (e) {
        console.log(e)
        reply(e)
        }
        }
        break
        case 'igfoto': {
        try {
        if (isUrl(q)) {
        reply(wait)
        ighd(q).then((x) => {
        alpha.replyWithPhoto({ 
        url: x.medias[0].url
        }, {
        caption: '_Title : '+x.title+'_'
        })
        })
        } else {
        failed(`Example : .igfoto https://www.instagram.com/p/Cw4m_wbP4Xt/?utm_source=ig_web_copy_link`)
        }
        } catch (e) {
        reply(erorcuy)
        }
        }
        break
        case 'storyanime': {
        reply(wait)
        ytvid('Story Anime Terbaru').then((x) => {
        if (x.status != true) throw erorcuy
        alpha.replyWithVideo({
        url: x.url
        }, {
        caption: `Title : ${x.title}\nChanel : ${x.channel}\nDurasi : ${x.duration}\nSize : ${x.size}`
        }).catch((e) => { reply(erorcuy) })
        })
        }
        break
        case 'yts': {
        if (!q) return failed(`Example: ${prefix+command} story anime`)
        try {
        const { isgd } = require('./lib/myscrape')
        yts(q).then((n) => {
        let tctnye = `Found : ${q}\n\n`
        for (let x of n) {
        tctnye+= `Title : ${x.title}\n`
        tctnye+= `View : ${x.shortViewCount}\n`
        tctnye+= `Durasi : ${x.duration}\n`
        tctnye+= `Channel : ${x.author.name}\n`
        tctnye+= `Url Channel : ${x.author.url}\n`
        tctnye+= `Up : ${x.publishedAt}\n`
        tctnye+= `Link : ${x.hasil}\n------------------------------\n`
        }
        reply(tctnye).catch((e) => { failed(tctnye) })
        })
        } catch (e) {
        console.log(e)
        reply(e)
        }
        }
        break
        case 'ytmp4': {
        if (!q) return failed(`Example: ${prefix+command} https://youtu.be/Ccfa_98VU1k?si=lpQHf4qRPrd7SfSq`)
        if (!q.includes('youtu')) return failed('Itu Bukan Link Yutub 🗿')
        reply(wait)
        ytmpvid(q).then((x) => {
        alpha.replyWithVideo({
        url: x.url
        }, {
        caption: `Title : ${x.title}\nChanel : ${x.channel}\nDurasi : ${x.duration}\nSize : ${x.size}`
        }).catch((e) => { reply(erorcuy) })
        })
        }
        break
        case 'ytvid': {
        if (!q) return failed(`Example: ${prefix+command} Preset Am Anime`)
        reply(wait)
      try {
        ytvid(q).then((x) => {
        if (x.status != true) throw erorcuy
        alpha.replyWithVideo({
        url: x.url
        }, {
        caption: `Title : ${x.title}\nChanel : ${x.channel}\nDurasi : ${x.duration}\nSize : ${x.size}`
        }).catch((e) => { reply(erorcuy) })
        })
        } catch (e) {
        console.log(e)
        failed(erorcuy)
        }
        }
        break
        case 'ytmp3': {
        if (!q) return failed(`Example: ${prefix+command} https://youtu.be/Ccfa_98VU1k?si=lpQHf4qRPrd7SfSq`)
        if (!q.includes('youtu')) return failed('Itu Bukan Link Yutub 🗿')
        reply(wait)
        ytmplay(q).then((x) => {
        alpha.replyWithPhoto({
        url: x.thumbnail
        }, {
        caption: `Title : ${x.title}\nChanel : ${x.channel}\nDurasi : ${x.duration}\nSize : ${x.size}`
        }).catch((e) => { reply(erorcuy) })
        alpha.replyWithAudio({
        url: x.url,
        filename: x.title
        },{
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        })
        }
        break
        case 'play': {
        if (!q) throw `Example: ${prefix+command} Dj 30 Detik`
        reply(wait)
        ytplay(q).then((x) => {
        if (x.status != true) throw erorcuy
        alpha.replyWithPhoto({
        url: x.thumbnail
        }, {
        caption: `Title : ${x.title}\nChanel : ${x.channel}\nDurasi : ${x.duration}\nSize : ${x.size}`
        }).catch((e) => { reply(erorcuy) })
        alpha.replyWithAudio({
        url: x.url,
        filename: x.title
        },{
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        })
        }
        break
        case 'nsfw': {
        if (!q) throw `Example: ${prefix+command} pussy`
        try {
        if (q === 'lwdneko') {
        reply(wait)
        lwdneko().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'nekos') {
        reply(wait)
        nekos().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'foxgirl') {
        reply(wait)
        foxgirl().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'foxgirls') {
        reply(wait)
        foxgirls().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'ass') {
        reply(wait)
        ass().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'bdsm') {
        reply(wait)
        bdsm().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'bj') {
        reply(wait)
        bj().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'cum') {
        reply(wait)
        cum().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'doujin') {
        reply(wait)
        doujin().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'feet') {
        reply(wait)
        feet().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'femdom') {
        reply(wait)
        femdom().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'gls') {
        reply(wait)
        gls().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'hentai') {
        reply(wait)
        hentai().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'net') {
        reply(wait)
        net().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'maid') {
        reply(wait)
        maid().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'mstr') {
        reply(wait)
        mstr().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'orgy') {
        reply(wait)
        orgy().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'pants') {
        reply(wait)
        pants().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'pussy') {
        reply(wait)
        pussy().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'skul') {
        reply(wait)
        skul().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'sucubus') {
        reply(wait)
        sucubus().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'tentakel') {
        reply(wait)
        tentakel().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'ugly') {
        reply(wait)
        ugly().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'uni') {
        reply(wait)
        uni().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'yuri') {
        reply(wait)
        yuri().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else if (q === 'zetr') {
        reply(wait)
        zetr().then((x) => {
        alpha.replyWithPhoto({
        url: x
        }, {
        caption: okeh
        }).catch((e) => { reply(erorcuy) })
        }).catch((e) => { reply(erorcuy) })
        } else {
        reply(listaka)
        }
        } catch (e) {
        console.log(e)
        reply(erorcuy)
        }
        }
        break
            case 'ahegao': case 'ass': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'eba': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'panties': case 'neko': case 'neko2': case 'pussy': case 'zettai': case 'yuri': case 'masturbation': {
            try {
            if (q) {
            let hanj = await simple.fetchJson(`https://raw.githubusercontent.com/inirey/result-rest-api/main/nsfw/${command}.json`).catch((err) => reply(err))
for (let i = 0; i < q; i++) {
han = pickRandom(hanj)
alpha.replyWithPhoto({
                    url: han
                }, {
                    caption: okeh
                    }).catch((err) => reply(erorcuy))
                    }
            } else {
            let hanj = await simple.fetchJson(`https://raw.githubusercontent.com/inirey/result-rest-api/main/nsfw/${command}.json`).catch((err) => reply(err))
han = pickRandom(hanj)
alpha.replyWithPhoto({
                    url: han
                }, {
                    caption: okeh
                }).catch((err) => reply(erorcuy)),
                setTimeout(() => {
			reply(`Foto ingin lebih dari satu ?
ketik ${prefix+command} jumlah
contoh: ${prefix+command} 3
`)
		}, 6000)
            }
            } catch (e) {
            console.log(e)
            reply(erorcuy)
            }
}
break
         case 'bocil':
            case 'ukhty':
            case 'ghea':
            case 'hijab': {
            try {
            let h = await axios.get("https://api.akuari.my.id/asupan/"+command)
            reply(wait)
                if (h.respon.includes(".mp4")) {
                alpha.replyWithVideo({
                    url: h.respon
                }, {
                    caption: okeh
                })
            } else if (h.respon.includes(".jpg")) {
            alpha.replyWithPhoto({
                    url: h.respon
                }, {
                    caption: okeh
                })
            } else {
            reply(erorcuy)
            }
            } catch (e) {
            console.log(e)
            reply(erorcuy)
            }
            }
            break
            case 'cecan': {
            reply(wait)
            try {
            await pin('cecan/ cewe cantik').then((x) => {
                res = x[Math.floor(Math.random() * x.length)]
            alpha.replyWithPhoto({
            url: res
            }, {
            caption: okeh
            })
            }).catch((e) => { reply(erorcuy) })
            } catch (e) {
            console.log(e)
            reply(erorcuy)
            }
            }
            break
        case 'on': {
        if (!q) throw `Example: ${prefix+command} simi`
       if (args[0] == 'simi' || args[0] == 'simisimi' || args[0] == 'autosimi') {
if (AutoSim) return reply('Auto Simi sudah aktif')
atosim.push(from)
fs.writeFileSync('./lib/db/simi.json', JSON.stringify(atosim, null, 2))
reply('Successfully Activate Auto Simi')
} else if (args[0] == 'ai' || args[0] == 'chatgpt' || args[0] == 'openai') {
if (AutoAi) return reply('Auto Ai sudah aktif')
ai.push(from)
fs.writeFileSync('./lib/db/ai.json', JSON.stringify(ai, null, 2))
reply('Successfully Activate Auto Ai')
} else { reply(`List on\n\nsimi || ai`) }
}
break
case "off": case "of": {
if (args[0] == 'simi' || args[0] == 'simisimi' || args[0] == 'sim') {
if (!AutoSim) return reply('Simi Simi belum aktif')
let anu = atosim.indexOf(from)
atosim.splice(anu, 1)
fs.writeFileSync('./lib/db/simi.json', JSON.stringify(atosim, null, 2))
reply('Successfully Disabling Auto Simi Simi')
} else if (args[0] == 'ai' || args[0] == 'chatgpt' || args[0] == 'openai') {
if (!AutoAi) return reply('Auto Ai belum aktif')
let anu = ai.indexOf(from)
ai.splice(anu, 1)
fs.writeFileSync('./lib/db/ai.json', JSON.stringify(ai, null, 2))
reply('Successfully Disabling Auto Ai')
} else { reply('List Off\n\n simi || ai') }
}
break
        case 'ongoing': {
        try {
        onGoing().then((i) => {
        textnye = `Found : Ongoing\n\n`
        for (let x of i) {
        textnye+= `Title: ${x.judul}\n`
        textnye+= `Info: ${x.info}\n`
        textnye+= `Rilis: ${x.tgl_rilis}\n`
        textnye+= `Link: ${x.link}\n-------------------------------\n`
        }
        reply(textnye)
        })
        } catch (e) {
        reply(erorcuy)
        }
        }
        break
        case 'igv':
        case 'igvid': {
        if (!q) throw `Example: ${prefix+command} https://www.instagram.com/p/CwzhJWrPtJI/?utm_source=ig_web_copy_link`
        if (!q.includes('instagram.com')) throw 'Itu Bukan Link Ig Kk'
        try {
        reply(wait)
        ighd(q).then((x) => {
        alpha.replyWithVideo({ 
        url: x.medias[0].url
        }, {
        caption: '_Title : '+x.title+'_'
        })
        })
        } catch (e) {
        reply('invalid url / server down')
        }
        }
        break
        
        case 'quotes': {
        quotesanime().then((x) => {
        var i = x[Math.floor(Math.random() * x.length)] 
        reply('_'+i.quotes+'\n\nBy: '+i.karakter+'_')
        })
        }
        break
        case 'simi': {
        if (!q) throw `Example: ${prefix+command} hai`
        simi(q, 'id').then((x) => {
        reply(x.result)
        })
        }
        break
        case 'wibu': {
        if (!q) throw `For search\n ${prefix+command} Isekai\n\nFor link batch\n${prefix+command} link_wibudesu`
        if (isUrl(q)) {
        try {
        WibuDl(q).then((x) => {
        let gdrives = x.file.shd.gdrive
        let mdrives = x.file.shd.mdrive
        let uptoboxs = x.file.shd.uptobox
        let gdrived = x.file.hd.gdrive
        let mdrived = x.file.hd.mdrive
        let uptoboxd = x.file.hd.uptobox
        let teks = `${b}Title: ${x.result.title}
Type: ${x.result.type}
Musim: ${x.result.musim}
Studio: ${x.result.studio}
Rilis: ${x.result.rilis}
Ep: ${x.result.ep}
Durasi: ${x.result.durasi}
LastUp: ${x.result.lastup}

Link Download 480p
GDrive: ${x.file.shd.gdrive ? gdrives : 'Tidak Ada'}
MDrive: ${x.file.shd.mdrive ? mdrives : 'Tidak Ada'}
Uptobox: ${x.file.shd.uptobox ? uptoboxs : 'Tidak Ada'}

Link Download 720p
GDrive: ${x.file.hd.gdrive ? gdrived : 'Tidak Ada'}
MDrive: ${x.file.hd.mdrive ? mdrived : 'Tidak Ada'}
Uptobox: ${x.file.hd.uptobox ?  uptoboxd : 'Tidak Ada'}
${b}
        `
        reply(teks)
        })
        } catch (e) {
        console.log(e)
        reply('invalid url / server down !')
        }
        } else {
        WibuSearch(q).then((x) => {
        let txt = `Found : ${q}\n\n`
        for (let o of x.res) {
        txt+= `${b}Title: ${o.title}${b}\n`
        txt+= `${b}Rating: ${o.rat}${b}\n`
        txt+= `${b}Type: ${o.type}${b}\n`
        txt+= `${b}Status: ${o.status}${b}\n`
        txt+= `${b}Link: ${o.link}${b}\n-----------------------------\n`
        }
        reply(txt)
        })
        }
        }
        break
        case 'xnxx':
        case 'xxx': {
        if (!q) throw `Example: ${prefix+command} Milf\n\nFor Download\nExample: ${prefix+command} link_xnxx`
        if (isUrl(q)) {
        try {
        reply('Wait . . .')
        xnxxdl(q).then((res) => {
        alpha.replyWithVideo({
        url: res.result.files.high
        }, {
        caption: `${b}Title : ${res.result.title}\nDurasi : ${res.result.duration}\nInfo : ${res.result.info} ${b}`
        }).catch((re) => { reply('invalid url / server down') })
        })
        } catch (e) {
        console.log(e)
        reply('invalid url')
        } 
        } else {
        try {
        xnxxs(q).then((res) => {
        let txt = ` Found : ${text}\n\n`
        for (let i of res.res) {
        txt+= `Title : ${b}${i.title}${b}\n`
        txt+= `Link : ${b}${i.link}${b}\n`
        txt+= `Info : ${b}${i.desk}${b}\n-----------------------------------------------\n`
        }
        reply(txt).catch((e) => { reply('Tidak Di Temukan') })
        })
        } catch (e) {
        console.log(e)
        reply('Tidak Di Temukan')
        }
        }
        }
        break
        case 'bkp':
        case 'bokep': {
        reply(wait)
        BokepRandom().then((i) => {
        alpha.replyWithVideo({
        url: i.result.link
        }, {
        caption: 'Jangan Sange'
        }).catch((e) => { reply('Server Down') })
        })
        }
        break
        case 'otakudesu': 
        case 'otaku': {
        if (!q) throw 'Masukan Judul'
        try {
        OtakuS(q).then((rez) => {
        tok = `_OTAKUDESU SEARCH_\n\n`
        for (let x of rez) {
        tok += `Title: ${x.title}\n`
        tok+= `Rating: ${x.rat}\n`
        tok+= `Status: ${x.status}\n`
        tok+= `Link: ${x.link}\n----------------------------------\n`
        }
			reply(tok).catch((ere) => { reply('Tidak di temukan') })
			})
        } catch (e) {
        reply('Tidak Di Temukan')
        }
        }
        break
        case 'ttmp3': 
        case 'tiktokmp3':{
        if (!q) return failed(`Example: ${prefix+command} https://vm.tiktok.com/ZSNJ3ByxD/`)
        if (!q.includes('tiktok.com')) return failed('Itu bukan link tiktok kk ' + pushname)
        reply(wait)
        tikcd(q).then((ress) => {
            alpha.replyWithAudio({
                url: ress.audio,
                filename: 'tiktok'
              }, {
                caption: 'Ini Audionya Kk '+pushname
              })
            })
        }
        break
        case 'tiktokhd':
        case 'tthd': {
        if (!q) return failed(`Example: ${prefix+command} https://vm.tiktok.com/ZSNJ3ByxD/`)
         if (!q.includes('tiktok.com')) return failed('Itu bukan link tiktok kk ' + pushname)
         reply(wait)
        const x = await tikhd(q).catch((e) => { reply('Api Eror') })
        alpha.replyWithVideo({
        url: x.result.NW_HD
        }, {
        caption: x.result.title
        }).catch((e) => { 
        const { isgd } = require('./lib/myscrape')
        isgd(x.result.NW_HD, '').then((x) => {
        reply(`Server Eror\n\nLink Download : ${x.hasil}`) 
        })
        })
        }
        break
          case 'tt':
          case 'tiktok':
          case 'tiktokdl': {
            if (!q) throw `Example: ${prefix+command} https://vm.tiktok.com/ZSN1tHMpF/`
            if (!q.includes('tiktok.com')) throw 'Maaf Kk Itu Bukan Link TikTok'
            reply('Wait...')
            tikhd(q).then((res) => {
              alpha.replyWithVideo({
                url: res.result.NW_HD
              }, {
                caption: 'Desc: '+res.result.title
              }).catch((e) => { reply(`Server 1 Eror, Server 2 Sedang Berjalan\n\nDownload Link : ${res.result.NW_HD}`) 
              tikcd(q).then((res) => {
            alpha.replyWithVideo({
                url: res.hd
              }, {
                caption: 'Desc: '+res.desc
              }).catch((e) => { reply(erorcuy) })
            })
              })
            })
          }
            break
            case 'ping': {
            reply('Bot: ' + runtime(process.uptime()) + '\nOs: ' + runtime(os.uptime) + '\nTotal Fitur : ' + totalFitur()+`\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`)
            }
            break
            case 'owner': {
            reply('Saya Tidak Mempunyai Owner, Saya Hanya Bot Yang Berjalan Ototmatis')
            }
            break
            case 'sc': 
            case 'script': {
            reply(`Selamat ${ucapanWaktu} Kak ${pushname}, Bot Ini Masih Dalam Pengembangan Jadi Belum Rilis Script Nya`)
            }
            break
            case 'menu':
            case 'allmenu': {
            const { wallpaper } = require('./lib/myscrape')
            await wallpaper('nakano miku').then((x) => {
                res = x[Math.floor(Math.random() * x.length)]
              if (q === 'main') {
              alpha.replyWithPhoto({
              url: res.image[1]
              }, {
              caption: menumain
              }).catch((e) => { reply(erorcuy) })
              } else if (q === 'nsfw') {
              alpha.replyWithPhoto({
              url: res.image[1]
              },{
              caption: menunsfw
              }).catch((e) => { reply(erorcuy) })
              } else if (q === 'random') {
              alpha.replyWithPhoto({
              url: res.image[1]
              },{
              caption: menuran
              }).catch((e) => { reply(erorcuy) })
              } else if (q === 'download') {
              alpha.replyWithPhoto({
              url: res.image[1]
              },{
              caption: menud
              }).catch((e) => { reply(erorcuy) })
              } else if (q === 'search') {
              alpha.replyWithPhoto({
              url: res.image[1]
              },{
              caption: menus
              }).catch((e) => { reply(erorcuy) })
              } else {
            alpha.replyWithPhoto({
            url: res.image[0]
            }, {
            caption: allmenu
            }).catch((e) => { reply(erorcuy) })
            }
            })
            }
            break
            
            default:
            }
            // ANTI SPAM 500 = 5 DETIK
       /* if (!isCmd) {
                    if (command)
                    failed('Jangan Spam Ya Kak '+pushname)
                await sleep(5000)
                }*/
        if (budy.startsWith('=>')) {

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}
if (budy.startsWith('x')) {

try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (budy.startsWith('<')) {

try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
        
    } catch (e) {
        alpha.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File Terbaru ${__filename}`)
delete require.cache[file]
require(file)
})