const jsdom = require("jsdom");
const fs = require('fs')
var https = require('https');


const { JSDOM } = jsdom;
const dom = new JSDOM(``, {
    url: "https://github.com/shyaboi/wallpapers",
    referrer: "https://google.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
  });

  const req = https.request(dom, res => {
    //   console.log(`statusCode: ${res.statusCode}`)
    
      res.on('data', d => {
        process.stdout.write(d)
        fs.appendFileSync("dffghj.html", d, ()=> {console.log("link barf wrote")})
      })
    })
    
    req.on('error', error => {
      console.error(error)
    })
    
    req.end()