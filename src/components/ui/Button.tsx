/**
 * BUTTON COMPONENT
 * 
 * Reusable button component with multiple variants and sizes
 * Built entirely from design tokens defined in tokens.json
 * 
 * VARIANTS:
 * - primary: Main call-to-action button (has tokens in light/dark themes)
 * - secondary: Secondary actions (has tokens in light/dark themes)
 * - ghost: ⚠️ ASSUMPTION - Transparent background, visible text
 * - link: ⚠️ ASSUMPTION - Text-only button with underline on hover
 * - outline: ⚠️ ASSUMPTION - Transparent with border
 * - destructive: ⚠️ ASSUMPTION - Red/error colored for dangerous actions
 * 
 * SIZES: All defined in tokens.json
 * - small: 32px height
 * - medium: 40px height (default)
 * - large: 48px height
 */

import { ButtonHTMLAttributes, forwardRef } from "react";

// Define the props interface for the Button component
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "outline" | "destructive";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

/**
 * Button Component
 * 
 * @param variant - Button style variant (default: "primary")
 * @param size - Button size (default: "medium")
 * @param disabled - Whether button is disabled
 * @param className - Additional CSS classes to apply
 * @param children - Button content (text, icons, etc.)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      variant = "primary", 
      size = "medium", 
      disabled = false, 
      className = "", 
      children, 
      ...props 
    },
    ref
  ) => {
    // BASE STYLES - Applied to all buttons
    // Uses tokens: radius.button (12px), font.size.sm (14px)
    const baseStyles = `
      inline-flex items-center justify-center
      font-mono text-sm
      rounded-button
      transition-colors duration-200
      cursor-pointer
      disabled:cursor-not-allowed disabled:opacity-50
    `;

    // SIZE STYLES - All values from tokens.json
    // Small: 32px height, 16px horizontal padding
    // Medium: 40px height, 20px horizontal padding
    // Large: 48px height, 24px horizontal padding
    const sizeStyles = {
      small: "h-8 px-4 py-1.5",    // h-8 = 32px, px-4 = 16px
      medium: "h-10 px-5 py-2.5",  // h-10 = 40px, px-5 = 20px
      large: "h-12 px-6 py-3.5",   // h-12 = 48px, px-6 = 24px
    };

    // VARIANT STYLES - Color combinations for each variant
    // ✓ = Has tokens in tokens.json
    // ⚠️ = Assumption made, needs token definition
    const variantStyles = {
      // ✓ PRIMARY - Has full token support
      // Light: amber-400 bg → amber-500 hover | black text (same as dark)
      // Dark: amber-400 bg → amber-500 hover | black text
      primary: `
        bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-black
        dark:bg-amber-400 dark:hover:bg-amber-500 dark:active:bg-amber-600 dark:text-black
        focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-400 focus:ring-offset-2
      `,

      // ✓ SECONDARY - Has full token support
      // Light: sepia-700 bg → sepia-600 hover | sepia-50 text (same as dark)
      // Dark: sepia-700 bg → sepia-600 hover | sepia-50 text
      secondary: `
        bg-sepia-700 hover:bg-sepia-600 active:bg-sepia-500 text-sepia-50
        dark:bg-sepia-700 dark:hover:bg-sepia-600 dark:active:bg-sepia-500 dark:text-sepia-50
        focus:ring-2 focus:ring-sepia-700 dark:focus:ring-sepia-700 focus:ring-offset-2
      `,

      // ⚠️ GHOST - ASSUMPTION: Transparent with subtle hover
      // Uses sepia colors for hover states
      ghost: `
        bg-transparent hover:bg-sepia-100 active:bg-sepia-200 text-sepia-900
        dark:hover:bg-sepia-800 dark:active:bg-sepia-700 dark:text-sepia-50
        focus:ring-2 focus:ring-sepia-300 dark:focus:ring-sepia-700 focus:ring-offset-2
      `,

      // ⚠️ LINK - ASSUMPTION: Text-only button that looks like a link
      // Uses primary colors, underline on hover
      link: `
        bg-transparent hover:underline text-amber-600 hover:text-amber-700
        dark:text-amber-400 dark:hover:text-amber-300
        focus:ring-2 focus:ring-amber-600 dark:focus:ring-amber-400 focus:ring-offset-2
      `,

      // ⚠️ OUTLINE - ASSUMPTION: Transparent with border
      // Uses sepia colors for border and text
      outline: `
        bg-transparent border-2 border-sepia-300 hover:border-sepia-400 hover:bg-sepia-50
        active:bg-sepia-100 text-sepia-900
        dark:border-sepia-700 dark:hover:border-sepia-600 dark:hover:bg-sepia-900
        dark:active:bg-sepia-800 dark:text-sepia-50
        focus:ring-2 focus:ring-sepia-300 dark:focus:ring-sepia-700 focus:ring-offset-2
      `,

      // ⚠️ DESTRUCTIVE - ASSUMPTION: Red/error colored for dangerous actions
      // Uses red color scale for destructive actions
      destructive: `
        bg-red-600 hover:bg-red-700 active:bg-red-800 text-white
        dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700
        focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2
      `,
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// Set display name for debugging
Button.displayName = "Button";

