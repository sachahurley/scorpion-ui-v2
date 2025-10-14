/**
 * HOME PAGE
 * 
 * Introduction to Scorpion UI v2
 * Shows the design system overview and quick links
 */

import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ASSETS } from "@/lib/assets";

export default function Home() {
  return (
    <div className="min-h-screen theme-transition">
      {/* Header */}
      <header className="border-b border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Scorpion UI v2</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl">
          {/* Scorpion Hero Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src={ASSETS.scorpionHeroV2} 
              alt="Scorpion UI" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Design System & Component Library
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8 text-center">
            A token-based design system built with React, TypeScript, and Tailwind CSS. 
            Featuring comprehensive documentation for colors, typography, and reusable components.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/tokens/colors"
              className="inline-flex items-center justify-center px-6 py-3 rounded-button bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] hover:bg-[var(--button-primary-bg-hover)] transition-colors font-medium"
            >
              View Design Tokens
            </Link>
            <Link
              to="/components"
              className="inline-flex items-center justify-center px-6 py-3 rounded-button bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] hover:bg-[var(--button-secondary-bg-hover)] transition-colors font-medium"
            >
              Browse Components
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-container border border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
            <h3 className="text-xl font-bold mb-3">Design Tokens</h3>
            <p className="text-[var(--text-secondary)]">
              Color palettes, typography scales, spacing, and more - all defined in JSON and 
              automatically converted to CSS variables and Tailwind classes.
            </p>
          </div>

          <div className="p-6 rounded-container border border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
            <h3 className="text-xl font-bold mb-3">Component Library</h3>
            <p className="text-[var(--text-secondary)]">
              Reusable React components built strictly from design tokens. 
              Copy them directly into your projects or import the whole library.
            </p>
          </div>

          <div className="p-6 rounded-container border border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
            <h3 className="text-xl font-bold mb-3">Light & Dark Themes</h3>
            <p className="text-[var(--text-secondary)]">
              Fully functional light and dark modes with smooth theme transitions. 
              All tokens adapt automatically to the selected theme.
            </p>
          </div>
        </section>

        {/* Token Preview */}
        <section className="mt-20">
          <h3 className="text-2xl font-bold mb-6">Color Palette Preview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Amber */}
            <div className="space-y-2">
              <div className="h-24 rounded-button bg-amber-500" />
              <p className="text-sm font-medium">Amber (Primary)</p>
            </div>
            {/* Stone */}
            <div className="space-y-2">
              <div className="h-24 rounded-button bg-stone-500" />
              <p className="text-sm font-medium">Stone (Secondary)</p>
            </div>
            {/* Green */}
            <div className="space-y-2">
              <div className="h-24 rounded-button bg-green-500" />
              <p className="text-sm font-medium">Green (Success)</p>
            </div>
            {/* Blue */}
            <div className="space-y-2">
              <div className="h-24 rounded-button bg-blue-500" />
              <p className="text-sm font-medium">Blue (Info)</p>
            </div>
            {/* Purple */}
            <div className="space-y-2">
              <div className="h-24 rounded-button bg-purple-500" />
              <p className="text-sm font-medium">Purple (Warning)</p>
            </div>
            {/* Red */}
            <div className="space-y-2">
              <div className="h-24 rounded-button bg-red-500" />
              <p className="text-sm font-medium">Red (Error)</p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mt-20 p-8 rounded-container border border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
          <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
          <div className="space-y-4 text-[var(--text-secondary)]">
            <p>
              <strong>1. Explore Design Tokens:</strong> Start by reviewing the color palettes, 
              typography, and other foundational tokens that power the system.
            </p>
            <p>
              <strong>2. Browse Components:</strong> Check out the ready-to-use components with 
              live previews and code examples.
            </p>
            <p>
              <strong>3. Import Into Your Project:</strong> Use the components and tokens in 
              your own projects - perfect for portfolios, apps, and websites.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--surface-container-stroke)] mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-[var(--text-secondary)]">
          <p>Scorpion UI v2 - Built with React, TypeScript, Tailwind CSS, and design tokens</p>
        </div>
      </footer>
    </div>
  );
}

