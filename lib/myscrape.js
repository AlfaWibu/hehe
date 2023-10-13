const axios = require("axios")
const	cheerio = require("cheerio")
const fetch = require('node-fetch')
const yts = require('ytsearch.js')
const { ytmp3, ytmp4 } = require("@nechlophomeriaa/ytdl")
const { gpt, dalle, lexica, prodia } = require('gpti')
const { Hercai } = require('hercai');
const herc = new Hercai();

function pin(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}
function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}
function onGoing() {
	return new Promise((resolve, reject) => {
		axios.get('https://neonime.ink/episode/').then(res => {
			const $ = cheerio.load(res.data)
			const result = []
			$('tbody').find('tr').each(function(a, b) {
				const link = $(b).find('td > div.imagen-td > a').attr('href')
				const img = $(b).find('td > div.imagen-td > a > img').attr('data-src')
				const info = $(b).find('td.bb > a > span').text().trim()
				const judul = $(b).find('td.bb > a').text()
				const tgl_rilis = $(b).find('td.dd').text()
				result.push({ judul, link, img, info, tgl_rilis })
			})
			resolve(result)
		}).catch(reject)
	})
}

function BatchAnimeS(q) {
return new Promise(async (resolve, reject) => {
axios.get('https://www.animebatch.id/?s='+q).then(({ data }) => {
const $ = cheerio.load(data)
const link = [];
const hdd = {};
const hd = {};
const shd = [];
const res = {
};
$('body > div.site-content > div > div > div > main > article > div > div > a').each(function(a, b) {
link.push($(b).attr('href'))
})
const ling = link[Math.floor(Math.random() * link.length)]
axios.get(ling).then((ress) => {
const $$ = cheerio.load(ress.data)
$$('div.site-content > div > #infoarea > div:nth-child(3) > main > article > div:nth-child(2) > div > div > div > div.spe').each(function(c, d) {
res.title = $(d).find('> span:nth-child(1)').text().trim().replace('Judul Anime ', '')
res.type = $(d).find('> span:nth-child(3)').text().trim()//.replace('Tipe Anime ', '')
res.status = $(d).find('> span:nth-child(4)').text().trim().replace('Status Anime ', '') ? 'Tamat' : 'Belum Tamat'
res.eps = $(d).find('> span:nth-child(5)').text().trim().replace('Jumlah Episode ', '')
res.musim = $(d).find('> span:nth-child(6)').text().trim().replace('Musim Rilis ', '')
res.rilis = $(d).find('> span:nth-child(7)').text().trim().replace('Tanggal Rilis ', '')
res.studio = $(d).find('> span:nth-child(8)').text().trim().replace('Studio', '')
res.durasi = $(d).find('> span:nth-child(9)').text().trim().replace('Durasi per Episode ', '')
res.score = $(d).find('> span:nth-child(11)').text().trim().replace('Skor ', '')
})
$$('div.site-content > div > #infoarea > div:nth-child(3) > main > article > div:nth-child(1)').each(function(e, f) {
res.img = $(f).find('img').attr('src')
})
resolve({
		code: 200,
		result: res
		})

})
}).catch(reject)
})
}

function quotesanime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function pornovid() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve(hasil)
        })
    })
}

function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

