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
              <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Base Tokens (Global)</h2>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                Foundation tokens that never reference other tokens. These are the primitive values.
              </p>
          </div>

            {/* Container with page background and border */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
              {/* Subsection title for the Amber scale */}
              <div className="mb-4">
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Amber Scale</h3>
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
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.50</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FFFBEB</p>
                  </div>
                </div>

                {/* amber-100 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.100</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FEF3C7</p>
                  </div>
                </div>

                {/* amber-200 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.200</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FDE68A</p>
                  </div>
                </div>

                {/* amber-300 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.300</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FCD34D</p>
                  </div>
                </div>

                {/* amber-400 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.400</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FBBF24</p>
                  </div>
                </div>

                {/* amber-500 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.500</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F59E0B</p>
                  </div>
                </div>

                {/* amber-600 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.600</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#D97706</p>
                          </div>
                            </div>

                {/* amber-700 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.700</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#B45309</p>
                  </div>
                </div>

                {/* amber-800 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.800</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#92400E</p>
                  </div>
                            </div>

                {/* amber-900 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.900</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#78350F</p>
                              </div>
                    </div>

                {/* amber-950 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.950</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#451A03</p>
                  </div>
                </div>

                {/* amber-975 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-975 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.975</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#2D1102</p>
                  </div>
                </div>

                {/* amber-1000 */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-1000 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.amber.1000</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1A0A01</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* SEPIA SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Sepia Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* sepia-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FDFCFB</p>
                </div>
              </div>
              {/* sepia-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FCFBFA</p>
                </div>
              </div>
              {/* sepia-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F7F5F2</p>
                </div>
              </div>
              {/* sepia-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F0EBE4</p>
                </div>
              </div>
              {/* sepia-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#E0DACE</p>
                </div>
              </div>
              {/* sepia-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#BFB4A3</p>
                </div>
              </div>
              {/* sepia-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#968A75</p>
                </div>
              </div>
              {/* sepia-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#695F4D</p>
                </div>
              </div>
              {/* sepia-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#474030</p>
                </div>
              </div>
              {/* sepia-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#2B2718</p>
                </div>
              </div>
              {/* sepia-925 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-925 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.925</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#221E13</p>
                </div>
              </div>
              {/* sepia-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1A150F</p>
                </div>
              </div>
              {/* sepia-975 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-975 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.975</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#120D09</p>
                </div>
              </div>
              {/* sepia-1000 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-1000 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.sepia.1000</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#0A0704</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GREEN SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Green Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* green-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F0FDF4</p>
                </div>
              </div>
              {/* green-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#DCFCE7</p>
                </div>
              </div>
              {/* green-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#BBF7D0</p>
                </div>
              </div>
              {/* green-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#86EFAC</p>
                </div>
              </div>
              {/* green-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#4ADE80</p>
                </div>
              </div>
              {/* green-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#22C55E</p>
                </div>
              </div>
              {/* green-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#16A34A</p>
                </div>
              </div>
              {/* green-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#15803D</p>
                </div>
              </div>
              {/* green-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#166534</p>
                </div>
              </div>
              {/* green-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#14532D</p>
                </div>
              </div>
              {/* green-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.green.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#052E16</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLUE SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Blue Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* blue-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#EFF6FF</p>
                </div>
              </div>
              {/* blue-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#DBEAFE</p>
                </div>
              </div>
              {/* blue-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#BFDBFE</p>
                </div>
              </div>
              {/* blue-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#93C5FD</p>
                </div>
              </div>
              {/* blue-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#60A5FA</p>
                </div>
              </div>
              {/* blue-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#3B82F6</p>
                </div>
              </div>
              {/* blue-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#2563EB</p>
                </div>
              </div>
              {/* blue-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1D4ED8</p>
                </div>
              </div>
              {/* blue-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1E40AF</p>
                </div>
              </div>
              {/* blue-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1E3A8A</p>
                </div>
              </div>
              {/* blue-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.blue.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#172554</p>
                </div>
              </div>
            </div>
          </div>
              </section>

        {/* PURPLE SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Purple Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* purple-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FAF5FF</p>
                </div>
              </div>
              {/* purple-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F3E8FF</p>
                </div>
              </div>
              {/* purple-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#E9D5FF</p>
                </div>
              </div>
              {/* purple-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#D8B4FE</p>
                </div>
              </div>
              {/* purple-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#C084FC</p>
                </div>
              </div>
              {/* purple-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#A855F7</p>
                </div>
              </div>
              {/* purple-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#9333EA</p>
                </div>
              </div>
              {/* purple-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#7E22CE</p>
                </div>
              </div>
              {/* purple-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#6B21A8</p>
                </div>
              </div>
              {/* purple-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#581C87</p>
                </div>
              </div>
              {/* purple-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.purple.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#3B0764</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RED SCALE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Red Scale</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* red-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FEF2F2</p>
                </div>
              </div>
              {/* red-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FEE2E2</p>
                </div>
              </div>
              {/* red-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FECACA</p>
                </div>
              </div>
              {/* red-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FCA5A5</p>
                </div>
              </div>
              {/* red-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F87171</p>
                </div>
              </div>
              {/* red-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#EF4444</p>
                </div>
              </div>
              {/* red-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#DC2626</p>
                </div>
              </div>
              {/* red-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#B91C1C</p>
                </div>
              </div>
              {/* red-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#991B1B</p>
                </div>
              </div>
              {/* red-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#7F1D1D</p>
                </div>
              </div>
              {/* red-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.red.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#450A0A</p>
                </div>
              </div>
              </div>
            </div>
          </section>

        {/* BLACK AND WHITE SECTION */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Neutrals</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* black */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-black h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.black</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#000000</p>
                </div>
              </div>
              {/* white */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-white h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.white</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FFFFFF</p>
                </div>
              </div>
            </div>
        </div>
        </section>
    </div>
  );
}

