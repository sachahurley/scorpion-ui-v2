/**
 * AVATARS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for avatar components
 */

import { Avatar } from "@/components/ui/Avatar";
import { TuiIcon } from "@/components/ui/TuiIcon";
import { Panel } from "@/components/docs/Panel";

export default function Avatars() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Avatars</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Avatar components for user profiles, comments, and team displays. Supports images, initials, icons, and status indicators.
        </p>
      </div>

      {/* Variants Section */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Variants</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Three avatar display types
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            {/* Image Avatar */}
            <div className="flex flex-col items-center gap-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=1"
                alt="User avatar"
                size="large"
              />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Image</p>
            </div>

            {/* Initials Avatar */}
            <div className="flex flex-col items-center gap-2">
              <Avatar
                initials="JD"
                size="large"
              />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Initials</p>
            </div>

            {/* Icon Avatar */}
            <div className="flex flex-col items-center gap-2">
              <Avatar
                icon={<TuiIcon name="User" size="5" />}
                size="large"
              />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Icon</p>
            </div>
          </div>
        </Panel>
      </section>

      {/* Sizes Section */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Sizes</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Four size options for different use cases
            </p>
          </div>
          
          <div className="flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="XL" size="xl" />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">XL (96px)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="LG" size="large" />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Large (64px)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="MD" size="medium" />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Medium (40px)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="SM" size="small" />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Small (24px)</p>
            </div>
          </div>
        </Panel>
      </section>

      {/* Status Indicators */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Status Indicators</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Avatars can include status indicators (online, offline, away)
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar
                initials="ON"
                size="large"
                status="online"
              />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Online</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar
                initials="OF"
                size="large"
                status="offline"
              />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Offline</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar
                initials="AW"
                size="large"
                status="away"
              />
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Away</p>
            </div>
          </div>
        </Panel>
      </section>

      {/* Common Use Cases */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Common Use Cases</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Real-world examples of avatar usage
            </p>
          </div>
          
          <div className="space-y-6">
            {/* User Profile */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">User Profile</h4>
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Sarah Johnson"
                  size="large"
                  status="online"
                />
                <div>
                  <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">Sarah Johnson</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Product Designer</p>
                </div>
              </div>
            </div>

            {/* Comment Thread */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Comment Thread</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar initials="AJ" size="medium" />
                  <div className="flex-1">
                    <p className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-1">Alex Johnson</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Great work on this design!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Avatar initials="MC" size="medium" />
                  <div className="flex-1">
                    <p className="text-xs font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-1">Michael Chen</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">I agree, this looks fantastic.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team List */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Team List</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar initials="SJ" size="small" status="online" />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar initials="MC" size="small" status="away" />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Michael Chen</span>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar initials="AJ" size="small" status="offline" />
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Alex Johnson</span>
                </div>
              </div>
            </div>

            {/* Icon Avatars */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Icon Avatars</h4>
              <div className="flex flex-wrap gap-4">
                <Avatar icon={<TuiIcon name="User" size="5" />} size="medium" />
                <Avatar icon={<TuiIcon name="Mail" size="5" />} size="medium" />
                <Avatar icon={<TuiIcon name="Settings" size="5" />} size="medium" />
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* Token Breakdown */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Token Breakdown</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Design tokens used in avatar components
            </p>
          </div>

          <div className="space-y-6">
            {/* Size Tokens */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Size Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Small</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">24px × 24px</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Text: 12px</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Medium</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">40px × 40px</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Text: 14px</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Large</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">64px × 64px</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Text: 18px</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">XL</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">96px × 96px</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Text: 24px</p>
                </Panel>
              </div>
            </div>

            {/* Color Tokens */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Color Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Background</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Light: secondary-200</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Dark: secondary-800</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Text Color</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Light: secondary-900</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Dark: secondary-50</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Status Online</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">success-500</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Status Offline</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">secondary-400/600</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Status Away</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">warning-500</p>
                </Panel>
              </div>
            </div>

            {/* Typography Tokens */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Typography</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Font Family</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Fragment Mono</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Font Weight</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Bold (700)</p>
                </Panel>
                <Panel>
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">Border Radius</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">100% (circular)</p>
                </Panel>
              </div>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}





