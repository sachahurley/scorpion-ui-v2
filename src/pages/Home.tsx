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
    <div className="container mx-auto px-10 pt-10 pb-20">
        {/* Animated Hero Section - Just the text */}
        <section className="mb-20">
          {/* Animated "SCORPION UI" Text - using Fragment Mono font, sized to fill width */}
          <h1 
            className="hero-text-animated text-center font-mono"
            style={{ 
              fontSize: 'clamp(3rem, 12vw, 12rem)',
              lineHeight: '1',
              letterSpacing: '0.05em'
            }}
          >
            SCORPION UI
          </h1>
        </section>

        {/* Three Feature Cards in a Row */}
        <section className="mb-10">
          <div className="grid md:grid-cols-3 gap-5">
            {/* Card 1: Design Tokens */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
              <div>
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Design Tokens</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  A comprehensive token system for colors, typography, spacing, and more. All defined in JSON and automatically converted to CSS variables and Tailwind classes.
                </p>
              </div>
            </div>

            {/* Card 2: Components */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
              <div>
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Components</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  Reusable React components built strictly from design tokens. Copy them directly into your projects or import the entire library for a complete UI system.
                </p>
              </div>
            </div>

            {/* Card 3: Theme System */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
              <div>
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Theme System</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  Fully functional light and dark modes with smooth transitions. All design tokens adapt automatically to the selected theme for consistent styling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Card */}
        <section className="mb-10">
          <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Circular Profile Image */}
              <div className="flex-shrink-0">
                <img 
                  src={ASSETS.avatar8bit} 
                  alt="Sacha Hurley" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              
              {/* About Text */}
              <div className="flex-1">
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-3">
                  About This Project
                </h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
                  I created Scorpion UI to learn React, TypeScript, and modern design systems while using as many AI tools as possible to re-invent my design workflow. This is a living design system that demonstrates token-based theming and component architecture.
                </p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
                  Built by{' '}
                  <a 
                    href="https://sacha.cool" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    Sacha Hurley
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

