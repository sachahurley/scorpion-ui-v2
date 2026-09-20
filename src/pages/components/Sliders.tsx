/**
 * SLIDERS DOCUMENTATION PAGE
 *
 * Documentation for the Slider component: a styled native range input for
 * continuous or stepped numeric values.
 *
 * Structure:
 * 1. Page header (title + description)
 * 2. Basic usage: controlled slider with a live value readout
 * 3. Range and step configuration
 * 4. States (disabled)
 * 5. Implementation example (printed code)
 * 6. Keyboard and accessibility notes, plus when to use
 */

import { useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { Panel, PlateChip } from "@/components/docs/Panel";

export default function Sliders() {
  // Controlled specimens: one percentage-style value, one stepped value
  const [zoom, setZoom] = useState(60);
  const [fontSize, setFontSize] = useState(14);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Sliders</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          A styled native range input for continuous or stepped numeric values, such as zoom, size, or bias. The thumb is a solid accent plate on a thin muted track, and because it is a real input underneath, keyboard control, min/max/step, and form participation all come free.
        </p>
      </div>

      {/* BASIC USAGE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Basic Usage</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              A controlled slider with the label prop. The label wires htmlFor and id automatically, so screen readers announce the control by name.
            </p>
          </div>

          <div className="max-w-md flex flex-col gap-2">
            <Slider
              label="Zoom"
              min={0}
              max={100}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Current value: {zoom}%
            </p>
          </div>
        </Panel>
      </section>

      {/* RANGE AND STEP SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Range and Step</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              min, max, and step pass straight through to the native range input. Use step for values that should snap to a scale, like a font size ramp.
            </p>
          </div>

          <div className="max-w-md flex flex-col gap-2">
            <Slider
              label="Font size"
              min={10}
              max={24}
              step={2}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              {fontSize}px, snapping in 2px steps between 10px and 24px
            </p>
          </div>
        </Panel>
      </section>

      {/* STATES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">States</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Disabled sliders drop to half opacity and ignore pointer and keyboard input. Focused sliders show the inset accent focus ring shared by every control in the system.
            </p>
          </div>

          <div className="max-w-md flex flex-col gap-6">
            <Slider label="Enabled" defaultValue={40} min={0} max={100} className="w-full" />
            <Slider label="Disabled" defaultValue={40} min={0} max={100} disabled className="w-full" />
          </div>
        </Panel>
      </section>

      {/* IMPLEMENTATION EXAMPLE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Implementation Example</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              A controlled slider with a live value readout. All native range props (min, max, step, value, onChange, disabled) pass through.
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`const [zoom, setZoom] = useState(60);

<Slider
  label="Zoom"
  min={0}
  max={100}
  value={zoom}
  onChange={(e) => setZoom(Number(e.target.value))}
/>
<p>{zoom}%</p>`}
            </pre>
          </Panel>
        </Panel>
      </section>

      {/* ACCESSIBILITY AND USAGE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Keyboard and When to Use</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Because Slider is a native range input, the full keyboard model works without any extra code.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <PlateChip>
              <div className="px-3 py-2">
                <p className="text-xs font-mono text-[var(--text-primary)]">Arrow keys</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Step up or down</p>
              </div>
            </PlateChip>
            <PlateChip>
              <div className="px-3 py-2">
                <p className="text-xs font-mono text-[var(--text-primary)]">Home / End</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Jump to min / max</p>
              </div>
            </PlateChip>
            <PlateChip>
              <div className="px-3 py-2">
                <p className="text-xs font-mono text-[var(--text-primary)]">Page Up / Down</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Larger jumps</p>
              </div>
            </PlateChip>
          </div>

          <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
            Use a slider when the value is numeric, bounded, and approximate: zoom levels, sizes, volume, weighting. Prefer an Input when the user needs to type an exact number, and a Select when the options are a short list of named choices. Always pass either the label prop or an aria-label so the control is announced correctly.
          </p>
        </Panel>
      </section>
    </div>
  );
}
