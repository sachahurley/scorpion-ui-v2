/**
 * SPACING FOUNDATION PAGE
 * 
 * Documentation for spacing tokens
 * Shows the 4px-based spacing scale used for padding, margins, and gaps
 * 
 * NOTE: These tokens match Tailwind's default spacing scale for consistency
 * They're documented here as official design system tokens
 */

export default function Spacing() {
  // Define all spacing values for visualization
  const spacingValues = [
    { name: "spacing.0", value: "0", pixels: 0 },
    { name: "spacing.1", value: "4px", pixels: 4 },
    { name: "spacing.2", value: "8px", pixels: 8 },
    { name: "spacing.3", value: "12px", pixels: 12 },
    { name: "spacing.4", value: "16px", pixels: 16 },
    { name: "spacing.5", value: "20px", pixels: 20 },
    { name: "spacing.6", value: "24px", pixels: 24 },
    { name: "spacing.8", value: "32px", pixels: 32 },
    { name: "spacing.10", value: "40px", pixels: 40 },
    { name: "spacing.12", value: "48px", pixels: 48 },
    { name: "spacing.16", value: "64px", pixels: 64 },
    { name: "spacing.20", value: "80px", pixels: 80 },
    { name: "spacing.24", value: "96px", pixels: 96 },
  ];

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Spacing</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          4px-based spacing scale for padding, margins, and gaps. Matches Tailwind defaults for consistency.
        </p>
      </div>

      {/* SPACING SCALE SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Spacing Scale</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              All spacing values visualized with pixel measurements
            </p>
          </div>
          
          {/* Visual representation of each spacing value */}
          <div className="space-y-4">
            {spacingValues.map((spacing) => (
              <div key={spacing.name} className="flex items-center gap-4">
                {/* Token name and value chips */}
                <div className="flex gap-2 min-w-[280px]">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">{spacing.name}</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">{spacing.value}</span>
                  </div>
                </div>

                {/* Visual bar showing the actual spacing */}
                <div className="flex-1 max-w-2xl">
                  <div 
                    className="h-8 bg-primary-400 dark:bg-primary-500 rounded transition-all"
                    style={{ width: `${spacing.pixels}px`, maxWidth: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4PX BASE UNIT SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">4px Base Unit</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              The spacing scale follows a 4px base unit system for mathematical consistency
            </p>
          </div>

          <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-3">
              <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                <span className="font-bold">Base Unit:</span> 4px
              </p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                All spacing values are multiples of 4px (except 0), creating a harmonious visual rhythm throughout the interface.
              </p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="text-xs font-mono text-sepia-600 dark:text-sepia-400">spacing.1 = 4px × 1</div>
                <div className="text-xs font-mono text-sepia-600 dark:text-sepia-400">spacing.2 = 4px × 2</div>
                <div className="text-xs font-mono text-sepia-600 dark:text-sepia-400">spacing.3 = 4px × 3</div>
                <div className="text-xs font-mono text-sepia-600 dark:text-sepia-400">spacing.4 = 4px × 4</div>
                <div className="text-xs font-mono text-sepia-600 dark:text-sepia-400">spacing.6 = 4px × 6</div>
                <div className="text-xs font-mono text-sepia-600 dark:text-sepia-400">spacing.8 = 4px × 8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON USE CASES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Common Use Cases</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Typical applications of each spacing value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Small Spacing */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Small Spacing (0-3)</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.0: Reset spacing to zero</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.1 (4px): Tight gaps between inline elements</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.2 (8px): Icon-to-text spacing in buttons</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.3 (12px): Small component padding</li>
              </ul>
            </div>

            {/* Medium Spacing */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Medium Spacing (4-8)</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.4 (16px): Button horizontal padding</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.5 (20px): Card internal spacing</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.6 (24px): Container padding, section gaps</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.8 (32px): Large card padding</li>
              </ul>
            </div>

            {/* Large Spacing */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Large Spacing (10-16)</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.10 (40px): Section margins</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.12 (48px): Page section spacing</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.16 (64px): Large layout gaps</li>
              </ul>
            </div>

            {/* Extra Large Spacing */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Extra Large Spacing (20-24)</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.20 (80px): Major section dividers</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• spacing.24 (96px): Page-level spacing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXAMPLES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Interactive Examples</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Real-world spacing applications
            </p>
          </div>

          <div className="space-y-8">
            {/* Padding Example */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Component Padding</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Small padding */}
                  <div className="border-2 border-dashed border-primary-300 dark:border-primary-700 rounded">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded">
                      <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">p-3 (spacing.3 = 12px)</p>
                    </div>
                  </div>
                  
                  {/* Medium padding */}
                  <div className="border-2 border-dashed border-primary-300 dark:border-primary-700 rounded">
                    <div className="p-6 bg-primary-100 dark:bg-primary-900 rounded">
                      <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">p-6 (spacing.6 = 24px)</p>
                    </div>
                  </div>
                  
                  {/* Large padding */}
                  <div className="border-2 border-dashed border-primary-300 dark:border-primary-700 rounded">
                    <div className="p-8 bg-primary-100 dark:bg-primary-900 rounded">
                      <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">p-8 (spacing.8 = 32px)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gap Example */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Element Gaps</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <div className="space-y-6">
                  {/* gap-2 example */}
                  <div>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">gap-2 (spacing.2 = 8px)</p>
                    <div className="flex gap-2">
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                    </div>
                  </div>

                  {/* gap-4 example */}
                  <div>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">gap-4 (spacing.4 = 16px)</p>
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                    </div>
                  </div>

                  {/* gap-6 example */}
                  <div>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">gap-6 (spacing.6 = 24px)</p>
                    <div className="flex gap-6">
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                      <div className="w-16 h-16 bg-secondary-300 dark:bg-secondary-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* USAGE GUIDELINES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Usage Guidelines</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              When to use each spacing value
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Tailwind Class Syntax</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-3">
                Use Tailwind's spacing utilities to apply these values:
              </p>
              <div className="space-y-2">
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Padding: <code className="px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded">p-4</code> (spacing.4 = 16px all sides)</p>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Margin: <code className="px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded">m-6</code> (spacing.6 = 24px all sides)</p>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Gap: <code className="px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded">gap-2</code> (spacing.2 = 8px between flex/grid items)</p>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Specific sides: <code className="px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded">px-4 py-2</code> (horizontal/vertical)</p>
              </div>
            </div>

            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Design Principles</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Stick to the 4px grid for visual consistency</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Use smaller values (1-3) for tight, compact layouts</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Use medium values (4-8) for standard component spacing</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Use large values (10-24) for section-level spacing</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Maintain consistent spacing within component groups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

