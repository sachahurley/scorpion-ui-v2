/**
 * CHECKBOXES DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for checkbox components
 * Shows all sizes, states, and use cases
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Sizes section (small, medium, large)
 * 3. States section (default, checked, disabled, error)
 * 4. With Labels section
 * 5. Use Cases section (form examples)
 * 6. Token breakdown
 */

import { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { AlertCircle } from "lucide-react";

export default function Checkboxes() {
  // State for interactive examples
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from other component pages
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Checkboxes</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Checkbox components for multiple selection states. Available in three sizes with checked, unchecked, disabled, and error states.
        </p>
      </div>

      {/* 
        SIZES SECTION
        Small, medium, and large checkbox variants
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three size options with proportional dimensions. Sizes align with the button/input sizing system.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            {/* Small Size */}
            <div className="flex flex-col gap-2">
              <Checkbox
                size="small"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="small" (16px × 16px)</p>
            </div>

            {/* Medium Size */}
            <div className="flex flex-col gap-2">
              <Checkbox
                size="medium"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="medium" (20px × 20px)</p>
            </div>

            {/* Large Size */}
            <div className="flex flex-col gap-2">
              <Checkbox
                size="large"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="large" (24px × 24px)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        STATES SECTION
        Unchecked, checked, disabled, and error states
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">States</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Checkboxes have four main states: unchecked, checked, disabled, and error.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* All States Display */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <div className="space-y-4">
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All states:</p>
                
                {/* Unchecked */}
                <div className="flex items-center gap-4">
                  <Checkbox checked={false} onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Unchecked</span>
                </div>
                
                {/* Checked */}
                <div className="flex items-center gap-4">
                  <Checkbox checked={true} onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Checked</span>
                </div>
                
                {/* Disabled Unchecked */}
                <div className="flex items-center gap-4">
                  <Checkbox checked={false} disabled onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Disabled (Unchecked)</span>
                </div>
                
                {/* Disabled Checked */}
                <div className="flex items-center gap-4">
                  <Checkbox checked={true} disabled onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Disabled (Checked)</span>
                </div>
                
                {/* Error State */}
                <div className="flex items-center gap-4">
                  <Checkbox checked={false} error onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Error State</span>
                </div>
              </div>
            </div>

            {/* Interactive Examples */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Try It Yourself</h4>
              <div className="space-y-4">
                <Checkbox
                  checked={newsletter}
                  onCheckedChange={setNewsletter}
                  label="Subscribe to newsletter"
                />
                <Checkbox
                  checked={marketing}
                  onCheckedChange={setMarketing}
                  label="Receive marketing emails"
                />
                <Checkbox
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  disabled
                  label="Push notifications (disabled)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        WITH LABELS SECTION
        Checkboxes with labels and helper text
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">With Labels</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Checkboxes with labels, helper text, and error messages
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Basic Checkbox with Label */}
            <div className="space-y-2">
              <Checkbox
                checked={newsletter}
                onCheckedChange={setNewsletter}
                label="Subscribe to our newsletter"
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 ml-7">
                Get weekly updates about new features and products
              </p>
            </div>

            {/* Required Checkbox with Error */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={terms}
                  onCheckedChange={setTerms}
                  error={!terms}
                  label="I agree to the terms and conditions"
                />
                <span className="text-error-600 dark:text-error-500 text-sm font-mono">*</span>
              </div>
              {!terms && (
                <p className="text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1 ml-7">
                  <AlertCircle className="w-3 h-3" />
                  You must agree to the terms and conditions
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 
        USE CASES SECTION
        Common checkbox use cases in forms
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Use Cases</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Common patterns for using checkboxes in forms
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Preferences Form */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Notification Preferences</h4>
              <div className="space-y-3">
                <Checkbox
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  label="Email notifications"
                />
                <Checkbox
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                  label="Push notifications"
                />
                <Checkbox
                  checked={marketing}
                  onCheckedChange={setMarketing}
                  label="Marketing emails"
                />
              </div>
            </div>

            {/* Multi-select Options */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Select Your Interests</h4>
              <div className="space-y-3">
                <Checkbox checked={false} onCheckedChange={() => {}} label="Design" />
                <Checkbox checked={true} onCheckedChange={() => {}} label="Development" />
                <Checkbox checked={false} onCheckedChange={() => {}} label="Marketing" />
                <Checkbox checked={true} onCheckedChange={() => {}} label="Product" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        TOKEN BREAKDOWN SECTION
        Documentation of design tokens used in checkboxes
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Checkbox Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in checkbox components
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
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Unchecked (Light): color.sepia.300</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-amber-400 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Checked: color.primary.400</span>
                  </div>
                </div>
              </div>

              {/* Error State Colors */}
              <div className="mb-3">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Error State</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <div className="w-4 h-4 rounded-full bg-red-600 border border-sepia-300 dark:border-sepia-600"></div>
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Border: color.error.600</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sizes Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Sizes</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Small: 16px × 16px</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Medium: 20px × 20px</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Large: 24px × 24px</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

