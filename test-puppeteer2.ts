import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (response.status() === 404) {
      console.log('404 URL:', response.url());
    }
  });

  try {
    await page.goto('https://neurocontent-one.vercel.app/', { waitUntil: 'networkidle0', timeout: 15000 });
  } catch(e) {}

  await browser.close();
})();
