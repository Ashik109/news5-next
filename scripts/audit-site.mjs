import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { adapter } from 'parse5-htmlparser2-tree-adapter';

const base = process.env.NEWS5_NEXT_URL || 'http://127.0.0.1:3108';
const original = JSON.parse(fs.readFileSync('src/data/routes.json', 'utf8'));
const patterns = JSON.parse(fs.readFileSync('src/data/detail-routes.json', 'utf8'));
const catalog = JSON.parse(fs.readFileSync('src/data/detail-catalog.json', 'utf8'));
const routes = new Map(original.map(item => [item.route, {}]));
for (const { route, demo, kind } of patterns) {
  for (const record of Object.values(catalog[kind]).filter(item => item.demos.includes(demo))) {
    routes.set(route.replace('[slug]', record.slug), { title: record.title });
  }
}
const text = node => node?.data || node?.children?.map(text).join('') || '';
const failures = [];
const assets = new Set();
let forms = 0;
let placeholders = 0;
let complete = 0;

function visit(node, callback) {
  callback(node);
  node.children?.forEach(child => visit(child, callback));
}
function localAsset(url, page) {
  if (!url || /^(?:data:|blob:|https?:|\/\/|#)/i.test(url)) return;
  const resolved = new URL(url, new URL(page, base));
  if (resolved.origin !== new URL(base).origin) return;
  const file = decodeURIComponent(resolved.pathname);
  if (file.startsWith('/assets/')) assets.add(file);
}

async function check(route, expected) {
  try {
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(60000) });
    if (response.status !== 200) { failures.push({ route, issue: `HTTP ${response.status}` }); await response.body?.cancel(); return; }
    const document = parse(await response.text(), { treeAdapter: adapter });
    let title = '';
    const headings = [];
    visit(document, node => {
      const a = node.attribs;
      if (node.name === 'title') title = text(node);
      if (node.name === 'h1') headings.push(text(node).trim());
      if (!a) return;
      if (node.name === 'form') forms++;
      for (const name of ['src', 'data-src', 'poster']) localAsset(a[name], route);
      if (node.name === 'link' && a.rel === 'stylesheet') localAsset(a.href, route);
      if (node.name !== 'a' || !a.href) return;
      if (/^#/.test(a.href)) { placeholders++; return; }
      if (/^(?:https?:|\/\/|mailto:|tel:|javascript:)/i.test(a.href)) {
        if (/(?:envato\.(?:com|market)|themeforest\.net)/i.test(a.href)) failures.push({ route, issue: 'Marketplace link remains', link: a.href });
        return;
      }
      const target = new URL(a.href, new URL(route, base));
      const pathname = target.pathname.replace(/\/$/, '') || '/';
      if (pathname.startsWith('/assets/')) { assets.add(decodeURIComponent(pathname)); return; }
      if (!routes.has(pathname) && pathname !== '/favicon.ico') failures.push({ route, issue: 'Unknown internal link', link: a.href });
    });
    if (expected.title && (title !== `${expected.title} - News5` || !headings.includes(expected.title))) failures.push({ route, issue: 'Detail content/title mismatch', expected: expected.title, title, headings });
  } catch (error) { failures.push({ route, issue: error.message }); }
  finally {
    complete++;
    if (complete % 100 === 0 || complete === routes.size) console.log(`Checked ${complete}/${routes.size} routes; ${failures.length} issues`);
  }
}

const queue = [...routes];
let cursor = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < queue.length) {
    const [route, expected] = queue[cursor++];
    await check(route, expected);
  }
}));

// Check image/font URLs inside every local stylesheet as well as rendered assets.
function styles(folder) {
  for (const item of fs.readdirSync(folder, { withFileTypes: true })) {
    const file = path.join(folder, item.name);
    if (item.isDirectory()) styles(file);
    else if (file.endsWith('.css')) {
      const css = fs.readFileSync(file, 'utf8');
      const publicPath = '/' + path.relative('public', file).split(path.sep).join('/');
      for (const match of css.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)) localAsset(match[1], publicPath);
    }
  }
}
styles('public/assets');
for (const asset of assets) {
  if (!fs.existsSync(path.join('public', asset))) failures.push({ issue: 'Missing asset', asset });
}
const report = { routes: routes.size, checked: complete, uniqueAssets: assets.size, renderedForms: forms, placeholderLinks: placeholders, failures };
fs.mkdirSync('test-results', { recursive: true });
fs.writeFileSync('test-results/site-audit.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...report, failures: failures.slice(0, 50) }, null, 2));
if (failures.length) process.exitCode = 1;
