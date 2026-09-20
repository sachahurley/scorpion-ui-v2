/**
 * ALERTS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for alert/notification components
 */

import { Alert } from "@/components/ui/Alert";
import { useState } from "react";
import { TuiIcon } from "@/components/ui/TuiIcon";

export default function Alerts() {
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Alerts</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Alert and notification components for user feedback. Supports multiple variants with optional icons and close buttons.
        </p>
      </div>

      {/* Variants Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Variants</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Five alert styles for different message types
            </p>
          </div>
          
          <div className="space-y-4">
            <Alert variant="default" title="Default Alert" description="This is a default informational alert." />
            <Alert variant="success" title="Success!" description="Your changes have been saved successfully." />
            <Alert variant="warning" title="Warning" description="Please review your input before proceeding." />
            <Alert variant="error" title="Error" description="Something went wrong. Please try again." />
            <Alert variant="info" title="Information" description="Here's some helpful information for you." />
          </div>
        </div>
      </section>

      {/* With Title and Description */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">With Title and Description</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Alerts can include both a title and detailed description
            </p>
          </div>
          
          <div className="space-y-4">
            <Alert
              variant="success"
              title="Account Created"
              description="Your account has been successfully created. You can now log in and start using the platform."
            />
            <Alert
              variant="warning"
              title="Payment Required"
              description="Your subscription will expire in 3 days. Please update your payment method to continue using all features."
            />
            <Alert
              variant="error"
              title="Upload Failed"
              description="The file upload failed due to network issues. Please check your connection and try again."
            />
          </div>
        </div>
      </section>

      {/* Dismissible Alerts */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Dismissible Alerts</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Alerts with close buttons for user dismissal
            </p>
          </div>
          
          <div className="space-y-4">
            {!dismissedAlerts.includes("alert1") && (
              <Alert
                variant="info"
                title="New Feature Available"
                description="Check out our latest feature update!"
                onClose={() => setDismissedAlerts([...dismissedAlerts, "alert1"])}
              />
            )}
            {!dismissedAlerts.includes("alert2") && (
              <Alert
                variant="success"
                title="Profile Updated"
                description="Your profile information has been saved."
                onClose={() => setDismissedAlerts([...dismissedAlerts, "alert2"])}
              />
            )}
            {!dismissedAlerts.includes("alert3") && (
              <Alert
                variant="warning"
                title="Maintenance Scheduled"
                description="System maintenance will occur tonight at 2 AM EST."
                onClose={() => setDismissedAlerts([...dismissedAlerts, "alert3"])}
              />
            )}
          </div>
          {dismissedAlerts.length > 0 && (
            <button
              onClick={() => setDismissedAlerts([])}
              className="mt-4 text-xs font-mono text-primary-600 dark:text-primary-400 hover:underline"
            >
              Reset alerts
            </button>
          )}
        </div>
      </section>

      {/* Custom Icons */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Custom Icons</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Alerts can use custom icons instead of default variant icons
            </p>
          </div>
          
          <div className="space-y-4">
            <Alert
              variant="info"
              title="Notifications"
              description="You have 3 new notifications"
              iconLeft={<TuiIcon name="Bell" size="5" />}
            />
            <Alert
              variant="success"
              title="All Systems Operational"
              description="Everything is running smoothly"
              iconLeft={<TuiIcon name="CheckCircle" size="5" />}
            />
          </div>
        </div>
      </section>

      {/* Description Only */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Description Only</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Alerts can display just a description without a title
            </p>
          </div>
          
          <div className="space-y-4">
            <Alert variant="success" description="Operation completed successfully." />
            <Alert variant="warning" description="Please review the terms before continuing." />
            <Alert variant="error" description="An error occurred while processing your request." />
            <Alert variant="info" description="New updates are available. Check them out!" />
          </div>
        </div>
      </section>

      {/* Token Breakdown */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border border-[var(--border-hairline)] rounded-none p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Token Breakdown</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Design tokens used in alert components
            </p>
          </div>

          <div className="space-y-6">
            {/* Variant Tokens */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Variant Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-2">Default</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Background: secondary-50/950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Border: secondary-300/700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Icon: secondary-700/300</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-2">Success</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Background: success-50/950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Border: success-300/700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Icon: success-600/400</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-2">Warning</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Background: warning-50/950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Border: warning-300/700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Icon: warning-600/400</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-2">Error</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Background: error-50/950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Border: error-300/700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Icon: error-600/500</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-2">Info</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Background: info-50/950</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Border: info-300/700</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Icon: info-600/400</p>
                </div>
              </div>
            </div>

            {/* Spacing Tokens */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Spacing Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Padding</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">16px (p-4)</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Gap</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">12px (gap-3)</p>
                </div>
              </div>
            </div>

            {/* Typography Tokens */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Typography</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Font Family</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Fragment Mono</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Title Size</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">14px (text-sm), bold</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Description Size</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">14px (text-sm), regular</p>
                </div>
                <div className="p-4 border border-[var(--border-hairline)] rounded-none bg-white dark:bg-secondary-950">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Border Radius</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">0px (rounded-none)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





