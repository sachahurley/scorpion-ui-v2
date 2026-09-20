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
import { tokenHex } from "@/lib/tokenValue";
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
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-50")}</p>
                  </div>
                </PlateChip>

                {/* primary-100 (amber-100) */}
                <PlateChip>
                  <div className="bg-amber-100 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.100</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-100")}</p>
                  </div>
                </PlateChip>

                {/* primary-200 (amber-200) */}
                <PlateChip>
                  <div className="bg-amber-200 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.200</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-200")}</p>
                  </div>
                </PlateChip>

                {/* primary-300 (amber-300) */}
                <PlateChip>
                  <div className="bg-amber-300 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.300</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-300")}</p>
                  </div>
                </PlateChip>

                {/* primary-400 (amber-400) */}
                <PlateChip>
                  <div className="bg-amber-400 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.400</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-400")}</p>
                  </div>
                </PlateChip>

                {/* primary-500 (amber-500) */}
                <PlateChip>
                  <div className="bg-amber-500 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.500</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-500")}</p>
                  </div>
                </PlateChip>

                {/* primary-600 (amber-600) */}
                <PlateChip>
                  <div className="bg-amber-600 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.600</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-600")}</p>
                          </div>
                            </PlateChip>

                {/* primary-700 (amber-700) */}
                <PlateChip>
                  <div className="bg-amber-700 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.700</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-700")}</p>
                  </div>
                </PlateChip>

                {/* primary-800 (amber-800) */}
                <PlateChip>
                  <div className="bg-amber-800 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.800</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-800")}</p>
                  </div>
                            </PlateChip>

                {/* primary-900 (amber-900) */}
                <PlateChip>
                  <div className="bg-amber-900 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.900</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-900")}</p>
                              </div>
                    </PlateChip>

                {/* primary-950 (amber-950) */}
                <PlateChip>
                  <div className="bg-amber-950 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.950</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-950")}</p>
                  </div>
                </PlateChip>

                {/* primary-975 (amber-975) */}
                <PlateChip>
                  <div className="bg-amber-975 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.975</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-975")}</p>
                  </div>
                </PlateChip>

                {/* primary-1000 (amber-1000) */}
                <PlateChip>
                  <div className="bg-amber-1000 h-20 border-b border-[var(--border-hairline)]" />
                  <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                    <p className="text-xs font-mono text-[var(--text-primary)]">color.primary.1000</p>
                    <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-primary-1000")}</p>
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
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-50")}</p>
                </div>
              </PlateChip>
              {/* secondary-100 */}
              <PlateChip>
                <div className="bg-sepia-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-100")}</p>
                </div>
              </PlateChip>
              {/* secondary-200 */}
              <PlateChip>
                <div className="bg-sepia-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-200")}</p>
                </div>
              </PlateChip>
              {/* secondary-300 */}
              <PlateChip>
                <div className="bg-sepia-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-300")}</p>
                </div>
              </PlateChip>
              {/* secondary-400 */}
              <PlateChip>
                <div className="bg-sepia-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-400")}</p>
                </div>
              </PlateChip>
              {/* secondary-500 */}
              <PlateChip>
                <div className="bg-sepia-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-500")}</p>
                </div>
              </PlateChip>
              {/* secondary-600 */}
              <PlateChip>
                <div className="bg-sepia-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-600")}</p>
                </div>
              </PlateChip>
              {/* secondary-700 */}
              <PlateChip>
                <div className="bg-sepia-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-700")}</p>
                </div>
              </PlateChip>
              {/* secondary-800 */}
              <PlateChip>
                <div className="bg-sepia-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-800")}</p>
                </div>
              </PlateChip>
              {/* secondary-900 */}
              <PlateChip>
                <div className="bg-sepia-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-900")}</p>
                </div>
              </PlateChip>
              {/* secondary-925 */}
              <PlateChip>
                <div className="bg-sepia-925 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.925</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-925")}</p>
                </div>
              </PlateChip>
              {/* secondary-950 */}
              <PlateChip>
                <div className="bg-sepia-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-950")}</p>
                </div>
              </PlateChip>
              {/* secondary-975 */}
              <PlateChip>
                <div className="bg-sepia-975 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.975</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-975")}</p>
                </div>
              </PlateChip>
              {/* secondary-1000 */}
              <PlateChip>
                <div className="bg-sepia-1000 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.secondary.1000</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-secondary-1000")}</p>
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
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-50")}</p>
                </div>
              </PlateChip>
              {/* success-100 */}
              <PlateChip>
                <div className="bg-green-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-100")}</p>
                </div>
              </PlateChip>
              {/* success-200 */}
              <PlateChip>
                <div className="bg-green-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-200")}</p>
                </div>
              </PlateChip>
              {/* success-300 */}
              <PlateChip>
                <div className="bg-green-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-300")}</p>
                </div>
              </PlateChip>
              {/* success-400 */}
              <PlateChip>
                <div className="bg-green-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-400")}</p>
                </div>
              </PlateChip>
              {/* success-500 */}
              <PlateChip>
                <div className="bg-green-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-500")}</p>
                </div>
              </PlateChip>
              {/* success-600 */}
              <PlateChip>
                <div className="bg-green-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-600")}</p>
                </div>
              </PlateChip>
              {/* success-700 */}
              <PlateChip>
                <div className="bg-green-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-700")}</p>
                </div>
              </PlateChip>
              {/* success-800 */}
              <PlateChip>
                <div className="bg-green-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-800")}</p>
                </div>
              </PlateChip>
              {/* success-900 */}
              <PlateChip>
                <div className="bg-green-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-900")}</p>
                </div>
              </PlateChip>
              {/* success-950 */}
              <PlateChip>
                <div className="bg-green-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.success.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-success-950")}</p>
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
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-50")}</p>
                </div>
              </PlateChip>
              {/* info-100 */}
              <PlateChip>
                <div className="bg-blue-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-100")}</p>
                </div>
              </PlateChip>
              {/* info-200 */}
              <PlateChip>
                <div className="bg-blue-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-200")}</p>
                </div>
              </PlateChip>
              {/* info-300 */}
              <PlateChip>
                <div className="bg-blue-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-300")}</p>
                </div>
              </PlateChip>
              {/* info-400 */}
              <PlateChip>
                <div className="bg-blue-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-400")}</p>
                </div>
              </PlateChip>
              {/* info-500 */}
              <PlateChip>
                <div className="bg-blue-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-500")}</p>
                </div>
              </PlateChip>
              {/* info-600 */}
              <PlateChip>
                <div className="bg-blue-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-600")}</p>
                </div>
              </PlateChip>
              {/* info-700 */}
              <PlateChip>
                <div className="bg-blue-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-700")}</p>
                </div>
              </PlateChip>
              {/* info-800 */}
              <PlateChip>
                <div className="bg-blue-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-800")}</p>
                </div>
              </PlateChip>
              {/* info-900 */}
              <PlateChip>
                <div className="bg-blue-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-900")}</p>
                </div>
              </PlateChip>
              {/* info-950 */}
              <PlateChip>
                <div className="bg-blue-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.info.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-info-950")}</p>
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
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-50")}</p>
                </div>
              </PlateChip>
              {/* warning-100 */}
              <PlateChip>
                <div className="bg-purple-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-100")}</p>
                </div>
              </PlateChip>
              {/* warning-200 */}
              <PlateChip>
                <div className="bg-purple-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-200")}</p>
                </div>
              </PlateChip>
              {/* warning-300 */}
              <PlateChip>
                <div className="bg-purple-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-300")}</p>
                </div>
              </PlateChip>
              {/* warning-400 */}
              <PlateChip>
                <div className="bg-purple-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-400")}</p>
                </div>
              </PlateChip>
              {/* warning-500 */}
              <PlateChip>
                <div className="bg-purple-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-500")}</p>
                </div>
              </PlateChip>
              {/* warning-600 */}
              <PlateChip>
                <div className="bg-purple-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-600")}</p>
                </div>
              </PlateChip>
              {/* warning-700 */}
              <PlateChip>
                <div className="bg-purple-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-700")}</p>
                </div>
              </PlateChip>
              {/* warning-800 */}
              <PlateChip>
                <div className="bg-purple-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-800")}</p>
                </div>
              </PlateChip>
              {/* warning-900 */}
              <PlateChip>
                <div className="bg-purple-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-900")}</p>
                </div>
              </PlateChip>
              {/* warning-950 */}
              <PlateChip>
                <div className="bg-purple-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.warning.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-warning-950")}</p>
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
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-50")}</p>
                </div>
              </PlateChip>
              {/* error-100 */}
              <PlateChip>
                <div className="bg-red-100 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.100</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-100")}</p>
                </div>
              </PlateChip>
              {/* error-200 */}
              <PlateChip>
                <div className="bg-red-200 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-200")}</p>
                </div>
              </PlateChip>
              {/* error-300 */}
              <PlateChip>
                <div className="bg-red-300 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.300</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-300")}</p>
                </div>
              </PlateChip>
              {/* error-400 */}
              <PlateChip>
                <div className="bg-red-400 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.400</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-400")}</p>
                </div>
              </PlateChip>
              {/* error-500 */}
              <PlateChip>
                <div className="bg-red-500 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.500</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-500")}</p>
                </div>
              </PlateChip>
              {/* error-600 */}
              <PlateChip>
                <div className="bg-red-600 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.600</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-600")}</p>
                </div>
              </PlateChip>
              {/* error-700 */}
              <PlateChip>
                <div className="bg-red-700 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-700")}</p>
                </div>
              </PlateChip>
              {/* error-800 */}
              <PlateChip>
                <div className="bg-red-800 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.800</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-800")}</p>
                </div>
              </PlateChip>
              {/* error-900 */}
              <PlateChip>
                <div className="bg-red-900 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-900")}</p>
                </div>
              </PlateChip>
              {/* error-950 */}
              <PlateChip>
                <div className="bg-red-950 h-20 border-b border-[var(--border-hairline)]" />
                <div className="bg-white dark:bg-secondary-950 p-3 flex flex-col gap-1">
                  <p className="text-xs font-mono text-[var(--text-primary)]">color.error.950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenHex("--color-error-950")}</p>
                </div>
              </PlateChip>
              </div>
            </Panel>
          </section>
    </div>
  );
}

