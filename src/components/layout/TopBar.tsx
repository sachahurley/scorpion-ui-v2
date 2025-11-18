/**
 * TOP BAR COMPONENT
 * 
 * Fixed top bar that spans full width
 * Contains Scorpion logo, branding, and theme toggle
 * Clicking the logo/text takes you back to home page
 * Theme toggle is positioned in the top right corner
 * 
 * Mobile Navigation:
 * - Shows hamburger/X menu button on mobile (hidden on desktop)
 * - Button positioned to left of Scorpion UI branding
 * - Hamburger (☰) when closed, X when open
 */

import { Link } from "react-router-dom";
import { Music2 } from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

interface TopBarProps {
  // Indicates if mobile menu is currently open
  isMobileMenuOpen: boolean;
  // Function to toggle the mobile menu open/closed
  toggleMobileMenu: () => void;
  // Indicates if music player is currently open/visible
  isMusicPlayerOpen: boolean;
  // Function to open the music player
  openMusicPlayer: () => void;
  // Function to close the music player
  closeMusicPlayer: () => void;
}

export function TopBar({ isMobileMenuOpen, toggleMobileMenu, isMusicPlayerOpen, openMusicPlayer, closeMusicPlayer }: TopBarProps) {
  return (
    <header 
      className="fixed top-0 left-0 right-0 h-16 bg-[var(--surface-container)] border-b-[0.5px] border-solid border-[var(--surface-container-stroke)]"
      style={{ zIndex: 'var(--z-index-sticky)' }}
    >
      {/* Flex container: mobile menu button + branding on left, theme toggle on right */}
      <div className="h-full pl-4 lg:pl-7 pr-6 flex items-center justify-between gap-3">
        {/* Left side: Mobile menu button + Clickable Scorpion UI branding */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button - Only visible on mobile (hidden on lg+ screens) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-sepia-600 hover:text-sepia-50 rounded-button transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Show X icon when menu is open, hamburger icon when closed */}
            {isMobileMenuOpen ? (
              // X icon (close)
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon (menu)
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Clickable Scorpion UI branding - links to home */}
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
        </div>

        {/* Right side: Music player toggle + Theme toggle */}
        {/* Hidden on mobile (below lg breakpoint), visible on desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Music Player Toggle Button - Opens music player when clicked */}
          {/* Disabled when music player is already open */}
          <Button
            onClick={isMusicPlayerOpen ? closeMusicPlayer : openMusicPlayer}
            variant="outline"
            size="small"
            className={isMusicPlayerOpen ? "bg-secondary-200 dark:bg-secondary-700" : ""}
            aria-label={isMusicPlayerOpen ? "Close music player" : "Open music player"}
          >
            <Music2 />
          </Button>

          {/* Theme toggle button */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

