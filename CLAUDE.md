# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for "Nüsser Nachtschwärmer", a German Schützenfest society, built with Astro. All content is in German.

## Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # Run ESLint + Prettier check
pnpm lint:fix   # Auto-fix ESLint + Prettier issues
```

## Architecture

- **Astro 5** static site with **Tailwind CSS 4** (via Vite plugin) and **TypeScript**
- Single-page site: `src/pages/index.astro` is the only page, composed from components and markdown content
- **Content Collections** (`src/content.config.ts`): two collections loaded via glob — `persons` (members) and `deceased` — both from markdown files in `src/pages/_persons/` and `src/pages/_deceased/` with schema `{ title, rank? }`
- `src/pages/_about.md`: contains the about section text plus statistics and quote data in YAML frontmatter
- **Layout**: `src/layouts/Layout.astro` provides the full HTML shell including header parallax (Jarallax), navigation, footer, and Fathom analytics
- **Parallax**: Jarallax library used on hero and section backgrounds, initialized in Layout.astro
- **Fonts**: Self-hosted via @fontsource — Roboto (body), Montserrat (titles), Sanchez (slab accents)
- **Image optimization**: Uses Astro's `<Picture>` component from `astro:assets`
- Custom Tailwind theme in `src/styles/main.css` (screen-height utilities, jarallax classes)

## CI/CD

- **Renovate** bot handles automated dependency updates (config extends `github>derteaser/renovate-presets`)
- **CodeQL** GitHub Action scans JavaScript on pushes/PRs to master and weekly
- **Lint** GitHub Action runs ESLint + Prettier on pushes/PRs to master
- No test suite
