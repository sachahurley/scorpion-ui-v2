/**
 * SIDE NAVIGATION PATTERN DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for the sidebar navigation pattern
 * Shows all states, colors, and design tokens used in the navigation
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Visual component display (light/dark comparison)
 * 3. Interactive states showcase
 * 4. Primary colors (Amber - active states)
 * 5. Secondary colors (Sepia - backgrounds/hover)
 * 6. Detailed token breakdown
 */


import { Panel } from "@/components/docs/Panel";
export default function SideNavigation() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Buttons.tsx and other documentation pages
        - 2xl font for title
        - sm font for description
        - gap-2 between title and description
        - mb-10 before first section
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Side Navigation</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Fixed sidebar navigation pattern with collapsible sections, hover states, and active state indicators.
          Rows are plates (plate-round): idle rows show secondary text, hover and active rows fill with var(--surface-muted) and flip their text to var(--accent).
        </p>
      </div>

      {/* 
        LIVE COMPONENT PREVIEW SECTION
        Shows the actual sidebar in action with both themes
        Displays different states: default, hover, active
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Component Overview</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              The sidebar navigation pattern as it appears in the live application
            </p>
          </div>
          
          {/* Visual representation - screenshot or mockup of sidebar */}
          <Panel>
            <div className="flex gap-6 items-start">
              {/* Mock sidebar preview */}
              <div className="w-64 bg-[var(--surface-container)] rounded-none p-4 border border-[var(--border-hairline)]">
                <div className="space-y-2">
                  {/* Home link - active state: surface.muted fill + accent text */}
                  <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm bg-[var(--surface-muted)] text-[var(--accent)]">
                    <div className="w-7 h-7 bg-[var(--surface-muted)] rounded-none"></div>
                    <span>Home Page</span>
                  </div>

                  {/* Foundation section - default state: quiet secondary text */}
                  <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm text-secondary-800 dark:text-secondary-500">
                    <div className="w-7 h-7 bg-secondary-300 dark:bg-secondary-700 rounded-none"></div>
                    <span>Foundation</span>
                  </div>

                  {/* Components section - default state */}
                  <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm text-secondary-800 dark:text-secondary-500">
                    <div className="w-7 h-7 bg-secondary-300 dark:bg-secondary-700 rounded-none"></div>
                    <span>Components</span>
                  </div>

                  {/* Patterns section - hover state (same fill + accent as active) */}
                  <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm bg-[var(--surface-muted)] text-[var(--accent)]">
                    <div className="w-7 h-7 bg-[var(--surface-muted)] rounded-none"></div>
                    <span>Patterns</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mb-2">
                  The sidebar uses a fixed-width layout (256px) with collapsible sections for organizing navigation.
                </p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
                  Every row is a plate (plate-round). Idle rows sit as quiet secondary text; hover and active rows fill with var(--surface-muted) and flip their text to var(--accent). The active route simply holds the hover state.
                </p>
              </div>
            </div>
          </Panel>
        </Panel>
      </section>

      {/* 
        INTERACTIVE STATES SECTION
        Shows all the different states: default, hover, active, expanded/collapsed
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Interactive States</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Navigation items respond to user interaction with visual feedback
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default State */}
            <Panel>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Default State</h4>
              <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm text-secondary-800 dark:text-secondary-500">
                <div className="w-7 h-7 bg-secondary-300 dark:bg-secondary-700 rounded-none"></div>
                <span>Navigation Item</span>
              </div>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-3">
                Quiet secondary text, no fill, no border
              </p>
            </Panel>

            {/* Hover State */}
            <Panel>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Hover State</h4>
              <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm bg-[var(--surface-muted)] text-[var(--accent)]">
                <div className="w-7 h-7 bg-[var(--surface-muted)] rounded-none"></div>
                <span>Navigation Item</span>
              </div>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-3">
                The plate fills with var(--surface-muted) and the text flips to var(--accent)
              </p>
            </Panel>

            {/* Active/Selected State */}
            <Panel>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Active/Selected State</h4>
              <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm bg-[var(--surface-muted)] text-[var(--accent)]">
                <div className="w-7 h-7 bg-[var(--surface-muted)] rounded-none"></div>
                <span>Navigation Item</span>
              </div>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-3">
                The active route holds the filled + accent state (color plus fill, never color alone)
              </p>
            </Panel>

            {/* Keyboard Focus State */}
            <Panel>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Keyboard Focus State</h4>
              <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm text-secondary-800 dark:text-secondary-500 [box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-primary)]">
                <div className="w-7 h-7 bg-secondary-300 dark:bg-secondary-700 rounded-none"></div>
                <span>Navigation Item</span>
              </div>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-3">
                Inset focus ring (box-shadow) inside the plate edge: the clip swallows outside outlines
              </p>
            </Panel>

            {/* Expanded Section State */}
            <Panel>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Expanded Section</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm text-secondary-800 dark:text-secondary-500">
                  <div className="w-7 h-7 bg-secondary-300 dark:bg-secondary-700 rounded-none"></div>
                  <span>Section</span>
                  <svg className="w-4 h-4 ml-auto rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm text-secondary-800 dark:text-secondary-500">
                    <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                      <path d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>Sub Item</span>
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-3">
                Collapsible sections with nested navigation items
              </p>
            </Panel>
          </div>
        </Panel>
      </section>

      {/* 
        SECONDARY BUTTON COLORS SECTION
        Documents the Sepia colors used for all navigation states
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Row Colors</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Hover and active rows share one recipe: a muted surface fill with accent text. Idle rows are quiet secondary text.
            </p>
          </div>

          <div className="space-y-6">
            {/* Hover / Active State Colors */}
            <div>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Hover and Active State</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Panel>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-none bg-[var(--surface-muted)] border border-[var(--border-hairline)]"></div>
                    <div>
                      <p className="text-xs font-mono text-[var(--text-primary)]">var(--surface-muted)</p>
                      <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Theme-aware fill</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Row fill on hover; the active route holds this fill</p>
                </Panel>

                <Panel>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-none bg-[var(--accent)] border border-[var(--border-hairline)]"></div>
                    <div>
                      <p className="text-xs font-mono text-[var(--text-primary)]">var(--accent)</p>
                      <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Brand gold accent</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Text color on hover and for the active route</p>
                </Panel>
              </div>
            </div>

            {/* Idle State Colors */}
            <div>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Idle State</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Panel>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-none bg-secondary-800 dark:bg-secondary-500 border border-[var(--border-hairline)]"></div>
                    <div>
                      <p className="text-xs font-mono text-[var(--text-primary)]">secondary-800 / secondary-500</p>
                      <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Light / dark text</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Idle row text; no fill and no border until interaction</p>
                </Panel>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* 
        CONTAINER BACKGROUND COLORS SECTION
        Documents the background colors for the sidebar container itself
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Container Background Colors</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              The sidebar container uses semantic surface colors that adapt to the theme
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Panel>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-none bg-sepia-50 border border-sepia-200"></div>
                  <div>
                    <p className="text-xs font-mono text-[var(--text-primary)]">Light Mode Container</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">color.sepia.50 (#FDFCFB)</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Uses var(--surface-container) semantic token</p>
              </Panel>

              <Panel>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-none bg-sepia-975 border border-sepia-900"></div>
                  <div>
                    <p className="text-xs font-mono text-[var(--text-primary)]">Dark Mode Container</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">color.sepia.975 (#120D09)</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Uses var(--surface-container) semantic token</p>
              </Panel>
            </div>
          </div>
        </Panel>
      </section>

      {/* 
        COMPLETE TOKEN BREAKDOWN SECTION
        Comprehensive documentation of all design tokens used
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Complete Token Reference</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              All design tokens used in the sidebar navigation pattern
            </p>
          </div>

          <div className="space-y-6">
            {/* Typography Tokens */}
            <div>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Typography</h4>
              <Panel>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Font Family: font.family.mono (Fragment Mono)</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Font Size: font.size.sm (14px)</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Font Weight: 400 (all states; active is color plus fill, never weight)</p>
              </Panel>
            </div>

            {/* Spacing Tokens */}
            <div>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Spacing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Navigation Item Padding</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Horizontal: 12px (px-3)</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Vertical: 8px (py-2)</p>
                </Panel>
                
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Icon-Text Gap</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Gap: 12px (gap-3)</p>
                </Panel>

                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Container Padding</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">All sides: 16px (p-4)</p>
                </Panel>

                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Section Spacing</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Gap between items: 8px (space-y-2)</p>
                </Panel>
              </div>
            </div>

            {/* Border & Layout Tokens */}
            <div>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-3">Border & Layout</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Shape</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">plate-round (stepped clip-path) for navigation items; radius utilities retired</p>
                </Panel>
                
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Sidebar Width</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Fixed: 256px (w-64)</p>
                </Panel>

                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Icon Size</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">28px × 28px (w-7 h-7)</p>
                </Panel>

                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Transition</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">transition-colors (smooth color changes)</p>
                </Panel>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* 
        CODE IMPLEMENTATION SECTION
        Shows actual Tailwind classes and implementation details
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Implementation Example</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Tailwind CSS classes used to create navigation items
            </p>
          </div>

          <div className="space-y-4">
            {/* Active State Code */}
            <div>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-2">Active Navigation Item (Plate Row)</h4>
              <Panel innerClassName="bg-secondary-950 dark:bg-secondary-1000 p-4 lg:p-6">
                <code className="text-xs font-mono text-[var(--accent)]">
                  <span className="text-secondary-400">className=</span>
                  <span className="text-green-400">"</span>
                  <br />
                  <span className="ml-4 text-green-400">flex items-center gap-3</span>
                  <br />
                  <span className="ml-4 text-green-400">px-3 py-2 plate-round font-mono text-sm</span>
                  <br />
                  <span className="ml-4 text-[var(--accent)]">bg-[var(--surface-muted)] text-[var(--accent)]</span>
                  <br />
                  <span className="ml-4 text-blue-300">transition-colors [transition-duration:var(--duration-fast)]</span>
                  <br />
                  <span className="text-green-400">"</span>
                </code>
              </Panel>
            </div>

            {/* Hover State Code */}
            <div>
              <h4 className="text-xs font-mono text-[var(--text-primary)] mb-2">Default/Hover Navigation Item (Plate Row)</h4>
              <Panel innerClassName="bg-secondary-950 dark:bg-secondary-1000 p-4 lg:p-6">
                <code className="text-xs font-mono text-[var(--accent)]">
                  <span className="text-secondary-400">className=</span>
                  <span className="text-green-400">"</span>
                  <br />
                  <span className="ml-4 text-green-400">flex items-center gap-3</span>
                  <br />
                  <span className="ml-4 text-green-400">px-3 py-2 plate-round font-mono text-sm</span>
                  <br />
                  <span className="ml-4 text-green-400">text-secondary-800 dark:text-secondary-500</span>
                  <br />
                  <span className="ml-4 text-purple-300">hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]</span>
                  <br />
                  <span className="ml-4 text-blue-300">focus:outline-none focus-visible:[box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-primary)]</span>
                  <br />
                  <span className="ml-4 text-blue-300">transition-colors [transition-duration:var(--duration-fast)]</span>
                  <br />
                  <span className="text-green-400">"</span>
                </code>
              </Panel>
            </div>
          </div>
        </Panel>
      </section>

      {/* 
        USAGE GUIDELINES SECTION
        Best practices for using this pattern
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Usage Guidelines</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Best practices for implementing the sidebar navigation pattern
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-xs font-mono text-[var(--text-primary)] mb-2">✓ Always indicate the active page</p>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
                Hold the filled state (var(--surface-muted) background with var(--accent) text) on the current page's row. This provides crucial wayfinding.
              </p>
            </Panel>

            <Panel>
              <p className="text-xs font-mono text-[var(--text-primary)] mb-2">✓ Use consistent row styling</p>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
                Every row shares one plate recipe: quiet secondary text when idle, var(--surface-muted) fill with var(--accent) text on hover and for the active route. This keeps navigation consistent with the rest of the plate language.
              </p>
            </Panel>

            <Panel>
              <p className="text-xs font-mono text-[var(--text-primary)] mb-2">✓ Maintain consistent spacing</p>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
                Use the same padding, gaps, and sizing across all navigation items for a cohesive feel.
              </p>
            </Panel>

            <Panel>
              <p className="text-xs font-mono text-[var(--text-primary)] mb-2">✓ Use icons consistently</p>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
                All navigation items at the same level should have icons of the same size (28px × 28px) for visual balance.
              </p>
            </Panel>
          </div>
        </Panel>
      </section>
    </div>
  );
}

