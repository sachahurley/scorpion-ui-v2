# Scorpion Design System

A lean five-page portfolio site for the Scorpion Design System: a TUI-inspired, token-based system built with React, TypeScript, and Tailwind CSS. The site runs on a vendored snapshot of the design system and links out to the deployed Storybook for all reference documentation.

## 🎨 What is This?

This is the design system's **portfolio front door**, not its documentation site. Five pages:

- `/` - **Home**: hero, what's inside, and links into the Storybook reference docs
- `/essay` - **Essay**: "Design Systems for AI-First Product Development"
- `/case-study` - **Case Study**: "Building the Scorpion Design System"
- `/demos/music-player` - **Music Player**: the floating now-playing pattern with a real audio engine
- `/demos/screens` - **Screens**: a working mini-app (sign-in, settings, profile) composed from DS components

Reference documentation (tokens, components, patterns, theming) lives in the deployed Storybook:

**https://sachahurley.github.io/scorp-ds/**

All old documentation routes (`/foundation/*`, `/components/*`, `/tokens/*`, `/patterns/*`) redirect to the pages above. The full documentation site is archived at the `v1-full-docs-site` tag.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:5173`

4. **Toggle between light and dark themes** using the theme toggle in the header (dark is the default)!

## 📁 Project Structure

```
scorpion-design-system/
├── src/
│   ├── components/
│   │   ├── ui/                  # Vendored DS components (see "Vendored design system")
│   │   ├── docs/                # Panel/PlateChip doc containers
│   │   └── layout/              # TopBar, TopNav (desktop + mobile), Layout
│   ├── pages/
│   │   ├── Home.tsx             # Homepage
│   │   ├── Essay.tsx            # The AI-first design systems essay
│   │   ├── patterns/
│   │   │   ├── CaseStudy.tsx    # Building the Scorpion Design System
│   │   │   └── MusicPlayerPattern.tsx  # Live music player demo
│   │   └── demos/
│   │       └── Screens.tsx      # Mini-app screens demo
│   ├── theme/
│   │   └── ThemeProvider.tsx    # Theme management
│   ├── index.css                # Imports the vendored token CSS variables
│   └── App.tsx                  # Router setup (5 routes + redirects)
├── vendor/scorp-ds/             # Vendored token CSS + Tailwind preset snapshot
├── tailwind.config.ts           # Tailwind config using the vendored preset
└── README.md                    # This file!
```

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Publish `dist/` to GitHub Pages (gh-pages branch, base `/scorpion-design-system/`)
- `npm run ds:check` - Diff the vendored DS snapshot against scorp-ds
- `npm run vendor:ds` - Re-sync the vendored DS snapshot

### Deployment

The site is a Vite + React Router SPA deployed to GitHub Pages under the base path `/scorpion-design-system/`. `npm run deploy` runs `scripts/deploy.sh`, the single deploy path: it builds, copies `index.html` to `404.html` (SPA fallback), verifies the copy, and pushes `dist/` to the `gh-pages` branch. Never run `npx gh-pages -d dist` by hand: that skips the fallback and breaks every deep link on the live site.

## 🤝 Credits

Built with:
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Icons

---

**Scorpion Design System** - A design system for your next project 🦂

## Vendored design system

This site wears the merged Scorp DS identity as a deliberate snapshot: token
variables and the Tailwind preset live in `vendor/scorp-ds/`, and the files in
`src/components/ui/` are copies of the scorp-ds component sources (with three
mechanical Vite adaptations). It is NOT auto-synced when scorp-ds merges.

- `npm run ds:check`: diff the snapshot against scorp-ds `origin/main`
- `npm run vendor:ds`: re-sync from `origin/main`, then `npm run build`,
  review the diff, and commit

Source checkout: `~/Projects/scorp-ds` (override with `SCORP_DS_DIR`). The
snapshot commit is recorded in `vendor/scorp-ds/VERSION`.
