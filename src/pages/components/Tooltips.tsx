/**
 * TOOLTIPS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for tooltip components
 */

import { Tooltip } from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";
import { Info, HelpCircle, AlertCircle, Settings } from "lucide-react";

export default function Tooltips() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Tooltips</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Tooltip components for helpful hints and descriptions. Supports multiple positions and customizable delays.
        </p>
      </div>

      {/* Positions Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Positions</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Four positioning options for tooltips
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center min-h-[200px]">
            {/* Top */}
            <div className="flex flex-col items-center gap-4">
              <Tooltip content="This tooltip appears above" position="top">
                <Button variant="outline">Top</Button>
              </Tooltip>
            </div>

            {/* Bottom */}
            <div className="flex flex-col items-center gap-4">
              <Tooltip content="This tooltip appears below" position="bottom">
                <Button variant="outline">Bottom</Button>
              </Tooltip>
            </div>

            {/* Left */}
            <div className="flex flex-col items-center gap-4">
              <Tooltip content="This tooltip appears to the left" position="left">
                <Button variant="outline">Left</Button>
              </Tooltip>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-4">
              <Tooltip content="This tooltip appears to the right" position="right">
                <Button variant="outline">Right</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Common Use Cases</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Real-world examples of tooltip usage
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Icon Explanations */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Icon Explanations</h4>
              <div className="flex flex-wrap gap-4">
                <Tooltip content="Get help and support">
                  <button className="p-2 rounded-lg hover:bg-sepia-200 dark:hover:bg-sepia-800 transition-colors">
                    <HelpCircle className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                  </button>
                </Tooltip>
                <Tooltip content="View information">
                  <button className="p-2 rounded-lg hover:bg-sepia-200 dark:hover:bg-sepia-800 transition-colors">
                    <Info className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                  </button>
                </Tooltip>
                <Tooltip content="Settings and preferences">
                  <button className="p-2 rounded-lg hover:bg-sepia-200 dark:hover:bg-sepia-800 transition-colors">
                    <Settings className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                  </button>
                </Tooltip>
                <Tooltip content="Warning message">
                  <button className="p-2 rounded-lg hover:bg-sepia-200 dark:hover:bg-sepia-800 transition-colors">
                    <AlertCircle className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* Form Field Help */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Form Field Help</h4>
              <div className="space-y-4 max-w-md">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                      Password
                    </label>
                    <Tooltip content="Password must be at least 8 characters and include numbers and special characters">
                      <Info className="w-4 h-4 text-sepia-600 dark:text-sepia-400 cursor-help" />
                    </Tooltip>
                  </div>
                  <input
                    type="password"
                    className="w-full px-3 py-2 rounded-lg border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-950 text-sm font-mono"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">
                      API Key
                    </label>
                    <Tooltip content="Your API key is kept secure and never shared with third parties">
                      <Info className="w-4 h-4 text-sepia-600 dark:text-sepia-400 cursor-help" />
                    </Tooltip>
                  </div>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border border-sepia-300 dark:border-sepia-700 bg-white dark:bg-sepia-950 text-sm font-mono"
                    placeholder="sk-..."
                  />
                </div>
              </div>
            </div>

            {/* Button Descriptions */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Button Descriptions</h4>
              <div className="flex flex-wrap gap-3">
                <Tooltip content="Save your changes to the server">
                  <Button variant="primary">Save</Button>
                </Tooltip>
                <Tooltip content="Discard all unsaved changes">
                  <Button variant="outline">Cancel</Button>
                </Tooltip>
                <Tooltip content="Permanently delete this item">
                  <Button variant="destructive">Delete</Button>
                </Tooltip>
              </div>
            </div>

            {/* Long Content */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Long Content</h4>
              <div className="flex flex-wrap gap-3">
                <Tooltip 
                  content="This is a longer tooltip message that demonstrates how tooltips handle multiple lines of text. The tooltip will automatically wrap to fit within the maximum width constraint."
                  maxWidth="250px"
                >
                  <Button variant="ghost">Hover for long tooltip</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Breakdown */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Design tokens used in tooltip components
            </p>
          </div>

          <div className="space-y-6">
            {/* Color Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Color Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">var(--surface-card)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text Color</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Light: sepia-900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Dark: sepia-50</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Light: sepia-500</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Dark: sepia-800</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Shadow</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">var(--elevation-2-shadow)</p>
                </div>
              </div>
            </div>

            {/* Spacing Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Spacing Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Padding</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">12px horizontal (px-3)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">8px vertical (py-2)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Offset</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">8px gap from trigger (mt-2/mb-2/ml-2/mr-2)</p>
                </div>
              </div>
            </div>

            {/* Typography Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Family</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Fragment Mono</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Size</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">12px (text-xs)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Radius</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">8px (rounded-lg)</p>
                </div>
              </div>
            </div>

            {/* Z-Index */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Z-Index</h4>
              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">var(--z-index-tooltip) = 1060</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

