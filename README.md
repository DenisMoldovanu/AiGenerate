# Wordwell — Scale Your Business

A modern marketing website for Wordwell, a performance marketing agency. Built with HTML, Tailwind CSS, vanilla JavaScript, and Vite.

## Tech Stack

- **HTML5** — Semantic markup
- **Tailwind CSS** — Utility-first styling
- **PostCSS** — CSS processing
- **Vite** — Build tool and dev server
- **Swiper** — Touch-enabled carousels
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

Starts the Vite dev server (default: http://localhost:5173). The page hot-reloads on changes.

### Build

```bash
npm run build
```

Outputs a production build to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

## Project Structure

```
├── index.html              # Main HTML entry point
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── src/
    ├── css/
    │   └── main.css        # Tailwind imports + custom styles
    ├── js/
    │   └── main.js         # Mobile menu, Swiper setup
    └── images/
        ├── icons/          # SVG icons
        ├── solutions/      # Solution-related assets
        ├── partners/       # Partner logos
        └── homepage/       # Hero and section images
```

## Sections

- **Header** — Navigation, Locations button, Book a Strategy Call CTA, mobile menu
- **Hero** — Results Beyond Words headline, social links, hero image
- **Image Strip** — Three-panel image layout
- **Partners** — Logo carousel (Swiper, auto-scroll)
- **Our Solutions** — Problem/solution cards
- **Core Packages** — Growth, Performance, Scalable Growth packages
- **Case Studies** — Project showcase grid
- **Our Process** — Five-step growth model timeline
- **Our Team** — 67+ professionals, team member carousel (Swiper)
- **Blog** — Featured article + related posts, newsletter signup
- **Testimonials** — Client feedback cards
- **CTA Banner** — Scale Your Business call-to-action
- **Join Us** — Careers and Partnership cards
- **Newsletter Banner** — Let’s Grow Together signup
- **Footer** — Contact info, navigation, legal links

## Design Tokens

Defined in `tailwind.config.js`:

| Token | Value |
|-------|-------|
| `brand-primary` | #780000 |
| `brand-primary-hover` | #5C0000 |
| `brand-cta` | #B21C0E |
| `locations-bg` | #F9F3F3 |
| `hero-gradient` | linear-gradient(#780000 → #410303) |

## Browser Support

Targets current browsers. Polyfills are not included by default.

## License

ISC
