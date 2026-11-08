import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const routes = JSON.parse(fs.readFileSync('src/data/routes.json', 'utf8'));
const routeSet = new Set(routes.map(r => r.route));
const missingAssets = new Set();
const missingRoutes = new Set();
const htmlFiles = [];
let pages = 0;
function walk(folder) {
  for (const item of fs.readdirSync(folder, { withFileTypes: true })) {
    const file = path.join(folder, item.name);
    if (item.isDirectory()) { walk(file); continue; }
    if (/\.html?$/i.test(file)) htmlFiles.push(file);
    if (!file.endsWith('.tsx')) continue;
    if (item.name === 'page.tsx') pages++;
    const source = fs.readFileSync(file, 'utf8').replace(/(<SiteLink[^>]*href=")(\/[^"?#]*)([?#][^"]*)?"/g, (_, prefix, href, suffix = '') => `${prefix}/main${href === '/' ? '' : href}${suffix}"`);
    assert(!source.includes('dangerouslySetInnerHTML'), `Raw HTML rendering in ${file}`);
    for (const match of source.matchAll(/(?:src|href|data-src|theme)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
      const value = match[1];
      if (value.startsWith('/assets/')) {
        if (!fs.existsSync(path.join('public', value))) missingAssets.add(value);
      } else if (!routeSet.has(value) && value !== '/favicon.ico') missingRoutes.add(value);
    }
  }
}
walk('src');
walk('public');
console.log(JSON.stringify({ pages, expectedPages: routes.length, htmlFiles, missingAssets: [...missingAssets], missingRoutes: [...missingRoutes] }, null, 2));
assert.equal(pages, routes.length);
assert.equal(htmlFiles.length, 0);
assert.equal(missingAssets.size, 0);
assert.equal(missingRoutes.size, 0);
