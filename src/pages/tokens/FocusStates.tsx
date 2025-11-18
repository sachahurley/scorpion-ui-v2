/**
 * FOCUS STATES FOUNDATION PAGE
 * 
 * Documentation for focus state tokens
 * Shows focus ring properties and accessibility guidelines
 * 
 * Focus states are critical for keyboard navigation and accessibility (WCAG 2.1)
 * All interactive elements must have visible focus indicators
 */

import { Button } from "@/components/ui/Button";

export default function FocusStates() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Focus States</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Focus ring tokens for keyboard navigation and accessibility. Critical for WCAG 2.1 compliance.
        </p>
      </div>

      {/* FOCUS RING PROPERTIES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Focus Ring Properties</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Global focus ring dimensions (same for all themes)
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Ring Width */}
            <div>
              <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-3">Ring Width</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.width</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">2px</span>
                </div>
              </div>
              
              {/* Visual demonstration */}
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <div className="inline-block">
                  <div className="w-32 h-12 bg-primary-400 rounded-button flex items-center justify-center relative">
                    <span className="text-xs font-mono text-black">Element</span>
                    {/* Simulated focus ring */}
                    <div className="absolute inset-0 rounded-button" style={{ 
                      boxShadow: '0 0 0 2px var(--surface-card), 0 0 0 4px var(--focus-ring-primary)'
                    }}></div>
                  </div>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-2">2px focus ring shown</p>
                </div>
              </div>
            </div>

            {/* Ring Offset */}
            <div>
              <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-3">Ring Offset</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.offset</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">2px</span>
                </div>
              </div>
              
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">
                  The offset creates a 2px gap between the element and the focus ring, improving visibility against backgrounds.
                </p>
                <div className="inline-block">
                  <div className="w-32 h-12 bg-primary-400 rounded-button flex items-center justify-center relative">
                    <span className="text-xs font-mono text-black">Element</span>
                    {/* Simulated focus ring with offset */}
                    <div className="absolute inset-[-2px] rounded-button" style={{ 
                      boxShadow: '0 0 0 2px var(--surface-card), 0 0 0 4px var(--focus-ring-primary)'
                    }}></div>
                  </div>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-2">2px offset between element and ring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS RING COLORS SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Focus Ring Colors</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Theme-aware focus ring colors for different component variants
            </p>
          </div>

          <div className="space-y-6">
            {/* Primary Focus */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Primary Focus Ring</h4>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-primary-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.primary → color.primary.400</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-4">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-primary-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.primary → color.primary.400</span>
                  </div>
                </div>
              </div>

              {/* Interactive Example */}
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-3">Try clicking then pressing Tab to see the focus ring:</p>
                <Button variant="primary">Click me, then Tab</Button>
              </div>
            </div>

            {/* Secondary Focus */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Secondary Focus Ring</h4>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-secondary-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.secondary → color.secondary.700</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-4">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-secondary-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.secondary → color.secondary.700</span>
                  </div>
                </div>
              </div>

              {/* Interactive Example */}
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <Button variant="secondary">Secondary button focus</Button>
              </div>
            </div>

            {/* Error Focus */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Error Focus Ring</h4>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-error-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.error → color.error.600</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-4">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-error-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.error → color.error.500</span>
                  </div>
                </div>
              </div>

              {/* Interactive Example */}
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <Button variant="destructive">Destructive button focus</Button>
              </div>
            </div>

            {/* Focus Offset Color */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus Ring Offset Color</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-3">
                The offset creates a gap between the element and ring, using the page background color
              </p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.offset → color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.offset → color.sepia.1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMONSTRATION SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Interactive Demonstration</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Tab through these elements to see focus rings in action
            </p>
          </div>

          <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-4">
              ⌨️ Press Tab to cycle through buttons and see their focus rings
            </p>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY GUIDELINES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Accessibility Guidelines</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              WCAG 2.1 requirements for focus indicators
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">WCAG 2.1 Success Criterion 2.4.7</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-3">
                "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible."
              </p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                ✅ Scorpion UI meets this requirement with 2px focus rings on all interactive elements.
              </p>
            </div>

            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Best Practices</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Never remove focus outlines with <code className="px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded">outline: none</code></li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Focus rings must have sufficient contrast (3:1 ratio minimum)</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Ring offset improves visibility on various backgrounds</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Focus state should be clearly different from hover state</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Test keyboard navigation in both light and dark themes</li>
              </ul>
            </div>

            <div className="p-6 bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-2xl">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">⚠️ Important</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                Focus indicators are legally required for accessibility compliance in many jurisdictions. Always maintain visible focus states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION EXAMPLES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Implementation Examples</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              How to apply focus tokens in your components
            </p>
          </div>

          <div className="space-y-6">
            {/* Tailwind Classes Example */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Using Tailwind Classes</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-sepia-950">
                <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<button className="
  focus:ring-2 
  focus:ring-primary-400 
  focus:ring-offset-2 
  focus:ring-offset-sepia-50 
  dark:focus:ring-offset-sepia-1000
">
  Primary Button
</button>`}
                </pre>
              </div>
            </div>

            {/* CSS Variables Example */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Using CSS Variables</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-sepia-950">
                <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<button className="focus:ring-[var(--focus-ring-width)]">
  /* Ring width: 2px from CSS variable */
</button>

<button style={{ 
  '--tw-ring-width': 'var(--focus-ring-width)',
  '--tw-ring-color': 'var(--focus-ring-primary)'
}}>
  /* Advanced custom implementation */
</button>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

