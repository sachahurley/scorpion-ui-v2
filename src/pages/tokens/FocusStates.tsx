/**
 * FOCUS STATES FOUNDATION PAGE
 *
 * Documentation for the focus ring tokens and the INSET ring recipe.
 *
 * Interactive elements are clipped to the plate silhouette (plate-round), and
 * the clip swallows anything drawn outside the element box. Outline and
 * offset-ring recipes therefore cannot render. Focus is instead an inset
 * box-shadow drawn just inside the plate edge, using the --focus-ring-* tokens.
 *
 * Focus states are critical for keyboard navigation and accessibility (WCAG 2.1).
 * All interactive elements must have visible focus indicators.
 */

import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/docs/Panel";

export default function FocusStates() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Focus States</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Focus ring tokens for keyboard navigation and accessibility. Because every interactive element is clipped to the plate silhouette, focus renders as an inset ring drawn inside the plate edge. Critical for WCAG 2.1 compliance.
        </p>
      </div>

      {/* WHY THE RING IS INSET SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Why the Ring Is Inset</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              The plate clip and the focus indicator have to share the same box
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-3">
                Buttons, fields, and nav rows are clipped with plate-round, a stepped clip-path that draws the one-bit corner silhouette. A clip-path removes everything outside its polygon, including outlines and offset box-shadow rings, so any focus treatment drawn outside the element would be invisible.
              </p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The system therefore sets focus:outline-none and replaces the outline with an inset box-shadow: a 2px band drawn just inside the plate edge that follows the stepped corners exactly. Nothing renders outside the element, so nothing is clipped away.
              </p>
            </Panel>

            {/* Visual demonstration: forced inset ring on the real primary recipe */}
            <Panel>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mb-3">Forced focus specimen: the ring sits inside the plate edge</p>
              <div className="inline-flex items-center justify-center font-mono text-sm plate-round cursor-pointer h-10 px-5 py-2.5 bg-[var(--button-primary-background)] text-[var(--button-primary-text)] [box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-primary)]">
                Focused plate
              </div>
              <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-3">
                On the gold primary fill the primary ring reads as a tone band; the secondary, destructive, and field rings carry more contrast against their fills.
              </p>
            </Panel>
          </div>
        </Panel>
      </section>

      {/* FOCUS RING PROPERTIES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Focus Ring Properties</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Global ring dimensions and placement (same for all themes)
            </p>
          </div>

          <div className="space-y-6">
            {/* Ring Width */}
            <div>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Ring Width</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">--focus-ring-width</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">2px</span>
                </div>
              </div>
            </div>

            {/* Ring Placement */}
            <div>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Ring Placement</p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">Inset box-shadow inside the plate edge, no offset (the clip swallows outside outlines)</span>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* FOCUS RING COLORS SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Focus Ring Colors</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Semantic ring color tokens. Buttons pick their ring via a per-variant --btn-ring custom property; fields walk their border ramp instead of using a ring token.
            </p>
          </div>

          <div className="space-y-6">
            {/* Primary Focus */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">--focus-ring-primary</h4>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-primary-400 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">amber.400 (both themes)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <span className="text-sm font-mono text-[var(--text-primary)]">Used by: primary and link buttons, nav rows, icon buttons via --focus-ring-icon</span>
                  </div>
                </div>
              </div>

              {/* Forced specimen + live example */}
              <Panel>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center justify-center font-mono text-sm plate-round cursor-pointer h-10 px-5 py-2.5 bg-[var(--button-primary-background)] text-[var(--button-primary-text)] [box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-primary)]">
                    Forced
                  </div>
                  <Button variant="primary">Click me, then Tab</Button>
                </div>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-3">Left: statically forced ring. Right: try clicking then pressing Tab to see the real ring.</p>
              </Panel>
            </div>

            {/* Secondary Focus */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">--focus-ring-secondary</h4>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-secondary-700 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">sepia.700 (both themes)</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <span className="text-sm font-mono text-[var(--text-primary)]">Used by: secondary, ghost, and outline buttons</span>
                  </div>
                </div>
              </div>

              <Panel>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center justify-center font-mono text-sm plate-round cursor-pointer h-10 px-5 py-2.5 bg-[var(--button-secondary-background)] text-[var(--button-secondary-text)] [box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-secondary)]">
                    Forced
                  </div>
                  <Button variant="secondary">Secondary button focus</Button>
                </div>
              </Panel>
            </div>

            {/* Error / Destructive Focus */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">--focus-ring-error and --focus-ring-destructive</h4>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-error-600 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">Light: error.600</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <div className="w-4 h-4 rounded-none bg-error-500 border border-secondary-300 dark:border-secondary-600"></div>
                    <span className="text-sm font-mono text-[var(--text-primary)]">Dark: error.500</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                    <span className="text-sm font-mono text-[var(--text-primary)]">Used by: destructive buttons and error-state controls</span>
                  </div>
                </div>
              </div>

              <Panel>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center justify-center font-mono text-sm plate-round cursor-pointer h-10 px-5 py-2.5 bg-[var(--button-destructive-background)] text-[var(--button-destructive-text)] [box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-destructive)]">
                    Forced
                  </div>
                  <Button variant="destructive">Destructive button focus</Button>
                </div>
              </Panel>
            </div>

            {/* Icon Focus */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">--focus-ring-icon</h4>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <div className="w-4 h-4 rounded-none bg-primary-400 border border-secondary-300 dark:border-secondary-600"></div>
                  <span className="text-sm font-mono text-[var(--text-primary)]">amber.400 (both themes)</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">Used by: icon buttons (variant icon)</span>
                </div>
              </div>
            </div>

            {/* Field Focus */}
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Fields: the border ramp, not a ring token</h4>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-3">
                Input, Textarea, and Select use the plate ring recipe: a wrapper carries the border color clipped to the plate, and the control is the fill clipped 1px inset. Focus is the wrapper walking the ramp to --field-border-focus, so the plate ring itself becomes the focus indicator.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">Idle: --field-border</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">Hover: --field-border-hover</span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-900 rounded-none border border-secondary-300 dark:border-secondary-700">
                  <span className="text-sm font-mono text-[var(--text-primary)]">Focus: --field-border-focus</span>
                </div>
              </div>

              {/* Forced field specimen using the real plate ring recipe */}
              <Panel>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mb-3">Forced focus specimen: the wrapper layer holds --field-border-focus</p>
                <div className="max-w-sm plate-round p-px bg-[var(--field-border-focus)]">
                  <input
                    className="w-full font-mono text-sm plate-round bg-[var(--field-background)] text-[var(--text-primary)] h-10 px-4 py-2.5 placeholder:text-[var(--field-placeholder)] focus:outline-none"
                    placeholder="Focused field"
                    value=""
                    readOnly
                  />
                </div>
              </Panel>
            </div>
          </div>
        </Panel>
      </section>

      {/* INTERACTIVE DEMONSTRATION SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Interactive Demonstration</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Tab through these elements to see the inset rings in action
            </p>
          </div>

          <Panel>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600 mt-4">
              ⌨️ Press Tab to cycle through buttons and see their focus rings
            </p>
          </Panel>
        </Panel>
      </section>

      {/* ACCESSIBILITY GUIDELINES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Accessibility Guidelines</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              WCAG 2.1 requirements for focus indicators
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-3">WCAG 2.1 Success Criterion 2.4.7</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-3">
                "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible."
              </p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                ✅ Scorpion Design System meets this requirement with 2px inset focus rings on all interactive elements.
              </p>
            </Panel>

            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Best Practices</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">• Never remove a focus outline without replacing it: here <code className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900">focus:outline-none</code> is always paired with the inset ring on focus-visible</li>
                <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">• Focus rings must have sufficient contrast against the fill they sit on (3:1 ratio minimum)</li>
                <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">• Because the ring is inset, pick ring tokens that contrast with the element's own background, not the page background</li>
                <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">• Focus state should be clearly different from hover state</li>
                <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">• Test keyboard navigation in both light and dark themes</li>
              </ul>
            </Panel>

            <div className="p-6 bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-none">
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">⚠️ Important</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Focus indicators are legally required for accessibility compliance in many jurisdictions. Always maintain visible focus states.
              </p>
            </div>
          </div>
        </Panel>
      </section>

      {/* IMPLEMENTATION EXAMPLES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Implementation Examples</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              How to apply the inset ring recipe in your components
            </p>
          </div>

          <div className="space-y-6">
            {/* Button Recipe */}
            <div>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Buttons: inset ring via --btn-ring</p>
              <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
                <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<button
  className="
    plate-round
    focus:outline-none
    focus-visible:[box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--btn-ring)]
  "
  style={{ '--btn-ring': 'var(--focus-ring-primary)' }}
>
  Primary Button
</button>

/* --btn-ring per variant:
   primary / link  -> var(--focus-ring-primary)
   destructive     -> var(--focus-ring-destructive)
   icon            -> var(--focus-ring-icon)
   everything else -> var(--focus-ring-secondary) */`}
                </pre>
              </Panel>
            </div>

            {/* Field Recipe */}
            <div>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-3">Fields: the plate ring walks the border ramp</p>
              <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
                <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`{/* wrapper = border color clipped to the plate */}
<div className="
  plate-round p-px
  bg-[var(--field-border)]
  hover:bg-[var(--field-border-hover)]
  focus-within:!bg-[var(--field-border-focus)]
">
  {/* control = fill clipped 1px inset */}
  <input className="
    plate-round
    bg-[var(--field-background)]
    focus:outline-none
  " />
</div>`}
                </pre>
              </Panel>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}
