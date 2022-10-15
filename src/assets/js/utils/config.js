

 const pkg = require('../package.json');
 const fetch = require("node-fetch")
 const convert = require("xml-js")
 let url = pkg.user ? `${pkg.url}/${pkg.user}` : pkg.url
 
 let config = `${url}/launcher/config-launcher/config.json`;
 let news = `https://zone-delta.fr/api/rss`;
 
 class Config {
     GetConfig() {
         return new Promise((resolve, reject) => {
             fetch(config).then(config => {
                 return resolve(config.json());
             }).catch(error => {
                 return reject(error);
             })
         })
     }
 
     async GetNews() {
         let rss = await fetch(news).then(res => res.text());
         let rssparse = JSON.parse(convert.xml2json(rss, { compact: true }));
         let data = [];
         if (rssparse.rss.channel.item.length) {
             for (let i of rssparse.rss.channel.item) {
                 let item = {}
                 item.title = i.title._text;
                 item.content = i['content:encoded']._text;
                 item.author = i['dc:creator']._text;
                 item.publish_date = i.pubDate._text;
                 data.push(item);
             }
         } else {
             let item = {}
             item.title = rssparse.rss.channel.item.title._text;
             item.content = rssparse.rss.channel.item['content:encoded']._text;
             item.author = rssparse.rss.channel.item['dc:creator']._text;
             item.publish_date = rssparse.rss.channel.item.pubDate._text;
             data.push(item);
 
         }
         return data;
     }
 }
 
 export default new Config;