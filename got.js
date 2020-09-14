const stream = require('stream');
const {promisify} = require('util');
const fs = require('fs');
const got = require('got');
 
const pipeline = promisify(stream.pipeline);
 
//  const pippe = () => {
//      pipeline(
//         got.stream('https://boards.4chan.org/b/'),
//         fs.createWriteStream('got.html')
//         )}



// const looper = ()=> {for (let page = 2; page < 10; page++) {
    
        pipeline(
            got.stream(`https://www.reddit.com/r/evilbuildings/`),
            fs.createWriteStream('got.html')
            )
    // }}

// looper()
    // For POST, PUT, and PATCH methods `got.stream` returns a `stream.Writable`
    // await pipeline(
    //     fs.createReadStream('index.html'),
    //     got.stream.post('https://sindresorhus.com')
    // );
