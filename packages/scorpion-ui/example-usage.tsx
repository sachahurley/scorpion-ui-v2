/**
 * SCORPION UI - EXAMPLE USAGE FILE
 * 
 * This file demonstrates how to use the Scorpion UI design system
 * in a new React project. Copy this pattern to your own project.
 * 
 * SETUP STEPS:
 * 1. Install: npm install scorpion-ui
 * 2. Import CSS in your main entry file (see below)
 * 3. Setup Tailwind config (see tailwind.config.example.js)
 * 4. Wrap your app with ThemeProvider
 * 5. Use components!
 */

// ============================================
// STEP 1: Import CSS (do this in your main.tsx or App.tsx)
// ============================================
import 'scorpion-ui/styles'

// ============================================
// STEP 2: Import components and utilities
// ============================================
import { 
  ThemeProvider,
  Button,
  Input,
  Card,
  Modal,
  Badge,
  Alert,
  Avatar,
  Divider,
  Tooltip,
  Select,
  Checkbox,
  Radio,
  Textarea,
  Switch,
  Dropdown,
  ThemeToggle,
  type ButtonProps,
  type InputProps,
} from 'scorpion-ui'

// Optional: Import icons from lucide-react (if you need them)
import { Download, User, Settings, Check } from 'lucide-react'

// ============================================
// STEP 3: Create your app component
// ============================================
import { useState } from 'react'

function ExampleApp() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // State for form inputs
  const [email, setEmail] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  return (
    // ============================================
    // STEP 4: Wrap everything with ThemeProvider
    // ============================================
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--surface-page)] p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header with theme toggle */}
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-mono font-bold text-[var(--text-primary)]">
              Scorpion UI Example
            </h1>
            <ThemeToggle />
          </div>

          {/* Buttons Section */}
          <Card>
            <h2 className="text-2xl font-mono font-bold mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="large">Large</Button>
              <Button variant="primary" iconLeft={<Download />}>
                With Icon
              </Button>
            </div>
          </Card>

          {/* Form Inputs Section */}
          <Card>
            <h2 className="text-2xl font-mono font-bold mb-4">Form Inputs</h2>
            <div className="space-y-4">
              <Input 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                placeholder="Large input"
                size="large"
              />
              <Input 
                placeholder="Error state"
                error
              />
              <Textarea 
                placeholder="Multi-line text area"
                rows={4}
              />
              <Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
            </div>
          </Card>

          {/* Checkboxes and Radios */}
          <Card>
            <h2 className="text-2xl font-mono font-bold mb-4">Checkboxes & Radios</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox 
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label>I agree to the terms</label>
              </div>
              <div className="flex items-center gap-2">
                <Radio name="option" value="option1" />
                <label>Option 1</label>
              </div>
              <div className="flex items-center gap-2">
                <Radio name="option" value="option2" />
                <label>Option 2</label>
              </div>
              <div className="flex items-center gap-2">
                <Switch />
                <label>Toggle switch</label>
              </div>
            </div>
          </Card>

          {/* Other Components */}
          <Card>
            <h2 className="text-2xl font-mono font-bold mb-4">Other Components</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge>Badge</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="error">Error</Badge>
              </div>
              
              <Alert variant="info">
                This is an info alert message
              </Alert>
              
              <div className="flex items-center gap-4">
                <Avatar src="https://via.placeholder.com/40" alt="User" />
                <Avatar fallback="JD" />
              </div>
              
              <Divider />
              
              <Tooltip content="This is a tooltip">
                <Button variant="outline">Hover for tooltip</Button>
              </Tooltip>
            </div>
          </Card>

          {/* Modal Example */}
          <Card>
            <h2 className="text-2xl font-mono font-bold mb-4">Modal</h2>
            <Button onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
            >
              <p className="text-[var(--text-primary)] mb-4">
                This is a modal dialog. Click outside or press ESC to close.
              </p>
              <Button onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
            </Modal>
          </Card>

          {/* Dropdown Example */}
          <Card>
            <h2 className="text-2xl font-mono font-bold mb-4">Dropdown</h2>
            <Dropdown
              trigger={<Button variant="outline">Open Menu</Button>}
              items={[
                { label: 'Edit', icon: <Settings />, onClick: () => console.log('Edit') },
                { label: 'Download', icon: <Download />, onClick: () => console.log('Download') },
                { type: 'divider' },
                { label: 'Delete', variant: 'destructive', onClick: () => console.log('Delete') },
              ]}
            />
          </Card>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default ExampleApp
