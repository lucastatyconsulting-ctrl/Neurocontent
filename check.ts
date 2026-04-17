import fs from 'fs';
const files = fs.readdirSync('public');
files.forEach(f => {
  const stat = fs.statSync(`public/${f}`);
  console.log(f, stat.size / 1024 / 1024, 'MB');
});
