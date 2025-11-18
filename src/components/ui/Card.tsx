/**
 * CARD COMPONENT
 * 
 * Reusable card component with header, content, and footer sections
 * Built using design tokens for consistent styling
 * 
 * Features:
 * - Optional header with title and subtitle
 * - Flexible content area
 * - Optional footer for actions
 * - Consistent spacing and styling
 */

import { type ReactNode } from "react";

export interface CardProps {
  // Header content
  title?: string;
  subtitle?: string;
  headerContent?: ReactNode; // Custom header content (overrides title/subtitle)
  
  // Main content
  children: ReactNode;
  
  // Footer content
  footerContent?: ReactNode;
  
  // Styling
  className?: string;
}

/**
 * Card Component
 * 
 * @param title - Card title (shown in header)
 * @param subtitle - Card subtitle/description (shown below title)
 * @param headerContent - Custom header content (overrides title/subtitle if provided)
 * @param children - Main card content
 * @param footerContent - Footer content (buttons, links, etc.)
 * @param className - Additional CSS classes
 */
export function Card({
  title,
  subtitle,
  headerContent,
  children,
  footerContent,
  className = "",
}: CardProps) {
  // Check if className includes flex classes to enable flex layout
  const isFlexLayout = className.includes('flex');
  
  return (
    <div
      className={`
        bg-[var(--surface-card)]
        border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800
        rounded-[24px]
        overflow-visible
        ${isFlexLayout ? 'flex flex-col' : ''}
        ${className}
      `}
    >
      {/* Header Section */}
      {(title || subtitle || headerContent) && (
        <div className="p-4 lg:p-6 border-b-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 overflow-hidden rounded-t-[24px]">
          {headerContent ? (
            headerContent
          ) : (
            <div>
              {title && (
                <h3 className="text-base font-mono font-bold text-sepia-900 dark:text-sepia-50 mb-1">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={`p-4 lg:p-6 ${isFlexLayout ? 'flex-1 flex flex-col min-h-0' : ''}`}>
        {children}
      </div>

      {/* Footer Section */}
      {footerContent && (
        <div className="p-4 lg:p-6 border-t-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 bg-sepia-50 dark:bg-sepia-975 overflow-hidden rounded-b-[24px]">
          {footerContent}
        </div>
      )}
    </div>
  );
}

