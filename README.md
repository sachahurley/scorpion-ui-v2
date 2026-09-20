# Scorpion UI v2

A modern, token-based design system and component library built with React, TypeScript, and Tailwind CSS. Features comprehensive documentation for design tokens, reusable components, and light/dark theme support.

## 🎨 What is This?

Scorpion UI v2 is a **design system documentation site** that showcases:

- **Design Tokens**: Colors, typography, spacing, and other design primitives defined in JSON
- **Component Library**: Reusable React components built strictly from design tokens
- **Theme System**: Automatic light/dark mode with smooth transitions
- **Documentation**: Interactive pages showing how to use every token and component

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

4. **Toggle between light and dark themes** using the theme toggle in the header!

## 📁 Project Structure

```
scorpion-ui-v2/
├── src/
│   ├── tokens/
│   │   └── tokens.json          # Design tokens (colors, typography, etc.)
│   ├── lib/
│   │   ├── token-parser.ts      # Converts tokens to CSS variables
│   │   └── utils.ts             # Utility functions
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   └── docs/                # Documentation components
│   ├── pages/
│   │   ├── Home.tsx             # Homepage
│   │   ├── tokens/              # Token documentation pages
│   │   └── components/          # Component documentation pages
│   ├── theme/
│   │   └── ThemeProvider.tsx    # Theme management
│   ├── index.css                # CSS variables from tokens
│   └── App.tsx                  # Router setup
├── tailwind.config.ts           # Tailwind config using tokens
└── README.md                    # This file!
```

## 📖 Documentation

### Developer Reference Guides

- **[Token Naming System Guide](docs/TOKEN_NAMING_SYSTEM.md)** - Complete reference for design token conventions, naming patterns, and critical rules for maintaining consistency across the system. Essential reading for anyone working with tokens or creating new components.

### UI Documentation

The interactive documentation website includes:
- `/` - Homepage and overview
- `/tokens/colors` - Color palette with copyable values
- `/tokens/semantic-colors` - Semantic color system
- `/tokens/typography` - Typography scales and usage
- `/components` - Component library

## 🎯 How It Works

### Design Tokens

All design values are defined in `src/tokens/tokens.json`:

```json
{
  "global": {
    "color": {
      "amber": {
        "500": { "$value": "#F59E0B", "$type": "color" }
      }
    }
  }
}
```

### Token Processing

The `token-parser.ts` utility:
1. Reads the JSON tokens
2. Resolves references like `{color.amber.500}`
3. Generates CSS custom properties
4. Provides values to Tailwind config

### CSS Variables

Tokens become CSS variables in `index.css`:

```css
:root {
  --color-amber-500: #F59E0B;
}
```

### Tailwind Integration

Tailwind uses these variables:

```typescript
// tailwind.config.ts
colors: {
  amber: {
    500: 'var(--color-amber-500)'
  }
}
```

### Using in Components

```tsx
// Option 1: Tailwind classes
<div className="bg-amber-500 text-sepia-900">

// Option 2: CSS variables
<div style={{ backgroundColor: 'var(--color-amber-500)' }}>

// Option 3: Semantic tokens
<div className="bg-primary-500">
```

## 🌈 Color System

### Base Colors
- **Amber** (Primary) - Warm, energetic primary color
- **Sepia** (Secondary) - Warm neutral, versatile secondary color
- **Green** (Success) - Positive actions and success states
- **Blue** (Info) - Informational messages
- **Purple** (Warning) - Warnings and cautions
- **Red** (Error) - Errors and destructive actions

### Semantic Aliases
Each base color has semantic aliases:
- `primary-*` → `amber-*`
- `secondary-*` → `sepia-*`
- `success-*` → `green-*`
- `info-*` → `blue-*`
- `warning-*` → `purple-*`
- `error-*` → `red-*`

**Why?** Semantic names make your code more meaningful and easier to update. If you change your primary color from amber to blue, you only update the token file!

## 🎨 Theme System

### Light/Dark Modes

The theme system automatically switches CSS variables:

```css
/* Light theme */
:root {
  --surface-page: #FFFBEB;
  --text-primary: #1C1917;
}

/* Dark theme */
.dark {
  --surface-page: #1C1917;
  --text-primary: #FAFAF9;
}
```

### Using the Theme Toggle

```tsx
import { ThemeToggle } from "@/components/ui/ThemeToggle";

<ThemeToggle />
```

## 📦 Using in Another Project

Want to use Scorpion UI in your portfolio or other projects? Here's how:

### Option 1: Copy Components (Recommended for Learning)

1. Copy the `tokens.json` file
2. Copy the `token-parser.ts` utility
3. Copy the CSS variables from `index.css`
4. Copy individual components you need

### Option 2: Reference the Tokens

1. Import the token JSON
2. Use the same color values in your project
3. Maintain visual consistency across projects

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Tokens

1. Edit `src/tokens/tokens.json`
2. Tokens automatically become CSS variables
3. Use in Tailwind or components immediately!

### Adding New Components

1. Create component in `src/components/ui/`
2. Use design tokens (not hardcoded values!)
3. Create documentation page in `src/pages/components/`
4. Add route in `App.tsx`

## 🎓 Learning Resources

This project demonstrates:
- **Design Systems**: Token-based design
- **React**: Components, hooks, context
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **Theme Management**: Light/dark mode implementation

Perfect for portfolio projects and learning modern web development!

## 🤝 Credits

Built with:
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Icons

---

**Scorpion UI v2** - A design system for your next project 🦂

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
