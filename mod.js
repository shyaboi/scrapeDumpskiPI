var Writable = require("stream").Writable;
var util = require("util");
const fs = require('fs')
module.exports = URLmatcher;

util.inherits(URLmatcher, Writable);

function URLmatcher(matchText, options) {
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "ig");
}

URLmatcher.prototype._write = function(chunk, encoding, cb){
    var matches = chunk.toString().match(this.matcher);
    if (matches == null){console.log("dumping nulls")}
    else{
        mToHtml = `<img class="lazy" src='${matches}' width="450" height="500" />`
        fs.appendFileSync("imageHell.html", mToHtml, ()=> {console.log("link barf wrote")})}
    if (matches){
        this.count += matches.length;
    }
    cb()
}

URLmatcher.prototype.end = function(){
    this.emit('total', this.count)
}