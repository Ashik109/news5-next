import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parse } from 'parse5';
import { adapter } from 'parse5-htmlparser2-tree-adapter';

// One-time migration: the generated application never reads HTML at runtime.
const root = process.cwd();
const source = path.resolve(process.argv[2] || '../news5-html/template/src');
const write = (file, value) => {
  const target = path.join(root, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, value);
};
const find = (node, name) => node.name === name ? node : node.children?.map(n => find(n, name)).find(Boolean);
const elements = node => (node.children || []).filter(n => n.type === 'tag' || n.type === 'style');
const text = node => node.data || node.children?.map(text).join('') || '';
const quote = JSON.stringify;
const demos = fs.readdirSync(source).filter(x => x === 'main' || x.startsWith('demo-'));
const files = ['index.html', ...demos.flatMap(d => fs.readdirSync(path.join(source, d)).filter(f => f.endsWith('.html')).map(f => `${d}/${f}`))];
const routes = new Set(files.map(f => '/' + f.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '')));
const attrNames = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', colspan: 'colSpan', rowspan: 'rowSpan', autocomplete: 'autoComplete', autofocus: 'autoFocus', playsinline: 'playsInline', readonly: 'readOnly', maxlength: 'maxLength', minlength: 'minLength', srcset: 'srcSet', usemap: 'useMap', crossorigin: 'crossOrigin', contenteditable: 'contentEditable', spellcheck: 'spellCheck', frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen', 'stroke-width': 'strokeWidth', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', viewbox: 'viewBox', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin', 'xlink:href': 'xlinkHref' };
const booleans = new Set(['hidden', 'required', 'disabled', 'multiple', 'loop', 'muted', 'controls', 'playsinline', 'readonly', 'open', 'reversed', 'novalidate']);
const voids = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const broken = new Set();

