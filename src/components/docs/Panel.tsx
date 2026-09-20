/**
 * DOC PANEL PRIMITIVES
 *
 * Plated containers for documentation pages, matching the DS corner language
 * (see src/components/ui/Card.tsx for the canonical plate ring recipe):
 * - LARGE plate (Panel) for section wrappers, panels, and card-sized specimens
 * - SMALL plate (PlateChip) for compact items like swatch cards and token chips
 *
 * Both render the two-layer plate ring: an outer layer that draws the stroke
 * (clipped to the plate shape, 1px padding) and an inner layer that draws the
 * fill (clipped to the same shape, so children are clipped automatically).
 */

import { type ReactNode } from "react";

export interface PanelProps {
  /** Panel content, rendered inside the padded inner fill layer */
  children: ReactNode;
  /** Extra classes for the OUTER ring layer (margins, grid placement, sizing) */
  className?: string;
  /**
   * Replaces the inner layer's default fill and padding
   * ("bg-[var(--surface-card)] p-4 lg:p-6"). Use when a specimen canvas needs
   * a specific background, e.g. "bg-secondary-950 p-4 lg:p-6" for a forced
   * dark canvas. Because it replaces the defaults, always include both a
   * background and a padding when overriding.
   */
  innerClassName?: string;
}

/**
 * Panel Component
 *
 * Large plate ring for doc pages: section wrappers, example canvases, and
 * larger specimen cards. Use instead of flat hairline-bordered boxes.
 *
 * @param children - Content rendered inside the inner fill layer
 * @param className - Extra classes applied to the outer ring layer
 * @param innerClassName - Overrides the inner layer's default fill and padding
 */
export function Panel({ children, className = "", innerClassName }: PanelProps) {
  return (
    <div className={`plate-round-lg p-px bg-[var(--surface-container-stroke)] ${className}`}>
      <div
        className={`plate-round-lg h-full w-full ${
          innerClassName ?? "bg-[var(--surface-card)] p-4 lg:p-6"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export interface PlateChipProps {
  /** Chip content, rendered inside the inner fill layer (callers pad) */
  children: ReactNode;
  /** Extra classes for the OUTER ring layer (margins, grid placement, sizing) */
  className?: string;
  /**
   * Replaces the inner layer's default fill ("bg-[var(--surface-card)]").
   * PlateChip never adds padding; callers pad their own content.
   */
  innerClassName?: string;
}

/**
 * PlateChip Component
 *
 * Small plate ring for compact doc items: individual swatch cards, token
 * chips, and other small card-like specimens. Adds no default padding, so
 * callers control the inner layout entirely.
 *
 * @param children - Content rendered inside the inner fill layer
 * @param className - Extra classes applied to the outer ring layer
 * @param innerClassName - Overrides the inner layer's default fill
 */
export function PlateChip({ children, className = "", innerClassName }: PlateChipProps) {
  return (
    <div className={`plate-round p-px bg-[var(--surface-container-stroke)] ${className}`}>
      <div className={`plate-round h-full w-full ${innerClassName ?? "bg-[var(--surface-card)]"}`}>
        {children}
      </div>
    </div>
  );
}
