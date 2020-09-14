const fs = require('fs')
const exec = require("child_process").exec;


fs.readFile('../comfyDump.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
  var dinus = data.split(",")
  console.log(dinus)
  
  for (let i = 0; i < dinus.length; i++) {
    const element = dinus[i];
    console.log(element)
        // setTimeout(() => {
      exec(`curl ${element} -o ${i}.jpg`, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      // }, 5000);
      });
    }
    
  });