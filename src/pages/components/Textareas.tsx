/**
 * TEXTAREAS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for textarea components
 * Shows all sizes, states, and their corresponding design tokens
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Sizes section (small, medium, large)
 * 3. States section (default, hover, focused, disabled, error)
 * 4. With Labels section (proper form structure)
 * 5. Detailed token breakdown for textareas
 */

import { Textarea } from "@/components/ui/Textarea";
import { TuiIcon } from "@/components/ui/TuiIcon";
import { Panel } from "@/components/docs/Panel";

export default function Textareas() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Inputs.tsx
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Textareas</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Multi-line text input components with multiple sizes matching input heights. All textareas use Fragment Mono at 14px and include hover, focus, disabled, and error states.
        </p>
      </div>

      {/* 
        SIZES SECTION
        Shows three size variations
        Small: 32px min-height, Medium: 40px min-height (default), Large: 48px min-height
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Sizes</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Three size options matching input heights (32px, 40px, 48px min-height) with consistent text size (14px Fragment Mono)
            </p>
          </div>
          
          {/* Size comparison - all textareas aligned */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Textarea size="large" placeholder="Large textarea (48px min-height)" rows={3} />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Min-height: 48px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Textarea size="medium" placeholder="Medium textarea (40px min-height)" rows={3} />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Min-height: 40px (default)</p>
            </div>
            <div className="flex flex-col gap-2">
              <Textarea size="small" placeholder="Small textarea (32px min-height)" rows={3} />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Min-height: 32px</p>
            </div>
          </div>
        </Panel>
      </section>

      {/* 
        STATES SECTION
        Shows all interaction states side by side
        Default, Hover, Focused, Disabled, Error
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">States</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              All interaction states with visual feedback for user actions
            </p>
          </div>
          
          {/* All States with forced visual representations */}
          <Panel className="mb-8">
            <div className="space-y-4">
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">All interaction states:</p>
              
              {/* Default State - plate ring: wrapper = idle border color, control = fill inset 1px */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Default</span>
                <div className="w-full plate-round p-px bg-[var(--field-border)]">
                  <textarea
                    className="w-full font-mono text-sm plate-round bg-[var(--field-background)] text-[var(--text-primary)] min-h-10 px-4 py-2.5 placeholder:text-[var(--field-placeholder)] focus:outline-none resize-y"
                    placeholder="Enter text..."
                    rows={3}
                    value=""
                    readOnly
                  />
                </div>
              </div>

              {/* Hover State - Forced: ring walks to --field-border-hover */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Hover</span>
                <div className="w-full plate-round p-px bg-[var(--field-border-hover)]">
                  <textarea
                    className="w-full font-mono text-sm plate-round bg-[var(--field-background)] text-[var(--text-primary)] min-h-10 px-4 py-2.5 placeholder:text-[var(--field-placeholder)] focus:outline-none resize-y"
                    placeholder="Enter text..."
                    rows={3}
                    value=""
                    readOnly
                  />
                </div>
              </div>

              {/* Focused State - Forced: ring walks to --field-border-focus (no outside ring, the plate clip swallows it) */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Focused</span>
                <div className="w-full plate-round p-px bg-[var(--field-border-focus)]">
                  <textarea
                    className="w-full font-mono text-sm plate-round bg-[var(--field-background)] text-[var(--text-primary)] min-h-10 px-4 py-2.5 placeholder:text-[var(--field-placeholder)] focus:outline-none resize-y"
                    placeholder="Enter text..."
                    rows={3}
                    value=""
                    readOnly
                  />
                </div>
              </div>

              {/* Disabled State - Forced */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Disabled</span>
                <div className="w-full plate-round p-px bg-[var(--field-border)]">
                  <textarea
                    className="w-full font-mono text-sm plate-round bg-[var(--field-background)] text-[var(--text-primary)] min-h-10 px-4 py-2.5 opacity-50 cursor-not-allowed placeholder:text-[var(--field-placeholder)] focus:outline-none resize-y"
                    placeholder="Enter text..."
                    rows={3}
                    disabled
                    value=""
                    readOnly
                  />
                </div>
              </div>

              {/* Error State - Forced: red ring + tinted fill */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Error</span>
                <div className="w-full plate-round p-px bg-[var(--field-border-error)]">
                  <textarea
                    className="w-full font-mono text-sm plate-round bg-[var(--field-background-error)] text-[var(--text-primary)] min-h-10 px-4 py-2.5 placeholder:text-[var(--field-placeholder)] focus:outline-none resize-y"
                    placeholder="Enter text..."
                    rows={3}
                    value=""
                    readOnly
                  />
                </div>
              </div>
            </div>
          </Panel>

          {/* Interactive Examples */}
          <div>
            <h4 className="text-sm font-mono text-[var(--text-primary)] mb-4">Try It Yourself</h4>
            <div className="space-y-4">
              {/* Default State */}
              <div className="space-y-2">
                <label htmlFor="textarea-default" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                  Default
                </label>
                <Textarea 
                  id="textarea-default" 
                  placeholder="Type your message here..." 
                  rows={4}
                />
              </div>

              {/* Disabled State */}
              <div className="space-y-2">
                <label htmlFor="textarea-disabled" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                  Disabled
                </label>
                <Textarea 
                  id="textarea-disabled" 
                  placeholder="This field is disabled" 
                  disabled
                  rows={4}
                />
              </div>

              {/* Error State with Message */}
              <div className="space-y-2">
                <label htmlFor="textarea-error" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                  Description
                </label>
                <Textarea 
                  id="textarea-error" 
                  error
                  placeholder="Enter description" 
                  rows={4}
                />
                <p className="text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1">
                  <TuiIcon name="AlertCircle" size="3" />
                  Description must be at least 10 characters long
                </p>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* 
        WITH LABELS SECTION
        Proper form structure with labels
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">With Labels</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Proper form structure with labels, helper text, and error messages
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Basic Textarea with Label */}
            <div className="space-y-2">
              <label htmlFor="bio" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                Bio
              </label>
              <Textarea 
                id="bio" 
                placeholder="Tell us about yourself..." 
                rows={4}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                Write a short bio about yourself (optional)
              </p>
            </div>

            {/* Required Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 relative">
                <span className="text-error-600 dark:text-error-500 absolute -left-[12px]">*</span> Message
              </label>
              <Textarea 
                id="message" 
                required
                placeholder="Enter your message..." 
                rows={5}
              />
            </div>
          </div>
        </Panel>
      </section>

      {/* 
        TOKEN BREAKDOWN SECTION
        Documentation of design tokens used in textareas
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Textarea Token Breakdown</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Complete documentation of all design tokens used in textarea components. Tokens match Input component for consistency.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Colors Section */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Colors</h4>
              
              {/* Border Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Border</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-300 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">Default (Light): color.sepia.300</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-700 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">Default (Dark): color.sepia.700</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-amber-400 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">Focus: color.primary.400</span>
                  </div>
                </div>
              </div>

              {/* Error State Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Error State</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-red-600 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">Border (Light): color.error.600</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-red-500 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">Border (Dark): color.error.500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Section */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Typography</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">Font Family: <span className="font-mono">Fragment Mono</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">Font Size: <span className="text-sm">14px</span></span>
                </div>
              </div>
            </div>

            {/* Spacing Section */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Spacing</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Small */}
                <div>
                  <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Small</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                      <span className="text-sm font-mono text-[var(--text-primary)]">Min-height: 32px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                      <span className="text-sm font-mono text-[var(--text-primary)]">Padding X: 12px</span>
                    </div>
                  </div>
                </div>
                {/* Medium */}
                <div>
                  <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Medium (Default)</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                      <span className="text-sm font-mono text-[var(--text-primary)]">Min-height: 40px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                      <span className="text-sm font-mono text-[var(--text-primary)]">Padding X: 16px</span>
                    </div>
                  </div>
                </div>
                {/* Large */}
                <div>
                  <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Large</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                      <span className="text-sm font-mono text-[var(--text-primary)]">Min-height: 48px</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                      <span className="text-sm font-mono text-[var(--text-primary)]">Padding X: 20px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}

