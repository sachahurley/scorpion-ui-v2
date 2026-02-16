# Usage Examples

## Basic Setup

### 1. Install the package

```bash
npm install scorpion-ui
```

### 2. Setup your main entry file

```tsx
// main.tsx or App.tsx
import 'scorpion-ui/styles'
import { ThemeProvider } from 'scorpion-ui'
import { Button } from 'scorpion-ui'

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello World</Button>
    </ThemeProvider>
  )
}
```

### 3. Configure Tailwind

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('scorpion-ui/tailwind.preset.js')],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/scorpion-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"], // Required for theme switching
}
```

## Component Examples

### Button

```tsx
import { Button } from 'scorpion-ui'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With icons
import { Download } from 'lucide-react'
<Button iconLeft={<Download />}>Download</Button>
```

### Input

```tsx
import { Input } from 'scorpion-ui'

<Input placeholder="Enter text" />
<Input size="large" placeholder="Large input" />
<Input error placeholder="Error state" />
```

### Modal

```tsx
import { Modal } from 'scorpion-ui'
import { useState } from 'react'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
        <p>Modal content goes here</p>
      </Modal>
    </>
  )
}
```

### Card

```tsx
import { Card } from 'scorpion-ui'

<Card>
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>
```

## Using Design Tokens

```tsx
import { getToken, getTokensForTheme } from 'scorpion-ui'

// Get a specific token
const primaryColor = getToken('color-primary-500', 'light')

// Get all tokens for a theme
const lightTokens = getTokensForTheme('light')
console.log(lightTokens['color-primary-500']) // "#F59E0B"
```

## Theme Switching

The `ThemeProvider` automatically handles theme switching. Users can toggle themes using the `ThemeToggle` component:

```tsx
import { ThemeToggle } from 'scorpion-ui'

<ThemeToggle />
```

Or programmatically:

```tsx
import { useTheme } from 'next-themes'

function MyComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

## TypeScript

All components have full TypeScript support:

```tsx
import { Button, type ButtonProps } from 'scorpion-ui'

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'large',
  disabled: false,
}

<Button {...buttonProps}>Click me</Button>
```
