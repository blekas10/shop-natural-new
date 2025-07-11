# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run sync` - Sync translations from WordPress GraphQL API

## Project Architecture

This is a Next.js 15 internationalization (i18n) project that syncs content from WordPress via GraphQL and serves it in English and Lithuanian.

### Key Components

**Internationalization System:**
- `middleware.ts` - Handles locale routing, redirects to `/en` by default
- `lib/dictionaries.ts` - Server-side dictionary loader for translations
- `app/[locale]/` - Dynamic locale routing structure
- `components/LanguageSwitcher.tsx` - Client-side language switching component

**Content Synchronization:**
- `scripts/sync.js` - Fetches content from WordPress GraphQL API
- `lib/queries.js` - Contains GraphQL queries and page ID mappings
- `lib/dictionaries/` - JSON files containing translated content (en.json, lt.json)

### WordPress Integration

The project syncs content from WordPress using:
- **Page IDs**: Base64 encoded WordPress page IDs in `lib/queries.js`
- **ACF Fields**: `homepageContent` and `apieMus` (About page) custom fields
- **GraphQL Endpoint**: Configured in `scripts/sync.js` (currently set to localhost)

### Content Structure

Each language dictionary contains:
- `navigation` - Menu items and navigation structure
- `homepage` - Homepage content with `mainTitle` and `descriptionText`
- `about` - About page content with `aboutPageTitle` and `aboutPageDescription`

### Development Workflow

1. Content editors update WordPress pages
2. Run `npm run sync` to fetch latest content
3. JSON dictionaries are updated automatically
4. Restart dev server to see changes

## Configuration Notes

- Supported locales: `en`, `lt` (defined in middleware.ts)
- Default locale: `en`
- GraphQL endpoint needs to be updated in `scripts/sync.js` for production use
- Page IDs in `lib/queries.js` are WordPress-specific and encoded in Base64