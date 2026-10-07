# Fermor homepage

React (Vite) + plain CSS. No UI or chart libraries.

## Run
```
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/
```
Deploy on Vercel or Netlify: build `npm run build`, output `dist`.

## The idea
Fermor's promise is **understand, act, grow**. The homepage doesn't describe that, it lets you do it:
- **Hero:** a sample dashboard (net worth, spending, one plain-English next step).
- **Who it's for:** three situations, so a visitor knows in seconds if this is for them.
- **How it works:** three working tabs. *Understand* (spending by week, month or year), *Act* (switch on steps and see the yearly impact), *Grow* (SIP projector with sliders and a chart).
- **Health check:** four questions, scored result with a next step. Gives the visitor a reason to stay and a reason to sign up.
- **Privacy**, then a single sign-up call to action.

## Decisions
- **Audience and currency:** built for India. Amounts use the en-IN format and lakh/crore shorthand (`src/lib.js`).
- **Look:** warm paper background, deep green, one coral accent; Fraunces for headlines, DM Sans for text. Chosen to feel calm and trustworthy rather than the usual dark gradient fintech look.
- **No libraries for charts:** hand-written SVG keeps the bundle small (~50 kB gzipped).
- **Accessibility:** semantic tabs, labelled controls, visible focus, live regions on results, reduced motion respected, skip link.
- **Honesty:** all numbers are marked as sample or illustrative. Privacy points and copy are placeholders to confirm with the real product.
- **Sign-up form** only shows a confirmation; connect it to a backend before launch.
