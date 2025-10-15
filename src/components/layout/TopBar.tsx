/**
 * TOP BAR COMPONENT
 * 
 * Fixed top bar that spans full width
 * Contains Scorpion logo, branding, and theme toggle
 * Clicking the logo/text takes you back to home page
 * Theme toggle is positioned in the top right corner
 */

import { Link } from "react-router-dom";
import { ASSETS } from "@/lib/assets";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[var(--surface-container)] border-b border-[var(--surface-container-stroke)]">
      {/* Flex container: branding on left, theme toggle on right */}
      <div className="h-full pl-7 pr-6 flex items-center justify-between gap-3">
        {/* Left side: Clickable Scorpion UI branding - links to home */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          {/* Scorpion Logo - dark in light mode, light in dark mode */}
          <img 
            src={ASSETS.scorpionHeroV2} 
            alt="Scorpion UI" 
            className="w-8 h-8 object-contain dark:invert"
          />
          
          {/* Branding Text */}
          <h1 className="text-lg font-bold font-mono">Scorpion UI</h1>
        </Link>

        {/* Right side: Theme toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}

