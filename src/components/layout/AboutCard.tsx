/**
 * ABOUT CARD COMPONENT
 * 
 * Collapsible card that sits at the bottom of the sidebar
 * - Collapsed: Shows 32x32 avatar, "Built by Sacha Hurley", and up chevron
 * - Expanded: Shows full about content
 * - Smooth sliding animation with chevron rotation
 * - 8px insets from sidebar edges with drop shadow for elevation
 */

import { useState } from "react";
import { ASSETS } from "@/lib/assets";

export function AboutCard() {
  // State to track if the card is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Container flush to bottom with 12px left/right insets only
    <div className="px-3">
      {/* Card with rounded TOP corners only, drop shadow, and overflow hidden for animation */}
      <div 
        className="
          bg-[var(--surface-card)] 
          rounded-t-[16px]
          overflow-hidden
          cursor-pointer
          transition-all
          duration-300
          ease-in-out
          border-[0.5px]
          border-solid
          border-sepia-500
          dark:border-sepia-800
        "
        // Using elevation.1 tokens for shadow
        // Border now matches page cards (sepia-500 light / sepia-800 dark)
        style={{
          boxShadow: 'var(--elevation-1-shadow)',
          borderBottom: 'none'
        }}
        // Click anywhere on card to toggle
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Collapsed/Peeking Header - Always Visible */}
        <div className="flex items-center gap-3 p-4">
          {/* 32x32 Circular Avatar */}
          <img 
            src={ASSETS.avatar8bit} 
            alt="Sacha Hurley" 
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
          
          {/* Text: "Built by Sacha Hurley" with LinkedIn link */}
          <span className="flex-1 text-xs font-mono text-sepia-900 dark:text-sepia-50">
            Built by{' '}
            <a 
              href="https://www.linkedin.com/in/sacha-hurley-2bb75947/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Sacha Hurley
            </a>
          </span>
          
          {/* Chevron Icon - Rotates based on expanded state */}
          <svg
            className={`
              w-4 h-4 
              text-sepia-600 
              dark:text-sepia-400
              transition-transform 
              duration-300 
              flex-shrink-0
              ${isExpanded ? 'rotate-180' : 'rotate-0'}
            `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Up chevron (points up when collapsed, down when expanded) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>

        {/* Expanded Content - Slides in from below */}
        <div 
          className={`
            transition-all 
            duration-300 
            ease-in-out
            ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {/* Content wrapper with top border and padding */}
          {/* Using elevation-1-border to match the card's outer border for visual consistency */}
          <div 
            className="px-4 pb-4 pt-3"
            style={{
              borderTop: '0.5px solid var(--elevation-1-border)'
            }}
          >
            {/* About Text Content - starts directly with content */}
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              I created Scorpion UI to learn React, TypeScript, and modern design systems while using as many AI tools as possible to re-invent my design workflow. This is a living design system that demonstrates token-based theming and component architecture.
            </p>
            
            {/* Link to website */}
            <p className="text-xs font-mono text-sepia-600 dark:text-sepia-400">
              Visit{' '}
              <a 
                href="https://sacha.cool" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
                // Prevent card from toggling when clicking link
                onClick={(e) => e.stopPropagation()}
              >
                sacha.cool
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

