/**
 * BUTTONS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for button components
 * Shows all variants, sizes, and their corresponding design tokens
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Variants section (all 6 button types)
 * 3. Sizes section (small, medium, large)
 * 4. Detailed token breakdown for each variant
 */

import { Button } from "@/components/ui/Button";

export default function Buttons() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Colors.tsx and Typography.tsx
        - 2xl font for title
        - sm font for description
        - gap-2 between title and description
        - mb-10 before first section
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Buttons</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Interactive button components with multiple variants and sizes. All buttons use Fragment Mono at 14px and include hover, active, and focus states.
        </p>
      </div>

      {/* 
        VARIANTS SECTION
        Shows all 6 button variants in a row
        Each button is medium size (default 40px height)
        Uses the same container style as other documentation pages
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Variants</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Six button styles for different use cases
            </p>
          </div>
          
          {/* Button variants displayed in a responsive grid */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </section>

      {/* 
        SIZES SECTION
        Shows three size variations using the primary variant
        Small: 32px, Medium: 40px (default), Large: 48px
        All use 14px Fragment Mono text
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three size options with consistent text size (14px Fragment Mono)
            </p>
          </div>
          
          {/* Size comparison - all buttons aligned to bottom, ordered Large → Medium → Small */}
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-2">
              <Button variant="primary" size="large">Large (48px)</Button>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 48px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="primary" size="medium">Medium (40px)</Button>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 40px (default)</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="primary" size="small">Small (32px)</Button>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 32px</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =================================================================
        DETAILED VARIANT BREAKDOWNS
        Each variant gets its own section with:
        - Visual example (interactive button)
        - Complete token documentation (colors, typography, spacing, etc.)
        =================================================================
      */}

      {/* PRIMARY BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          {/* Card Title & Subtitle - Updated text sizes: title=16px (text-base), subtitle=14px (text-sm) */}
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Primary Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ✓ Full token support - Main call-to-action button for primary actions
            </p>
          </div>
          
          {/* Visual Example - Kept in container */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="primary" size="medium">Primary Button</Button>
          </div>

          {/* Token Documentation Cards - Redesigned with pills/chips, no containers */}
          <div className="space-y-6">
            {/* Colors Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Background (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.primary.400 (amber.400)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.primary.500 (amber.500)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.primary.600 (amber.600)</span>
                  </div>
                </div>
              </div>

              {/* Background (Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.primary.400 (amber.400)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.primary.500 (amber.500)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.primary.600 (amber.600)</span>
                  </div>
                </div>
              </div>

              {/* Text (Light & Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text (Light & Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-black border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">color.black</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="flex flex-wrap gap-2">
                {/* Font Family - Shown in actual font */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Font Family: <span className="font-mono">Fragment Mono</span></span>
                </div>
                {/* Font Size - Shown at actual size */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Font Size: <span className="text-sm">14px</span></span>
                </div>
              </div>
            </div>

            {/* Spacing Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Spacing</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Small */}
                <div>
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Small</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 16px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding Y: 6px</span>
                    </div>
                  </div>
                </div>
                {/* Medium */}
                <div>
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Medium (Default)</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 20px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding Y: 10px</span>
                    </div>
                  </div>
                </div>
                {/* Large */}
                <div>
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Large</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 24px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding Y: 14px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Border Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Border</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Border Radius: radius.button (12px)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Secondary Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ✓ Full token support - Secondary actions and less prominent buttons
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="secondary" size="medium">Secondary Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Background (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.secondary.700 (sepia.700)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.secondary.600 (sepia.600)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.secondary.500 (sepia.500)</span>
                  </div>
                </div>
              </div>

              {/* Background (Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.secondary.700 (sepia.700)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.secondary.600 (sepia.600)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.secondary.500 (sepia.500)</span>
                  </div>
                </div>
              </div>

              {/* Text (Light & Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text (Light & Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">color.secondary.50 (sepia.50)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GHOST BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Ghost Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Transparent background with subtle hover state
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="ghost" size="medium">Ghost Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Background (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: transparent</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-200 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.secondary.200 (sepia.200)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.secondary.300 (sepia.300)</span>
                  </div>
                </div>
              </div>

              {/* Background (Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: transparent</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.secondary.700 (sepia.700)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.secondary.600 (sepia.600)</span>
                  </div>
                </div>
              </div>

              {/* Text Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-900 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">color.secondary.900 (sepia.900)</span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">color.secondary.50 (sepia.50)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Link Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Text-only button styled like a hyperlink
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="link" size="medium">Link Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Background */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Always transparent</span>
                  </div>
                </div>
              </div>

              {/* Text Decoration */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text Decoration</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Underline on hover</span>
                  </div>
                </div>
              </div>

              {/* Text (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.primary.600 (amber.600)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.primary.700 (amber.700)</span>
                  </div>
                </div>
              </div>

              {/* Text (Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.primary.400 (amber.400)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.primary.300 (amber.300)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTLINE BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Outline Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Transparent background with visible border
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="outline" size="medium">Outline Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Background (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: transparent</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.secondary.50 (sepia.50)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-100 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.secondary.100 (sepia.100)</span>
                  </div>
                </div>
              </div>

              {/* Background (Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: transparent</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-900 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.secondary.900 (sepia.900)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-800 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.secondary.800 (sepia.800)</span>
                  </div>
                </div>
              </div>

              {/* Border (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Border (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.secondary.300 (sepia.300)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.secondary.400 (sepia.400)</span>
                  </div>
                </div>
              </div>

              {/* Border (Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Border (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.sepia.700</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.sepia.600</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Border Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Border</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Border Width: 1px</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Border Radius: radius.button (12px)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTRUCTIVE BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Destructive Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Red/error colored for dangerous or destructive actions
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="destructive" size="medium">Destructive Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Background (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.error.600 (red.600)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.error.700 (red.700)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-800 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.error.800 (red.800)</span>
                  </div>
                </div>
              </div>

              {/* Background (Dark) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.error.500 (red.500)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.error.600 (red.600)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Active: color.error.700 (red.700)</span>
                  </div>
                </div>
              </div>

              {/* Text (Both Themes) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text (Both Themes)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-white border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">color.white</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

