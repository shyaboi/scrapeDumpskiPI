const https = require('https')
const fs = require('fs')




const options = {
  hostname: 'reddit.com',
  port: 443,
  path: '/r/evilbuildings/',
  method: 'GET',
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
  "origin": "67.103.209.39", 
}

const req = https.request(options, res => {
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