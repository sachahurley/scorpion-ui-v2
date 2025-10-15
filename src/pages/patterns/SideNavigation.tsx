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
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Side Navigation</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Fixed sidebar navigation pattern with collapsible sections, hover states, and active state indicators. 
          Uses secondary button styling (sepia colors) for all navigation states - providing consistent, subtle interactions throughout.
        </p>
      </div>

      {/* 
        LIVE COMPONENT PREVIEW SECTION
        Shows the actual sidebar in action with both themes
        Displays different states: default, hover, active
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Component Overview</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              The sidebar navigation pattern as it appears in the live application
            </p>
          </div>
          
          {/* Visual representation - screenshot or mockup of sidebar */}
          <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="flex gap-6 items-start">
              {/* Mock sidebar preview */}
              <div className="w-64 bg-sepia-50 dark:bg-sepia-975 rounded-button p-4 border border-sepia-200 dark:border-sepia-800">
                <div className="space-y-2">
                  {/* Home link - active state using secondary button styling */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-button bg-sepia-700 text-sepia-50">
                    <div className="w-7 h-7 bg-sepia-600 rounded"></div>
                    <span className="text-sm font-mono font-bold">Home Page</span>
                  </div>
                  
                  {/* Foundation section - default state */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-button">
                    <div className="w-7 h-7 bg-sepia-300 dark:bg-sepia-700 rounded"></div>
                    <span className="text-sm font-mono">Foundation</span>
                  </div>
                  
                  {/* Components section - default state */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-button">
                    <div className="w-7 h-7 bg-sepia-300 dark:bg-sepia-700 rounded"></div>
                    <span className="text-sm font-mono">Components</span>
                  </div>
                  
                  {/* Patterns section - hover state using secondary button styling */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-button bg-sepia-600 text-sepia-50">
                    <div className="w-7 h-7 bg-sepia-500 rounded"></div>
                    <span className="text-sm font-mono">Patterns</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">
                  The sidebar uses a fixed-width layout (256px) with collapsible sections for organizing navigation.
                </p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                  All navigation items use secondary button styling (sepia colors) - active pages use sepia-700 background, while hover states use sepia-600.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        INTERACTIVE STATES SECTION
        Shows all the different states: default, hover, active, expanded/collapsed
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Interactive States</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Navigation items respond to user interaction with visual feedback
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default State */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Default State</h4>
              <div className="flex items-center gap-3 px-3 py-2 rounded-button bg-sepia-50 dark:bg-sepia-975 border border-sepia-200 dark:border-sepia-800">
                <div className="w-7 h-7 bg-sepia-300 dark:bg-sepia-700 rounded"></div>
                <span className="text-sm font-mono">Navigation Item</span>
              </div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-3">
                Neutral state with no user interaction
              </p>
            </div>

            {/* Hover State */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Hover State</h4>
              <div className="flex items-center gap-3 px-3 py-2 rounded-button bg-sepia-600 text-sepia-50 border border-sepia-500">
                <div className="w-7 h-7 bg-sepia-500 rounded"></div>
                <span className="text-sm font-mono">Navigation Item</span>
              </div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-3">
                Secondary button hover state with sepia-600 background
              </p>
            </div>

            {/* Active/Selected State */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Active/Selected State</h4>
              <div className="flex items-center gap-3 px-3 py-2 rounded-button bg-sepia-700 text-sepia-50 border border-sepia-600">
                <div className="w-7 h-7 bg-sepia-600 rounded"></div>
                <span className="text-sm font-mono font-bold">Navigation Item</span>
              </div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-3">
                Secondary button active state with sepia-700 background to indicate current page
              </p>
            </div>

            {/* Expanded Section State */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Expanded Section</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-button bg-sepia-50 dark:bg-sepia-975 border border-sepia-200 dark:border-sepia-800">
                  <div className="w-7 h-7 bg-sepia-300 dark:bg-sepia-700 rounded"></div>
                  <span className="text-sm font-mono">Section</span>
                  <svg className="w-4 h-4 ml-auto rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-button bg-sepia-50 dark:bg-sepia-975 text-sm font-mono">
                    <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                      <path d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>Sub Item</span>
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-3">
                Collapsible sections with nested navigation items
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECONDARY BUTTON COLORS SECTION
        Documents the Sepia colors used for all navigation states
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Secondary Button Colors</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              All navigation items use secondary button styling with sepia colors - consistent across both light and dark modes
            </p>
          </div>

          <div className="space-y-6">
            {/* Active State Colors */}
            <div>
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Active State (Current Page)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-button bg-sepia-700 border border-sepia-600"></div>
                    <div>
                      <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold">color.sepia.700</p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#695F4D</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background for active navigation items (both light & dark mode)</p>
                </div>
                
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-button bg-sepia-50 border border-sepia-200"></div>
                    <div>
                      <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold">color.sepia.50</p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FDFCFB</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text color for active items (both light & dark mode)</p>
                </div>
              </div>
            </div>

            {/* Hover State Colors */}
            <div>
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Hover State</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-button bg-sepia-600 border border-sepia-500"></div>
                    <div>
                      <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold">color.sepia.600</p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#968A75</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background on hover (both light & dark mode)</p>
                </div>
                
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-button bg-sepia-50 border border-sepia-200"></div>
                    <div>
                      <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold">color.sepia.50</p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FDFCFB</p>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text color on hover (both light & dark mode)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CONTAINER BACKGROUND COLORS SECTION
        Documents the background colors for the sidebar container itself
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Container Background Colors</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              The sidebar container uses semantic surface colors that adapt to the theme
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-button bg-sepia-50 border border-sepia-200"></div>
                  <div>
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold">Light Mode Container</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.sepia.50 (#FDFCFB)</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Uses var(--surface-container) semantic token</p>
              </div>

              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-button bg-sepia-975 border border-sepia-900"></div>
                  <div>
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold">Dark Mode Container</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.sepia.975 (#120D09)</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Uses var(--surface-container) semantic token</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        COMPLETE TOKEN BREAKDOWN SECTION
        Comprehensive documentation of all design tokens used
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Complete Token Reference</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              All design tokens used in the sidebar navigation pattern
            </p>
          </div>

          <div className="space-y-6">
            {/* Typography Tokens */}
            <div>
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Font Family: font.family.mono (Fragment Mono)</p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Font Size: font.size.sm (14px)</p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Font Weight: 400 (regular) / 500 (active state)</p>
              </div>
            </div>

            {/* Spacing Tokens */}
            <div>
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Spacing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Navigation Item Padding</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Horizontal: 12px (px-3)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Vertical: 8px (py-2)</p>
                </div>
                
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Icon-Text Gap</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Gap: 12px (gap-3)</p>
                </div>

                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Container Padding</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">All sides: 16px (p-4)</p>
                </div>

                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Section Spacing</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Gap between items: 8px (space-y-2)</p>
                </div>
              </div>
            </div>

            {/* Border & Layout Tokens */}
            <div>
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Border & Layout</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Radius</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">radius.button (12px) - for navigation items</p>
                </div>
                
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sidebar Width</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Fixed: 256px (w-64)</p>
                </div>

                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Icon Size</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">28px × 28px (w-7 h-7)</p>
                </div>

                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Transition</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">transition-colors (smooth color changes)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CODE IMPLEMENTATION SECTION
        Shows actual Tailwind classes and implementation details
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Implementation Example</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Tailwind CSS classes used to create navigation items
            </p>
          </div>

          <div className="space-y-4">
            {/* Active State Code */}
            <div>
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Active Navigation Item (Secondary Button Style)</h4>
              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-sepia-950 dark:bg-black">
                <code className="text-xs font-mono text-amber-300">
                  <span className="text-sepia-400">className=</span>
                  <span className="text-green-400">"</span>
                  <br />
                  <span className="ml-4 text-green-400">flex items-center gap-3</span>
                  <br />
                  <span className="ml-4 text-green-400">px-3 py-2 rounded-button</span>
                  <br />
                  <span className="ml-4 text-amber-300">bg-sepia-700 text-sepia-50</span>
                  <br />
                  <span className="ml-4 text-blue-300">font-bold transition-colors</span>
                  <br />
                  <span className="text-green-400">"</span>
                </code>
              </div>
            </div>

            {/* Hover State Code */}
            <div>
              <h4 className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Default/Hover Navigation Item (Secondary Button Style)</h4>
              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-sepia-950 dark:bg-black">
                <code className="text-xs font-mono text-amber-300">
                  <span className="text-sepia-400">className=</span>
                  <span className="text-green-400">"</span>
                  <br />
                  <span className="ml-4 text-green-400">flex items-center gap-3</span>
                  <br />
                  <span className="ml-4 text-green-400">px-3 py-2 rounded-button</span>
                  <br />
                  <span className="ml-4 text-purple-300">hover:bg-sepia-600 hover:text-sepia-50</span>
                  <br />
                  <span className="ml-4 text-blue-300">transition-colors</span>
                  <br />
                  <span className="text-green-400">"</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        USAGE GUIDELINES SECTION
        Best practices for using this pattern
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Usage Guidelines</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Best practices for implementing the sidebar navigation pattern
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Always indicate the active page</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Use the secondary button active state (sepia-700 background) to highlight which page the user is currently on. This provides crucial wayfinding.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Use consistent button styling</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Navigation uses secondary button styling throughout - sepia-700 for active, sepia-600 for hover. This creates consistency with your button components.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Maintain consistent spacing</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Use the same padding, gaps, and sizing across all navigation items for a cohesive feel.
              </p>
            </div>

            <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
              <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 font-bold mb-2">✓ Use icons consistently</p>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                All navigation items at the same level should have icons of the same size (28px × 28px) for visual balance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

