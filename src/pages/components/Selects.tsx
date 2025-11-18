/**
 * SELECTS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for select dropdown components
 * Shows all sizes, states, and their corresponding design tokens
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Sizes section (small, medium, large)
 * 3. States section (default, hover, focused, disabled, error)
 * 4. With Labels section (proper form structure)
 * 5. Detailed token breakdown for selects
 */

import { Select } from "@/components/ui/Select";
import { AlertCircle } from "lucide-react";

export default function Selects() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Inputs.tsx
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Selects</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Dropdown select components with multiple sizes matching input heights. All selects use Fragment Mono at 14px and include hover, focus, disabled, and error states.
        </p>
      </div>

      {/* 
        SIZES SECTION
        Shows three size variations
        Small: 32px height, Medium: 40px height (default), Large: 48px height
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three size options matching input heights (32px, 40px, 48px) with consistent text size (14px Fragment Mono)
            </p>
          </div>
          
          {/* Size comparison - all selects aligned */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Select size="large">
                <option value="">Large select (48px)</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 48px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Select size="medium">
                <option value="">Medium select (40px)</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 40px (default)</p>
            </div>
            <div className="flex flex-col gap-2">
              <Select size="small">
                <option value="">Small select (32px)</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 32px</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        STATES SECTION
        Shows all interaction states side by side
        Default, Hover, Focused, Disabled, Error
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">States</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              All interaction states with visual feedback for user actions
            </p>
          </div>
          
          {/* Interactive Examples */}
          <div>
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Try It Yourself</h4>
            <div className="space-y-4">
              {/* Default State */}
              <div className="space-y-2">
                <label htmlFor="select-default" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                  Default
                </label>
                <Select id="select-default">
                  <option value="">Choose an option...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>

              {/* Disabled State */}
              <div className="space-y-2">
                <label htmlFor="select-disabled" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                  Disabled
                </label>
                <Select id="select-disabled" disabled>
                  <option value="">This field is disabled</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </Select>
              </div>

              {/* Error State with Message */}
              <div className="space-y-2">
                <label htmlFor="select-error" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                  Country
                </label>
                <Select id="select-error" error>
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </Select>
                <p className="text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Please select a country
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        WITH LABELS SECTION
        Proper form structure with labels
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">With Labels</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Proper form structure with labels, helper text, and error messages
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Basic Select with Label */}
            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                Country
              </label>
              <Select id="country">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </Select>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Select your country of residence
              </p>
            </div>

            {/* Required Field */}
            <div className="space-y-2">
              <label htmlFor="language" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 relative">
                <span className="text-error-600 dark:text-error-500 absolute -left-[12px]">*</span> Language
              </label>
              <Select id="language" required>
                <option value="">Select a language</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* 
        USE CASES SECTION
        Common select use cases
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Use Cases</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Common patterns for using select dropdowns in forms
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Form with Multiple Selects */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">User Profile</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="timezone" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                    Timezone
                  </label>
                  <Select id="timezone">
                    <option value="">Select timezone</option>
                    <option value="est">Eastern Time (EST)</option>
                    <option value="cst">Central Time (CST)</option>
                    <option value="mst">Mountain Time (MST)</option>
                    <option value="pst">Pacific Time (PST)</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="currency" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                    Currency
                  </label>
                  <Select id="currency">
                    <option value="">Select currency</option>
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="jpy">JPY (¥)</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        TOKEN BREAKDOWN SECTION
        Documentation of design tokens used in selects
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Select Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in select components. Tokens match Input component for consistency.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Colors Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Border Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Border</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default (Light): color.sepia.300</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-700 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default (Dark): color.sepia.700</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Focus: color.primary.400</span>
                  </div>
                </div>
              </div>

              {/* Error State Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Error State</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Border (Light): color.error.600</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-500 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Border (Dark): color.error.500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Font Family: <span className="font-mono">Fragment Mono</span></span>
                </div>
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
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Height: 32px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 12px</span>
                    </div>
                  </div>
                </div>
                {/* Medium */}
                <div>
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Medium (Default)</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Height: 40px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 16px</span>
                    </div>
                  </div>
                </div>
                {/* Large */}
                <div>
                  <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Large</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Height: 48px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 20px</span>
                    </div>
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