function url(value, file) {
  value = value.trim().replace(/\.htmll(?=[?#]|$)/, '.html');
  if (value.includes('/mailto:')) value = value.slice(value.indexOf('mailto:'));
  if (/(^|\/)to_top$/.test(value)) return '#to_top';
  if (!value || /^(?:[a-z][\w+.-]*:|\/\/|#|\?)/i.test(value)) return value;
  const index = value.search(/[?#]/);
  const pathname = index < 0 ? value : value.slice(0, index);
  const suffix = index < 0 ? '' : value.slice(index);
  const resolved = path.posix.normalize(path.posix.join('/', path.posix.dirname(file), pathname));
  if (resolved.startsWith('/assets/')) {
    const asset = fs.existsSync(path.join(source, resolved)) ? resolved : resolved.replace('/common/my-account.jpg', '/common/my-accounts.jpg').replace('/common/ad-mobile.jpg', '/common/ad-slot-mobile.jpg');
    return asset + suffix;
  }
  if (/\.html$/.test(resolved)) {
    const route = resolved.replace(/page-author\.html$/, 'blog-author.html').replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (!routes.has(route)) broken.add(`${file}: ${value}`);
    return route + suffix;
  }
  return (resolved.replace(/\/$/, '') || '/') + suffix;
}

function jsx(node, file, depth = 0) {
  if (node.type === 'text') {
    const value = node.data.replace(/\s+/g, ' ');
    return value.trim() ? `{${quote(value)}}` : '';
  }
  if (!node.name || ['script', 'noscript'].includes(node.name)) return '';
  const a = { ...node.attribs };
  let tag = node.name === 'a' && a.href && /\.html(?:[?#]|$)/.test(a.href) && !/^(https?:|\/\/)/.test(a.href) ? 'Link' : node.name;
  if (tag === 'Link' && file.includes('/')) {
    const resolved = url(a.href, file);
    const demo = file.split('/')[0];
    if (resolved === `/${demo}` || resolved.startsWith(`/${demo}/`)) {
      tag = 'SiteLink';
      a.href = resolved.slice(demo.length + 1) || '/';
    }
  }
  const props = [];
  if (tag === 'Link') props.push('prefetch={false}');
  if (node.name === 'img' && !('alt' in a)) a.alt = '';
  if (node.name === 'img' && a['data-src'] && (!a.src || a.src.includes('placeholder'))) a.src = a['data-src'];
  if (node.name === 'select') {
    const selected = node.children?.flatMap(n => n.name === 'option' && 'selected' in n.attribs ? [n] : []).at(0);
    if (selected) a.defaultValue = selected.attribs.value ?? text(selected);
  }
  for (let [key, value] of Object.entries(a)) {
    if (/^on/i.test(key) || key === 'selected' || key === 'autofocus') continue;
    if (['href', 'src', 'data-src', 'poster', 'action'].includes(key) && !(tag === 'SiteLink' && key === 'href')) value = url(value, file);
    if (key === 'style') {
      const style = {};
      for (const rule of value.split(';')) {
        const i = rule.indexOf(':');
        if (i < 0) continue;
        const name = rule.slice(0, i).trim();
        style[name.startsWith('--') ? name : name.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = rule.slice(i + 1).trim();
      }
      props.push(`style={${quote(style)} as React.CSSProperties}`);
      continue;
    }
    if (key === 'checked') { props.push('defaultChecked'); continue; }
    if (key === 'value' && ['input', 'textarea'].includes(node.name)) key = 'defaultValue';
    if (['tabindex', 'colspan', 'rowspan', 'rows', 'cols', 'maxlength', 'minlength', 'size', 'start', 'span'].includes(key)) {
      props.push(`${attrNames[key] || key}={${Number(value)}}`);
      continue;
    }
    if (booleans.has(key)) { props.push(attrNames[key] || key); continue; }
    // JSX quoted attributes do not decode JavaScript escapes such as \n.
    // Preserve multiline Swiper/animation options as actual string expressions.
    props.push(`${attrNames[key] || key}=${/[\r\n"\\]/.test(value) ? `{${quote(value)}}` : quote(value)}`);
  }
  const opening = `<${tag}${props.length ? ' ' + props.join(' ') : ''}`;
  if (voids.has(node.name)) return opening + ' />';
  const children = (node.children || []).map(n => jsx(n, file, depth + 1)).filter(Boolean);
  if (node.name === 'textarea') return opening + ` defaultValue={${quote(text(node))}} />`;
  if (!children.length) return opening + `></${tag}>`;
  const indent = '  '.repeat(depth);
  return opening + '>\n' + children.map(c => indent + '  ' + c).join('\n') + '\n' + indent + `</${tag}>`;
}

const documents = files.map(file => {
  const doc = parse(fs.readFileSync(path.join(source, file), 'utf8'), { treeAdapter: adapter });
  const body = find(doc, 'body');
  const head = find(doc, 'head');
  const styles = elements(head).filter(n => n.name === 'link' && n.attribs.rel === 'stylesheet').map(n => url(n.attribs.href, file).replace('.min.purge.css', '.min.css'));
  return { file, body, styles, title: text(find(head, 'title')), nodes: elements(body).map(node => ({ node, code: jsx(node, file) })).filter(x => x.code) };
});

// Deduplicate actual repeated JSX into shared headers, footers, and overlays.
const occurrences = new Map();
for (const doc of documents) for (const { code } of doc.nodes) occurrences.set(code, (occurrences.get(code) || 0) + 1);
const shared = new Map();
const counts = {};
const generatedComponents = path.join(root, 'src/components/template');
if (fs.existsSync(generatedComponents)) {
  for (const file of fs.readdirSync(generatedComponents).filter(name => name.endsWith('.tsx'))) fs.unlinkSync(path.join(generatedComponents, file));
}
for (const doc of documents) {
  for (const entry of doc.nodes) {
    if (occurrences.get(entry.code) < 2 || shared.has(entry.code)) continue;
    const id = entry.node.attribs.id || entry.node.name;
    const pascal = value => value.replace(/[^a-z0-9]+(.)/gi, (_, c) => c.toUpperCase()).replace(/^./, c => c.toUpperCase()).replace(/^(?=\d)/, 'Page');
    const base = ({ 'uc-header': 'Header', 'uc-footer': 'Footer', 'uc-search-modal': 'SearchModal', 'uc-menu-panel': 'MobileMenu', 'uc-account-modal': 'AccountModal', 'uc-newsletter-modal': 'NewsletterModal', 'uc-gdpr-notification': 'CookieNotice' })[id] || (id === 'wrapper' ? `${pascal(path.basename(doc.file, '.html'))}Content` : entry.node.attribs.class?.includes('backtotop-wrap') ? 'BackToTop' : pascal(id));
    counts[base] = (counts[base] || 0) + 1;
    const name = `${base}${counts[base]}`;
    shared.set(entry.code, name);
    write(`src/components/template/${name}.tsx`, `${entry.code.includes('<Link ') ? 'import Link from "next/link";\n' : ''}${entry.code.includes('<SiteLink ') ? 'import { SiteLink } from "@/components/DemoContext";\n' : ''}\nexport default function ${name}() {\n  return (\n    ${entry.code}\n  );\n}\n`);
  }
}
const manifest = [];
for (const doc of documents) {
  const route = '/' + doc.file.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/$/, '');
  const folder = `src/app${route === '/' ? '' : route}`;
  const imports = new Set();
  const content = doc.nodes.map(({ code }) => {
    const name = shared.get(code);
    if (!name) return code;
    imports.add(name);
    return `<${name} />`;
  }).join('\n');
  const theme = doc.styles.find(s => s.includes('/theme/'));
  write(`${folder}/page.tsx`, `import type { Metadata } from "next";\n${content.includes('<Link ') ? 'import Link from "next/link";\n' : ''}${content.includes('<SiteLink ') ? 'import { SiteLink } from "@/components/DemoContext";\n' : ''}import TemplateShell from "@/components/TemplateShell";\n${[...imports].map(n => `import ${n} from "@/components/template/${n}";`).join('\n')}\n\nexport const metadata: Metadata = { title: ${quote(doc.title || 'News5')} };\n\nexport default function Page() {\n  return (\n    <TemplateShell demo=${quote(doc.file.includes('/') ? doc.file.split('/')[0] : 'main')} theme=${quote(theme)} bodyClass=${quote(doc.body.attribs.class || '')}>\n${content}\n    </TemplateShell>\n  );\n}\n`);
  manifest.push({ route: route || '/', source: doc.file, theme, hash: crypto.createHash('sha256').update(content).digest('hex').slice(0, 12) });
}

fs.cpSync(path.join(source, 'assets'), path.join(root, 'public/assets'), {
  recursive: true,
  filter: file => !path.basename(file).startsWith('.') && !/\.(?:html?|map)$/i.test(file) && !file.includes(`${path.sep}scss`),
});
fs.cpSync(path.join(source, 'assets/scss'), path.join(root, 'src/styles/scss'), { recursive: true });
fs.copyFileSync(path.join(source, 'favicon.ico'), path.join(root, 'src/app/favicon.ico'));
// These helpers now run after React has hydrated and on subsequent client routes.
for (const name of ['swiper-helper.js', 'anime-helper.js']) {
  const target = path.join(root, 'public/assets/js/helpers', name);
  let code = fs.readFileSync(target, 'utf8').replaceAll('document.addEventListener("DOMContentLoaded",', 'window.news5Ready(');
  if (name === 'swiper-helper.js') {
    // React owns slider initialization/cleanup; retain the HTML template's parser.
    code = code.replace('window.news5Ready((()=>{dataAttrHelpers.watchDataAttr("data-uc-swiper",l)})),', '');
    code = code.replace('const r=()=>{const e=new t(n,a);', 'const r=()=>{if(!n.isConnected||n.swiper&&!n.swiper.destroyed)return;const e=new t(n,a);');
    code = code.replace('window.addEventListener("load",(()=>e.update()),{once:!0})', 'window.news5Ready((()=>e.update()))');
  }
  fs.writeFileSync(target, code);
}
for (const name of ['page.module.css']) {
  const file = path.join(root, 'src/app', name);
  if (fs.existsSync(file)) fs.unlinkSync(file);
}
write('src/data/routes.json', JSON.stringify(manifest, null, 2) + '\n');
write('src/app/not-found.tsx', 'export { default } from "./main/404/page";\n');
console.log(`Converted ${documents.length} pages and ${shared.size} shared components.`);
if (broken.size) console.log('Unresolved source links:', [...broken]);
