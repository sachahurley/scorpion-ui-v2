/**
 * FOUNDATION COLORS PAGE - BASE COLORS
 * 
 * Documentation for base/foundation color tokens
 * These are primitive color values that never reference other tokens
 * Displays: Amber, Sepia, Green, Blue, Purple, Red scales + Black & White
 */

export default function Colors() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
        {/* 
          BASE TOKENS SECTION - FULL WIDTH
          Shows the foundation tokens (Amber scale) that form the primitive values
          These never reference other tokens - they're the base of the design system
          This section is outside the max-w-6xl container to fill the page width
        */}
        <section className="mb-10">
            {/* Section Header - explains what base tokens are */}
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-2xl font-mono text-[var(--text-primary)]">Base Tokens (Global)</h2>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Foundation tokens that never reference other tokens. These are the primitive values.
              </p>
          </div>

            {/* Container with page background and border */}
            <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
              {/* Subsection title for the Amber scale */}
              <div className="mb-4">
                <h3 className="text-sm font-mono text-[var(--text-primary)]">Amber Scale</h3>
        </div>

              {/* 
                Responsive grid of color swatches using CSS Grid
                - grid with auto-fill creates as many columns as fit
                - minmax(180px, 1fr) means each card is at least 180px and grows equally
                - gap-5 creates 20px spacing between cards
                - ALL cards have the same width (determined by first row)
              */}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
                {/* 
                  Each color swatch card:
                  - border with rounded corners
                  - color preview on top (80px height)
                  - label section below with token name and hex value
                */}
                
                {/* amber-50 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-50 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.50</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FFFBEB</p>
                  </div>
                </div>

                {/* amber-100 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-100 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.100</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FEF3C7</p>
                  </div>
                </div>

                {/* amber-200 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-200 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.200</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FDE68A</p>
                  </div>
                </div>

                {/* amber-300 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-300 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.300</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FCD34D</p>
                  </div>
                </div>

                {/* amber-400 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-400 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.400</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FBBF24</p>
                  </div>
                </div>

                {/* amber-500 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-500 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.500</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F59E0B</p>
                  </div>
                </div>

                {/* amber-600 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-600 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.600</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#D97706</p>
                          </div>
                            </div>

                {/* amber-700 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-700 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.700</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#B45309</p>
                  </div>
                </div>

                {/* amber-800 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-800 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.800</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#92400E</p>
                  </div>
                            </div>

                {/* amber-900 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-900 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.900</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#78350F</p>
                              </div>
                    </div>

                {/* amber-950 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-950 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.950</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#451A03</p>
                  </div>
                </div>

                {/* amber-975 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-975 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.975</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#2D1102</p>
                  </div>
                </div>

                {/* amber-1000 */}
                <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                  <div className="bg-amber-1000 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.amber.1000</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1A0A01</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* SEPIA SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Sepia Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* sepia-50 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FDFCFB</p>
                </div>
              </div>
              {/* sepia-100 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FCFBFA</p>
                </div>
              </div>
              {/* sepia-200 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F7F5F2</p>
                </div>
              </div>
              {/* sepia-300 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F0EBE4</p>
                </div>
              </div>
              {/* sepia-400 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#E0DACE</p>
                </div>
              </div>
              {/* sepia-500 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#BFB4A3</p>
                </div>
              </div>
              {/* sepia-600 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#968A75</p>
                </div>
              </div>
              {/* sepia-700 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#695F4D</p>
                </div>
              </div>
              {/* sepia-800 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#474030</p>
                </div>
              </div>
              {/* sepia-900 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#2B2718</p>
                </div>
              </div>
              {/* sepia-925 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-925 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.925</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#221E13</p>
                </div>
              </div>
              {/* sepia-950 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1A150F</p>
                </div>
              </div>
              {/* sepia-975 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-975 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.975</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#120D09</p>
                </div>
              </div>
              {/* sepia-1000 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-sepia-1000 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.sepia.1000</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#0A0704</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GREEN SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Green Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* green-50 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F0FDF4</p>
                </div>
              </div>
              {/* green-100 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#DCFCE7</p>
                </div>
              </div>
              {/* green-200 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#BBF7D0</p>
                </div>
              </div>
              {/* green-300 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#86EFAC</p>
                </div>
              </div>
              {/* green-400 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#4ADE80</p>
                </div>
              </div>
              {/* green-500 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#22C55E</p>
                </div>
              </div>
              {/* green-600 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#16A34A</p>
                </div>
              </div>
              {/* green-700 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#15803D</p>
                </div>
              </div>
              {/* green-800 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#166534</p>
                </div>
              </div>
              {/* green-900 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#14532D</p>
                </div>
              </div>
              {/* green-950 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-green-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.green.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#052E16</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLUE SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Blue Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* blue-50 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#EFF6FF</p>
                </div>
              </div>
              {/* blue-100 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#DBEAFE</p>
                </div>
              </div>
              {/* blue-200 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#BFDBFE</p>
                </div>
              </div>
              {/* blue-300 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#93C5FD</p>
                </div>
              </div>
              {/* blue-400 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#60A5FA</p>
                </div>
              </div>
              {/* blue-500 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#3B82F6</p>
                </div>
              </div>
              {/* blue-600 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#2563EB</p>
                </div>
              </div>
              {/* blue-700 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1D4ED8</p>
                </div>
              </div>
              {/* blue-800 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1E40AF</p>
                </div>
              </div>
              {/* blue-900 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1E3A8A</p>
                </div>
              </div>
              {/* blue-950 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-blue-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.blue.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#172554</p>
                </div>
              </div>
            </div>
          </div>
              </section>

        {/* PURPLE SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Purple Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* purple-50 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FAF5FF</p>
                </div>
              </div>
              {/* purple-100 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F3E8FF</p>
                </div>
              </div>
              {/* purple-200 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#E9D5FF</p>
                </div>
              </div>
              {/* purple-300 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#D8B4FE</p>
                </div>
              </div>
              {/* purple-400 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#C084FC</p>
                </div>
              </div>
              {/* purple-500 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#A855F7</p>
                </div>
              </div>
              {/* purple-600 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#9333EA</p>
                </div>
              </div>
              {/* purple-700 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#7E22CE</p>
                </div>
              </div>
              {/* purple-800 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#6B21A8</p>
                </div>
              </div>
              {/* purple-900 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#581C87</p>
                </div>
              </div>
              {/* purple-950 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-purple-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.purple.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#3B0764</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RED SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Red Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* red-50 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FEF2F2</p>
                </div>
              </div>
              {/* red-100 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FEE2E2</p>
                </div>
              </div>
              {/* red-200 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FECACA</p>
                </div>
              </div>
              {/* red-300 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FCA5A5</p>
                </div>
              </div>
              {/* red-400 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F87171</p>
                </div>
              </div>
              {/* red-500 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#EF4444</p>
                </div>
              </div>
              {/* red-600 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#DC2626</p>
                </div>
              </div>
              {/* red-700 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#B91C1C</p>
                </div>
              </div>
              {/* red-800 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#991B1B</p>
                </div>
              </div>
              {/* red-900 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#7F1D1D</p>
                </div>
              </div>
              {/* red-950 */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-red-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.red.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#450A0A</p>
                </div>
              </div>
              </div>
            </div>
          </section>

        {/* BLACK AND WHITE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Neutrals</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* black */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-black h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.black</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#000000</p>
                </div>
              </div>
              {/* white */}
              <div className="border border-[var(--border-hairline)] rounded-none overflow-hidden">
                <div className="bg-white h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.white</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FFFFFF</p>
                </div>
              </div>
            </div>
        </div>
        </section>
    </div>
  );
}

