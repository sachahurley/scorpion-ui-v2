# Quick Start - Using Scorpion UI in Your New Project

## The Simplest Way to Get Started

### 1. Install the Package

```bash
npm install scorpion-ui
```

### 2. Copy This Code to Your `App.tsx` (or `main.tsx`)

```tsx
// Import CSS first (do this once)
import 'scorpion-ui/styles'

// Import components
import { ThemeProvider, Button, Input, Card, ThemeToggle } from 'scorpion-ui'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--surface-page)] p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-mono font-bold text-[var(--text-primary)]">
              My App
            </h1>
            <ThemeToggle />
          </div>
          <Card>
            <h2 className="text-xl font-mono font-bold mb-4">Welcome</h2>
            <div className="space-y-4">
              <Input placeholder="Enter your name" />
              <Button variant="primary">Submit</Button>
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
```

### 3. Setup Tailwind Config

Create or update `tailwind.config.js`:

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

### 4. That's It!

Your app now has:
- ✅ All Scorpion UI components
- ✅ Light/dark theme support
- ✅ Design tokens
- ✅ Beautiful styling

## What You Can Do Now

Import any component:

```tsx
import { 
  Button, 
  Input, 
  Card, 
  Modal, 
  Badge, 
  Alert,
  // ... and more!
} from 'scorpion-ui'
```

See `example-usage.tsx` for examples of all components.

## Need Help?

- See `SETUP.md` for detailed setup instructions
- See `example-usage.tsx` for component examples
- See `README.md` for full documentation
