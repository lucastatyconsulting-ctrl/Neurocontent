import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

const files = globSync('src/components/*.tsx');
files.forEach(file => {
  if (file.includes('Hero.tsx')) return;
  let text = readFileSync(file, 'utf-8');
  text = text.replace(/py-16 md:py-20/g, 'py-8 md:py-12');
  writeFileSync(file, text);
});
