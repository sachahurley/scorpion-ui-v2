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
import { AlertCircle } from "lucide-react";

export default function Textareas() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Inputs.tsx
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Textareas</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Multi-line text input components with multiple sizes matching input heights. All textareas use Fragment Mono at 14px and include hover, focus, disabled, and error states.
        </p>
      </div>

      {/* 
        SIZES SECTION
        Shows three size variations
        Small: 32px min-height, Medium: 40px min-height (default), Large: 48px min-height
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three size options matching input heights (32px, 40px, 48px min-height) with consistent text size (14px Fragment Mono)
            </p>
          </div>
          
          {/* Size comparison - all textareas aligned */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Textarea size="large" placeholder="Large textarea (48px min-height)" rows={3} />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Min-height: 48px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Textarea size="medium" placeholder="Medium textarea (40px min-height)" rows={3} />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Min-height: 40px (default)</p>
            </div>
            <div className="flex flex-col gap-2">
              <Textarea size="small" placeholder="Small textarea (32px min-height)" rows={3} />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Min-height: 32px</p>
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
          
          {/* All States with forced visual representations */}
          <div className="mb-8 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="space-y-4">
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All interaction states:</p>
              
              {/* Default State */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Default</span>
                <textarea 
                  className="w-full font-mono text-sm rounded-lg border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 min-h-10 px-4 py-2.5 placeholder:text-sepia-400 dark:placeholder:text-sepia-600 resize-y"
                  placeholder="Enter text..."
                  rows={3}
                  value=""
                  readOnly
                />
              </div>
              
              {/* Hover State - Forced */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Hover</span>
                <textarea 
                  className="w-full font-mono text-sm rounded-lg border border-sepia-400 dark:border-sepia-600 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 min-h-10 px-4 py-2.5 placeholder:text-sepia-400 dark:placeholder:text-sepia-600 resize-y"
                  placeholder="Enter text..."
                  rows={3}
                  value=""
                  readOnly
                />
              </div>
              
              {/* Focused State - Forced with focus ring */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focused</span>
                <textarea 
                  className="w-full font-mono text-sm rounded-lg border border-primary-400 dark:border-primary-400 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 min-h-10 px-4 py-2.5 ring-2 ring-primary-400 dark:ring-primary-400 ring-offset-2 ring-offset-sepia-50 dark:ring-offset-sepia-1000 placeholder:text-sepia-400 dark:placeholder:text-sepia-600 resize-y"
                  placeholder="Enter text..."
                  rows={3}
                  value=""
                  readOnly
                />
              </div>
              
              {/* Disabled State - Forced */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled</span>
                <textarea 
                  className="w-full font-mono text-sm rounded-lg border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-975 text-sepia-900 dark:text-sepia-50 min-h-10 px-4 py-2.5 opacity-50 cursor-not-allowed placeholder:text-sepia-400 dark:placeholder:text-sepia-600 resize-y"
                  placeholder="Enter text..."
                  rows={3}
                  disabled
                  value=""
                  readOnly
                />
              </div>
              
              {/* Error State - Forced */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Error</span>
                <textarea 
                  className="w-full font-mono text-sm rounded-lg border border-error-600 dark:border-error-500 bg-error-50 dark:bg-error-950/20 text-sepia-900 dark:text-sepia-50 min-h-10 px-4 py-2.5 placeholder:text-sepia-400 dark:placeholder:text-sepia-600 resize-y"
                  placeholder="Enter text..."
                  rows={3}
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
                  <AlertCircle className="w-3 h-3" />
                  Description must be at least 10 characters long
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
        </div>
      </section>

      {/* 
        TOKEN BREAKDOWN SECTION
        Documentation of design tokens used in textareas
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Textarea Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in textarea components. Tokens match Input component for consistency.
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
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Min-height: 32px</span>
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
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Min-height: 40px</span>
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
                      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Min-height: 48px</span>
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

