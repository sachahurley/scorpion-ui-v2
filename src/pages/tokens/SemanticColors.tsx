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


import { Panel, PlateChip } from "@/components/docs/Panel";
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
              <h2 className="text-2xl font-mono text-[var(--text-primary)]">Semantic Tokens</h2>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Color tokens with semantic meaning that reference foundation colors.
              </p>
          </div>

            {/* Container with page background and border */}
            <Panel>
              {/* Subsection title for Primary scale */}
              <div className="mb-4">
                <h3 className="text-sm font-mono text-[var(--text-primary)]">Primary Scale (references Amber)</h3>
        </div>

              {/* 
                Grid of color swatches - same structure as base colors
                Uses Amber colors but displays as "primary" in token names
              */}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
                
                {/* primary-50 (amber-50) */}
                <PlateChip>
                  <div className="bg-amber-50 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.50</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FFFBEB</p>
                  </div>
                </PlateChip>

                {/* primary-100 (amber-100) */}
                <PlateChip>
                  <div className="bg-amber-100 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.100</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FEF3C7</p>
                  </div>
                </PlateChip>

                {/* primary-200 (amber-200) */}
                <PlateChip>
                  <div className="bg-amber-200 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.200</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FDE68A</p>
                  </div>
                </PlateChip>

                {/* primary-300 (amber-300) */}
                <PlateChip>
                  <div className="bg-amber-300 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.300</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FCD34D</p>
                  </div>
                </PlateChip>

                {/* primary-400 (amber-400) */}
                <PlateChip>
                  <div className="bg-amber-400 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.400</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FBBF24</p>
                  </div>
                </PlateChip>

                {/* primary-500 (amber-500) */}
                <PlateChip>
                  <div className="bg-amber-500 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.500</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F59E0B</p>
                  </div>
                </PlateChip>

                {/* primary-600 (amber-600) */}
                <PlateChip>
                  <div className="bg-amber-600 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.600</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#D97706</p>
                          </div>
                            </PlateChip>

                {/* primary-700 (amber-700) */}
                <PlateChip>
                  <div className="bg-amber-700 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.700</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#B45309</p>
                  </div>
                </PlateChip>

                {/* primary-800 (amber-800) */}
                <PlateChip>
                  <div className="bg-amber-800 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.800</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#92400E</p>
                  </div>
                            </PlateChip>

                {/* primary-900 (amber-900) */}
                <PlateChip>
                  <div className="bg-amber-900 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.900</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#78350F</p>
                              </div>
                    </PlateChip>

                {/* primary-950 (amber-950) */}
                <PlateChip>
                  <div className="bg-amber-950 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.950</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#451A03</p>
                  </div>
                </PlateChip>

                {/* primary-975 (amber-975) */}
                <PlateChip>
                  <div className="bg-amber-975 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.975</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#2D1102</p>
                  </div>
                </PlateChip>

                {/* primary-1000 (amber-1000) */}
                <PlateChip>
                  <div className="bg-amber-1000 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.1000</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1A0A01</p>
                  </div>
                </PlateChip>
              </div>
            </Panel>
        </section>

        {/* SECONDARY SCALE SECTION (Sepia colors) */}
        <section className="mb-10">
          <Panel>
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Secondary Scale (references Sepia)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* secondary-50 */}
              <PlateChip>
                <div className="bg-sepia-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FAFAF9</p>
                </div>
              </PlateChip>
              {/* secondary-100 */}
              <PlateChip>
                <div className="bg-sepia-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F5F5F4</p>
                </div>
              </PlateChip>
              {/* secondary-200 */}
              <PlateChip>
                <div className="bg-sepia-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#E7E5E4</p>
                </div>
              </PlateChip>
              {/* secondary-300 */}
              <PlateChip>
                <div className="bg-sepia-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#D6D3D1</p>
                </div>
              </PlateChip>
              {/* secondary-400 */}
              <PlateChip>
                <div className="bg-sepia-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#A8A29E</p>
                </div>
              </PlateChip>
              {/* secondary-500 */}
              <PlateChip>
                <div className="bg-sepia-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#78716C</p>
                </div>
              </PlateChip>
              {/* secondary-600 */}
              <PlateChip>
                <div className="bg-sepia-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#57534E</p>
                </div>
              </PlateChip>
              {/* secondary-700 */}
              <PlateChip>
                <div className="bg-sepia-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#44403C</p>
                </div>
              </PlateChip>
              {/* secondary-800 */}
              <PlateChip>
                <div className="bg-sepia-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#474030</p>
                </div>
              </PlateChip>
              {/* secondary-900 */}
              <PlateChip>
                <div className="bg-sepia-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#2B2718</p>
                </div>
              </PlateChip>
              {/* secondary-925 */}
              <PlateChip>
                <div className="bg-sepia-925 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.925</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#221E13</p>
                </div>
              </PlateChip>
              {/* secondary-950 */}
              <PlateChip>
                <div className="bg-sepia-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1A150F</p>
                </div>
              </PlateChip>
              {/* secondary-975 */}
              <PlateChip>
                <div className="bg-sepia-975 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.975</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#120D09</p>
                </div>
              </PlateChip>
              {/* secondary-1000 */}
              <PlateChip>
                <div className="bg-sepia-1000 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.1000</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#0A0704</p>
                </div>
              </PlateChip>
            </div>
          </Panel>
        </section>

        {/* SUCCESS SCALE SECTION (Green colors) */}
        <section className="mb-10">
          <Panel>
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Success Scale (references Green)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* success-50 */}
              <PlateChip>
                <div className="bg-green-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F0FDF4</p>
                </div>
              </PlateChip>
              {/* success-100 */}
              <PlateChip>
                <div className="bg-green-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#DCFCE7</p>
                </div>
              </PlateChip>
              {/* success-200 */}
              <PlateChip>
                <div className="bg-green-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#BBF7D0</p>
                </div>
              </PlateChip>
              {/* success-300 */}
              <PlateChip>
                <div className="bg-green-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#86EFAC</p>
                </div>
              </PlateChip>
              {/* success-400 */}
              <PlateChip>
                <div className="bg-green-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#4ADE80</p>
                </div>
              </PlateChip>
              {/* success-500 */}
              <PlateChip>
                <div className="bg-green-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#22C55E</p>
                </div>
              </PlateChip>
              {/* success-600 */}
              <PlateChip>
                <div className="bg-green-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#16A34A</p>
                </div>
              </PlateChip>
              {/* success-700 */}
              <PlateChip>
                <div className="bg-green-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#15803D</p>
                </div>
              </PlateChip>
              {/* success-800 */}
              <PlateChip>
                <div className="bg-green-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#166534</p>
                </div>
              </PlateChip>
              {/* success-900 */}
              <PlateChip>
                <div className="bg-green-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#14532D</p>
                </div>
              </PlateChip>
              {/* success-950 */}
              <PlateChip>
                <div className="bg-green-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#052E16</p>
                </div>
              </PlateChip>
            </div>
          </Panel>
        </section>

        {/* INFO SCALE SECTION (Blue colors) */}
        <section className="mb-10">
          <Panel>
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Info Scale (references Blue)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* info-50 */}
              <PlateChip>
                <div className="bg-blue-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#EFF6FF</p>
                </div>
              </PlateChip>
              {/* info-100 */}
              <PlateChip>
                <div className="bg-blue-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#DBEAFE</p>
                </div>
              </PlateChip>
              {/* info-200 */}
              <PlateChip>
                <div className="bg-blue-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#BFDBFE</p>
                </div>
              </PlateChip>
              {/* info-300 */}
              <PlateChip>
                <div className="bg-blue-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#93C5FD</p>
                </div>
              </PlateChip>
              {/* info-400 */}
              <PlateChip>
                <div className="bg-blue-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#60A5FA</p>
                </div>
              </PlateChip>
              {/* info-500 */}
              <PlateChip>
                <div className="bg-blue-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#3B82F6</p>
                </div>
              </PlateChip>
              {/* info-600 */}
              <PlateChip>
                <div className="bg-blue-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#2563EB</p>
                </div>
              </PlateChip>
              {/* info-700 */}
              <PlateChip>
                <div className="bg-blue-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1D4ED8</p>
                </div>
              </PlateChip>
              {/* info-800 */}
              <PlateChip>
                <div className="bg-blue-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1E40AF</p>
                </div>
              </PlateChip>
              {/* info-900 */}
              <PlateChip>
                <div className="bg-blue-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#1E3A8A</p>
                </div>
              </PlateChip>
              {/* info-950 */}
              <PlateChip>
                <div className="bg-blue-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#172554</p>
                </div>
              </PlateChip>
            </div>
          </Panel>
              </section>

        {/* WARNING SCALE SECTION (Purple colors) */}
        <section className="mb-10">
          <Panel>
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Warning Scale (references Purple)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* warning-50 */}
              <PlateChip>
                <div className="bg-purple-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FAF5FF</p>
                </div>
              </PlateChip>
              {/* warning-100 */}
              <PlateChip>
                <div className="bg-purple-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F3E8FF</p>
                </div>
              </PlateChip>
              {/* warning-200 */}
              <PlateChip>
                <div className="bg-purple-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#E9D5FF</p>
                </div>
              </PlateChip>
              {/* warning-300 */}
              <PlateChip>
                <div className="bg-purple-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#D8B4FE</p>
                </div>
              </PlateChip>
              {/* warning-400 */}
              <PlateChip>
                <div className="bg-purple-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#C084FC</p>
                </div>
              </PlateChip>
              {/* warning-500 */}
              <PlateChip>
                <div className="bg-purple-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#A855F7</p>
                </div>
              </PlateChip>
              {/* warning-600 */}
              <PlateChip>
                <div className="bg-purple-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#9333EA</p>
                </div>
              </PlateChip>
              {/* warning-700 */}
              <PlateChip>
                <div className="bg-purple-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#7E22CE</p>
                </div>
              </PlateChip>
              {/* warning-800 */}
              <PlateChip>
                <div className="bg-purple-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#6B21A8</p>
                </div>
              </PlateChip>
              {/* warning-900 */}
              <PlateChip>
                <div className="bg-purple-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#581C87</p>
                </div>
              </PlateChip>
              {/* warning-950 */}
              <PlateChip>
                <div className="bg-purple-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#3B0764</p>
                </div>
              </PlateChip>
            </div>
          </Panel>
        </section>

        {/* ERROR SCALE SECTION (Red colors) */}
        <section className="mb-10">
          <Panel>
            <div className="mb-4">
              <h3 className="text-sm font-mono text-[var(--text-primary)]">Error Scale (references Red)</h3>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
              {/* error-50 */}
              <PlateChip>
                <div className="bg-red-50 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.50</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FEF2F2</p>
                </div>
              </PlateChip>
              {/* error-100 */}
              <PlateChip>
                <div className="bg-red-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FEE2E2</p>
                </div>
              </PlateChip>
              {/* error-200 */}
              <PlateChip>
                <div className="bg-red-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FECACA</p>
                </div>
              </PlateChip>
              {/* error-300 */}
              <PlateChip>
                <div className="bg-red-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#FCA5A5</p>
                </div>
              </PlateChip>
              {/* error-400 */}
              <PlateChip>
                <div className="bg-red-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#F87171</p>
                </div>
              </PlateChip>
              {/* error-500 */}
              <PlateChip>
                <div className="bg-red-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#EF4444</p>
                </div>
              </PlateChip>
              {/* error-600 */}
              <PlateChip>
                <div className="bg-red-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#DC2626</p>
                </div>
              </PlateChip>
              {/* error-700 */}
              <PlateChip>
                <div className="bg-red-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#B91C1C</p>
                </div>
              </PlateChip>
              {/* error-800 */}
              <PlateChip>
                <div className="bg-red-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#991B1B</p>
                </div>
              </PlateChip>
              {/* error-900 */}
              <PlateChip>
                <div className="bg-red-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#7F1D1D</p>
                </div>
              </PlateChip>
              {/* error-950 */}
              <PlateChip>
                <div className="bg-red-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">#450A0A</p>
                </div>
              </PlateChip>
              </div>
            </Panel>
          </section>
    </div>
  );
}

