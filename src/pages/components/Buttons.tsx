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
 * 4. Icon buttons section (left, right, icon-only)
 * 5. Detailed token breakdown for each variant
 */

import { Button } from "@/components/ui/Button";
// Import icons from lucide-react for icon button examples
import { 
  Search, 
  Settings, 
  ChevronRight, 
  Plus, 
  Download,
  Upload,
  Trash2,
  Edit,
  Save,
  Send,
  ArrowLeft,
  ArrowRight,
  AlertCircle
} from "lucide-react";

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
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
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
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
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
        ICON BUTTONS SECTION
        Shows buttons with icons on left, right, and icon-only variants
        =================================================================
      */}

      {/* BUTTONS WITH LEFT ICONS */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Buttons with Left Icons</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Icons positioned on the left side of button text. Icons automatically scale with button size.
            </p>
          </div>
          
          {/* All Variants with Left Icons */}
          <div className="mb-8">
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">All Variants (Medium Size)</h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconLeft={<Search />}>Search</Button>
              <Button variant="secondary" iconLeft={<Settings />}>Settings</Button>
              <Button variant="ghost" iconLeft={<Edit />}>Edit</Button>
              <Button variant="outline" iconLeft={<Download />}>Download</Button>
              <Button variant="destructive" iconLeft={<Trash2 />}>Delete</Button>
            </div>
          </div>

          {/* All Sizes with Left Icons */}
          <div className="mb-8">
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">All Sizes (Primary Variant)</h4>
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="large" iconLeft={<Plus />}>Add Item</Button>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Large (24px icon)</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="medium" iconLeft={<Plus />}>Add Item</Button>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Medium (20px icon)</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="small" iconLeft={<Plus />}>Add Item</Button>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Small (16px icon)</p>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div>
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Common Use Cases</h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconLeft={<Save />}>Save Changes</Button>
              <Button variant="primary" iconLeft={<Send />}>Send Message</Button>
              <Button variant="secondary" iconLeft={<Upload />}>Upload File</Button>
              <Button variant="outline" iconLeft={<ArrowLeft />}>Go Back</Button>
            </div>
          </div>
        </div>
      </section>

      {/* BUTTONS WITH RIGHT ICONS */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Buttons with Right Icons</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Icons positioned on the right side of button text. Perfect for navigation and directional actions.
            </p>
          </div>
          
          {/* All Variants with Right Icons */}
          <div className="mb-8">
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">All Variants (Medium Size)</h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconRight={<ChevronRight />}>Continue</Button>
              <Button variant="secondary" iconRight={<ChevronRight />}>Next Step</Button>
              <Button variant="ghost" iconRight={<ChevronRight />}>View More</Button>
              <Button variant="outline" iconRight={<Download />}>Export</Button>
              <Button variant="destructive" iconRight={<AlertCircle />}>Remove</Button>
            </div>
          </div>

          {/* All Sizes with Right Icons */}
          <div className="mb-8">
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">All Sizes (Primary Variant)</h4>
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="large" iconRight={<ArrowRight />}>Get Started</Button>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Large (24px icon)</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="medium" iconRight={<ArrowRight />}>Get Started</Button>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Medium (20px icon)</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="small" iconRight={<ArrowRight />}>Get Started</Button>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Small (16px icon)</p>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div>
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Common Use Cases</h4>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconRight={<ChevronRight />}>Next Page</Button>
              <Button variant="secondary" iconRight={<ChevronRight />}>Learn More</Button>
              <Button variant="outline" iconRight={<Download />}>Download Report</Button>
              <Button variant="ghost" iconRight={<ArrowRight />}>View Details</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ICON-ONLY BUTTONS */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Icon-Only Buttons</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Compact buttons showing only an icon. Use aria-label for accessibility (screen readers).
            </p>
          </div>
          
          {/* Small Size - All Variants */}
          <div className="mb-8">
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Small Size (32×32px, 16px icon)</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="small" aria-label="Search">
                <Search />
              </Button>
              <Button variant="secondary" size="small" aria-label="Settings">
                <Settings />
              </Button>
              <Button variant="ghost" size="small" aria-label="Edit">
                <Edit />
              </Button>
              <Button variant="outline" size="small" aria-label="Download">
                <Download />
              </Button>
              <Button variant="destructive" size="small" aria-label="Delete">
                <Trash2 />
              </Button>
            </div>
          </div>

          {/* Medium Size - All Variants */}
          <div className="mb-8">
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Medium Size (40×40px, 20px icon)</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="medium" aria-label="Search">
                <Search />
              </Button>
              <Button variant="secondary" size="medium" aria-label="Settings">
                <Settings />
              </Button>
              <Button variant="ghost" size="medium" aria-label="Edit">
                <Edit />
              </Button>
              <Button variant="outline" size="medium" aria-label="Download">
                <Download />
              </Button>
              <Button variant="destructive" size="medium" aria-label="Delete">
                <Trash2 />
              </Button>
            </div>
          </div>

          {/* Large Size - All Variants */}
          <div className="mb-8">
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Large Size (48×48px, 24px icon)</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="large" aria-label="Search">
                <Search />
              </Button>
              <Button variant="secondary" size="large" aria-label="Settings">
                <Settings />
              </Button>
              <Button variant="ghost" size="large" aria-label="Edit">
                <Edit />
              </Button>
              <Button variant="outline" size="large" aria-label="Download">
                <Download />
              </Button>
              <Button variant="destructive" size="large" aria-label="Delete">
                <Trash2 />
              </Button>
            </div>
          </div>

          {/* Accessibility Note */}
          <div className="p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                  ♿️ Accessibility Requirement
                </p>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  Icon-only buttons must include an <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">aria-label</code> attribute 
                  to describe the button's action for screen reader users. Example: <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">aria-label="Search"</code>
                </p>
              </div>
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
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          {/* Card Title & Subtitle - Updated text sizes: title=16px (text-base), subtitle=14px (text-sm) */}
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Primary Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ✓ Full token support - Main call-to-action button for primary actions
            </p>
          </div>
          
          {/* Visual Example - All button states shown side by side */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              <div className="flex flex-wrap gap-4 items-start">
                {/* Default State */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-primary-400 text-black">
                    Primary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                </div>
                
                {/* Hover State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-primary-500 text-black">
                    Primary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                </div>
                
                {/* Focused State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button 
                    className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-primary-400 text-black ring-2 ring-primary-400 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000"
                  >
                    Primary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                </div>
                
                {/* Pressed/Active State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-primary-600 text-black">
                    Primary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Pressed</span>
                </div>
                
                {/* Disabled State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 h-10 px-5 py-2.5 bg-primary-400 text-black opacity-50 cursor-not-allowed">
                    Primary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                </div>
              </div>
            </div>
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

            {/* Focus States Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus States</h4>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Light & Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.primary.400 (amber.400)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring Offset</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Width: 2px</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Light): color.sepia.50 (page background)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Dark): color.sepia.1000 (page background)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Secondary Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ✓ Full token support - Secondary actions and less prominent buttons
            </p>
          </div>
          
          {/* Visual Example - All button states shown side by side */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              <div className="flex flex-wrap gap-4 items-start">
                {/* Default State */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-700 text-secondary-50">
                    Secondary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                </div>
                
                {/* Hover State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-600 text-secondary-50">
                    Secondary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                </div>
                
                {/* Focused State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button 
                    className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-700 text-secondary-50 ring-2 ring-secondary-700 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000"
                  >
                    Secondary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                </div>
                
                {/* Pressed/Active State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-500 text-secondary-50">
                    Secondary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Pressed</span>
                </div>
                
                {/* Disabled State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 h-10 px-5 py-2.5 bg-secondary-700 text-secondary-50 opacity-50 cursor-not-allowed">
                    Secondary
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                </div>
              </div>
            </div>
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

            {/* Focus States Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus States</h4>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Light & Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.secondary.700 (sepia.700)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring Offset</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Width: 2px</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Light): color.sepia.50 (page background)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Dark): color.sepia.1000 (page background)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GHOST BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Ghost Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Transparent background with subtle hover state
            </p>
          </div>
          
          {/* Visual Example - All button states shown side by side */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              <div className="flex flex-wrap gap-4 items-start">
                {/* Default State */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent text-secondary-900 dark:text-secondary-50">
                    Ghost
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                </div>
                
                {/* Hover State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-200 dark:bg-secondary-700 text-secondary-900 dark:text-secondary-50">
                    Ghost
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                </div>
                
                {/* Focused State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button 
                    className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent text-secondary-900 dark:text-secondary-50 ring-2 ring-secondary-300 dark:ring-secondary-700 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000"
                  >
                    Ghost
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                </div>
                
                {/* Pressed/Active State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-300 dark:bg-secondary-600 text-secondary-900 dark:text-secondary-50">
                    Ghost
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Pressed</span>
                </div>
                
                {/* Disabled State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 h-10 px-5 py-2.5 bg-transparent text-secondary-900 dark:text-secondary-50 opacity-50 cursor-not-allowed">
                    Ghost
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                </div>
              </div>
            </div>
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

            {/* Focus States Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus States</h4>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.secondary.300 (sepia.300)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.secondary.700 (sepia.700)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring Offset</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Width: 2px</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Light): color.sepia.50 (page background)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Dark): color.sepia.1000 (page background)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Link Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Text-only button styled like a hyperlink
            </p>
          </div>
          
          {/* Visual Example - All button states shown side by side */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              <div className="flex flex-wrap gap-4 items-start">
                {/* Default State */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent text-primary-600 dark:text-primary-400">
                    Link
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                </div>
                
                {/* Hover State - Forced with underline */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent text-primary-700 dark:text-primary-300 underline">
                    Link
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                </div>
                
                {/* Focused State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button 
                    className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent text-primary-600 dark:text-primary-400 ring-2 ring-primary-600 dark:ring-primary-400 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000"
                  >
                    Link
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                </div>
                
                {/* Pressed/Active State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent text-primary-700 dark:text-primary-300">
                    Link
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Pressed</span>
                </div>
                
                {/* Disabled State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 h-10 px-5 py-2.5 bg-transparent text-primary-600 dark:text-primary-400 opacity-50 cursor-not-allowed">
                    Link
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                </div>
              </div>
            </div>
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

            {/* Focus States Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus States</h4>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.primary.600 (amber.600)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.primary.400 (amber.400)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring Offset</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Width: 2px</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Light): color.sepia.50 (page background)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Dark): color.sepia.1000 (page background)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTLINE BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Outline Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Transparent background with visible border
            </p>
          </div>
          
          {/* Visual Example - All button states shown side by side */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              <div className="flex flex-wrap gap-4 items-start">
                {/* Default State */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-secondary-50">
                    Outline
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                </div>
                
                {/* Hover State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-50 dark:bg-secondary-900 border border-secondary-400 dark:border-secondary-600 text-secondary-900 dark:text-secondary-50">
                    Outline
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                </div>
                
                {/* Focused State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button 
                    className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-transparent border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-secondary-50 ring-2 ring-secondary-300 dark:ring-secondary-700 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000"
                  >
                    Outline
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                </div>
                
                {/* Pressed/Active State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-secondary-100 dark:bg-secondary-800 border border-secondary-400 dark:border-secondary-600 text-secondary-900 dark:text-secondary-50">
                    Outline
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Pressed</span>
                </div>
                
                {/* Disabled State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 h-10 px-5 py-2.5 bg-transparent border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-secondary-50 opacity-50 cursor-not-allowed">
                    Outline
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                </div>
              </div>
            </div>
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

            {/* Focus States Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus States</h4>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.secondary.300 (sepia.300)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.secondary.700 (sepia.700)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring Offset</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Width: 2px</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Light): color.sepia.50 (page background)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Dark): color.sepia.1000 (page background)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTRUCTIVE BUTTON BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Destructive Button</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              ⚠️ ASSUMPTION - Red/error colored for dangerous or destructive actions
            </p>
          </div>
          
          {/* Visual Example - All button states shown side by side */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              <div className="flex flex-wrap gap-4 items-start">
                {/* Default State */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-error-600 dark:bg-error-500 text-white">
                    Destructive
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                </div>
                
                {/* Hover State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-error-700 dark:bg-error-600 text-white">
                    Destructive
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                </div>
                
                {/* Focused State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button 
                    className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-error-600 dark:bg-error-500 text-white ring-2 ring-error-600 dark:ring-error-500 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000"
                  >
                    Destructive
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                </div>
                
                {/* Pressed/Active State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 cursor-pointer h-10 px-5 py-2.5 bg-error-800 dark:bg-error-700 text-white">
                    Destructive
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Pressed</span>
                </div>
                
                {/* Disabled State - Forced */}
                <div className="flex flex-col gap-2 items-center">
                  <button className="inline-flex items-center justify-center font-mono text-sm rounded-button transition-colors duration-200 h-10 px-5 py-2.5 bg-error-600 dark:bg-error-500 text-white opacity-50 cursor-not-allowed">
                    Destructive
                  </button>
                  <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                </div>
              </div>
            </div>
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

            {/* Focus States Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus States</h4>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.error.600 (red.600)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring (Dark)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Color: color.error.500 (red.500)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: 2px</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Ring Offset</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Width: 2px</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Light): color.sepia.50 (page background)</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-1000 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Offset Color (Dark): color.sepia.1000 (page background)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        FOCUS STATES REFERENCE SECTION
        Shows which focus tokens buttons use with link to foundation page
        This is component-specific; full focus documentation is in foundation
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Focus States</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              All buttons use the design system's focus state tokens for keyboard navigation and accessibility.
            </p>
          </div>

          {/* Reference to foundation tokens */}
          <div className="mb-6 p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl">
            <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">
              📖 Complete Documentation
            </p>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              For complete focus state documentation, accessibility guidelines, and implementation details, see the <a href="/scorpion-ui-v2/foundation/focus-states" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700 dark:hover:text-primary-300">Focus States foundation page</a>.
            </p>
          </div>

          {/* Token breakdown specific to buttons */}
          <div className="space-y-6">
            {/* Global Properties */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus Ring Properties (All Buttons)</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Width: focus.ring.width (2px)</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Ring Offset: focus.ring.offset (2px)</span>
                </div>
              </div>
            </div>

            {/* Primary Button Focus */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Primary Button Focus Color</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <div className="w-4 h-4 rounded-full bg-primary-400 border border-sepia-300 dark:border-sepia-600"></div>
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.primary → color.primary.400 (both themes)</span>
                </div>
              </div>
            </div>

            {/* Secondary Button Focus */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Secondary/Ghost/Outline Button Focus Color</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <div className="w-4 h-4 rounded-full bg-secondary-700 border border-sepia-300 dark:border-sepia-600"></div>
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.secondary → color.secondary.700 (both themes)</span>
                </div>
              </div>
            </div>

            {/* Destructive Button Focus */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Destructive Button Focus Color</h4>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-error-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.error → color.error.600</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-error-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">focus.ring.error → color.error.500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Test */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Test Keyboard Navigation</h4>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">
                  Press Tab to cycle through these buttons and see their focus rings:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

