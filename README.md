# news5-nextjs

Complete React/Next.js conversion of all 342 News5 template screens, plus data-driven slug routes for blog and product details across all 11 demos. Includes the demo preview landing page, archives, author/category pages, shop/cart/checkout layouts, account screens, FAQ, policy pages, coming soon and 404 designs. Uses TypeScript and the original Bootstrap/UniCore CSS and SCSS; no Tailwind.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the original demo preview. The main news layout is `/main`. Other homepages are `/demo-two`, `/demo-three`, `/demo-four`, `/demo-five`, `/demo-six`, `/demo-seven`, `/demo-eight`, `/demo-nine`, `/demo-ten` and `/demo-eleven`.

Inner pages retain their original names without the extension, e.g. `/demo-three/blog` and `/main/sign-in`. `src/data/routes.json` lists the original converted routes.

Details use named slugs, e.g. `/main/blog/the-rise-of-gourmet-street-food-trends-and-top-picks` and `/main/shop/disney-toys`. Alternate layouts use `/main/blog-details-2/[slug]`, `/main/blog-details-3/[slug]` and `/main/shop-product-detail-2/[slug]`. The `/blog-details/[slug]` and `/shop-product-detail/[slug]` aliases are also supported. Every demo has the same route pattern under its own prefix.

Blog/product cards link to their own record; slug pages select the matching title, primary image, metadata and product prices/gallery. Unknown slugs return 404. Old flat detail URLs redirect to the template's default post or product. Canonical detail records are prerendered with `generateStaticParams`; alternate layouts can also render valid catalog slugs on demand.

On Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

## Project structure

- `src/app/`: individual `.tsx` routes and page metadata.
- `src/components/template/`: shared headers, footers, overlays and page sections, rendered as real JSX.
- `src/components/details/`: original detail layouts receiving a typed record.
- `src/data/detail-catalog.json` and `details.ts`: template-derived post/product data and validated slug lookups.
- `src/data/detail-routes.json`: all 77 slug route patterns across the 11 demos.
- `src/components/DemoContext.tsx`: demo-aware Next.js links that keep visitors in their selected theme.
- `src/components/TemplateShell.tsx`: original page classes and theme stylesheet selection.
- `src/components/useTemplateRuntime.ts`: browser initialization after page hydration, dark mode persistence, menus, sliders, cookie notices and lazy videos, including client navigation lifecycle.
- `src/components/templateSliders.ts`: initializes thumbnails before connected galleries, updates after fonts/images and responsive width changes, and destroys slider instances when leaving a page. Original HTML slider settings and breakpoints are preserved.
- `public/assets/`: original images, fonts, stylesheets and vendor scripts.
- `src/styles/scss/`: original editable SCSS sources; compiled CSS is already included in assets.

Application pages use React/TSX without runtime HTML injection. The developer guide is available at `/documentation` (also `/documentation/index.html`) on the deployed site, and [documentation/index.html](documentation/index.html) can also be opened directly in a browser. Static route handlers serve the guide and its logo. The application does not require the original template directory to run or build. Google Fonts are loaded by the original stylesheets and need an internet connection.

Cache Components is disabled so inactive demo pages unmount: their global theme styles and vendor widget IDs must not coexist in hidden cached page trees. React Compiler and normal Next.js routing/static prerendering remain enabled.

This is a frontend template: authentication, search results, payments, orders, newsletter delivery and contact submission need real backend integrations. Their original UI is included; no fake account/payment behavior is added.

## Validation and production

```bash
npm run verify
npm run lint
npm run build
npm run start
```

Browser checks (after a successful build):

```bash
npx playwright install chromium
npm run test:e2e
```

These verify all routes, demo layouts on desktop/mobile, missing assets, hydration/browser errors, menu/search overlays, dark mode and navigation. Screenshots and traces are written to the ignored `test-results/` directory.

For a complete rendered URL/link/asset audit, start production on port 3108 (`npm run start -- -p 3108`) and run `npm run audit:site`. Override `NEWS5_NEXT_URL` for another server. This crawls all valid static and slug URLs, validates selected detail titles, and checks local image/font/style references. See [the QA report](reports/QA-REPORT.md) for results and backend integration limits.

To compare slider layout/settings directly against the original HTML project, start Next.js on port 3000 and run `npm run test:sliders`. This checks all demo homepages and product galleries at 1440px and 390px. Set `NEWS5_NEXT_URL` for another preview URL and `NEWS5_HTML_REFERENCE` for a different original `dist` directory. Optional route arguments limit the comparison, e.g. `npm run test:sliders -- main demo-five`.

The one-time migration script is retained for reference: `npm run convert:template -- ../news5-html/template/src`. It regenerates converted routes and shared components, so preserve manual edits before rerunning it. Known template typos in author links, ad/account images and the main theme stylesheet path are corrected during migration.
