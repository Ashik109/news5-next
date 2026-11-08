# News5 QA report

Date: 2026-11-08 (Asia/Dhaka)

Application revision audited: `43d31f1`. This review adds reusable audit tooling and tests; it does not change application behavior.

## Results

| Check | Result |
| --- | --- |
| Production build and TypeScript | Passed; 809 pages prerendered |
| ESLint | Passed |
| Source route/asset verification | Passed; 419 page modules and 77 slug route patterns |
| Rendered URL crawl | All 1,802 known URLs returned their pages successfully |
| Rendered internal links | No unknown internal route targets |
| Slug title/content selection | No page-title or H1 mismatches across valid detail URLs |
| Local asset references | 459 unique image/style/font paths checked; none missing |
| Envato/ThemeForest links | None remain in rendered page links |
| Existing browser regression suite | 31 passed |
| Additional UI checks | 4 passed |
| Original HTML slider comparison | 100 slider instances compared across desktop/mobile; no settings/layout differences |
| Production dependency audit | 0 reported vulnerabilities |

Browser checks cover all demo homepages at 1440px and 390px, main inner-page layouts, slug-to-slug navigation, layout variants, metadata, legacy redirects, unknown-slug 404s, menus, search overlays, dark mode, responsive sliders, gallery thumbnails, autoplay and back navigation.

Additional checks cover account modal tabs and native required-field validation, cart panel navigation, product review tabs, image lightboxes, cookie acceptance and theme persistence after reload.

Machine-readable summaries: [site-audit.json](site-audit.json), [slider-audit.json](slider-audit.json). The form and placeholder counts in the crawl summary include repeated shared UI across every crawled URL; they are not counts of distinct features.

## Functional scope and remaining limitations

This remains a frontend template. The following screens and controls have no backend integration:

- Account creation/login, OAuth and password reset.
- Persistent cart management, stock validation, checkout payments and real orders.
- Search results, newsletter delivery, contact submissions, comments and review storage.
- Shop sorting/filtering and sample content are template UI/data, not a live commerce/news service.

The successful browser checks validate interface behavior, routing and native field validation. They do not establish that these backend-dependent workflows submit or store real data. Intentional `#` placeholders, including the requested marketplace replacements, remain in the template.

The full dependency audit reports 8 moderate dependency entries in development-only lint tooling. These trace to the [minimatch advisory GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). The production-only audit is clear. The suggested automatic fix includes a breaking ESLint-config downgrade, so matching Next.js tooling was retained.

External service availability and offline Google Fonts behavior are outside the local route/asset audit. These results cover the tested Chromium desktop/mobile viewports; they are not a guarantee for every browser or future dependency change.

## Reproduce

```bash
npm run verify
npm run lint
npm run build
npm run start -- -p 3108
```

With that production server running, set `NEWS5_NEXT_URL` and `PLAYWRIGHT_BASE_URL` to `http://127.0.0.1:3108`, then run:

```bash
npm run audit:site
npm run test:e2e
npm run test:sliders
```

The HTML comparison requires the original template `dist` directory. Set `NEWS5_HTML_REFERENCE` if its location differs. Install the Playwright Chromium browser first, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to an installed compatible browser.
