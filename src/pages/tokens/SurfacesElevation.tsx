/**
 * SURFACES & ELEVATION FOUNDATION PAGE
 * 
 * Documentation for surface tokens and elevation system
 * 
 * Section 1: Surface Tokens
 * - Background colors for pages, containers, and cards
 * - Theme-aware tokens that change between light and dark modes
 * 
 * Section 2: Elevation System
 * - Apple-inspired elevation system with 4 levels (0-3)
 * - Each level has shadow and border properties
 * - Dark mode uses layered shadows with light highlights
 */

export default function SurfacesElevation() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Title and description explaining surfaces and elevation
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Surfaces & Elevation</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Theme-aware background colors and elevation system for creating depth and hierarchy in the UI.
        </p>
      </div>

      {/* 
        SURFACE TOKENS SECTION
        Shows all surface tokens with light and dark values
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Surface Tokens</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Background colors for pages, containers, and cards that automatically adapt to light and dark themes
            </p>
          </div>
          
          <div className="space-y-6">
            
            {/* surface.page */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Page Background</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-3">The main page background color</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.page → color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.page → color.sepia.1000</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="mt-4 p-8 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-[var(--surface-page)]">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">This container uses surface.page</p>
              </div>
            </div>

            {/* surface.container */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Container Background</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-3">Background for general containers (same as page in current theme)</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.container → color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.container → color.sepia.1000</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="mt-4 p-8 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-[var(--surface-container)]">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">This container uses surface.container</p>
              </div>
            </div>

            {/* surface.card */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Card Background</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-3">Elevated background for cards and content containers</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-white border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.card → color.white</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-975 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.card → color.sepia.975</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="mt-4 p-8 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-[var(--surface-card)]">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">This container uses surface.card</p>
              </div>
            </div>

            {/* surface.container-stroke */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Container Stroke</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-3">Border color for containers and dividers</p>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.container-stroke → color.sepia.500</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-800 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">surface.container-stroke → color.sepia.800</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="mt-4 p-8 border-[0.5px] border-solid border-[var(--surface-container-stroke)] rounded-2xl bg-[var(--surface-card)]">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">This container uses surface.container-stroke for its border</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ELEVATION SYSTEM SECTION
        Shows all 4 elevation levels with interactive examples
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Elevation System</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Apple-inspired elevation system with shadows and borders for depth perception in both themes
            </p>
          </div>

          {/* Dark Mode Features Callout */}
          <div className="mb-8 p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl">
            <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Dark Mode Elevation Features</p>
            <ul className="space-y-1">
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Layered shadows (dark base + light highlight)</li>
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Light borders for edge definition</li>
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Subtle top highlight simulates "light from above"</li>
            </ul>
          </div>
          
          <div className="space-y-8">
            
            {/* Elevation Level 0 */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Level 0: Flat</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">No elevation, used for flat elements</p>
              
              {/* Token Details */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">elevation.0.shadow: none</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">elevation.0.border: transparent</span>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-sepia-950 rounded-2xl">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-2xl"
                  style={{
                    boxShadow: 'none',
                    border: '1px solid transparent'
                  }}
                >
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Elevation Level 0 - No shadow</p>
                </div>
              </div>
            </div>

            {/* Elevation Level 1 */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Level 1: Default Cards</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">Subtle elevation for default cards and containers</p>
              
              {/* Token Details - Light */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">shadow: 0 2px 8px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-200 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">border: color.sepia.200</span>
                  </div>
                </div>
              </div>

              {/* Token Details - Dark */}
              <div className="mb-4">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">shadow: 0 4px 12px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.06)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">border: rgba(255,255,255,0.08)</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-sepia-950 rounded-2xl">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-2xl border"
                  style={{
                    boxShadow: 'var(--elevation-1-shadow)',
                    borderColor: 'var(--elevation-1-border)'
                  }}
                >
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Elevation Level 1 - Default cards</p>
                </div>
              </div>
            </div>

            {/* Elevation Level 2 */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Level 2: Dropdowns & Popovers</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">Medium elevation for interactive overlays</p>
              
              {/* Token Details - Light */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">shadow: 0 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.10)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">border: color.sepia.300</span>
                  </div>
                </div>
              </div>

              {/* Token Details - Dark */}
              <div className="mb-4">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">shadow: 0 4px 16px rgba(0,0,0,0.5), 0 2px 0 rgba(255,255,255,0.08)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">border: rgba(255,255,255,0.10)</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-sepia-950 rounded-2xl">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-2xl border"
                  style={{
                    boxShadow: 'var(--elevation-2-shadow)',
                    borderColor: 'var(--elevation-2-border)'
                  }}
                >
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Elevation Level 2 - Dropdowns and popovers</p>
                </div>
              </div>
            </div>

            {/* Elevation Level 3 */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Level 3: Modals & Dialogs</h4>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">High elevation for modal dialogs and important overlays</p>
              
              {/* Token Details - Light */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">shadow: 0 10px 40px rgba(0,0,0,0.20), 0 4px 8px rgba(0,0,0,0.12)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">border: color.sepia.300</span>
                  </div>
                </div>
              </div>

              {/* Token Details - Dark */}
              <div className="mb-4">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">shadow: 0 8px 32px rgba(0,0,0,0.6), 0 2px 0 rgba(255,255,255,0.10)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">border: rgba(255,255,255,0.12)</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <div className="p-6 bg-white dark:bg-sepia-950 rounded-2xl">
                <div 
                  className="p-6 bg-[var(--surface-card)] rounded-2xl border"
                  style={{
                    boxShadow: 'var(--elevation-3-shadow)',
                    borderColor: 'var(--elevation-3-border)'
                  }}
                >
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Elevation Level 3 - Modals and dialogs</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        USAGE GUIDELINES SECTION
        When to use each elevation level
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Elevation Usage Guidelines</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">When to use each elevation level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Level 0 & 1 */}
            <div className="space-y-4">
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Level 0: Flat</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Flat UI elements</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Elements flush with page</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• No depth needed</li>
                </ul>
              </div>

              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Level 1: Default</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Content cards</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• List items</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Default containers</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Subtle separation</li>
                </ul>
              </div>
            </div>

            {/* Level 2 & 3 */}
            <div className="space-y-4">
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Level 2: Medium</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Dropdown menus</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Popovers</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Tooltips</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Hover states</li>
                </ul>
              </div>

              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Level 3: High</p>
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Modal dialogs</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Overlay panels</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Important alerts</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Maximum depth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

