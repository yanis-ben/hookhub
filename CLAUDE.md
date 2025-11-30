# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application using the App Router with TypeScript, React 19, and Tailwind CSS 4. This is a fresh project bootstrapped with `create-next-app`.

## Development Commands

### Running the application
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint

### Package management
This project uses npm. Alternative package managers mentioned in the README (yarn, pnpm, bun) are also compatible.

## Architecture

### App Router Structure
- Uses Next.js App Router (not Pages Router)
- Entry point: [app/page.tsx](app/page.tsx) - Main home page component
- Layout: [app/layout.tsx](app/layout.tsx) - Root layout with Geist fonts and global styles
- Styling: [app/globals.css](app/globals.css) - Global styles with Tailwind v4 and CSS variables

### Font Configuration
- Uses `next/font/google` with Geist Sans and Geist Mono
- Fonts are loaded as CSS variables: `--font-geist-sans` and `--font-geist-mono`
- Applied in root layout and referenced in Tailwind theme

### Styling System
- **Tailwind CSS 4** with PostCSS integration (`@tailwindcss/postcss`)
- Tailwind v4 uses `@import "tailwindcss"` in CSS (not a config file)
- Custom theme configuration via `@theme inline` in [app/globals.css](app/globals.css)
- CSS variables for theming: `--background`, `--foreground`, `--color-background`, `--color-foreground`
- Dark mode support via `prefers-color-scheme`

### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Strict mode enabled
- JSX runtime: `react-jsx`
- Module resolution: `bundler`
- Next.js TypeScript plugin included

### ESLint Configuration
- Uses ESLint 9 flat config format ([eslint.config.mjs](eslint.config.mjs))
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Important Notes

### Tailwind CSS v4 Differences
- No `tailwind.config.js` file - configuration is done inline in CSS
- Use `@theme inline` directive in CSS files for theme customization
- Import statement is `@import "tailwindcss"` (not `@tailwind` directives)

### Component Patterns
- Server Components by default (no `'use client'` directive needed unless using hooks/interactivity)
- TypeScript with explicit type imports (`import type`)
- Image optimization via `next/image`
