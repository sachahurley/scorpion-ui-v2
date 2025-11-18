/**
 * Z-INDEX FOUNDATION PAGE
 * 
 * Documentation for z-index layering system
 * Shows the stacking order for UI elements and prevents z-index conflicts
 * 
 * The system uses a predictable scale with 20-point increments between layers
 */

import { useState } from "react";

export default function ZIndex() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  // Z-index layer definitions
  const layers = [
    { name: "zIndex.base", value: "0", description: "Default layer for normal content", color: "bg-sepia-200 dark:bg-sepia-800" },
    { name: "zIndex.dropdown", value: "1000", description: "Dropdown menus", color: "bg-blue-200 dark:bg-blue-800" },
    { name: "zIndex.sticky", value: "1020", description: "Sticky headers and navigation", color: "bg-green-200 dark:bg-green-800" },
    { name: "zIndex.overlay", value: "1030", description: "Backdrop/scrim overlays", color: "bg-purple-200 dark:bg-purple-800" },
    { name: "zIndex.modal", value: "1040", description: "Modal dialogs", color: "bg-amber-200 dark:bg-amber-800" },
    { name: "zIndex.popover", value: "1050", description: "Popovers and tooltips", color: "bg-red-200 dark:bg-red-800" },
    { name: "zIndex.tooltip", value: "1060", description: "Tooltips (highest layer)", color: "bg-primary-200 dark:bg-primary-800" },
  ];

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-sepia-900 dark:text-sepia-50">Z-Index System</h2>
        <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
          Predictable layering system for stacking UI elements and preventing z-index conflicts.
        </p>
      </div>

      {/* LAYER HIERARCHY VISUALIZATION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Layer Hierarchy</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Visual representation of the z-index stacking order (lowest to highest)
            </p>
          </div>

          {/* Stacked layers visualization */}
          <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <div className="relative h-[400px]">
              {layers.map((layer, index) => (
                <div
                  key={layer.name}
                  className={`
                    absolute left-0 right-0 p-4 rounded-2xl border-2 cursor-pointer
                    transition-all duration-300 ${layer.color}
                    ${activeLayer === layer.name ? 'scale-105 border-primary-500' : 'border-sepia-400 dark:border-sepia-600'}
                  `}
                  style={{
                    bottom: `${index * 50}px`,
                    zIndex: parseInt(layer.value),
                  }}
                  onClick={() => setActiveLayer(activeLayer === layer.name ? null : layer.name)}
                  onMouseEnter={() => setActiveLayer(layer.name)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">{layer.name}</p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">{layer.description}</p>
                    </div>
                    <div className="text-xl font-mono font-bold text-sepia-900 dark:text-sepia-50">{layer.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-4 text-center">
              ↑ Hover over layers to highlight them in the stack
            </p>
          </div>
        </div>
      </section>

      {/* TOKEN VALUES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Token Values</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              All z-index tokens with their numeric values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {layers.map((layer) => (
              <div key={layer.name} className="p-4 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">{layer.name}</span>
                  <span className="text-sm font-mono font-bold text-primary-600 dark:text-primary-400">{layer.value}</span>
                </div>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">{layer.description}</p>
              </div>
            ))}
          </div>

          {/* Spacing explanation */}
          <div className="mt-6 p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">20-Point Increment System</p>
            <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
              Each layer is separated by 20 points, allowing for intermediate values if needed while maintaining clear hierarchy. Starting at 1000 leaves room below for special cases.
            </p>
          </div>
        </div>
      </section>

      {/* USAGE GUIDELINES SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Usage Guidelines</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              When to use each z-index layer
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Layer Selection Rules</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• <span className="font-bold">base (0)</span> - All normal page content, cards, text</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• <span className="font-bold">dropdown (1000)</span> - Dropdown menus that appear above content</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• <span className="font-bold">sticky (1020)</span> - Fixed headers, sticky navigation bars</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• <span className="font-bold">overlay (1030)</span> - Semi-transparent backdrop behind modals</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• <span className="font-bold">modal (1040)</span> - Modal dialog boxes, drawers, sheets</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• <span className="font-bold">popover (1050)</span> - Popovers that appear above modals</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• <span className="font-bold">tooltip (1060)</span> - Tooltips (always on top)</li>
              </ul>
            </div>

            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Best Practices</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Always use tokens instead of arbitrary values</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Never go above zIndex.tooltip (1060) - it's the ceiling</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• If you need intermediate values, use +5 or +10 (e.g., 1005, 1010)</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Document any custom z-index values and their purpose</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Test stacking with multiple overlays open simultaneously</li>
              </ul>
            </div>

            <div className="p-6 bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-2xl">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">🔴 Common Mistakes</p>
              <ul className="space-y-2">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Using random z-index values (z-[999], z-[9999])</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Creating z-index wars (constantly increasing values)</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Not considering nested stacking contexts</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Forgetting that transform/opacity create new stacking contexts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Interactive Demo</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Toggle different layers to see how they stack
            </p>
          </div>

          <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
            {/* Layer toggle buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveLayer(activeLayer === "dropdown" ? null : "dropdown")}
                className={`px-4 py-2 rounded-button font-mono text-sm transition-colors ${
                  activeLayer === "dropdown"
                    ? "bg-blue-500 text-white"
                    : "bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700"
                }`}
              >
                Dropdown (1000)
              </button>
              <button
                onClick={() => setActiveLayer(activeLayer === "overlay" ? null : "overlay")}
                className={`px-4 py-2 rounded-button font-mono text-sm transition-colors ${
                  activeLayer === "overlay"
                    ? "bg-purple-500 text-white"
                    : "bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700"
                }`}
              >
                Overlay (1030)
              </button>
              <button
                onClick={() => setActiveLayer(activeLayer === "modal" ? null : "modal")}
                className={`px-4 py-2 rounded-button font-mono text-sm transition-colors ${
                  activeLayer === "modal"
                    ? "bg-amber-500 text-black"
                    : "bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700"
                }`}
              >
                Modal (1040)
              </button>
              <button
                onClick={() => setActiveLayer(activeLayer === "tooltip" ? null : "tooltip")}
                className={`px-4 py-2 rounded-button font-mono text-sm transition-colors ${
                  activeLayer === "tooltip"
                    ? "bg-primary-500 text-black"
                    : "bg-sepia-100 dark:bg-sepia-800 text-sepia-900 dark:text-sepia-50 hover:bg-sepia-200 dark:hover:bg-sepia-700"
                }`}
              >
                Tooltip (1060)
              </button>
            </div>

            {/* Demo area */}
            <div className="relative h-64 bg-sepia-50 dark:bg-sepia-950 rounded-2xl overflow-hidden">
              {/* Base content */}
              <div className="absolute inset-0 p-6">
                <p className="text-sm font-mono text-sepia-900 dark:text-sepia-50">Base Content (z-index: 0)</p>
                <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-2">Regular page content sits at the base layer</p>
              </div>

              {/* Dropdown layer */}
              {activeLayer === "dropdown" && (
                <div className="absolute top-12 left-12 w-48 p-4 bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 rounded-2xl shadow-lg" style={{ zIndex: 1000 }}>
                  <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">Dropdown</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">z-index: 1000</p>
                </div>
              )}

              {/* Overlay layer */}
              {activeLayer === "overlay" && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center" style={{ zIndex: 1030 }}>
                  <div className="p-4 bg-purple-100 dark:bg-purple-900 border-2 border-purple-500 rounded-2xl">
                    <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">Overlay</p>
                    <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">z-index: 1030</p>
                  </div>
                </div>
              )}

              {/* Modal layer */}
              {activeLayer === "modal" && (
                <>
                  <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1030 }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1040 }}>
                    <div className="w-64 p-6 bg-amber-100 dark:bg-amber-900 border-2 border-amber-500 rounded-2xl shadow-2xl">
                      <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">Modal</p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">z-index: 1040</p>
                      <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-2">Above overlay (1030)</p>
                    </div>
                  </div>
                </>
              )}

              {/* Tooltip layer */}
              {activeLayer === "tooltip" && (
                <div className="absolute top-20 right-12 w-48 p-3 bg-primary-100 dark:bg-primary-900 border-2 border-primary-500 rounded-2xl shadow-xl" style={{ zIndex: 1060 }}>
                  <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50">Tooltip</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">z-index: 1060</p>
                  <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mt-1">Highest layer</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Implementation</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              How to apply z-index tokens in your components
            </p>
          </div>

          <div className="space-y-6">
            {/* Tailwind Classes */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Using Tailwind Classes</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-sepia-950">
                <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<!-- Tailwind doesn't have z-1040, use CSS variable instead -->
<div className="z-[var(--z-index-modal)]">
  Modal Content
</div>

<!-- Or use style attribute -->
<div style={{ zIndex: 'var(--z-index-modal)' }}>
  Modal Content
</div>`}
                </pre>
              </div>
            </div>

            {/* Component Examples */}
            <div>
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-3">Real-World Examples</p>
              <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
                <ul className="space-y-3">
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                    <span className="font-bold text-sepia-900 dark:text-sepia-50">Sidebar:</span> Use zIndex.sticky (1020) for fixed navigation
                  </li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                    <span className="font-bold text-sepia-900 dark:text-sepia-50">Modal Backdrop:</span> Use zIndex.overlay (1030) for the dark scrim
                  </li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                    <span className="font-bold text-sepia-900 dark:text-sepia-50">Modal Content:</span> Use zIndex.modal (1040) for the dialog
                  </li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                    <span className="font-bold text-sepia-900 dark:text-sepia-50">Toast Notifications:</span> Use zIndex.popover (1050) to appear above modals
                  </li>
                  <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                    <span className="font-bold text-sepia-900 dark:text-sepia-50">Tooltips:</span> Use zIndex.tooltip (1060) to always be visible
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING SECTION */}
      <section className="mb-10">
        <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-4 lg:p-8">
          <div className="mb-6">
            <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-1">Troubleshooting</h3>
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Common z-index issues and solutions
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Element not appearing above another?</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400 mb-2">Check if the parent has a stacking context:</p>
              <ul className="space-y-1 ml-4">
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Does parent have transform, opacity, or filter?</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Is parent position relative/absolute/fixed?</li>
                <li className="text-sm font-mono text-sepia-600 dark:text-sepia-400">• Child z-index only works within parent's stacking context</li>
              </ul>
            </div>

            <div className="p-6 border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-2xl bg-white dark:bg-sepia-950">
              <p className="text-sm font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-2">Modal appearing behind sidebar?</p>
              <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                Ensure modal is rendered at root level (not nested inside sidebar). Use React portals or place modal/overlay components at app root.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

