import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[PAGE CONSOLE ${msg.type()}]:`, msg.text());
  });
  
  page.on('pageerror', err => {
    console.log('[PAGE ERROR]:', err.toString());
  });

  try {
    await page.goto('https://neurocontent-one.vercel.app/', { waitUntil: 'networkidle0', timeout: 15000 });
    console.log('Loaded successfully.');
    
    // Check if images are visible
    const imgFound = await page.$$eval('img', imgs => imgs.length);
    console.log('Images found:', imgFound);
    const videoFound = await page.$$eval('video', vids => vids.length);
    console.log('Videos found:', videoFound);

  } catch(e) {
    console.error('Goto error:', e);
  }

  await browser.close();
})();
