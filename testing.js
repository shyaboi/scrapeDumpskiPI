const { Readable } = require('stream');
var http = require('http')
var https = require('https')
const request = require('request');
var fs = require("fs");
const { url } = require('inspector');
var data = '';
urll = 'https://burst.shopify.com/background'
var readerStream = fs.createReadStream('data', 'https://burst.shopify.com/background'); //Create a readable stream

readerStream.setEncoding('UTF8'); // Set the encoding to be utf8. 

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
//    console.log(data);
   fs.appendFileSync("imageHell.txt", data, ()=> {console.log("link barf wrote")})
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");