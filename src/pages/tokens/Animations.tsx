/**
 * ANIMATIONS FOUNDATION PAGE
 * 
 * Documentation for animation/duration and easing tokens
 * Shows timing values and easing functions for consistent motion design
 * 
 * Includes interactive demonstrations of each duration and easing combination
 */

import { useState } from "react";

export default function Animations() {
  const [isAnimating, setIsAnimating] = useState(false);

  // Duration values
  const durations = [
    { name: "duration.instant", value: "0ms", ms: 0 },
    { name: "duration.fast", value: "150ms", ms: 150 },
    { name: "duration.normal", value: "200ms", ms: 200 },
    { name: "duration.slow", value: "300ms", ms: 300 },
    { name: "duration.slower", value: "500ms", ms: 500 },
  ];

  // Easing functions
  const easings = [
    { name: "easing.linear", value: "linear", css: "linear" },
    { name: "easing.easeIn", value: "cubic-bezier(0.4, 0, 1, 1)", css: "cubic-bezier(0.4, 0, 1, 1)" },
    { name: "easing.easeOut", value: "cubic-bezier(0, 0, 0.2, 1)", css: "cubic-bezier(0, 0, 0.2, 1)" },
    { name: "easing.easeInOut", value: "cubic-bezier(0.4, 0, 0.2, 1)", css: "cubic-bezier(0.4, 0, 0.2, 1)" },
  ];

  // Trigger animation
  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600); // Reset after longest duration
  };

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Animations & Transitions</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Duration and easing tokens for consistent, purposeful motion throughout the interface.
        </p>
      </div>

      {/* DURATION TOKENS SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Duration Tokens</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Standard timing values for transitions and animations
            </p>
          </div>
          
          <div className="space-y-4">
            {durations.map((duration) => (
              <div key={duration.name} className="space-y-2">
                {/* Token info */}
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">{duration.name}</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">{duration.value}</span>
                  </div>
                </div>

                {/* Visual timing bar */}
                <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                  <div className="relative h-8 bg-sepia-100 dark:bg-sepia-900 rounded overflow-hidden">
                    <div 
                      className={`h-full bg-primary-400 transition-all ${isAnimating ? 'w-full' : 'w-0'}`}
                      style={{ 
                        transitionDuration: duration.value,
                        transitionTimingFunction: 'linear'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Trigger button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={triggerAnimation}
                className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-black font-mono text-sm rounded-button transition-colors"
              >
                Animate All Durations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EASING FUNCTIONS SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Easing Functions</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Timing curves that control the acceleration of animations
            </p>
          </div>

          <div className="space-y-6">
            {easings.map((easing) => (
              <div key={easing.name}>
                {/* Token info */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">{easing.name}</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                    <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">{easing.value}</span>
                  </div>
                </div>

                {/* Visual demonstration */}
                <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                  <div className="relative h-16">
                    <div 
                      className={`absolute top-0 w-16 h-16 bg-primary-400 rounded-button transition-all ${isAnimating ? 'left-[calc(100%-4rem)]' : 'left-0'}`}
                      style={{ 
                        transitionDuration: '500ms',
                        transitionTimingFunction: easing.css
                      }}
                    />
                  </div>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-4">
                    {easing.name === "easing.linear" && "Constant speed throughout the animation"}
                    {easing.name === "easing.easeIn" && "Starts slow, accelerates toward the end"}
                    {easing.name === "easing.easeOut" && "Starts fast, decelerates toward the end"}
                    {easing.name === "easing.easeInOut" && "Starts slow, speeds up in middle, slows at end"}
                  </p>
                </div>
              </div>
            ))}

            {/* Trigger button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={triggerAnimation}
                className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-black font-mono text-sm rounded-button transition-colors"
              >
                Animate All Easings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* USAGE GUIDELINES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Usage Guidelines</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              When to use each duration and easing combination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Duration Guidelines */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Duration Selection</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">instant (0ms)</span> - Instant changes, no transition</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">fast (150ms)</span> - Quick interactions, hover states</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">normal (200ms)</span> - Default transitions, color changes</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">slow (300ms)</span> - Panel slides, drawer animations</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">slower (500ms)</span> - Page transitions, complex animations</li>
              </ul>
            </div>

            {/* Easing Guidelines */}
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Easing Selection</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">linear</span> - Loading bars, simple slides</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">easeIn</span> - Elements exiting the screen</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">easeOut</span> - Elements entering the screen</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400"><span className="font-bold">easeInOut</span> - Position changes, most interactions</li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-6 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Motion Design Principles</p>
            <ul className="space-y-2">
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Faster transitions (fast/normal) for hover states and color changes</li>
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Slower transitions (slow/slower) for layout changes and position shifts</li>
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Use easeOut for entering elements (feels natural and responsive)</li>
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Use easeIn for exiting elements (accelerates away)</li>
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Use easeInOut for general interactions (balanced feel)</li>
              <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Keep animations subtle - they should enhance, not distract</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPARISON SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Interactive Examples</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Hover over cards to see different duration and easing combinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fast + EaseOut */}
            <div className="group p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950 transition-all duration-[150ms] ease-out hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer">
              <div className="flex gap-2 mb-3">
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">fast</span>
                </div>
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">easeOut</span>
                </div>
              </div>
              <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Hover States</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">150ms + easeOut for responsive, snappy hover effects</p>
            </div>

            {/* Normal + EaseInOut */}
            <div className="group p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950 transition-all duration-[200ms] ease-in-out hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer">
              <div className="flex gap-2 mb-3">
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">normal</span>
                </div>
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">easeInOut</span>
                </div>
              </div>
              <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Color Transitions</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">200ms + easeInOut for smooth, balanced color changes</p>
            </div>

            {/* Slow + EaseOut */}
            <div className="group p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950 transition-all duration-[300ms] ease-out hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer">
              <div className="flex gap-2 mb-3">
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">slow</span>
                </div>
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">easeOut</span>
                </div>
              </div>
              <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Scale Transforms</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">300ms + easeOut for smooth scaling animations</p>
            </div>

            {/* Slower + EaseInOut */}
            <div className="group p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950 transition-all duration-[500ms] ease-in-out hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer">
              <div className="flex gap-2 mb-3">
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">slower</span>
                </div>
                <div className="inline-flex items-center px-2 py-1 bg-sepia-100 dark:bg-sepia-900 rounded-full border border-sepia-300 dark:border-sepia-700">
                  <span className="text-xs font-mono text-sepia-900 dark:text-sepia-50">easeInOut</span>
                </div>
              </div>
              <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Complex Animations</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">500ms + easeInOut for elaborate, graceful animations</p>
            </div>
          </div>

          <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-6 text-center">
            ↑ Hover over each card to see the duration + easing combination in action
          </p>
        </div>
      </section>

      {/* IMPLEMENTATION SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Implementation</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              How to use duration and easing tokens in your code
            </p>
          </div>

          <div className="space-y-6">
            {/* Tailwind Classes */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Using Tailwind Classes</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-sepia-950">
                <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<div className="
  transition-colors 
  duration-[200ms]
  ease-in-out
">
  /* Uses duration.normal + easing.easeInOut */
</div>`}
                </pre>
              </div>
            </div>

            {/* CSS Variables */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Using CSS Variables</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-sepia-950">
                <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<div style={{ 
  transitionDuration: 'var(--duration-normal)',
  transitionTimingFunction: 'var(--easing-ease-out)'
}}>
  /* Uses CSS custom properties */
</div>`}
                </pre>
              </div>
            </div>

            {/* Common Patterns */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Common Patterns</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <ul className="space-y-2">
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Buttons: fast (150ms) + easeOut</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Color changes: normal (200ms) + easeInOut</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Dropdowns: slow (300ms) + easeOut</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Modals: slower (500ms) + easeOut</li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Theme switching: normal (200ms) + easeInOut</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