function WibuDl(url) {
return new Promise((resolve, reject) => {
axios.get(url).then(({ data }) => {
const $ = cheerio.load(data)
const hd = {};
const shd = {};
const result = {};
const res = {
hd: hd,
shd: shd
}
$('body > #content > div > div.postbody > article > div:nth-child(4) > div.mctnx > div > div.content').each(function(a, b) {
shd.gdrive = $(b).find('> div:nth-child(2) > div.slink > a:nth-child(1)').attr('href')
shd.mdrive = $(b).find('> div:nth-child(2) > div.slink > a:nth-child(2)').attr('href')
shd.uptobox = $(b).find('> div:nth-child(2) > div.slink > a:nth-child(3)').attr('href')
shd.resolusi = '480'
//HD
hd.gdrive = $(b).find('> div:nth-child(3) > div.slink > a:nth-child(1)').attr('href')
hd.mdrive = $(b).find('> div:nth-child(3) > div.slink > a:nth-child(2)').attr('href')
hd.uptobox = $(b).find('> div:nth-child(3) > div.slink > a:nth-child(3)').attr('href')
hd.resolusi = '720'
})
$('body > #content > div > div.postbody > article > div.bixbox.animefull > div > div.infox').each(function(c, d) {
result.title = $(d).find('h1').text().trim();
result.type = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(1) > a').text().trim();
result.studio = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(2) > a').text().trim();
result.musim = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(3) > a').text().trim();
result.rilis = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(4)').text().trim();
result.status = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(5)').text().trim();
result.ep = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(6)').text().trim();
result.durasi = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(7)').text().trim();
result.lastup = $(d).find('> div.ninfo > div.info-content > div.spe > span:nth-child(8)').text().trim();
})
resolve({
code: 200,
result: result,
file: res
})
}).catch(reject)
})
}

