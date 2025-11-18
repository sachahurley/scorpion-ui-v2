/**
 * AVATARS DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for avatar components
 */

import { Avatar } from "@/components/ui/Avatar";
import { User, Mail, Settings } from "lucide-react";

export default function Avatars() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Avatars</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Avatar components for user profiles, comments, and team displays. Supports images, initials, icons, and status indicators.
        </p>
      </div>

      {/* Variants Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Variants</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
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
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Image</p>
            </div>

            {/* Initials Avatar */}
            <div className="flex flex-col items-center gap-2">
              <Avatar
                initials="JD"
                size="large"
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Initials</p>
            </div>

            {/* Icon Avatar */}
            <div className="flex flex-col items-center gap-2">
              <Avatar
                icon={<User />}
                size="large"
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Icon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Four size options for different use cases
            </p>
          </div>
          
          <div className="flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="XL" size="xl" />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">XL (96px)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="LG" size="large" />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Large (64px)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="MD" size="medium" />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Medium (40px)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar initials="SM" size="small" />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Small (24px)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Indicators */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Status Indicators</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
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
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Online</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar
                initials="OF"
                size="large"
                status="offline"
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Offline</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar
                initials="AW"
                size="large"
                status="away"
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Away</p>
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
              Real-world examples of avatar usage
            </p>
          </div>
          
          <div className="space-y-6">
            {/* User Profile */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">User Profile</h4>
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
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Comment Thread</h4>
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
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Team List</h4>
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
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Icon Avatars</h4>
              <div className="flex flex-wrap gap-4">
                <Avatar icon={<User />} size="medium" />
                <Avatar icon={<Mail />} size="medium" />
                <Avatar icon={<Settings />} size="medium" />
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
              Design tokens used in avatar components
            </p>
          </div>

          <div className="space-y-6">
            {/* Size Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Size Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Small</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">24px × 24px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: 12px</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Medium</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">40px × 40px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: 14px</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Large</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">64px × 64px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: 18px</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">XL</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">96px × 96px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Text: 24px</p>
                </div>
              </div>
            </div>

            {/* Color Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Color Tokens</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Background</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Light: secondary-200</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Dark: secondary-800</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Text Color</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Light: secondary-900</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Dark: secondary-50</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Status Online</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">success-500</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Status Offline</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">secondary-400/600</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Status Away</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">warning-500</p>
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
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Bold (700)</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Border Radius</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">100% (circular)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

