import { JSDOM } from 'jsdom';

async function run() {
  const html = await fetch('https://neurocontent-one.vercel.app/').then(r => r.text());
  console.log("FETCHED HTML length", html.length);
  
  const dom = new JSDOM(html, {
    url: 'https://neurocontent-one.vercel.app/',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
  });

  dom.window.addEventListener('error', (event) => {
    console.log('JSDOM Error:', event.error?.message || event.message);
  });

  dom.window.addEventListener('unhandledrejection', (event) => {
    console.log('JSDOM Unhandled Rejection:', event.reason);
  });

  setTimeout(() => {
    console.log('App HTML after 3 seconds length:', dom.window.document.getElementById('root')?.innerHTML.length);
    if(dom.window.document.getElementById('root')?.innerHTML.length === 0) {
      console.log('Root is EMPTY! This means React crashed or failed to render.');
    }
    process.exit(0);
  }, 3000);
}

run();
