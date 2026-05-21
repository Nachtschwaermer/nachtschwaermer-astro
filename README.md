# Nüsser Nachtschwärmer

Static one-page website for the Schützenzug _Nüsser Nachtschwärmer_, a Neuss-based group founded in autumn 1985 that joins the [Nüsser Schützenfest](https://www.schuetzenfest-neuss.de/) each year. The site presents the zug's history, current roster, statistics, and remembers deceased members. All site content is in German.

## Tech stack

- [Astro 6](https://astro.build/) static site generator
- [Tailwind CSS 4](https://tailwindcss.com/) via the official Vite plugin
- [Vite 7](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Jarallax](https://github.com/nk-o/jarallax) for parallax backgrounds
- Self-hosted [@fontsource](https://fontsource.org/) fonts — Roboto (body), Montserrat (titles), Sanchez (slab accents)
- [Fathom Analytics](https://usefathom.com/) for privacy-friendly traffic stats

## Prerequisites

- **Node.js ≥ 22.12.0** (`.nvmrc` targets Node 24)
- **pnpm** (version pinned via `packageManager` in `package.json`)

## Getting started

```bash
pnpm install     # Install dependencies
pnpm dev         # Start the dev server (http://localhost:4321)
pnpm build       # Build the production site to ./dist
pnpm preview     # Preview the production build locally
pnpm lint        # Run ESLint + Prettier check
pnpm lint:fix    # Auto-fix ESLint + Prettier issues
```

## Project structure

```
src/
├── assets/             # Images processed by astro:assets
├── components/         # Section components (Hero, MemberRoster, Quote, …)
├── content.config.ts   # Zod schemas for the persons + deceased collections
├── layouts/
│   └── Layout.astro    # HTML shell, parallax init, fonts, footer, analytics
├── pages/
│   ├── index.astro     # The single page that composes all sections
│   ├── 404.astro       # Custom 404 page
│   ├── _about.md       # About text + statistics + quote (frontmatter YAML)
│   ├── _persons/       # One markdown file per active member
│   └── _deceased/      # One markdown file per deceased member
└── styles/
    └── main.css        # Tailwind 4 CSS-first config + custom utilities
public/                 # Favicons, manifest, fonts, static images
```

## Editing content

Most ongoing maintenance is content rather than code.

**Members** — add or edit files in `src/pages/_persons/`. Filenames control sort order (the numeric-prefixed files appear first; everything else is alphabetic). Each file follows the schema in `src/content.config.ts`:

```markdown
---
title: Vorname Nachname
rank: Leutnant # optional
---
```

**Deceased members** — same shape, in `src/pages/_deceased/`.

**About section, statistics, and quote** — edit the YAML frontmatter and prose in `src/pages/_about.md`.

## CI/CD

- **Lint** GitHub Action runs ESLint + Prettier on pushes and PRs to `main`
- **CodeQL** scans JavaScript on push, PR, and weekly on a schedule
- **Renovate** keeps dependencies up to date (config extends [`github>derteaser/renovate-presets`](https://github.com/derteaser/renovate-presets))
- No automated test suite

## License

Private project. All rights reserved by the Nüsser Nachtschwärmer.
