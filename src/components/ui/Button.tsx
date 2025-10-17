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

import { forwardRef, type ButtonHTMLAttributes } from "react";

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

    // VARIANT STYLES - Color combinations for each variant using SEMANTIC TOKENS
    // ✓ = Has tokens in tokens.json
    // ⚠️ = Assumption made, needs token definition
    const variantStyles = {
      // ✓ PRIMARY - Uses semantic primary tokens (resolves to amber)
      // Light: primary-400 bg → primary-500 hover | black text (same as dark)
      // Dark: primary-400 bg → primary-500 hover | black text
      // Focus: 2px ring with 2px offset (matches page background: sepia-50 light / sepia-1000 dark)
      primary: `
        bg-primary-400 hover:bg-primary-500 active:bg-primary-600 text-black
        dark:bg-primary-400 dark:hover:bg-primary-500 dark:active:bg-primary-600 dark:text-black
        focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-sepia-50 dark:focus:ring-offset-sepia-1000
      `,

      // ✓ SECONDARY - Uses semantic secondary tokens (resolves to sepia)
      // Light: secondary-700 bg → secondary-600 hover | secondary-50 text (same as dark)
      // Dark: secondary-700 bg → secondary-600 hover | secondary-50 text
      // Focus: 2px ring with 2px offset (matches page background: sepia-50 light / sepia-1000 dark)
      secondary: `
        bg-secondary-700 hover:bg-secondary-600 active:bg-secondary-500 text-secondary-50
        dark:bg-secondary-700 dark:hover:bg-secondary-600 dark:active:bg-secondary-500 dark:text-secondary-50
        focus:ring-2 focus:ring-secondary-700 dark:focus:ring-secondary-700 focus:ring-offset-2 focus:ring-offset-sepia-50 dark:focus:ring-offset-sepia-1000
      `,

      // ⚠️ GHOST - Uses neutral secondary tokens for subtle UI
      // Uses secondary (sepia) colors for hover states - no strong semantic meaning
      // Focus: 2px ring with 2px offset (matches page background: sepia-50 light / sepia-1000 dark)
      ghost: `
        bg-transparent hover:bg-secondary-200 active:bg-secondary-300 text-secondary-900
        dark:hover:bg-secondary-700 dark:active:bg-secondary-600 dark:text-secondary-50
        focus:ring-2 focus:ring-secondary-300 dark:focus:ring-secondary-700 focus:ring-offset-2 focus:ring-offset-sepia-50 dark:focus:ring-offset-sepia-1000
      `,

      // ⚠️ LINK - Uses semantic primary tokens for link color
      // Links should use primary brand color
      // Focus: 2px ring with 2px offset (matches page background: sepia-50 light / sepia-1000 dark)
      link: `
        bg-transparent hover:underline text-primary-600 hover:text-primary-700
        dark:text-primary-400 dark:hover:text-primary-300
        focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-sepia-50 dark:focus:ring-offset-sepia-1000
      `,

      // ⚠️ OUTLINE - Uses neutral secondary tokens for borders
      // Uses secondary (sepia) colors for border and text - neutral appearance
      // Focus: 2px ring with 2px offset (matches page background: sepia-50 light / sepia-1000 dark)
      outline: `
        bg-transparent border border-secondary-300 hover:border-secondary-400 hover:bg-secondary-50
        active:bg-secondary-100 text-secondary-900
        dark:border-secondary-700 dark:hover:border-secondary-600 dark:hover:bg-secondary-900
        dark:active:bg-secondary-800 dark:text-secondary-50
        focus:ring-2 focus:ring-secondary-300 dark:focus:ring-secondary-700 focus:ring-offset-2 focus:ring-offset-sepia-50 dark:focus:ring-offset-sepia-1000
      `,

      // ⚠️ DESTRUCTIVE - Uses semantic error tokens (resolves to red)
      // Error tokens for dangerous/destructive actions
      // Focus: 2px ring with 2px offset (matches page background: sepia-50 light / sepia-1000 dark)
      destructive: `
        bg-error-600 hover:bg-error-700 active:bg-error-800 text-white
        dark:bg-error-500 dark:hover:bg-error-600 dark:active:bg-error-700
        focus:ring-2 focus:ring-error-600 dark:focus:ring-error-500 focus:ring-offset-2 focus:ring-offset-sepia-50 dark:focus:ring-offset-sepia-1000
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

