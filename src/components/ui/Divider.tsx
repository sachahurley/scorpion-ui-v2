/**
 * DIVIDER COMPONENT
 * 
 * Reusable divider/separator component for visual separation
 * Built entirely from design tokens defined in tokens.json
 * 
 * VARIANTS:
 * - horizontal: Full-width horizontal divider (default)
 * - vertical: Full-height vertical divider
 * - withText: Horizontal divider with centered text label
 * 
 * FEATURES:
 * - Light/dark theme support
 * - Customizable spacing (margin)
 * - Optional text label for horizontal dividers
 */

import { type ReactNode } from "react";

export interface DividerProps {
  variant?: "horizontal" | "vertical" | "withText";
  text?: ReactNode;
  spacing?: "none" | "small" | "medium" | "large";
  className?: string;
}

/**
 * Divider Component
 * 
 * @param variant - Divider orientation/style (default: "horizontal")
 * @param text - Optional text label (only used with "withText" variant)
 * @param spacing - Vertical/horizontal spacing around divider (default: "medium")
 * @param className - Additional CSS classes
 */
export function Divider({
  variant = "horizontal",
  text,
  spacing = "medium",
  className = "",
}: DividerProps) {
  // SPACING STYLES - Margin around divider
  // Uses spacing tokens: 0, 1 (4px), 2 (8px), 3 (12px), 4 (16px)
  const spacingStyles = {
    none: "",
    small: variant === "horizontal" ? "my-1" : "mx-1",      // 4px margin
    medium: variant === "horizontal" ? "my-4" : "mx-4",      // 16px margin
    large: variant === "horizontal" ? "my-8" : "mx-8",      // 32px margin
  };

  // BASE DIVIDER STYLES - Border color using semantic tokens
  // Uses secondary (sepia) colors for neutral appearance
  const dividerBaseStyles = `
    border-sepia-300 dark:border-sepia-700
  `;

  // Horizontal divider (default)
  if (variant === "horizontal") {
    return (
      <div
        className={`
          w-full
          border-t border-solid
          ${dividerBaseStyles}
          ${spacingStyles[spacing]}
          ${className}
        `}
        role="separator"
        aria-orientation="horizontal"
      />
    );
  }

  // Vertical divider
  if (variant === "vertical") {
    return (
      <div
        className={`
          h-full
          border-l border-solid
          ${dividerBaseStyles}
          ${spacingStyles[spacing]}
          ${className}
        `}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  // Horizontal divider with centered text
  if (variant === "withText" && text) {
    return (
      <div
        className={`
          flex items-center
          w-full
          ${spacingStyles[spacing]}
          ${className}
        `}
        role="separator"
        aria-label={typeof text === "string" ? text : undefined}
      >
        {/* Left line */}
        <div className={`flex-1 border-t border-solid ${dividerBaseStyles}`} />
        
        {/* Centered text */}
        <span className="px-4 font-mono text-xs text-sepia-600 dark:text-sepia-400">
          {text}
        </span>
        
        {/* Right line */}
        <div className={`flex-1 border-t border-solid ${dividerBaseStyles}`} />
      </div>
    );
  }

  // Fallback to horizontal if withText but no text provided
  return (
    <div
      className={`
        w-full
        border-t border-solid
        ${dividerBaseStyles}
        ${spacingStyles[spacing]}
        ${className}
      `}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}

