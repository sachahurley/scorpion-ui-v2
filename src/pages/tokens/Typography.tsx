/**
 * TYPOGRAPHY PAGE
 * 
 * Documentation for typography tokens
 * Displays font family and size scale with visual examples
 * Sample text uses quotes from Point Break (1991)
 */


import { Panel } from "@/components/docs/Panel";
import { tokenValue } from "@/lib/tokenValue";
export default function Typography() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* 
        PAGE HEADER SECTION
        Title and description explaining what typography tokens are
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Typography Tokens</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Font family and size scale used throughout the design system. All text uses Fragment Mono.
        </p>
      </div>

      {/* 
        FONT FAMILY SECTION
        Shows the primary font family used in the design system
        Large display of token name and font family name (48px) directly in amber container
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Font Family</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Primary typeface</p>
          </div>
          
          {/* Font family displayed at 48px directly in the container */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sepia-900 dark:text-sepia-50" style={{ fontSize: 'var(--font-size-3xl)' }}>
              font.family.mono
            </p>
            <p className="font-mono text-sepia-600 dark:text-sepia-400" style={{ fontSize: 'var(--font-size-3xl)' }}>
              Fragment Mono
            </p>
          </div>
        </Panel>
      </section>

      {/* 
        FONT SIZES SECTION
        Displays all size tokens from 3xl to xs (largest to smallest) with visual examples
        All samples are in ONE container, cascading from large to small
        Each shows the Point Break quote at that size, plus token name and pixel value
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Font Sizes</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Type scale from 6xl down to 3xs, resolved live from the font-size tokens</p>
          </div>
          
          {/* Single container with all font sizes cascading from largest to smallest */}
          <Panel>
            <div className="flex flex-col gap-8">
              
              {/* font.size.6xl */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sepia-900 dark:text-sepia-50" style={{ fontSize: 'var(--font-size-6xl)', lineHeight: '1.1' }}>
                  Fear causes hesitation
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.6xl</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-6xl')}</p>
                </div>
              </div>

              {/* font.size.5xl */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sepia-900 dark:text-sepia-50" style={{ fontSize: 'var(--font-size-5xl)', lineHeight: '1.1' }}>
                  Fear causes hesitation
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.5xl</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-5xl')}</p>
                </div>
              </div>

              {/* font.size.4xl */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sepia-900 dark:text-sepia-50" style={{ fontSize: 'var(--font-size-4xl)', lineHeight: '1.15' }}>
                  Fear causes hesitation
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.4xl</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-4xl')}</p>
                </div>
              </div>

              {/* font.size.3xl */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sepia-900 dark:text-sepia-50" style={{ fontSize: 'var(--font-size-3xl)', lineHeight: '1.2' }}>
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.3xl</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-3xl')}</p>
                </div>
              </div>

              {/* font.size.2xl */}
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.2xl</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-2xl')}</p>
                </div>
              </div>

              {/* font.size.xl */}
              <div className="flex flex-col gap-2">
                <p className="text-xl font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.xl</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-xl')}</p>
                </div>
              </div>

              {/* font.size.lg */}
              <div className="flex flex-col gap-2">
                <p className="text-lg font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.lg</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-lg')}</p>
                </div>
              </div>

              {/* font.size.base */}
              <div className="flex flex-col gap-2">
                <p className="text-base font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.base</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-base')}</p>
                </div>
              </div>

              {/* font.size.sm */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.sm</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-sm')}</p>
                </div>
              </div>

              {/* font.size.xs */}
              <div className="flex flex-col gap-2">
                <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.xs</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-xs')}</p>
                </div>
              </div>

              {/* font.size.2xs — tooltips, meta captions */}
              <div className="flex flex-col gap-2">
                <p className="text-2xs font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.2xs</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-2xs')}</p>
                </div>
              </div>

              {/* font.size.3xs — dense game chrome; use sparingly */}
              <div className="flex flex-col gap-2">
                <p className="text-3xs font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-[var(--text-primary)]">font.size.3xs</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">{tokenValue('--font-size-3xs')}</p>
                </div>
              </div>

            </div>
          </Panel>
        </Panel>
      </section>

      {/* 
        TEXT HIERARCHY SECTION
        Shows text.primary and text.secondary tokens for both light and dark themes
        These control the default text colors throughout the design system
      */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Text Hierarchy</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Theme-aware text colors for primary and secondary content</p>
          </div>
          
          {/* Text hierarchy tokens displayed in a visual demonstration */}
          <div className="space-y-6">
            
            {/* Primary Text */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Primary Text</h4>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-900 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">text.primary → color.sepia.900</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-50 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">text.primary → color.sepia.50</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <Panel className="mt-4">
                <p className="text-base font-mono text-[var(--text-primary)]">
                  This text uses text.primary for maximum contrast and readability. It's used for headlines, body text, and important content.
                </p>
              </Panel>
            </div>

            {/* Secondary Text */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Secondary Text</h4>
              
              {/* Light Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Light Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-600 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">text.secondary → color.sepia.600</span>
                  </div>
                </div>
              </div>

              {/* Dark Theme */}
              <div className="mb-3">
                <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Dark Theme</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-sepia-400 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">text.secondary → color.sepia.400</span>
                  </div>
                </div>
              </div>

              {/* Visual Example */}
              <Panel className="mt-4">
                <p className="text-base font-mono text-[var(--text-secondary)]">
                  This text uses text.secondary for supporting content like descriptions, captions, and metadata. It provides visual hierarchy through reduced contrast.
                </p>
              </Panel>
            </div>

          </div>
        </Panel>
      </section>
    </div>
  );
}