function xnxxs(query) {
	return new Promise((resolve, reject) => {
		const baseurl = 'https://www.xnxx.com'
		fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			let title = [];
			let url = [];
			let desc = [];
			let thumb = [];
			let results = [];

			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb').each(function(c, d) {
					url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/")),
					thumb.push($(d).find('img').attr('data-src'))
				})
			})
			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb-under').each(function(c, d) {
					desc.push($(d).find('p.metadata').text())
					$(d).find('a').each(function(e,f) {
					    title.push($(f).attr('title'))
					})
				})
			})
			for (let i = 0; i < title.length; i++) {
				results.push({
					title: title[i],
					desk: desc[i],
					link: url[i],
					thumbnail: thumb[i]
				})
			}
			resolve({
				code: 200,
				status: true,
				author: 'Alfa Xyz',
				res: results
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}

function xnxxdl(ur) {
	return new Promise((resolve, reject) => {
		fetch(`${ur}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			const title = $('meta[property="og:title"]').attr('content');
			const duration = $('meta[property="og:duration"]').attr('content');
			const image = $('meta[property="og:image"]').attr('content');
			const videoType = $('meta[property="og:type"]').attr('content');
			const info = $('span.metadata').text();
			const videoScript = $('#video-player-bg > script:nth-child(6)').html();
			const files = {
				low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
				high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
				HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1]
			};
			resolve({
				status: 200,
				result: {
					title,
					ur,
					duration,
					image,
					videoType,
					info,
					files
				}
			})
		})
		.catch(err => reject({code: 503, status: false, result: err }))
	})
}
async function tikhd(url) {
const { data } = await axios.post('https://www.fetchtik.com/en/video-parser', new URLSearchParams(Object.entries({
link: url
})), {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
}
})
return data
}
function WibuSearch(q) {
return new Promise((resolve, reject) => {
axios.get('https://wibudesu.co/?s='+q).then(({ data }) => {
const link = [];
const title = [];
const rat = [];
const type = [];
const status = [];
const res = [];
const $ = cheerio.load(data)
$('body > #content > div.wrapper > div.postbody > div.bixbox > div.listupd > article').each(function(a, b) {
link.push($(b).find('div.bsx > a').attr('href'))
title.push($(b).find('div.bsx > a > div.tt > span').text().trim())
rat.push($(b).find('div.bsx > a > div.tt > div.rt > div.rating > div.numscore').text().trim())
status.push($(b).find('div.bsx > a > div.limit > div:nth-child(1)').text().trim())
type.push($(b).find('div.bsx > a > div.limit > div:nth-child(2)').text().trim())
})
for (let i = 0; i < title.length; i++) {
				res.push({
					title: title[i],
					link: link[i],
					rat: rat[i],
					type: type[i],
					status: status[i]
				})
			}
			resolve({ 
			code: 200,
			author: 'Alfa',
			res: res
			})
}).catch(reject)
})
}

function BokepRandom() {
return new Promise(async(resolve, reject) => {
const page = Math.floor(Math.random() * 20)
const base = 'https://cerdas.com'
axios.get('https://www.cerdas.com/index?page='+page).then(({ data }) => {
const $ = cheerio.load(data)
const link = [];
const res = {};
$('#container > #content > div.left.span-755 > div.box > div.video_box').each(function(a, b){
link.push($(b).find('a').attr('href'))
//res.info = $(b).find('> div.box_left').text().trim();
})
const lik = link[Math.floor(Math.random() * link.length)]
axios.get('https://cerdas.com'+lik).then(({ data }) => {
const $$ = cheerio.load(data)
$$('#container > #content > #content > div.left.span-740 > div.left.span-740 > div.embed-responsive.embed-responsive-16by9 > #player').each(function(d, c){
 const vid = $(c).find('iframe').attr('src')
axios.get(vid).then(({ data }) => {
const $$$ = cheerio.load(data)
$$$('#html5video > #html5video_base').each(function(f, e) {
res.link = $(e).find('a').attr('href')
})
			resolve({
			code: 200,
			author: 'Alfa',
			result: res,
			})

})
})
})
}).catch(reject)
})
}
function OtakuS(judul) {
return new Promise(async(log, reject) => {
	axios.get('https://otakudesu.wiki/?s=' + judul + '&post_type=anime').then(({ data }) => {
	const title = []
	const link = []
	let rat = []
	let thumb = []
	let status = []
	const res = []
	const $ = cheerio.load(data)
	$('ul.chivsrc > li').each(function(a, b) {
	title.push($(b).find('h2 > a').text())
	rat.push($(b).find('div:nth-child(5)').text().replace('Rating : ', ''))
	status.push($(b).find('div:nth-child(4)').text().replace('Status : ', ''))
	link.push($(b).find('h2 > a').attr('href'))
	thumb.push($(b).find('img').attr('src'))
	})
	for (let i = 0; i < title.length; i++) {
				res.push({
					title: title[i],
					rat: rat[i],
					status: status[i],
					link: link[i],
					img: thumb[i]
				})
			}
	log(res)
})
})
}
async function ighd(url) {
return new Promise((log, tolak) => {
axios.post('https://igdown.cc/wp-json/aio-dl/video-data/', new URLSearchParams(Object.entries({
url: url
})), {
headers: {
"content-type": "application/x-www-form-urlencoded", 
"user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
}}).then((res) => {
log(res.data)
})
})
}

async function tikcd(url) {
const {data} = await axios.post('https://tikcd.com/en/video/info', {
url: url
}, {
headers: {
"User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
}
})
const $ = cheerio.load(data)
const res = {}
res.desc = $('p').text()
res.hd = $('div.tiktok-downloader-button-container > div:nth-child(1) > a').attr('href')
res.nowm = $('div.tiktok-downloader-button-container > div:nth-child(2) > a').attr('href')
res.audio = $('div.tiktok-downloader-button-container > div:nth-child(3) > a').attr('href')
return res
}

async function ytvid(q, quality) {
  const anu = await yts(q)
const ran = anu[Math.floor(Math.random() * anu.length)]
const jo = await ytmp4(ran.watchUrl, quality)
 return jo
}

async function ytmpvid(q, quality) {
const jo = await ytmp4(q, quality)
 return jo
}

async function ytmplay(q) {
const jo = await ytmp3(q)
 return jo
}

async function isgd(url, q) {
return new Promise((resolve, reject) => {
axios.post('https://is.gd/create.php', new URLSearchParams(Object.entries({
url: url,
shorturl: q
})), {
headers: {
"content-type": "application/x-www-form-urlencoded",
"user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
}
}).then(({ data }) => {
const $ = cheerio.load(data)
const res = {}
res.code = 200
res.author = 'Alfa'
res.hasil = $('#main > a').attr('href') ? $('#main > a').attr('href') : `Nama ${q} Sudah Di Gunakan`
resolve(res)
}).catch(err => reject({code: 503, status: false, result: err }))
})
}

async function fbvid(url) {
return new Promise((resolve, reject) => {
axios.post('https://www.getfvid.com/downloader', new URLSearchParams(Object.entries({
url: url
})), {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
}
}).then(({ data }) => {
const $ = cheerio.load(data)
  const res = {
code: 200
}
  res.title = $('div.download-links > div.card > div.row > div:nth-child(2) > div > h5 > a').text()
  res.hd = $('div.download-links > div.card > div.row > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href')
  res.link = $('div.download-links > div.card > div.row > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href')
  res.audio = $('div.download-links > div.card > div.row > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href')
  resolve(res)
}).catch(err => reject({code: 503, status: false, result: err }))
})
}

async function fbimg(url) {
return new Promise((resolve, reject) => {
axios.post('https://www.expertstool.com/instagram-reels-video-downloader/', new URLSearchParams(Object.entries({
url: url
})), {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
}}).then(({ data }) => {
const $ = cheerio.load(data)
let res = {
code: 200
}
res.img = $('div.col-md-8.col-md-offset-2 > a > img').attr('src')
resolve(res)
})
})
}

async function ai(q) {
try {
    const { data } = await axios(`https://aichatonline.org/wp-json/mwai-ui/v1/chats/submit`, {
      method: "post",
      data: {
        botId: "default",
        newMessage: q,
        stream: false
      },
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json"
      }
    })
    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
async function kfdl(url) {
return new Promise((resolve, reject) => {
axios.get(url).then(({ data }) => {
const $ = cheerio.load(data)
const dlnye = 'https:'+$('div.nk-iv-wg4-sub.text-center.bg-lighter > form').attr('action')
  const token = $('div.nk-iv-wg4-sub.text-center.bg-lighter > form > input').attr('value')
axios.post(dlnye, {
  token: token
}, {
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
}).then((po) => {
  re = {}
  re.file_name = $('span.coin-name > h5').text().trim()
  re.up_file = $('ul.nk-iv-wg4-overview.g-2 > li:nth-child(1) > div.lead-text').text()
  re.last_up = $('ul.nk-iv-wg4-overview.g-2 > li:nth-child(2) > div.lead-text').text()
  re.file_size = $('ul.nk-iv-wg4-overview.g-2 > li:nth-child(3) > div.lead-text').text()
  re.type = $('ul.nk-iv-wg4-overview.g-2 > li:nth-child(4) > div.lead-text').text()
  re.views = $('div.views-count').text().replace('Views', '')
  re.download = $('div.downloads-count > strong').text()
  re.link_dl = po.data.url
resolve({ 
code: 200,
file_info: re,
})
})
})
})
  }

async function ytdl(url) {
return new Promise((resolve, reject) => {
axios.post('https://ytmp4.lol/wp-json/aio-dl/video-data/', new URLSearchParams(Object.entries({
url: url
})), {
headers: {
"content-type": "application/x-www-form-urlencoded",
"user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
}
}).then(({ data }) => {
let audio = data.medias[11]
let video = data.medias[2]
let title = data.title
let img = data.thumbnail
  const res = {
    title: title,
    img: img,
    audio: audio,
    video: video
  }
  resolve({
    result: res
  })
})
})
}
async function ytplay(q) {
  let x = await yts(q)
  let o = await x[Math.floor(Math.random() * x.length)]
let dl = await ytdl(o.watchUrl)
  return dl
}
async function txtoimg(q) {
return new Promise((resolve) => {
herc.drawImage({model:"v2",prompt:q}).then((response) => {
resolve(response)
})
})
}

async function tts(q) {
return new Promise((resolve) => {
axios.post('https://ssstiktokio.com/wp-json/aio-dl/video-data/', new URLSearchParams(Object.entries({
url: q
})), {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36"
}
}).then(({ data }) => {
const result = {
title: data.title,
link_dl: data.medias
}
resolve(result)
})
})
}
module.exports = { onGoing, BatchAnimeS, quotesanime, pornovid, hentaivid, WibuDl, xnxxs, xnxxdl, tikhd, WibuSearch, BokepRandom, OtakuS, tikcd, ighd, pin, wallpaper, ytplay, ytvid, ytmplay, ytmpvid, isgd, fbvid, fbimg, ai, kfdl, tts, txtoimg }