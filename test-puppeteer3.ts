import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://neurocontent-one.vercel.app/', { waitUntil: 'networkidle0', timeout: 15000 });
    
    const mediaRects = await page.evaluate(() => {
      const els = [...document.querySelectorAll('img, video')];
      return els.map(e => {
        const rect = e.getBoundingClientRect();
        return {
          tag: e.tagName,
          src: e.src,
          width: rect.width,
          height: rect.height,
          visible: rect.width > 0 && rect.height > 0
        };
      });
    });

    console.log(mediaRects);
  } catch(e) {
    console.error(e);
  }

  await browser.close();
})();
