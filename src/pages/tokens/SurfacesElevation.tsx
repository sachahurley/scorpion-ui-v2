/**
 * SURFACES & DEPTH FOUNDATION PAGE
 * 
 * Documentation for surface tokens and depth system
 * 
 * Section 1: Surface Tokens
 * - Background colors for pages, containers, and cards
 * - Theme-aware tokens that change between light and dark modes
 * 
 * Section 2: Depth System (TUI)
 * - Flat design with no shadows (all shadow tokens are "none")
 * - Depth is communicated through border color/opacity only
 * - 4 levels (0-3) with increasing border visibility
 */


import { Panel } from "@/components/docs/Panel";
export default function SurfacesElevation() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Title and description explaining surfaces and elevation
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Surfaces & Depth</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Theme-aware background colors and flat depth system using borders for visual hierarchy.
        </p>
      </div>

      {/* 
        SURFACE TOKENS SECTION
        Shows all surface tokens with light and dark values
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Surface Tokens</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Background colors for pages, containers, and cards that automatically adapt to light and dark themes
            </p>
          </div>
          
          <div className="space-y-6">
            
            {/* surface.page */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Page Background</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-3">The main page background color</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-50 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.page → color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-1000 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.page → color.sepia.1000</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <Panel className="mt-4" innerClassName="bg-[var(--surface-page)] p-4 lg:p-6">
                <p className="text-sm font-mono text-[var(--text-primary)]">This container uses surface.page</p>
              </Panel>
            </div>

            {/* surface.container */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Container Background</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-3">Background for general containers (same as page in current theme)</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-50 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.container → color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-1000 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.container → color.sepia.1000</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <Panel className="mt-4" innerClassName="bg-[var(--surface-container)] p-4 lg:p-6">
                <p className="text-sm font-mono text-[var(--text-primary)]">This container uses surface.container</p>
              </Panel>
            </div>

            {/* surface.card */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Card Background</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-3">Elevated background for cards and content containers</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-white border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.card → color.white</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-975 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.card → color.sepia.975</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <Panel className="mt-4">
                <p className="text-sm font-mono text-[var(--text-primary)]">This container uses surface.card</p>
              </Panel>
            </div>

            {/* surface.container-stroke */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Container Stroke</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-3">Border color for containers and dividers</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-500 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.container-stroke → color.sepia.500</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-800 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">surface.container-stroke → color.sepia.800</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="mt-4 p-8 border-[0.5px] border-solid border-[var(--surface-container-stroke)] rounded-none bg-[var(--surface-card)]">
                <p className="text-sm font-mono text-[var(--text-primary)]">This container uses surface.container-stroke for its border</p>
              </div>
            </div>

          </div>
        </Panel>
      </section>

      {/* 
        DEPTH SYSTEM SECTION (TUI)
        Flat design -- depth is communicated through borders only, no shadows
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Depth System (TUI)</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Flat, shadow-free depth using borders only -- inspired by terminal user interfaces
            </p>
          </div>

          {/* TUI Design Philosophy Callout */}
          <div className="mb-8 p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-none">
            <p className="text-sm font-mono text-[var(--text-primary)] mb-2">TUI Design Philosophy</p>
            <ul className="space-y-1">
              <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">All elevation shadows are set to <span className="text-term-cyan">none</span></li>
              <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Depth is communicated through <span className="text-term-cyan">border color</span> instead</li>
              <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Lighter borders in light mode, subtle white borders in dark mode</li>
              <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Matches the flat aesthetic of classic terminal interfaces</li>
            </ul>
          </div>
          
          <div className="space-y-8">
            
            {/* Level 0: No border */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-2">Level 0: Flush</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">No border, element sits flush with its parent</p>
              
              {/* Token Details */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">shadow: none</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">border: transparent</span>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-secondary-950 rounded-none">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-none"
                  style={{ border: '1px solid transparent' }}
                >
                  <p className="text-sm font-mono text-[var(--text-primary)]">Level 0 -- flush, no border</p>
                </div>
              </div>
            </div>

            {/* Level 1: Subtle border */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-2">Level 1: Subtle Border</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">Light border for default cards and containers</p>
              
              {/* Token Details */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">shadow: none</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <div className="w-4 h-4 rounded-none bg-sepia-200 border border-secondary-300 dark:border-secondary-600"></div>
                  <span className="text-sm font-mono text-[var(--text-primary)]">border: sepia-200 / white 8%</span>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-secondary-950 rounded-none">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-none border"
                  style={{ borderColor: 'var(--elevation-1-border)' }}
                >
                  <p className="text-sm font-mono text-[var(--text-primary)]">Level 1 -- subtle border for cards</p>
                </div>
              </div>
            </div>

            {/* Level 2: Medium border */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-2">Level 2: Medium Border</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">Slightly more visible border for dropdowns and popovers</p>
              
              {/* Token Details */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">shadow: none</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <div className="w-4 h-4 rounded-none bg-sepia-300 border border-secondary-300 dark:border-secondary-600"></div>
                  <span className="text-sm font-mono text-[var(--text-primary)]">border: sepia-300 / white 10%</span>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-secondary-950 rounded-none">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-none border"
                  style={{ borderColor: 'var(--elevation-2-border)' }}
                >
                  <p className="text-sm font-mono text-[var(--text-primary)]">Level 2 -- medium border for dropdowns</p>
                </div>
              </div>
            </div>

            {/* Level 3: Strong border */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-2">Level 3: Strong Border</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">Most visible border for modals and important overlays</p>
              
              {/* Token Details */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">shadow: none</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <div className="w-4 h-4 rounded-none bg-sepia-300 border border-secondary-300 dark:border-secondary-600"></div>
                  <span className="text-sm font-mono text-[var(--text-primary)]">border: sepia-300 / white 12%</span>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-secondary-950 rounded-none">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-none border"
                  style={{ borderColor: 'var(--elevation-3-border)' }}
                >
                  <p className="text-sm font-mono text-[var(--text-primary)]">Level 3 -- strong border for modals</p>
                </div>
              </div>
            </div>

          </div>
        </Panel>
      </section>

      {/* 
        DEPTH USAGE GUIDELINES
        When to use each border level
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Depth Usage Guidelines</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">When to use each border level for visual hierarchy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Panel>
                <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Level 0: Flush</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Inline elements</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Elements flush with parent</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">No separation needed</li>
                </ul>
              </Panel>

              <Panel>
                <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Level 1: Subtle</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Content cards</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">List items</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Default containers</li>
                </ul>
              </Panel>
            </div>

            <div className="space-y-4">
              <Panel>
                <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Level 2: Medium</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Dropdown menus</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Popovers and tooltips</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Hover states</li>
                </ul>
              </Panel>

              <Panel>
                <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Level 3: Strong</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Modal dialogs</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Overlay panels</li>
                  <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">Critical alerts</li>
                </ul>
              </Panel>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}

