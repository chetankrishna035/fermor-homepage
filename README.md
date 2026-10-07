# Fermor homepage

A responsive homepage for Fermor, built with React (Vite) and plain CSS. No UI or chart libraries.

**Live:** [fermor-homepage-zeta.vercel.app](https://fermor-homepage-zeta.vercel.app/)

## Run locally
```
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs dist/
```
Deployed on Vercel (build `npm run build`, output `dist`).

## The idea
Fermor's promise is **understand, act, grow**. Instead of describing that, the homepage lets you try it:

- **Hero:** a sample dashboard with net worth, spending and one plain-English next step.
- **Who it's for:** three situations, so a visitor knows quickly if this is for them.
- **How it works:** three working tabs. *Understand* shows spending by week, month or year. *Act* lets you switch on steps and see the yearly impact. *Grow* is a SIP projector with sliders and a chart.
- **Health check:** four questions with a scored result and a next step.
- **Privacy**, then a single sign-up call to action.

## Project structure
```
src/
  App.jsx          page layout, nav, who-it's-for, privacy, sign-up
  Hero.jsx         sample dashboard
  Journey.jsx      Understand / Act / Grow tabs
  HealthCheck.jsx  quiz
  lib.js           INR formatting, SIP calculation, hooks
  styles.css       all styles
```

## Decisions
- **Audience:** built for India. Amounts use the en-IN format with lakh and crore shorthand.
- **Look:** warm paper background, deep green, one coral accent. Fraunces for headlines and DM Sans for text. I wanted it to feel calm and trustworthy rather than the usual dark-gradient fintech style.
- **No chart library:** hand-written SVG keeps the bundle small (about 50 kB gzipped).
- **Accessibility:** semantic tabs, labelled controls, visible focus, live regions on results, skip link, and reduced motion respected.
- **Clear labelling:** all figures are marked as sample or illustrative, and projections carry a disclaimer.
- **Sign-up form:** shows a confirmation state only, since there is no backend in this brief.

## With more time
- Connect the sign-up form to a backend.
- Add tests for the SIP calculation.
- Add a calculator page for EMI, FD and tax.
- Replace the sample data with real product data.
