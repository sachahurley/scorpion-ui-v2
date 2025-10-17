/**
 * INPUTS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for input components
 * Shows all sizes, states, and their corresponding design tokens
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Sizes section (small, medium, large)
 * 3. States section (default, hover, focused, disabled, error)
 * 4. With Labels section (proper form structure)
 * 5. Placeholder Examples section
 * 6. Detailed token breakdown for inputs
 */

import { Input } from "@/components/ui/Input";
import { AlertCircle } from "lucide-react";

export default function Inputs() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Buttons.tsx
        - 2xl font for title
        - sm font for description
        - gap-2 between title and description
        - mb-10 before first section
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Inputs</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Text input components with multiple sizes matching button heights. All inputs use Fragment Mono at 14px and include hover, focus, disabled, and error states.
        </p>
      </div>

      {/* 
        SIZES SECTION
        Shows three size variations
        Small: 32px, Medium: 40px (default), Large: 48px
        Heights match button component for visual consistency
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three size options matching button heights (32px, 40px, 48px) with consistent text size (14px Fragment Mono)
            </p>
          </div>
          
          {/* Size comparison - all inputs aligned, ordered Large → Medium → Small */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Input size="large" placeholder="Large input (48px)" />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 48px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Input size="medium" placeholder="Medium input (40px)" />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 40px (default)</p>
            </div>
            <div className="flex flex-col gap-2">
              <Input size="small" placeholder="Small input (32px)" />
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
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">States</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              All interaction states with visual feedback for user actions
            </p>
          </div>
          
          {/* All States with forced visual representations */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              
              {/* Default State */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                <input 
                  className="w-full font-mono text-sm rounded-button border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 h-10 px-4 py-2.5 placeholder:text-sepia-400 dark:placeholder:text-sepia-600"
                  placeholder="Enter text..."
                  value=""
                  readOnly
                />
              </div>
              
              {/* Hover State - Forced */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                <input 
                  className="w-full font-mono text-sm rounded-button border border-sepia-400 dark:border-sepia-600 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 h-10 px-4 py-2.5 placeholder:text-sepia-400 dark:placeholder:text-sepia-600"
                  placeholder="Enter text..."
                  value=""
                  readOnly
                />
              </div>
              
              {/* Focused State - Forced with focus ring */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                <input 
                  className="w-full font-mono text-sm rounded-button border border-primary-400 dark:border-primary-400 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 h-10 px-4 py-2.5 ring-2 ring-primary-400 dark:ring-primary-400 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000 placeholder:text-sepia-400 dark:placeholder:text-sepia-600"
                  placeholder="Enter text..."
                  value=""
                  readOnly
                />
              </div>
              
              {/* Disabled State - Forced */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                <input 
                  className="w-full font-mono text-sm rounded-button border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 h-10 px-4 py-2.5 opacity-50 cursor-not-allowed placeholder:text-sepia-400 dark:placeholder:text-sepia-600"
                  placeholder="Enter text..."
                  disabled
                  value=""
                  readOnly
                />
              </div>
              
              {/* Error State - Forced */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Error</span>
                <input 
                  className="w-full font-mono text-sm rounded-button border border-error-600 dark:border-error-500 bg-error-50 dark:bg-error-950/20 text-sepia-900 dark:text-sepia-50 h-10 px-4 py-2.5 placeholder:text-sepia-400 dark:placeholder:text-sepia-600"
                  placeholder="Enter text..."
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Interactive Examples */}
          <div>
            <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Try It Yourself</h4>
            <div className="space-y-4">
              <Input placeholder="Click or tab to this input to see focus state" />
              <Input placeholder="This input is interactive" />
              <Input disabled placeholder="This input is disabled" />
              <Input error placeholder="This input has an error" />
            </div>
          </div>
        </div>
      </section>

      {/* 
        WITH LABELS SECTION
        Shows proper form structure with labels
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">With Labels</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Inputs with proper label elements for accessibility and form structure
            </p>
          </div>
          
          <div className="max-w-md space-y-6">
            {/* Standard Label */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                Email Address
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
              />
            </div>

            {/* With Helper Text */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                Username
              </label>
              <Input 
                id="username" 
                type="text" 
                placeholder="Enter your username" 
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Your username must be unique and contain only letters and numbers.
              </p>
            </div>

            {/* Error State with Message */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                Password
              </label>
              <Input 
                id="password" 
                type="password" 
                error
                placeholder="Enter your password" 
              />
              <p className="text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Password must be at least 8 characters long
              </p>
            </div>

            {/* Required Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                Full Name <span className="text-error-600 dark:text-error-500">*</span>
              </label>
              <Input 
                id="name" 
                type="text" 
                required
                placeholder="John Doe" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        PLACEHOLDER EXAMPLES SECTION
        Different placeholder text examples
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Placeholder Examples</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Different placeholder text styles for various use cases
            </p>
          </div>
          
          <div className="space-y-4">
            <Input placeholder="Search..." size="small" />
            <Input placeholder="Enter your email address" />
            <Input placeholder="Type a message..." size="large" />
            <Input placeholder="e.g., John Smith" />
            <Input placeholder="Optional field" />
          </div>
        </div>
      </section>

      {/* 
        =================================================================
        DETAILED TOKEN BREAKDOWN
        Complete documentation of all tokens used in inputs
        =================================================================
      */}

      {/* INPUT TOKEN BREAKDOWN */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          {/* Card Title & Subtitle */}
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Input Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in text inputs
            </p>
          </div>
          
          {/* Token Documentation Cards - Redesigned with pills/chips */}
          <div className="space-y-6">
            {/* Colors Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              
              {/* Border (Light) */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Border (Light)</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-300 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Default: color.sepia.300</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Hover: color.sepia.400</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Focus: color.primary.400</span>
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
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Focus: color.primary.400</span>
                  </div>
                </div>
              </div>

              {/* Background Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Background</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-white border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Light: color.white</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-975 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Dark: color.sepia.975</span>
                  </div>
                </div>
              </div>

              {/* Text Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Text</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-900 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Light: color.sepia.900</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Dark: color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Placeholder Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Placeholder Text</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Light: color.sepia.400</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-sepia-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Dark: color.sepia.600</span>
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
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-50 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Background (Light): color.error.50</span>
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
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 12px</span>
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
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 16px</span>
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
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Padding X: 20px</span>
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
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Border Width: 1px</span>
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

      {/* 
        ACCESSIBILITY NOTE SECTION
        Important information about accessible form inputs
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Accessibility Guidelines</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Best practices for creating accessible form inputs
            </p>
          </div>

          <div className="p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-3">
                <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                  ♿️ Accessibility Requirements
                </p>
                <ul className="space-y-2 text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  <li>• Always use <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">label</code> elements with inputs for screen readers</li>
                  <li>• Connect labels to inputs using matching <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">id</code> and <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">htmlFor</code> attributes</li>
                  <li>• Include visible focus states (2px ring) for keyboard navigation</li>
                  <li>• Use appropriate <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">type</code> attributes (email, password, tel, etc.) for better mobile keyboards</li>
                  <li>• Provide clear error messages with <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">aria-describedby</code> for screen readers</li>
                  <li>• Mark required fields with <code className="px-2 py-0.5 bg-sepia-200 dark:bg-sepia-800 rounded">required</code> attribute or visible asterisk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

