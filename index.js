var URLmatcher = require('./mod')
var cs = new URLmatcher()
var http = require('http')
var https = require('https')

// https://burst.shopify.com/  image scrapping template
for (let page = 2; page < 26; page++) {
    https.get(`https://burst.shopify.com/nature?page=${page}`, (res)=> {res.pipe(cs)})
}


https.get(`https://burst.shopify.com/background`, (res)=> {res.pipe(cs)})
