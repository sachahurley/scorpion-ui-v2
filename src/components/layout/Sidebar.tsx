/**
 * SIDEBAR NAVIGATION COMPONENT
 * 
 * Fixed-width sidebar navigation with nested sections
 * Contains navigation links for Foundation and Components sections
 * 
 * Mobile Behavior:
 * - Hidden off-screen by default on mobile (translated left)
 * - Slides in from left when mobile menu is open
 * - Shows dark overlay/backdrop behind sidebar on mobile
 * - Clicking overlay or any nav link closes the menu
 * - On desktop (lg+): always visible, no overlay
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Music2 } from "lucide-react";
import { AboutCard } from "./AboutCard";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

interface SidebarProps {
  // Indicates if mobile menu is currently open
  isMobileMenuOpen: boolean;
  // Function to close the mobile menu
  closeMobileMenu: () => void;
  // Indicates if music player is currently open/visible
  isMusicPlayerOpen: boolean;
  // Function to open the music player
  openMusicPlayer: () => void;
  // Function to close the music player
  closeMusicPlayer: () => void;
}

export function Sidebar({ isMobileMenuOpen, closeMobileMenu, isMusicPlayerOpen, openMusicPlayer, closeMusicPlayer }: SidebarProps) {
  const location = useLocation();
  // All navigation sections start collapsed by default on page load
  const [isFoundationExpanded, setIsFoundationExpanded] = useState(false);
  const [isComponentsExpanded, setIsComponentsExpanded] = useState(false);
  const [isPatternsExpanded, setIsPatternsExpanded] = useState(false);

  // Helper to check if route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Dark Overlay - Only visible on mobile when menu is open */}
      {/* Clicking overlay closes the menu */}
      {/* Uses z-index token for overlay layer (1030) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden top-16"
          style={{ zIndex: 'var(--z-index-overlay)' }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      {/* Uses z-index token for modal layer since it appears above overlay on mobile */}
      <aside
        className={`
          w-full lg:w-64 h-screen bg-[var(--surface-container)] flex flex-col fixed left-0 top-16
          transition-transform duration-300 ease-in-out
          ${
            // On mobile: slide in from left when open, hide off-screen when closed
            // On desktop (lg+): always visible (translate-x-0)
            isMobileMenuOpen 
              ? 'translate-x-0' 
              : '-translate-x-full lg:translate-x-0'
          }
        `}
        style={{ height: 'calc(100vh - 4rem)', zIndex: 'var(--z-index-modal)' }}
      >
      {/* Navigation Links - More padding on mobile for full-width, standard padding on desktop */}
      <nav className="flex-1 overflow-y-auto px-6 lg:px-4 py-6 lg:py-4">
        <div className="space-y-2">
          {/* Mobile-Only Controls: Music Player + Theme Toggle */}
          {/* Only visible on mobile screens (below lg breakpoint) */}
          <div className="lg:hidden flex items-center gap-2 pb-4 mb-4 border-b border-sepia-600">
            {/* Music Player Toggle Button - Opens music player when clicked */}
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

          {/* Home Link with Icon - Uses secondary button styling */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`
              flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
              transition-colors
              ${
                isActive("/")
                  ? "bg-sepia-700 text-sepia-50 font-bold"
                  : "hover:bg-sepia-600 hover:text-sepia-50"
              }
            `}
          >
            <img 
              src={`${import.meta.env.BASE_URL}Icons/Dark theme/2. System apps/Home.png`}
              alt="Home" 
              className="w-7 h-7 object-contain"
            />
            <span>Home Page</span>
          </Link>

          {/* Foundation Section with Icon - Uses secondary button hover styling */}
          <div>
            <button
              onClick={() => setIsFoundationExpanded(!isFoundationExpanded)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-button hover:bg-sepia-600 hover:text-sepia-50 transition-colors font-mono text-sm"
            >
              <img 
                src={`${import.meta.env.BASE_URL}Icons/Dark theme/3. System folders/Library.png`}
                alt="Foundation" 
                className="w-7 h-7 object-contain"
              />
              <span className="flex-1 text-left">Foundation</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isFoundationExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Foundation Sub-links with Icons - Uses secondary button styling */}
            {isFoundationExpanded && (
              <div className="mt-1 space-y-1">
                <Link
                  to="/foundation/base-colors"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/base-colors")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Base Colors</span>
                </Link>
                <Link
                  to="/foundation/semantic-colors"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/semantic-colors")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Semantic Colors</span>
                </Link>
                <Link
                  to="/foundation/typography"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/typography")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Typography</span>
                </Link>
                <Link
                  to="/foundation/border-radius"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/border-radius")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Border Radius</span>
                </Link>
                <Link
                  to="/foundation/spacing"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/spacing")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Spacing</span>
                </Link>
                <Link
                  to="/foundation/surfaces-elevation"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/surfaces-elevation")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Surfaces & Elevation</span>
                </Link>
                <Link
                  to="/foundation/focus-states"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/focus-states")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Focus States</span>
                </Link>
                <Link
                  to="/foundation/animations"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/animations")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Animations</span>
                </Link>
                <Link
                  to="/foundation/z-index"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/foundation/z-index")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Z-Index</span>
                </Link>
              </div>
            )}
          </div>

          {/* Components Section with Icon - Uses secondary button hover styling */}
          <div>
            <button
              onClick={() => setIsComponentsExpanded(!isComponentsExpanded)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-button hover:bg-sepia-600 hover:text-sepia-50 transition-colors font-mono text-sm"
            >
              <img 
                src={`${import.meta.env.BASE_URL}Icons/Dark theme/3. System folders/Applications.png`}
                alt="Components" 
                className="w-7 h-7 object-contain"
              />
              <span className="flex-1 text-left">Components</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isComponentsExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Components Sub-links with Icons - Uses secondary button styling */}
            {isComponentsExpanded && (
              <div className="mt-1 space-y-1">
                <Link
                  to="/components/buttons"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/buttons")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Buttons</span>
                </Link>
                <Link
                  to="/components/inputs"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/inputs")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Inputs</span>
                </Link>
                <Link
                  to="/components/dropdowns"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/dropdowns")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Dropdowns</span>
                </Link>
                <Link
                  to="/components/toggles"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/toggles")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Toggles</span>
                </Link>
                <Link
                  to="/components/textareas"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/textareas")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Textareas</span>
                </Link>
                <Link
                  to="/components/checkboxes"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/checkboxes")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Checkboxes</span>
                </Link>
                <Link
                  to="/components/radios"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/radios")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Radios</span>
                </Link>
                <Link
                  to="/components/selects"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/selects")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Selects</span>
                </Link>
                <Link
                  to="/components/badges"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/badges")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Badges</span>
                </Link>
                <Link
                  to="/components/dividers"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/dividers")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Dividers</span>
                </Link>
                <Link
                  to="/components/tooltips"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/tooltips")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Tooltips</span>
                </Link>
                <Link
                  to="/components/alerts"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/alerts")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Alerts</span>
                </Link>
                <Link
                  to="/components/avatars"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/components/avatars")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Avatars</span>
                </Link>
              </div>
            )}
          </div>

          {/* Patterns Section with Icon - Uses secondary button hover styling */}
          <div>
            <button
              onClick={() => setIsPatternsExpanded(!isPatternsExpanded)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-button hover:bg-sepia-600 hover:text-sepia-50 transition-colors font-mono text-sm"
            >
              <img 
                src={`${import.meta.env.BASE_URL}Icons/Dark theme/2. System apps/Mission Control.png`}
                alt="Patterns" 
                className="w-7 h-7 object-contain"
              />
              <span className="flex-1 text-left">Patterns</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isPatternsExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Patterns Sub-links with Icons - Uses secondary button styling */}
            {isPatternsExpanded && (
              <div className="mt-1 space-y-1">
                <Link
                  to="/patterns/side-navigation"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/patterns/side-navigation")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Side Navigation</span>
                </Link>
                <Link
                  to="/patterns/cards"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/patterns/cards")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Cards</span>
                </Link>
                <Link
                  to="/patterns/forms"
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-button font-mono text-sm
                    transition-colors
                    ${
                      isActive("/patterns/forms")
                        ? "bg-sepia-700 text-sepia-50 font-bold"
                        : "hover:bg-sepia-600 hover:text-sepia-50"
                    }
                  `}
                >
                  {/* L-shaped arrow SVG for sub-page navigation */}
                  <svg 
                    className="w-7 h-7" 
                    viewBox="0 0 28 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M8 8 L8 16 L20 16 M16 12 L20 16 L16 20" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Forms</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* About Card - Fixed at bottom, nav scrolls underneath */}
      <AboutCard />
    </aside>
    </>
  );
}

