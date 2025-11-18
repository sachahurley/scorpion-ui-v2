/**
 * DIVIDERS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for divider/separator components
 */

import { Divider } from "@/components/ui/Divider";

export default function Dividers() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Dividers</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Divider and separator components for visual separation. Supports horizontal, vertical, and text-labeled variants.
        </p>
      </div>

      {/* Variants Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Variants</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three divider styles for different use cases
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Horizontal */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Horizontal</h4>
              <Divider variant="horizontal" spacing="medium" />
            </div>

            {/* Vertical */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Vertical</h4>
              <div className="flex items-center gap-4 h-20">
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Left</span>
                <Divider variant="vertical" spacing="none" className="h-full" />
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Right</span>
              </div>
            </div>

            {/* With Text */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">With Text Label</h4>
              <Divider variant="withText" text="OR" spacing="medium" />
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Spacing Options</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Control vertical or horizontal spacing around dividers
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">None (0px margin)</p>
              <div className="bg-sepia-100 dark:bg-sepia-900 p-4 rounded-lg">
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Content above</div>
                <Divider variant="horizontal" spacing="none" />
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mt-2">Content below</div>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">Small (4px margin)</p>
              <div className="bg-sepia-100 dark:bg-sepia-900 p-4 rounded-lg">
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Content above</div>
                <Divider variant="horizontal" spacing="small" />
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Content below</div>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">Medium (16px margin)</p>
              <div className="bg-sepia-100 dark:bg-sepia-900 p-4 rounded-lg">
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Content above</div>
                <Divider variant="horizontal" spacing="medium" />
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Content below</div>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-2">Large (32px margin)</p>
              <div className="bg-sepia-100 dark:bg-sepia-900 p-4 rounded-lg">
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Content above</div>
                <Divider variant="horizontal" spacing="large" />
                <div className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Content below</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Common Use Cases</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Real-world examples of divider usage
            </p>
          </div>
          
          <div className="space-y-6">
            {/* List Separators */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">List Separators</h4>
              <div className="bg-sepia-50 dark:bg-sepia-975 p-4 rounded-lg space-y-0">
                <div className="py-3 text-sm font-mono text-sepia-900 dark:text-sepia-50">Item 1</div>
                <Divider variant="horizontal" spacing="none" />
                <div className="py-3 text-sm font-mono text-sepia-900 dark:text-sepia-50">Item 2</div>
                <Divider variant="horizontal" spacing="none" />
                <div className="py-3 text-sm font-mono text-sepia-900 dark:text-sepia-50">Item 3</div>
              </div>
            </div>

            {/* Section Dividers */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Section Dividers</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Section A</h5>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Content for section A</p>
                </div>
                <Divider variant="horizontal" spacing="medium" />
                <div>
                  <h5 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Section B</h5>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Content for section B</p>
                </div>
              </div>
            </div>

            {/* Form Dividers */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Form Dividers</h4>
              <div className="bg-sepia-50 dark:bg-sepia-975 p-4 rounded-lg space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 rounded-lg border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-950 text-sm font-mono" placeholder="you@example.com" />
                </div>
                <Divider variant="withText" text="OR" spacing="small" />
                <div>
                  <label className="block text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-1">Phone</label>
                  <input type="tel" className="w-full px-3 py-2 rounded-lg border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-950 text-sm font-mono" placeholder="(555) 123-4567" />
                </div>
              </div>
            </div>

            {/* Vertical Layout */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Vertical Layout</h4>
              <div className="flex items-center gap-4 h-16">
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Left Column</span>
                <Divider variant="vertical" spacing="none" className="h-full" />
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Middle Column</span>
                <Divider variant="vertical" spacing="none" className="h-full" />
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Right Column</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Breakdown */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Design tokens used in divider components
            </p>
          </div>

          <div className="space-y-6">
            {/* Color Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Color Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Color</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Light: sepia-300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Dark: sepia-700</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text Color</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Light: sepia-600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Dark: sepia-400</p>
                </div>
              </div>
            </div>

            {/* Spacing Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Spacing Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">None</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">0px margin</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Small</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">4px margin</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Medium</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">16px margin</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Large</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">32px margin</p>
                </div>
              </div>
            </div>

            {/* Typography Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Family</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Fragment Mono</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Size</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">12px (text-xs)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

