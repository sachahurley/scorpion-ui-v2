/**
 * BADGES DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for badge/tag components
 * Shows all variants, sizes, and their corresponding design tokens
 */

import { Badge } from "@/components/ui/Badge";
import { CheckCircle, AlertTriangle, AlertCircle, Info, Tag } from "lucide-react";
import { useState } from "react";

export default function Badges() {
  const [dismissedBadges, setDismissedBadges] = useState<string[]>([]);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Badges</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Badge and tag components for labels, status indicators, and counts. All badges use Fragment Mono and support light/dark themes.
        </p>
      </div>

      {/* Variants Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Variants</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Six badge styles for different use cases
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three size options with consistent text sizing
            </p>
          </div>
          
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-2">
              <Badge variant="primary" size="large">Large (28px)</Badge>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 28px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Badge variant="primary" size="medium">Medium (24px)</Badge>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 24px</p>
            </div>
            <div className="flex flex-col gap-2">
              <Badge variant="primary" size="small">Small (20px)</Badge>
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 20px</p>
            </div>
          </div>
        </div>
      </section>

      {/* With Icons Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">With Icons</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Badges can include icons on the left side
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Badge variant="success" iconLeft={<CheckCircle />}>Completed</Badge>
            <Badge variant="warning" iconLeft={<AlertTriangle />}>Pending</Badge>
            <Badge variant="error" iconLeft={<AlertCircle />}>Failed</Badge>
            <Badge variant="info" iconLeft={<Info />}>New</Badge>
            <Badge variant="primary" iconLeft={<Tag />}>Featured</Badge>
          </div>
        </div>
      </section>

      {/* With Close Button Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Dismissible Badges</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Badges with close buttons for removable tags
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {!dismissedBadges.includes("tag1") && (
              <Badge variant="primary" onClose={() => setDismissedBadges([...dismissedBadges, "tag1"])}>
                React
              </Badge>
            )}
            {!dismissedBadges.includes("tag2") && (
              <Badge variant="success" onClose={() => setDismissedBadges([...dismissedBadges, "tag2"])}>
                TypeScript
              </Badge>
            )}
            {!dismissedBadges.includes("tag3") && (
              <Badge variant="info" onClose={() => setDismissedBadges([...dismissedBadges, "tag3"])}>
                Tailwind CSS
              </Badge>
            )}
            {!dismissedBadges.includes("tag4") && (
              <Badge variant="warning" onClose={() => setDismissedBadges([...dismissedBadges, "tag4"])}>
                Design System
              </Badge>
            )}
          </div>
          {dismissedBadges.length > 0 && (
            <button
              onClick={() => setDismissedBadges([])}
              className="mt-4 text-xs font-mono text-primary-600 dark:text-primary-400 hover:underline"
            >
              Reset badges
            </button>
          )}
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Common Use Cases</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Real-world examples of badge usage
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Status Indicators */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Status Indicators</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success" iconLeft={<CheckCircle />}>Active</Badge>
                <Badge variant="warning" iconLeft={<AlertTriangle />}>Pending</Badge>
                <Badge variant="error" iconLeft={<AlertCircle />}>Inactive</Badge>
                <Badge variant="info" iconLeft={<Info />}>Draft</Badge>
              </div>
            </div>

            {/* Notification Counts */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Notification Counts</h4>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Messages</span>
                <Badge variant="error">5</Badge>
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50 ml-4">Tasks</span>
                <Badge variant="warning">12</Badge>
                <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50 ml-4">Updates</span>
                <Badge variant="info">3</Badge>
              </div>
            </div>

            {/* Category Tags */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Category Tags</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Design</Badge>
                <Badge variant="default">Development</Badge>
                <Badge variant="default">Marketing</Badge>
                <Badge variant="primary">Featured</Badge>
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
              Design tokens used in badge components
            </p>
          </div>

          <div className="space-y-6">
            {/* Size Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Size Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Small</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 20px (h-5)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding: 8px horizontal</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: 12px (text-xs)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Medium</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 24px (h-6)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding: 10px horizontal</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: 12px (text-xs)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Large</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Height: 28px (h-7)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Padding: 12px horizontal</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: 14px (text-sm)</p>
                </div>
              </div>
            </div>

            {/* Variant Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Variant Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-2">Default</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background: secondary-200/800</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: secondary-900/50</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-2">Primary</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background: primary-100/900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: primary-900/50</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-2">Success</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background: success-100/900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: success-900/50</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-2">Warning</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background: warning-100/900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: warning-900/50</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-2">Error</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background: error-100/900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: error-900/50</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-2">Info</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Background: info-100/900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: info-900/50</p>
                </div>
              </div>
            </div>

            {/* Typography Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Typography</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Family</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Fragment Mono</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Weight</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Medium (500)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Radius</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">6px (rounded-md)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

