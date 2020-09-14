const fs = require('fs')


fs.readFile('comfyDump.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
  var dinus = data.split(",")
  console.log(dinus)
for (let i = 0; i < dinus.length; i++) {
    const element = dinus[i];
    console.log(element)
}
  });