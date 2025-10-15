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
    <div className="container mx-auto px-10 pt-10 pb-20">
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
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Variants</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
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
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Three size options with consistent text size (14px Fragment Mono)
            </p>
          </div>
          
          {/* Size comparison - all buttons use same text size, different heights */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-2">
              <Button variant="primary" size="small">Small (32px)</Button>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 32px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="primary" size="medium">Medium (40px)</Button>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 40px (default)</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="primary" size="large">Large (48px)</Button>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 48px</p>
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
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Primary Button</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              ✓ Full token support - Main call-to-action button for primary actions
            </p>
          </div>
          
          {/* Visual Example */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="primary" size="medium">Primary Button</Button>
          </div>

          {/* Token Documentation */}
          <div className="space-y-6">
            {/* Colors Section */}
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.amber.400 (#FBBF24)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.amber.500 (#F59E0B)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.amber.600 (#D97706)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.amber.400 (#FBBF24)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.amber.500 (#F59E0B)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.amber.600 (#D97706)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.black (#000000)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.black (#000000)</p>
                </div>
              </div>
            </div>

            {/* Typography Section */}
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Font Family: font.family.mono (Fragment Mono)</p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Font Size: font.size.sm (14px)</p>
              </div>
            </div>

            {/* Spacing Section */}
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Spacing</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Small</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding X: 16px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding Y: 6px</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Medium (Default)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding X: 20px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding Y: 10px</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Large</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding X: 24px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding Y: 14px</p>
                </div>
              </div>
            </div>

            {/* Border Section */}
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Border</h4>
              <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Border Radius: radius.button (12px)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Secondary Button</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              ✓ Full token support - Secondary actions and less prominent buttons
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="secondary" size="medium">Secondary Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.sepia.700 (#695F4D)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.600 (#968A75)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.sepia.500 (#BFB4A3)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.sepia.700 (#695F4D)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.600 (#968A75)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.sepia.500 (#BFB4A3)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.sepia.50 (#FDFCFB)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.sepia.50 (#FDFCFB)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GHOST BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Ghost Button</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Transparent background with subtle hover state
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="ghost" size="medium">Ghost Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: transparent</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.100 (#FCFBFA)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.sepia.200 (#F7F5F2)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: transparent</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.800 (#474030)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.sepia.700 (#695F4D)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.sepia.900 (#2B2718)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.sepia.50 (#FDFCFB)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Link Button</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Text-only button styled like a hyperlink
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="link" size="medium">Link Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Always transparent</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text Decoration</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Underline on hover</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.amber.600 (#D97706)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.amber.700 (#B45309)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.amber.400 (#FBBF24)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.amber.300 (#FCD34D)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTLINE BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Outline Button</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Transparent background with visible border
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="outline" size="medium">Outline Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: transparent</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.50 (#FDFCFB)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.sepia.100 (#FCFBFA)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: transparent</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.900 (#2B2718)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.sepia.800 (#474030)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.sepia.300 (#F0EBE4)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.400 (#E0DACE)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.sepia.700 (#695F4D)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.sepia.600 (#968A75)</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Border</h4>
              <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Border Width: 2px</p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Border Radius: radius.button (12px)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTRUCTIVE BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Destructive Button</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Red/error colored for dangerous or destructive actions
            </p>
          </div>
          
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-2xl bg-white dark:bg-sepia-950">
            <Button variant="destructive" size="medium">Destructive Button</Button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-medium text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Light)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.red.600 (#DC2626)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.red.700 (#B91C1C)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.red.800 (#991B1B)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background (Dark)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default: color.red.500 (#EF4444)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover: color.red.600 (#DC2626)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Active: color.red.700 (#B91C1C)</p>
                </div>
                <div className="p-3 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text (Both Themes)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">color.white (#FFFFFF)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

