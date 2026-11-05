# TINITIATE AI — Small Business SaaS Solutions

A responsive React + TypeScript + Vite website for showcasing TINITIATE AI's business solutions.

## Included business categories

- Supermarket: stock management, stock wastage, payroll, customer and product masters, outreach, offers, social media.
- Online Apparel: catalog, order fulfilment, variant inventory, customer engagement, promotions.
- Online Food Business: menu, orders, delivery, customer marketing, offers and meal combos.

## User journey

1. Home page: choose a business category.
2. Business page: browse and search the available solution areas.
3. Solution detail page: understand the challenge, proposed solution, features, workflow and business benefits.
4. Contact: start an email enquiry with the selected solution in the subject.

## Requirements

- Node.js 18 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Branding

The supplied TINITIATE AI logo is included at `public/tinitiate-logo.png` and is displayed in the header and footer.

## Customization

- Business categories and solution content: `src/data/solutions.ts`
- Page components: `src/pages/`
- Shared header/footer/cards: `src/components/`
- Styling: `src/styles.css`

## Notes

This is a frontend showcase application. WhatsApp, SMS, POS, payroll calculations, live inventory, order processing and social publishing are presented as proposed solution capabilities; actual integrations and operational data require backend services, provider credentials and business-specific implementation.
