/**
 * HOME PAGE
 * 
 * Clean, minimal introduction to Scorpion UI v2
 * Features animated hero, three feature cards, and about card
 * All cards match the exact styling from other token pages
 */

import { ASSETS } from "@/lib/assets";

export default function Home() {
  return (
    <div className="container mx-auto pb-5 lg:pb-20">
        {/* Hero Section - Graphic with margins, 16px spacing below on mobile only */}
        <section className="mb-4 lg:mb-0 mx-5 lg:mx-10 mt-5 lg:mt-10">
          {/* 
            Scorpion UI Graphic 3b:
            - Hero graphic with no animation
            - 40px margin on top, left, and right (mx-10 mt-10 = 40px)
            - Responsive and scales with viewport
            - Light mode: sepia-900 (#2B2718 - dark warm)
            - Dark mode: sepia-50 (#FDFCFB - light warm)
          */}
          <div className="relative w-full">
            {/* Light mode version - sepia-900 tint */}
            <img 
              src={ASSETS.scorpionUIGraphic3b}
              alt="Scorpion UI"
              className="w-full block dark:hidden"
              style={{
                filter: 'brightness(0) saturate(100%) invert(10%) sepia(21%) saturate(939%) hue-rotate(344deg) brightness(94%) contrast(91%)'
              }}
            />
            {/* Dark mode version - sepia-50 tint */}
            <img 
              src={ASSETS.scorpionUIGraphic3b}
              alt="Scorpion UI"
              className="w-full block hidden dark:block"
              style={{
                filter: 'brightness(0) saturate(100%) invert(99%) sepia(7%) saturate(221%) hue-rotate(328deg) brightness(104%) contrast(96%)'
              }}
            />
          </div>
        </section>

        {/* Subtitle - Short description */}
        <section className="mb-16 mx-5 lg:mx-10">
          <p className="font-mono text-base lg:text-2xl text-sepia-900 dark:text-sepia-50 leading-relaxed text-center">
            A token-based design system for learning React, TypeScript, and modern UI architecture.
          </p>
        </section>

        {/* Three Feature Cards in a Row */}
        <section className="mb-10 px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {/* Card 1: Design Tokens */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
              <div>
                {/* ColorSync Utility Icon - switches between light/dark */}
                <div className="mb-4">
                  <img 
                    src={ASSETS.icons.colorSyncLight} 
                    alt="Design Tokens"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img 
                    src={ASSETS.icons.colorSyncDark} 
                    alt="Design Tokens"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Design Tokens</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  A growing token system starting with colors and typography. All tokens are defined in JSON and automatically converted to CSS variables, making them work seamlessly with Tailwind.
                </p>
              </div>
            </div>

            {/* Card 2: Components */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
              <div>
                {/* Automator Icon - switches between light/dark */}
                <div className="mb-4">
                  <img 
                    src={ASSETS.icons.automatorLight} 
                    alt="Components"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img 
                    src={ASSETS.icons.automatorDark} 
                    alt="Components"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Components</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  React components built strictly from design tokens. Currently includes buttons and UI primitives, with more components being added as the system grows into a complete library.
                </p>
              </div>
            </div>

            {/* Card 3: Theme System */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
              <div>
                {/* System Preferences Icon - switches between light/dark */}
                <div className="mb-4">
                  <img 
                    src={ASSETS.icons.systemPrefsLight} 
                    alt="Theme System"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img 
                    src={ASSETS.icons.systemPrefsDark} 
                    alt="Theme System"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Theme System</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  Fully functional light and dark modes with smooth transitions. Every design token adapts automatically to the selected theme, ensuring consistent styling across all components.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

