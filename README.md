# Cerberus CRM — Website

Marketing and application website for Cerberus CRM, built with Next.js 14, Tailwind CSS, and TypeScript. Deployed on Vercel.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Outfit (display), DM Sans (body), JetBrains Mono (code)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Root layout (nav, footer, fonts)
  page.tsx            # Homepage
  globals.css         # Tailwind + custom styles
  features/page.tsx   # Features page
  pricing/page.tsx    # Pricing page
  blog/page.tsx       # Blog index
  login/page.tsx      # Login page (future)
components/
  Navbar.tsx          # Global navigation
  Footer.tsx          # Global footer
```

## Brand Colors

- Primary: `#bd1e00` (Cerberus Red)
- Secondary: `#adb5b5` (Steel)
- Dark backgrounds: `#0a0a0a` → `#333333`

## Domain

Production: cerberuscrm.com (pending migration from GHL)
