/**
 * RADIOS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for radio button components
 * Shows all sizes, states, and use cases
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Sizes section (small, medium, large)
 * 3. States section (default, checked, disabled, error)
 * 4. Radio Groups section
 * 5. Use Cases section (form examples)
 * 6. Token breakdown
 */

import { useState } from "react";
import { Radio } from "@/components/ui/Radio";
import { AlertCircle } from "lucide-react";

export default function Radios() {
  // State for interactive examples
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from other component pages
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Radio Buttons</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Radio button components for single selection within a group. Available in three sizes with checked, unchecked, disabled, and error states.
        </p>
      </div>

      {/* 
        SIZES SECTION
        Small, medium, and large radio variants
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
              <Radio
                size="small"
                name="size-demo-small"
                value="small"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="small" (16px × 16px)</p>
            </div>

            {/* Medium Size */}
            <div className="flex flex-col gap-2">
              <Radio
                size="medium"
                name="size-demo-medium"
                value="medium"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="medium" (20px × 20px)</p>
            </div>

            {/* Large Size */}
            <div className="flex flex-col gap-2">
              <Radio
                size="large"
                name="size-demo-large"
                value="large"
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
              Radio buttons have four main states: unchecked, checked, disabled, and error.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* All States Display */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <div className="space-y-4">
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4">All states:</p>
                
                {/* Unchecked */}
                <div className="flex items-center gap-4">
                  <Radio name="states-demo" value="unchecked" checked={false} onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Unchecked</span>
                </div>
                
                {/* Checked */}
                <div className="flex items-center gap-4">
                  <Radio name="states-demo" value="checked" checked={true} onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Checked</span>
                </div>
                
                {/* Disabled Unchecked */}
                <div className="flex items-center gap-4">
                  <Radio name="states-demo" value="disabled-unchecked" checked={false} disabled onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Disabled (Unchecked)</span>
                </div>
                
                {/* Disabled Checked */}
                <div className="flex items-center gap-4">
                  <Radio name="states-demo" value="disabled-checked" checked={true} disabled onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Disabled (Checked)</span>
                </div>
                
                {/* Error State */}
                <div className="flex items-center gap-4">
                  <Radio name="states-demo" value="error" checked={false} error onCheckedChange={() => {}} />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Error State</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        RADIO GROUPS SECTION
        Proper radio group implementation
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Radio Groups</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Radio buttons must be grouped using the same name attribute. Only one option can be selected at a time.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Subscription Plan Selection */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Select Your Plan</h4>
              <div className="space-y-3">
                <Radio
                  name="plan"
                  value="basic"
                  checked={selectedPlan === "basic"}
                  onCheckedChange={() => setSelectedPlan("basic")}
                  label="Basic - $9/month"
                />
                <Radio
                  name="plan"
                  value="pro"
                  checked={selectedPlan === "pro"}
                  onCheckedChange={() => setSelectedPlan("pro")}
                  label="Pro - $19/month"
                />
                <Radio
                  name="plan"
                  value="enterprise"
                  checked={selectedPlan === "enterprise"}
                  onCheckedChange={() => setSelectedPlan("enterprise")}
                  label="Enterprise - $49/month"
                />
              </div>
            </div>

            {/* Size Selection with Error */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">Select Size</h4>
              <div className="space-y-3">
                <Radio
                  name="size"
                  value="small"
                  checked={selectedSize === "small"}
                  onCheckedChange={() => setSelectedSize("small")}
                  label="Small"
                />
                <Radio
                  name="size"
                  value="medium"
                  checked={selectedSize === "medium"}
                  onCheckedChange={() => setSelectedSize("medium")}
                  label="Medium"
                />
                <Radio
                  name="size"
                  value="large"
                  checked={selectedSize === "large"}
                  onCheckedChange={() => setSelectedSize("large")}
                  label="Large"
                />
              </div>
            </div>

            {/* Required Selection with Error */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">
                Payment Method <span className="text-error-600 dark:text-error-500">*</span>
              </h4>
              <div className="space-y-3">
                <Radio
                  name="payment"
                  value="credit"
                  checked={selectedPayment === "credit"}
                  onCheckedChange={() => setSelectedPayment("credit")}
                  label="Credit Card"
                  error={!selectedPayment}
                />
                <Radio
                  name="payment"
                  value="paypal"
                  checked={selectedPayment === "paypal"}
                  onCheckedChange={() => setSelectedPayment("paypal")}
                  label="PayPal"
                  error={!selectedPayment}
                />
                <Radio
                  name="payment"
                  value="bank"
                  checked={selectedPayment === "bank"}
                  onCheckedChange={() => setSelectedPayment("bank")}
                  label="Bank Transfer"
                  error={!selectedPayment}
                />
              </div>
              {!selectedPayment && (
                <p className="text-xs font-mono text-error-600 dark:text-error-500 flex items-center gap-1 mt-2">
                  <AlertCircle className="w-3 h-3" />
                  Please select a payment method
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 
        TOKEN BREAKDOWN SECTION
        Documentation of design tokens used in radio buttons
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Radio Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in radio button components
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

