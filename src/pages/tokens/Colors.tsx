/**
 * COLORS PAGE
 * 
 * Documentation for all color tokens
 * Shows color swatches with copyable values
 */

import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useState } from "react";

// Color families from tokens
const colorFamilies = {
  "Amber (Primary)": ["amber", "primary"],
  "Stone (Secondary)": ["stone", "secondary"],
  "Green (Success)": ["green", "success"],
  "Blue (Info)": ["blue", "info"],
  "Purple (Warning)": ["purple", "warning"],
  "Red (Error)": ["red", "error"],
};

const shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

export default function Colors() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="min-h-screen theme-transition">
      {/* Header */}
      <header className="border-b border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold hover:text-primary-600 transition-colors">
              Scorpion UI v2
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link to="/tokens/colors" className="font-medium text-primary-600">
                Colors
              </Link>
              <Link to="/components" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                Components
              </Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Color Tokens</h1>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            All color tokens with their hex values and usage examples. Click any color to copy its Tailwind class name.
          </p>

          {/* Color Families */}
          <div className="space-y-16">
            {Object.entries(colorFamilies).map(([familyName, [baseColor, semanticColor]]) => (
              <section key={baseColor}>
                <h2 className="text-2xl font-bold mb-6">{familyName}</h2>
                
                {/* Base Color */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4 text-[var(--text-secondary)]">
                    Base: {baseColor}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {shades.map((shade) => {
                      const className = `bg-${baseColor}-${shade}`;
                      return (
                        <button
                          key={shade}
                          onClick={() => copyToClipboard(className)}
                          className="group relative overflow-hidden rounded-button border border-secondary-300 dark:border-secondary-700 hover:scale-105 transition-transform"
                        >
                          <div className={`h-20 ${className}`} />
                          <div className="p-3 bg-[var(--surface-container)]">
                            <p className="font-medium text-sm">{shade}</p>
                            <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
                              {className}
                            </p>
                          </div>
                          {copiedToken === className && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium text-sm">
                              Copied!
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Semantic Color (if different from base) */}
                {semanticColor !== baseColor && (
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-[var(--text-secondary)]">
                      Semantic: {semanticColor}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {shades.map((shade) => {
                        const className = `bg-${semanticColor}-${shade}`;
                        return (
                          <button
                            key={shade}
                            onClick={() => copyToClipboard(className)}
                            className="group relative overflow-hidden rounded-button border border-secondary-300 dark:border-secondary-700 hover:scale-105 transition-transform"
                          >
                            <div className={`h-20 ${className}`} />
                            <div className="p-3 bg-[var(--surface-container)]">
                              <p className="font-medium text-sm">{shade}</p>
                              <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
                                {className}
                              </p>
                            </div>
                            {copiedToken === className && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium text-sm">
                                Copied!
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Usage Guide */}
          <section className="mt-16 p-8 rounded-container border border-[var(--surface-container-stroke)] bg-[var(--surface-container)]">
            <h2 className="text-2xl font-bold mb-4">Using Color Tokens</h2>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">In Tailwind Classes:</h3>
                <code className="block bg-stone-900 text-amber-300 p-4 rounded-button font-mono text-sm">
                  className="bg-amber-500 text-stone-900"
                </code>
              </div>
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">In CSS Variables:</h3>
                <code className="block bg-stone-900 text-amber-300 p-4 rounded-button font-mono text-sm">
                  background-color: var(--color-amber-500);
                </code>
              </div>
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">Semantic Colors:</h3>
                <p>
                  Use semantic names like <code className="bg-secondary-200 dark:bg-secondary-800 px-2 py-1 rounded">primary</code>, 
                  <code className="bg-secondary-200 dark:bg-secondary-800 px-2 py-1 rounded mx-2">success</code>, 
                  <code className="bg-secondary-200 dark:bg-secondary-800 px-2 py-1 rounded">error</code> for consistency across themes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

