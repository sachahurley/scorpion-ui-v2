/**
 * TOGGLES DOCUMENTATION PAGE
 * 
 * Comprehensive documentation for switch/toggle components
 * Shows all sizes, states, and use cases
 * 
 * Structure:
 * 1. Page header (title + description)
 * 2. Sizes section (small, medium, large)
 * 3. States section (default, checked, disabled)
 * 4. With Labels section
 * 5. Use Cases section (settings examples)
 * 6. Token breakdown
 */

import { useState } from "react";
import { Switch } from "@/components/ui/Switch";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Mail, Bell, Moon, Sun, Shield, Lock } from "lucide-react";

export default function Toggles() {
  // State for interactive examples
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Matches the style from Buttons.tsx and Inputs.tsx
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Toggles & Switches</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Toggle switch components for binary on/off states. Available in three sizes matching the button and input component system.
        </p>
      </div>

      {/* 
        SIZES SECTION
        Small, medium, and large toggle variants
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Sizes</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Three size options with proportional dimensions. Heights align with the button/input sizing system.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            {/* Small Size */}
            <div className="flex flex-col gap-2">
              <Switch
                size="small"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="small" (24px height)</p>
            </div>

            {/* Medium Size */}
            <div className="flex flex-col gap-2">
              <Switch
                size="medium"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="medium" (32px height)</p>
            </div>

            {/* Large Size */}
            <div className="flex flex-col gap-2">
              <Switch
                size="large"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">size="large" (40px height)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        STATES SECTION
        Default (unchecked), checked, and disabled states
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">States</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Toggle switches have three main states: unchecked (off), checked (on), and disabled.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            {/* Unchecked State */}
            <div className="flex flex-col gap-2">
              <Switch
                size="medium"
                checked={false}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Unchecked (Off)</p>
            </div>

            {/* Checked State */}
            <div className="flex flex-col gap-2">
              <Switch
                size="medium"
                checked={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Checked (On)</p>
            </div>

            {/* Disabled Unchecked */}
            <div className="flex flex-col gap-2">
              <Switch
                size="medium"
                checked={false}
                disabled={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled (Off)</p>
            </div>

            {/* Disabled Checked */}
            <div className="flex flex-col gap-2">
              <Switch
                size="medium"
                checked={true}
                disabled={true}
                onCheckedChange={() => {}}
              />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Disabled (On)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        WITH LABELS SECTION
        Toggles with label text
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">With Labels</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Toggles can include optional label text displayed next to the switch.
            </p>
          </div>
          
          <div className="space-y-4">
            <Switch
              size="medium"
              checked={true}
              label="Enable notifications"
              onCheckedChange={() => {}}
            />
            <Switch
              size="medium"
              checked={false}
              label="Auto-save drafts"
              onCheckedChange={() => {}}
            />
            <Switch
              size="medium"
              checked={true}
              label="Dark mode"
              disabled={true}
              onCheckedChange={() => {}}
            />
          </div>
        </div>
      </section>

      {/* 
        WITH ICONS SECTION
        Toggles with icons inside the knob (like ThemeToggle)
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">With Icons</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Toggles can include icons inside the knob for visual indication. The ThemeToggle component uses this pattern.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* ThemeToggle Example */}
            <div className="flex flex-col gap-2">
              <ThemeToggle />
              <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                ThemeToggle component (small size with Moon/Sun icons)
              </p>
            </div>

            {/* Custom Switch with Icon Examples */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Switch
                  size="small"
                  checked={true}
                  icon={<Moon className="w-3 h-3 text-primary-500" />}
                  onCheckedChange={() => {}}
                />
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Small with icon</p>
              </div>
              <div className="flex items-center gap-4">
                <Switch
                  size="medium"
                  checked={false}
                  icon={<Sun className="w-3 h-3 text-secondary-700" />}
                  onCheckedChange={() => {}}
                />
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Medium with icon</p>
              </div>
              <div className="flex items-center gap-4">
                <Switch
                  size="large"
                  checked={true}
                  icon={<Moon className="w-4 h-4 text-primary-500" />}
                  onCheckedChange={() => {}}
                />
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Large with icon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        USE CASES SECTION
        Real-world examples with icons and descriptions
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Use Cases</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Common patterns for using toggle switches in settings and preferences.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Notifications Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">
                Notifications
              </h4>
              <div className="space-y-4">
                {/* Email Notifications */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                    <div>
                      <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                        Email Notifications
                      </p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                        Receive updates via email
                      </p>
                    </div>
                  </div>
                  <Switch
                    size="medium"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                    <div>
                      <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                        Push Notifications
                      </p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                        Receive browser notifications
                      </p>
                    </div>
                  </div>
                  <Switch
                    size="medium"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">
                Preferences
              </h4>
              <div className="space-y-4">
                {/* Dark Mode */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Moon className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                    <div>
                      <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                        Dark Mode
                      </p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                        Use dark theme
                      </p>
                    </div>
                  </div>
                  <Switch
                    size="medium"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-4">
                Security
              </h4>
              <div className="space-y-4">
                {/* Two-Factor Authentication */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                    <div>
                      <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                        Two-Factor Authentication
                      </p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                        Add an extra layer of security
                      </p>
                    </div>
                  </div>
                  <Switch
                    size="medium"
                    checked={twoFactorAuth}
                    onCheckedChange={setTwoFactorAuth}
                  />
                </div>

                {/* Private Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-sepia-600 dark:text-sepia-400" />
                    <div>
                      <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                        Private Profile
                      </p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                        Hide profile from public view
                      </p>
                    </div>
                  </div>
                  <Switch
                    size="medium"
                    checked={privateProfile}
                    onCheckedChange={setPrivateProfile}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SIZE COMPARISON SECTION
        All sizes side by side for visual comparison
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Size Comparison</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Visual comparison of all three sizes in both checked and unchecked states.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Small Size Row */}
            <div className="flex items-center gap-6">
              <div className="w-24">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Small</p>
              </div>
              <Switch
                size="small"
                checked={false}
                onCheckedChange={() => {}}
              />
              <Switch
                size="small"
                checked={true}
                onCheckedChange={() => {}}
              />
            </div>

            {/* Medium Size Row */}
            <div className="flex items-center gap-6">
              <div className="w-24">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Medium</p>
              </div>
              <Switch
                size="medium"
                checked={false}
                onCheckedChange={() => {}}
              />
              <Switch
                size="medium"
                checked={true}
                onCheckedChange={() => {}}
              />
            </div>

            {/* Large Size Row */}
            <div className="flex items-center gap-6">
              <div className="w-24">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Large</p>
              </div>
              <Switch
                size="large"
                checked={false}
                onCheckedChange={() => {}}
              />
              <Switch
                size="large"
                checked={true}
                onCheckedChange={() => {}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        TOKEN BREAKDOWN SECTION
        Documentation of design tokens used in switches
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-base font-mono text-sepia-900 dark:text-sepia-50 mb-1">Switch Token Breakdown</h3>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Complete documentation of all design tokens used in switch components
            </p>
          </div>

          <div className="space-y-6">
            {/* Size Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Sizes</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Small</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Track: 24px × 44px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Knob: 20px × 20px</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Medium</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Track: 32px × 56px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Knob: 24px × 24px</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Large</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Track: 40px × 72px</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Knob: 32px × 32px</p>
                </div>
              </div>
            </div>

            {/* Color Tokens */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Checked State</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Track: primary-400 (amber-400)</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Knob: white / secondary-900</p>
                </div>
                <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50 mb-1">Unchecked State</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Track: sepia-300 / sepia-700</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Knob: white / secondary-900</p>
                </div>
              </div>
            </div>

            {/* Focus States */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Focus States</h4>
              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Focus Ring: 2px primary-400 ring with 2px offset</p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Matches button and input focus states</p>
              </div>
            </div>

            {/* Animation */}
            <div>
              <h4 className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Animation</h4>
              <div className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-xl bg-white dark:bg-sepia-950">
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Transition Duration: 300ms</p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Easing: ease (default)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

