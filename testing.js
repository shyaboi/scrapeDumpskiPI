//The following code will send a GET request to NASA’s API and print out //the URL for the astronomy picture of the day as well as an explanation:
const https = require('https');
const fs = require('fs')


const options = {
   hostname: 'reddit.com',
   port: 443,
   path: '/r/evilbuildings/',
   method: 'GET',
   headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
   "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
      "Accept-Encoding": "gzip, deflate, br", 
      "Accept-Language": "en-US,en;q=0.9,ko-KR;q=0.8,ko;q=0.7,zh-CN;q=0.6,zh;q=0.5,ja-JP;q=0.4,ja;q=0.3", 
      "Referer": "https://www.google.com/", 
      'Content-Type': 'application/x-www-form-urlencoded;',}
 }



https.get(options, (resp) => {
let data = '';
// A chunk of data has been recieved.
resp.on('data', (chunk) => {
data += chunk;
});
// The whole response has been received. Print out the result.
resp.on('end', () => {
console.log(data);
fs.appendFileSync("terst.html", data, ()=> {console.log("link barf wrote")})
});
}).on("error", (err) => {
console.log("Error: " + err.message);
});



// const dinus = (page)=> {
//    setTimeout(() => {
//    https.get(`https://boards.4chan.org/b/${page}`, (resp) => {
//       let data = '';
//       // A chunk of data has been recieved.
//       resp.on('data', (chunk) => {
//       data += chunk;
//       });
//       // The whole response has been received. Print out the result.
//       resp.on('end', () => {
//       console.log(data);
//       fs.appendFileSync("bDump.html", data, ()=> {console.log("link barf wrote")})
//       });
//       }).on("error", (err) => {
//       console.log("Error: " + err.message);
//       });
// }, 5000);}

// for (let page = 1; page < 10; page++) {
//    dinus(page)
// }
