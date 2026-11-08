import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '@playwright/test';

const reference = path.resolve(process.env.NEWS5_HTML_REFERENCE || '../news5-html/template/dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const file = path.resolve(reference, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(reference + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(3107, '127.0.0.1', resolve));
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE });
const context = await browser.newContext();
await context.addInitScript(() => { localStorage.setItem('newsletterModalShown', 'true'); localStorage.setItem('gdprAccepted', 'true'); });
const collect = () => [...document.querySelectorAll('[data-uc-swiper]')].map(el => {
  const s = el.swiper;
  if (!s) return { attr: el.getAttribute('data-uc-swiper'), missing: true };
  s.autoplay?.stop();
  return { attr: el.getAttribute('data-uc-swiper'), width: Math.round(s.width), slideWidth: s.params.slidesPerView === 'auto' && s.params.direction === 'horizontal' ? null : Math.round(s.slides[0]?.getBoundingClientRect().width || 0), count: s.slides.length, perView: s.params.slidesPerView, gap: s.params.spaceBetween, direction: s.params.direction, loop: s.params.loop, speed: s.params.speed, centered: s.params.centeredSlides, bounds: s.params.centeredSlidesBounds, free: typeof s.params.freeMode === 'boolean' ? s.params.freeMode : !!s.params.freeMode?.enabled, autoplay: s.params.autoplay, next: s.navigation?.nextEl?.length ?? (s.navigation?.nextEl ? 1 : 0), dots: s.pagination?.bullets?.length || 0, thumbs: !!s.thumbs?.swiper, initial: s.params.initialSlide, effect: s.params.effect };
});
const report = [];
const demos = ['main', 'demo-two', 'demo-three', 'demo-four', 'demo-five', 'demo-six', 'demo-seven', 'demo-eight', 'demo-nine', 'demo-ten', 'demo-eleven'];
try {
  for (const width of [1440, 390]) {
    for (const route of process.argv.length > 2 ? process.argv.slice(2) : [...demos, 'main/shop-product-detail', 'main/shop-product-detail-2']) {
      const pages = await Promise.all([context.newPage(), context.newPage()]);
      await Promise.all(pages.map(p => p.setViewportSize({ width, height: 1000 })));
      const urls = [`http://127.0.0.1:3107/${route}${route.includes('/') ? '.html' : '/index.html'}`, `${process.env.NEWS5_NEXT_URL || 'http://localhost:3000'}/${route}`];
      await Promise.all(pages.map((p, i) => p.goto(urls[i])));
      await Promise.all(pages.map(p => p.waitForFunction(() => [...document.querySelectorAll('[data-uc-swiper]')].every(el => !!el.swiper), null, { timeout: 15000 })));
      await Promise.all(pages.map(p => p.waitForTimeout(2000)));
      const [html, next] = await Promise.all(pages.map(p => p.evaluate(collect)));
      const differences = [];
      for (let i = 0; i < Math.max(html.length, next.length); i++) {
        if (JSON.stringify(html[i]) !== JSON.stringify(next[i])) differences.push({ slider: i, html: html[i], next: next[i] });
      }
      report.push({ width, route, differences, html, next });
      console.log(JSON.stringify({ width, route, count: [html.length, next.length], differences }));
      await Promise.all(pages.map(p => p.close()));
    }
  }
} finally {
  fs.mkdirSync('test-results', { recursive: true });
  fs.writeFileSync('test-results/slider-comparison.json', JSON.stringify(report, null, 2));
  if (report.some(entry => entry.differences.length)) process.exitCode = 1;
  await browser.close();
  server.close();
}
