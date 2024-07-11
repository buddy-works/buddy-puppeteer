const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://buddy.works');
  await page.screenshot({ path: 'buddy-screenshot.png' });

  await browser.close();
})();
