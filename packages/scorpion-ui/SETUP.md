# Quick Setup Guide

## Step 1: Install the Package

```bash
npm install scorpion-ui
```

Or if using locally (before publishing):

```bash
# In the scorpion-ui package directory
npm link

# In your new project directory
npm link scorpion-ui
```

## Step 2: Import CSS in Your Main Entry File

In your `main.tsx`, `App.tsx`, or `index.tsx`:

```tsx
import 'scorpion-ui/styles'
```

This imports all the CSS variables needed for the design system.

## Step 3: Setup Tailwind Config

Copy `tailwind.config.example.js` to your project as `tailwind.config.js` and update the content paths:

```javascript
module.exports = {
  presets: [require('scorpion-ui/tailwind.preset.js')],
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/scorpion-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
}
```

## Step 4: Wrap Your App with ThemeProvider

In your root component (usually `App.tsx` or `main.tsx`):

```tsx
import { ThemeProvider } from 'scorpion-ui'

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

## Step 5: Use Components!

Now you can import and use any component:

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

## Complete Example

See `example-usage.tsx` for a full working example with all components.

## Troubleshooting

### Components don't have styles
- Make sure you imported `'scorpion-ui/styles'` in your main entry file
- Verify your Tailwind config includes the preset
- Check that Tailwind is processing the scorpion-ui files in content paths

### Theme switching doesn't work
- Ensure `darkMode: ["class"]` is set in your Tailwind config
- Make sure your app is wrapped with `<ThemeProvider>`
- Check that the `dark` class is being applied to your root element

### TypeScript errors
- Make sure you have React types installed: `npm install --save-dev @types/react @types/react-dom`
- Verify your TypeScript version is compatible (5.9+)
