/**
 * TYPOGRAPHY PAGE
 * 
 * Documentation for typography tokens
 * Displays font family and size scale with visual examples
 * Sample text uses quotes from Point Break (1991)
 */

export default function Typography() {
  return (
    <div className="container mx-auto px-10 pt-10 pb-20">
      {/* 
        PAGE HEADER SECTION
        Title and description explaining what typography tokens are
      */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Typography Tokens</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Font family and size scale used throughout the design system. All text uses Fragment Mono.
        </p>
      </div>

      {/* 
        FONT FAMILY SECTION
        Shows the primary font family used in the design system
        Large display of token name and font family name (48px) directly in amber container
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Family</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Primary typeface</p>
          </div>
          
          {/* Font family displayed at 48px directly in the container */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sepia-900 dark:text-sepia-50" style={{ fontSize: '48px' }}>
              font.family.mono
            </p>
            <p className="font-mono text-sepia-600 dark:text-sepia-400" style={{ fontSize: '48px' }}>
              Fragment Mono
            </p>
          </div>
        </div>
      </section>

      {/* 
        FONT SIZES SECTION
        Displays all size tokens from 3xl to xs (largest to smallest) with visual examples
        All samples are in ONE container, cascading from large to small
        Each shows the Point Break quote at that size, plus token name and pixel value
      */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-[24px] p-10">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Font Sizes</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">Type scale from 3xl to extra small</p>
          </div>
          
          {/* Single container with all font sizes cascading from largest to smallest */}
          <div className="border-[0.5px] border-solid border-sepia-500 dark:border-sepia-700 rounded-2xl overflow-hidden bg-white dark:bg-sepia-950 p-6">
            <div className="flex flex-col gap-8">
              
              {/* font.size.3xl - 48px (NEW) */}
              <div className="flex flex-col gap-2">
                <p className="font-mono text-sepia-900 dark:text-sepia-50" style={{ fontSize: '48px', lineHeight: '1.2' }}>
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">font.size.3xl</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">48px</p>
                </div>
              </div>

              {/* font.size.2xl - 24px */}
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">font.size.2xl</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">24px</p>
                </div>
              </div>

              {/* font.size.xl - 20px */}
              <div className="flex flex-col gap-2">
                <p className="text-xl font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">font.size.xl</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">20px</p>
                </div>
              </div>

              {/* font.size.lg - 18px */}
              <div className="flex flex-col gap-2">
                <p className="text-lg font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">font.size.lg</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">18px</p>
                </div>
              </div>

              {/* font.size.base - 16px */}
              <div className="flex flex-col gap-2">
                <p className="text-base font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">font.size.base</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">16px</p>
                </div>
              </div>

              {/* font.size.sm - 14px */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">font.size.sm</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">14px</p>
                </div>
              </div>

              {/* font.size.xs - 12px */}
              <div className="flex flex-col gap-2">
                <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">
                  Fear causes hesitation, and hesitation will cause your worst fears to come true.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-xs font-mono text-sepia-900 dark:text-sepia-50">font.size.xs</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">12px</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

