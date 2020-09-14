const puppeteer = require('puppeteer');
const fs = require('fs')


// for (let page = 2; page < 10; page++) {

const vgmUrl = `https://boards.4chan.org/b/thread/835985996`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);

  const links = await page.$$eval('a', elements => elements.filter(element => {
    const parensRegex = /^((?!\().)*$/;
    return element.href.includes('.gif') && parensRegex.test(element.textContent);
  }).map(element => element.href));

for (let i = 0; i < links.length; i++) {
    const element = links[i];
    
    mToHtml = `<img class="lazy" src='${element}' width="450" height="500" />`
    // lanks = `<a class="lazy" href='${element}'> Lankssssss</a>`
    fs.appendFile("index.html", mToHtml, ()=> {console.log("link barf wrote")})

}
  await browser.close();
})();

// }