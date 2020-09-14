var URLmatcher = require('./mod')
var cs = new URLmatcher()
var http = require('http')
var https = require('https');
const { response } = require('express');
require('events').EventEmitter.defaultMaxListeners = 88888888;

// https://burst.shopify.com/  image scrapping template
// for (let page = 2; page < 26; page++) {
    // https.get(`https://burst.shopify.com/nature?page=${page}`, (res)=> {res.pipe(cs)})
// }
// for (let i = 0; i < 3; i++) {

  const opts = {
    hostname: 'reddit.com',
    port: 443,
    path: '/r/evilbuildings/',
    method: 'GET',
    origin: "65.103.209.39",
    headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
      "Accept-Encoding": "gzip, deflate, br", 
      "Accept-Language": "en-US,en;q=0.9,ko-KR;q=0.8,ko;q=0.7,zh-CN;q=0.6,zh;q=0.5,ja-JP;q=0.4,ja;q=0.3", 
      "Referer": "https://www.google.com/", 
      'Content-Type': 'application/x-www-form-urlencoded;',
      'Content-Length': 'Buffer.byteLength(getData)',
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36", 
      }
  }
    https.get(opts, (res)=> {
      res.pipe(cs)})
    

