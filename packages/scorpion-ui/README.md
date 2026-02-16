# Scorpion UI

A token-based design system for React with TypeScript support. Built entirely from design tokens with full light/dark theme support.

## Installation

```bash
npm install scorpion-ui
```

## Quick Start

### 1. Import CSS

Import the design tokens CSS file in your main entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'scorpion-ui/styles'
```

### 2. Setup Tailwind Config

Extend your `tailwind.config.js` with the Scorpion UI preset:

```javascript
module.exports = {
  presets: [require('scorpion-ui/tailwind.preset.js')],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/scorpion-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ... your other config
}
```

### 3. Wrap Your App with ThemeProvider

```tsx
import { ThemeProvider } from 'scorpion-ui'

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  )
}
```

### 4. Use Components

```tsx
import { Button, Input, Card } from 'scorpion-ui'

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="primary">Click me</Button>
    </Card>
  )
}
```

## Available Components

- **Button** - Multiple variants (primary, secondary, ghost, outline, destructive, icon)
- **Input** - Text input with sizes and error states
- **Modal** - Dialog component with backdrop
- **Card** - Container component
- **Badge** - Labels and tags
- **Alert** - Notification messages
- **Avatar** - User profile images
- **Divider** - Visual separators
- **Tooltip** - Hover information
- **Select** - Dropdown select
- **Checkbox** - Checkbox input
- **Radio** - Radio button input
- **Textarea** - Multi-line text input
- **Switch** - Toggle switch
- **Dropdown** - Dropdown menu
- **ThemeToggle** - Light/dark theme switcher

## Design Tokens

All components use CSS variables from the design token system. You can access tokens directly:

```tsx
import { getToken, getTokensForTheme } from 'scorpion-ui'

// Get a specific token value
const primaryColor = getToken('color-primary-500', 'light')

// Get all tokens for a theme
const lightTokens = getTokensForTheme('light')
```

## Theme System

Scorpion UI supports automatic light/dark theme switching. The `ThemeProvider` component uses `next-themes` under the hood and supports:

- System preference detection
- Manual theme switching
- Smooth transitions
- Persistent theme preference

## TypeScript Support

Full TypeScript support with exported types for all components:

```tsx
import { Button, type ButtonProps } from 'scorpion-ui'

const props: ButtonProps = {
  variant: 'primary',
  size: 'large',
}
```

## Styling

Components are built with Tailwind CSS and use design tokens. You can customize styles by:

1. Overriding CSS variables in your own CSS
2. Using Tailwind classes with the token values
3. Extending the Tailwind preset with your own theme

## License

MIT
