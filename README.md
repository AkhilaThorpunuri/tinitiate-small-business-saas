# TINITIATE AI – Business Solutions Showcase

A branded React + TypeScript + Vite website that guides visitors through three steps:

1. **Home:** choose a business category (Supermarkets & Retail, Online Apparel, or Online Food Businesses).
2. **Industry problems:** review the relevant operational challenges for that category.
3. **Solution demonstration:** select a problem to open its dedicated page with the matching embedded MP4 demonstration, problem explanation, proposed solution, and expected outcome.

## Branding
- Original TINITIATE AI logo: `public/assets/tinitiate-logo.png`
- Black background, yellow accent (`#F3FF00`), and white typography.
- Contact email: `contact@tinitiateai.com`
- India WhatsApp: `+91 6309123485`

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Routes

- `/` – industry categories
- `/industry/supermarket` – supermarket problems
- `/industry/apparel` – online apparel problems
- `/industry/food` – online food problems
- `/industry/:industry/problem/:problemId` – individual solution and video page

## Demonstration videos

All 14 MP4 files are included in `public/demos/`. Each problem entry in `src/App.tsx` maps to the corresponding video filename. Videos are served locally by Vite and embedded with native HTML video controls.

**Demonstration disclaimer:** the videos show animated product-style walkthroughs with illustrative sample data. They are not recordings of a connected production application. The contact form opens a prefilled email draft and does not store submissions on a server.


## Video playback troubleshooting

The demonstration videos are stored in `public/demos/`. The application references them at `/demos/<video-name>.mp4` (or relative to Vite's configured base path).

**Do not open `index.html` directly from File Explorer.** Browser security restrictions can prevent public assets from loading when the page is opened using a `file://` URL. Start the app through Vite:

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173/`).

For a production preview:

```bash
npm run build
npm run preview
```

All 14 videos in this package have been re-encoded as browser-compatible H.264 MP4 (`yuv420p`) and optimized for progressive playback (`faststart`). Keep the `public/demos` folder in place when deploying; do not move it into `src`.


## Realistic solution demonstration videos

The `public/demos/` directory contains 14 browser-compatible MP4 demonstrations covering supermarket operations, online apparel, and online food businesses. Each clip uses realistic business imagery with a staged workflow explanation: business scene, system process, automation or alert, and business outcome. The inventory, order, customer, and dashboard values shown are illustrative demo data; they are not connected to a live POS, ERP, marketplace, or restaurant system.
