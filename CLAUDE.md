# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
```

There are no lint or test scripts configured.

## Architecture

This is a **React 18 + Vite + Tailwind CSS v4** single-page landing site for Ricardo Reis Consultoria, a luxury real estate consultant based in Uberlândia, Brazil (CRECI-MG 24.283).

### Entry flow

`main.tsx` → `app/App.tsx` → section components rendered top to bottom:
`Header → Hero → Portfolio → SocialProof → About → CTAStrip → Footer → FAB`

No routing — the entire site is a single scrollable page.

### Path alias

`@` resolves to `src/`. Example: `import { Button } from '@/app/components/ui/button'`.

### Styling approach

- **Tailwind CSS v4** configured via `@tailwindcss/vite` plugin (no `tailwind.config.ts` file)
- Design tokens live in `src/styles/theme.css` as CSS custom properties (OkLCH color space)
- Fonts loaded in `src/styles/fonts.css`: **Inter** (body) and **Playfair Display** (headings)
- Key brand colors: primary dark `#030213`, gold accent `#B8935A`, warm beige background `#F8F5F0`
- Components mix Tailwind utility classes with inline styles — both patterns are in use

### UI components

`src/app/components/ui/` contains 30+ **shadcn/ui** components (Radix UI primitives). Add new ones via the shadcn CLI or manually following that pattern.

### Contact/business data

WhatsApp number and other contact info are **hardcoded** in individual components (not from env vars). The phone number used is `5534999999999` (placeholder) — update directly in each component when the real number is provided.

### Key dependencies

| Package | Purpose |
|---|---|
| `react-router` v7 | Available but not currently used (no routes defined) |
| `@mui/material` + `@emotion/*` | Available but not currently used |
| `recharts` | Available for data charts if needed |
| `react-hook-form` | Available for forms if needed |
| `next-themes` | Available for dark mode toggle if needed |
