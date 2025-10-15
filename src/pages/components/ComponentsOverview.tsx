/**
 * COMPONENTS OVERVIEW PAGE
 * 
 * Landing page for the component library
 * Will show all available components (coming soon)
 */

import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function ComponentsOverview() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Component Library</h1>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            Reusable React components built entirely from design tokens. Copy, customize, and use in your projects.
          </p>

          {/* Coming Soon Notice */}
          <div className="p-8 rounded-container border-2 border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-950/20">
            <h2 className="text-2xl font-bold mb-3">Components Coming Soon!</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              The component library is under construction. Components will be added progressively, including:
            </p>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>• <strong>Button</strong> - Primary, secondary, and variant buttons</li>
              <li>• <strong>Card</strong> - Container component with proper surface styling</li>
              <li>• <strong>Input</strong> - Form inputs with validation states</li>
              <li>• <strong>Badge</strong> - Labels and tags</li>
              <li>• And many more...</li>
            </ul>
          </div>

          {/* Preview: Theme Toggle is Already a Component! */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Preview: Theme Toggle Component</h2>
            <div className="p-8 rounded-container border border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
              <div className="flex items-center gap-4 mb-6">
                <ThemeToggle />
                <p className="text-[var(--text-secondary)]">
                  Click to toggle between light and dark themes
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-secondary-100 dark:bg-secondary-900 rounded-button">
                <p className="font-bold mb-2">Usage:</p>
                <code className="block bg-sepia-900 text-amber-300 p-4 rounded text-sm font-mono overflow-x-auto">
{`import { ThemeToggle } from "@/components/ui/ThemeToggle";

<ThemeToggle />`}
                </code>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}

