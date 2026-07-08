const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

function copyIfExists(src, dest) {
  if (fs.existsSync(src)) {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      fs.cpSync(src, dest, { recursive: true });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

copyIfExists(path.join(root, 'index.html'), path.join(publicDir, 'index.html'));
copyIfExists(path.join(root, 'assets'), path.join(publicDir, 'assets'));
copyIfExists(path.join(root, 'robots.txt'), path.join(publicDir, 'robots.txt'));
copyIfExists(path.join(root, 'site.webmanifest'), path.join(publicDir, 'site.webmanifest'));
copyIfExists(path.join(root, 'favicon.ico'), path.join(publicDir, 'favicon.ico'));

if (!fs.existsSync(path.join(publicDir, 'index.html'))) {
  console.error('Build failed: public/index.html was not found.');
  process.exit(1);
}

console.log('TaxMate build complete. Vercel output directory: public');