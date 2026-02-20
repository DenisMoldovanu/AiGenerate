# Wordwell — Scale Your Business

A modern marketing website for Wordwell, a performance marketing agency. Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Next.js 16** — React framework with App Router
- **React 19** — UI library
- **Tailwind CSS v4** — Utility-first styling
- **TypeScript** — Type safety
- **Embla Carousel** — Touch-enabled carousels
- **Manrope** — Primary typeface
- **Stack Sans Notch** — Display font for large numbers

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Next.js dev server (default: http://localhost:3000). The page hot-reloads on changes.

### Build

```bash
npm run build
```

Creates an optimized production build.

### Production

```bash
npm run start
```

Serves the production build locally.

## Project Structure

```
├── app/
│   ├── globals.css        # Tailwind imports, @theme, custom styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, Partners, etc.)
│   └── ui/                # Reusable Button, Link, Container
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
├── public/
│   └── images/            # Static assets (icons, logos)
├── package.json
├── postcss.config.mjs     # PostCSS (@tailwindcss/postcss)
├── next.config.ts
└── tsconfig.json
```

## Sections

- **Header** — Navigation, Locations button, Book a Strategy Call CTA, mobile menu
- **Hero** — Results Beyond Words headline, social links, hero image
- **Image Strip** — Three-panel image layout with video play button
- **Partners** — Logo marquee (auto-scroll)
- **Our Solutions** — Problem/solution cards
- **Core Packages** — Growth, Performance, Scalable Growth packages
- **Case Studies** — Project showcase grid
- **Our Process** — Five-step growth model timeline
- **Our Team** — 67+ professionals, team member carousel (Embla)
- **Blog** — Featured article + related posts, newsletter signup
- **Testimonials** — Client feedback cards
- **CTA Banner** — Scale Your Business call-to-action
- **Join Us** — Careers and Partnership cards
- **Newsletter Banner** — Let's Grow Together signup
- **Footer** — Contact info, navigation, legal links

## Design Tokens

Defined in `app/globals.css` via `@theme`:

| Token | Value |
|-------|-------|
| `--color-brand-primary` | #780000 |
| `--color-brand-primary-hover` | #5c0000 |
| `--color-brand-cta` | #b21c0e |
| `--color-locations-bg` | #f9f3f3 |
| Hero gradient | linear-gradient(#780000 → #410303) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## License

ISC
