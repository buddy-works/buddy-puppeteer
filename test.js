const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://buddy.works');
  await page.screenshot({path: 'screen.png'});

  await browser.close();
})();
