/**
 * SIMPLE EXAMPLE - Copy this to your new project!
 * 
 * This is a minimal example showing how to use Scorpion UI.
 * Copy this entire file to your new React project.
 */

// 1. Import the CSS (do this once in your main.tsx or App.tsx)
import 'scorpion-ui/styles'

// 2. Import components you need
import { ThemeProvider, Button, Input, Card, ThemeToggle } from 'scorpion-ui'

// 3. Create your component
function MyApp() {
  return (
    // 4. Wrap everything with ThemeProvider
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--surface-page)] p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Header with theme toggle */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-mono font-bold text-[var(--text-primary)]">
              My App
            </h1>
            <ThemeToggle />
          </div>

          {/* Card with form */}
          <Card>
            <h2 className="text-xl font-mono font-bold mb-4">Welcome</h2>
            <div className="space-y-4">
              <Input placeholder="Enter your name" />
              <Button variant="primary">Submit</Button>
            </div>
          </Card>

          {/* More buttons */}
          <div className="flex gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
