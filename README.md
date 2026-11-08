# News5 Next.js

Complete React/Next.js conversion of the News5 template: 342 App Router pages, all 11 demos, the demo preview landing page, blog archives/details, author/category pages, shop/cart/checkout layouts, account screens, FAQ, policy pages, coming soon and 404 designs. Uses TypeScript and the original Bootstrap/UniCore CSS and SCSS; no Tailwind.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the original demo preview. The main news layout is `/main`. Other homepages are `/demo-two`, `/demo-three`, `/demo-four`, `/demo-five`, `/demo-six`, `/demo-seven`, `/demo-eight`, `/demo-nine`, `/demo-ten` and `/demo-eleven`.

Inner pages retain their original names without the extension, e.g. `/main/blog-details`, `/demo-three/blog`, `/demo-nine/shop-product-detail` and `/main/sign-in`. `src/data/routes.json` lists every converted route.

On Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

## Project structure

- `src/app/`: individual `.tsx` routes and page metadata.
- `src/components/template/`: shared headers, footers, overlays and page sections, rendered as real JSX.
- `src/components/DemoContext.tsx`: demo-aware Next.js links that keep visitors in their selected theme.
- `src/components/TemplateShell.tsx`: original page classes and theme stylesheet selection.
- `src/components/useTemplateRuntime.ts`: browser initialization after page hydration, dark mode persistence, menus, sliders, cookie notices and lazy videos, including client navigation lifecycle.
- `public/assets/`: original images, fonts, stylesheets and vendor scripts.
- `src/styles/scss/`: original editable SCSS sources; compiled CSS is already included in assets.

The app has no HTML files or runtime HTML injection. It does not require the original template directory to run or build. Google Fonts are loaded by the original stylesheets and need an internet connection.

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

The one-time migration script is retained for reference: `npm run convert:template -- ../news5-html/template/src`. It regenerates converted routes and shared components, so preserve manual edits before rerunning it. Known template typos in author links, ad/account images and the main theme stylesheet path are corrected during migration.
