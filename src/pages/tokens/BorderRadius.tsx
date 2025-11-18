/**
 * BORDER RADIUS FOUNDATION PAGE
 * 
 * Documentation for border radius tokens
 * Shows the two radius values used throughout the design system:
 * - radius.button (12px) - For buttons and small interactive elements
 * - radius.container (24px) - For cards, containers, and larger surfaces
 */

export default function BorderRadius() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Title and description explaining border radius tokens
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Border Radius</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Consistent corner rounding for buttons and containers throughout the design system.
        </p>
      </div>

      {/* 
        BORDER RADIUS TOKENS SECTION
        Shows both radius values with visual examples
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Radius Tokens</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Two radius values for different UI element sizes</p>
          </div>
          
          {/* Container with both radius examples */}
          <div className="space-y-8">
            
            {/* radius.button - 12px */}
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Button Radius</h4>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">Used for buttons and small interactive elements</p>
              </div>

              {/* Token chip */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">radius.button</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">12px</span>
                </div>
              </div>

              {/* Visual Example - Button sized element with 12px radius */}
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-primary-400 text-black font-mono text-sm" style={{ borderRadius: '12px' }}>
                  12px Border Radius
                </div>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-4">
                  This radius creates softer corners while maintaining clear boundaries for interactive elements.
                </p>
              </div>
            </div>

            {/* radius.container - 24px */}
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Container Radius</h4>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">Used for cards, panels, and larger containers</p>
              </div>

              {/* Token chip */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">radius.container</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">24px</span>
                </div>
              </div>

              {/* Visual Example - Larger container with 24px radius */}
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <div className="bg-primary-100 dark:bg-primary-900 p-8" style={{ borderRadius: '24px' }}>
                  <p className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-2">24px Border Radius</p>
                  <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                    This larger radius provides a more friendly and modern appearance for content containers, cards, and panels. It creates a distinctive visual style that's consistent across the design system.
                  </p>
                </div>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-4">
                  The 24px radius is exactly double the button radius, creating a proportional relationship in the design system.
                </p>
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div>
              <div className="mb-4">
                <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Visual Comparison</h4>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">Both radii shown at the same scale</p>
              </div>

              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <div className="flex flex-wrap gap-6 items-start">
                  {/* 12px example */}
                  <div className="flex flex-col gap-2">
                    <div className="w-32 h-32 bg-sepia-200 dark:bg-sepia-800 border-2 border-sepia-500 dark:border-sepia-600" style={{ borderRadius: '12px' }}></div>
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">12px</p>
                  </div>
                  
                  {/* 24px example */}
                  <div className="flex flex-col gap-2">
                    <div className="w-32 h-32 bg-sepia-200 dark:bg-sepia-800 border-2 border-sepia-500 dark:border-sepia-600" style={{ borderRadius: '24px' }}></div>
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">24px</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        USAGE GUIDELINES SECTION
        Explains when to use each radius value
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Usage Guidelines</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">When to use each radius value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Button Radius Usage */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">radius.button (12px)</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Buttons (all variants)</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Form inputs</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Small chips and badges</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Dropdown items</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Toggle switches</li>
              </ul>
            </div>

            {/* Container Radius Usage */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">radius.container (24px)</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Content cards</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Modal dialogs</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Panels and sections</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Dropdown menus</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Large containers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

