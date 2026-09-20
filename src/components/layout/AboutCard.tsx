/**
 * ABOUT CARD COMPONENT
 *
 * Collapsible card that sits at the bottom of the sidebar
 * - Collapsed: Shows 32x32 avatar, "Built by Sacha Hurley", and up chevron
 * - Expanded: Shows full about content
 * - Smooth sliding animation with chevron rotation
 * - Docked flush to the sidebar bottom, wrapped in the large plate ring
 *   (plate-round-lg-top: stepped top corners, square bottom)
 */

import { useState } from "react";
import { ASSETS } from "@/lib/assets";

export function AboutCard() {
  // State to track if the card is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Container flush to bottom with 12px left/right insets only
    <div className="px-3">
      {/*
        LARGE PLATE RING (docked variant) - outer layer draws the stroke,
        inner layer draws the card fill. plate-round-lg-top keeps the bottom
        edge square so the card stays flush against the sidebar bottom.
      */}
      {/* No drop shadow: the plate clip would cut it off, and the ring carries the elevation cue (matches Card.tsx) */}
      <div className="plate-round-lg-top pt-px px-px bg-[var(--surface-container-stroke)]">
      <div
        className="
          plate-round-lg-top
          w-full
          bg-[var(--surface-card)]
          overflow-hidden
          cursor-pointer
          transition-all
          duration-300
          ease-in-out
        "
        // Click anywhere on card to toggle
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Collapsed/Peeking Header - Always Visible */}
        <div className="flex items-center gap-3 p-4">
          {/* 32x32 Circular Avatar */}
          <img 
            src={ASSETS.avatar8bit} 
            alt="Sacha Hurley" 
            className="w-8 h-8 rounded-none object-cover flex-shrink-0"
          />
          
          {/* Text: "Built by Sacha Hurley" with personal website link */}
          <span className="flex-1 text-xs font-mono font-normal text-[var(--text-primary)]">
            Built by{' '}
            <a
              href="https://sacha.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline focus:outline-none focus-visible:[box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-primary)]"
              onClick={(e) => e.stopPropagation()}
            >
              Sacha Hurley
            </a>
          </span>

          {/* Chevron Icon - Rotates based on expanded state */}
          <svg
            className={`
              w-4 h-4
              text-secondary-700
              dark:text-secondary-600
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
          {/* Content wrapper with top seam and padding */}
          {/* Internal seam inside a plated panel stays a flat hairline */}
          <div className="px-4 pb-4 pt-3 border-t border-[var(--border-hairline)]">
            {/* About Text Content - starts directly with content */}
            <p className="text-xs font-mono font-normal text-secondary-800 dark:text-secondary-500 mb-4 leading-relaxed">
              I created Scorpion UI to learn React, TypeScript, and modern design systems while using as many AI tools as possible to re-invent my design workflow. This is a living design system that demonstrates token-based theming and component architecture.
            </p>
            
            {/* Link to LinkedIn */}
            <p className="text-xs font-mono font-normal text-secondary-800 dark:text-secondary-500">
              <a
                href="https://www.linkedin.com/in/sacha-hurley-2bb75947/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline focus:outline-none focus-visible:[box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-primary)]"
                // Prevent card from toggling when clicking link
                onClick={(e) => e.stopPropagation()}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

