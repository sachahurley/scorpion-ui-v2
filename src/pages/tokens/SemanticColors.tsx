/**
 * SEMANTIC COLORS PAGE
 * 
 * Documentation for semantic/alias color tokens
 * These are color tokens that reference the foundation colors
 * (e.g., primary → amber, secondary → sepia, success → green)
 * 
 * NOTE: The actual CSS classes still use base color names (bg-amber-50, bg-sepia-50, etc.)
 * but we display them with semantic token names (color.primary.50, color.secondary.50, etc.)
 */

export default function SemanticColors() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
        {/* 
          SEMANTIC TOKENS SECTION
          Shows semantic color tokens that reference base colors
          These give meaning to colors (primary, success, error) rather than just naming them by hue
        */}
        <section className="mb-10">
            {/* Section Header - explains what semantic tokens are */}
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Semantic Tokens</h2>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                Color tokens with semantic meaning that reference foundation colors.
              </p>
          </div>

            {/* Container with page background and border */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
              {/* Subsection title for Primary scale */}
              <div className="mb-4">
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Primary Scale (references Amber)</h3>
        </div>

              {/* 
                Grid of color swatches - same structure as base colors
                Uses Amber colors but displays as "primary" in token names
              */}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
                
                {/* primary-50 (amber-50) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.50</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FFFBEB</p>
                  </div>
                </div>

                {/* primary-100 (amber-100) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.100</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FEF3C7</p>
                  </div>
                </div>

                {/* primary-200 (amber-200) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.200</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FDE68A</p>
                  </div>
                </div>

                {/* primary-300 (amber-300) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.300</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FCD34D</p>
                  </div>
                </div>

                {/* primary-400 (amber-400) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.400</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FBBF24</p>
                  </div>
                </div>

                {/* primary-500 (amber-500) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.500</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F59E0B</p>
                  </div>
                </div>

                {/* primary-600 (amber-600) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.600</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#D97706</p>
                          </div>
                            </div>

                {/* primary-700 (amber-700) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.700</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#B45309</p>
                  </div>
                </div>

                {/* primary-800 (amber-800) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.800</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#92400E</p>
                  </div>
                            </div>

                {/* primary-900 (amber-900) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.900</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#78350F</p>
                              </div>
                    </div>

                {/* primary-950 (amber-950) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.950</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#451A03</p>
                  </div>
                </div>

                {/* primary-975 (amber-975) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-975 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.975</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#2D1102</p>
                  </div>
                </div>

                {/* primary-1000 (amber-1000) */}
                <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                  <div className="bg-amber-1000 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                  <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.primary.1000</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1A0A01</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* SECONDARY SCALE SECTION (Sepia colors) */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Secondary Scale (references Sepia)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* secondary-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FAFAF9</p>
                </div>
              </div>
              {/* secondary-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F5F5F4</p>
                </div>
              </div>
              {/* secondary-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#E7E5E4</p>
                </div>
              </div>
              {/* secondary-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#D6D3D1</p>
                </div>
              </div>
              {/* secondary-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#A8A29E</p>
                </div>
              </div>
              {/* secondary-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#78716C</p>
                </div>
              </div>
              {/* secondary-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#57534E</p>
                </div>
              </div>
              {/* secondary-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#44403C</p>
                </div>
              </div>
              {/* secondary-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#474030</p>
                </div>
              </div>
              {/* secondary-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#2B2718</p>
                </div>
              </div>
              {/* secondary-925 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-925 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.925</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#221E13</p>
                </div>
              </div>
              {/* secondary-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1A150F</p>
                </div>
              </div>
              {/* secondary-975 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-975 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.975</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#120D09</p>
                </div>
              </div>
              {/* secondary-1000 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-sepia-1000 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.secondary.1000</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#0A0704</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS SCALE SECTION (Green colors) */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Success Scale (references Green)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* success-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F0FDF4</p>
                </div>
              </div>
              {/* success-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#DCFCE7</p>
                </div>
              </div>
              {/* success-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#BBF7D0</p>
                </div>
              </div>
              {/* success-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#86EFAC</p>
                </div>
              </div>
              {/* success-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#4ADE80</p>
                </div>
              </div>
              {/* success-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#22C55E</p>
                </div>
              </div>
              {/* success-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#16A34A</p>
                </div>
              </div>
              {/* success-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#15803D</p>
                </div>
              </div>
              {/* success-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#166534</p>
                </div>
              </div>
              {/* success-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#14532D</p>
                </div>
              </div>
              {/* success-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-green-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.success.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#052E16</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFO SCALE SECTION (Blue colors) */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Info Scale (references Blue)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* info-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#EFF6FF</p>
                </div>
              </div>
              {/* info-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#DBEAFE</p>
                </div>
              </div>
              {/* info-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#BFDBFE</p>
                </div>
              </div>
              {/* info-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#93C5FD</p>
                </div>
              </div>
              {/* info-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#60A5FA</p>
                </div>
              </div>
              {/* info-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#3B82F6</p>
                </div>
              </div>
              {/* info-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#2563EB</p>
                </div>
              </div>
              {/* info-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1D4ED8</p>
                </div>
              </div>
              {/* info-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1E40AF</p>
                </div>
              </div>
              {/* info-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#1E3A8A</p>
                </div>
              </div>
              {/* info-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.info.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#172554</p>
                </div>
              </div>
            </div>
          </div>
              </section>

        {/* WARNING SCALE SECTION (Purple colors) */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Warning Scale (references Purple)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* warning-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FAF5FF</p>
                </div>
              </div>
              {/* warning-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F3E8FF</p>
                </div>
              </div>
              {/* warning-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#E9D5FF</p>
                </div>
              </div>
              {/* warning-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#D8B4FE</p>
                </div>
              </div>
              {/* warning-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#C084FC</p>
                </div>
              </div>
              {/* warning-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#A855F7</p>
                </div>
              </div>
              {/* warning-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#9333EA</p>
                </div>
              </div>
              {/* warning-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#7E22CE</p>
                </div>
              </div>
              {/* warning-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#6B21A8</p>
                </div>
              </div>
              {/* warning-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#581C87</p>
                </div>
              </div>
              {/* warning-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.warning.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#3B0764</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERROR SCALE SECTION (Red colors) */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Error Scale (references Red)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* error-50 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-50 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.50</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FEF2F2</p>
                </div>
              </div>
              {/* error-100 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-100 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.100</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FEE2E2</p>
                </div>
              </div>
              {/* error-200 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-200 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FECACA</p>
                </div>
              </div>
              {/* error-300 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-300 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.300</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#FCA5A5</p>
                </div>
              </div>
              {/* error-400 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-400 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.400</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#F87171</p>
                </div>
              </div>
              {/* error-500 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-500 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#EF4444</p>
                </div>
              </div>
              {/* error-600 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-600 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.600</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#DC2626</p>
                </div>
              </div>
              {/* error-700 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-700 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#B91C1C</p>
                </div>
              </div>
              {/* error-800 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-800 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#991B1B</p>
                </div>
              </div>
              {/* error-900 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-900 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#7F1D1D</p>
                </div>
              </div>
              {/* error-950 */}
              <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl overflow-hidden">
                <div className="bg-red-950 h-20 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800" />
                <div className="bg-white dark:bg-sepia-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">color.error.950</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">#450A0A</p>
                </div>
              </div>
              </div>
            </div>
          </section>
    </div>
  );
}

