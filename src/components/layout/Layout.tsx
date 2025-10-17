/**
 * LAYOUT COMPONENT
 * 
 * Main layout wrapper with fixed top bar and fixed-width sidebar
 * Applied to all pages including home
 * 
 * Mobile Navigation:
 * - Manages mobile menu state (open/closed)
 * - Passes toggle functions to TopBar and Sidebar
 * - Sidebar slides in from left on mobile screens
 * 
 * Scroll Behavior:
 * - Automatically scrolls to top when navigating between pages
 */

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { MusicPlayer } from "@/components/ui/MusicPlayer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Get current location to detect route changes
  const location = useLocation();
  
  // State to manage mobile menu open/closed
  // false = menu is closed, true = menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to manage music player visibility
  // true = player is visible, false = player is hidden
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(true);

  // SCROLL TO TOP: Run whenever the route/pathname changes
  // This ensures every new page starts at the top
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top immediately and forcefully
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Also try with requestAnimationFrame to catch any late renders
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [location.pathname]); // Runs every time the pathname changes

  // Function to toggle the mobile menu (open ↔ closed)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  // Called when user clicks on a navigation link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to open the music player
  // Called from TopBar button
  const openMusicPlayer = () => {
    setIsMusicPlayerOpen(true);
  };

  // Function to close the music player
  // Called from music player close button
  const closeMusicPlayer = () => {
    setIsMusicPlayerOpen(false);
  };

  return (
    <div className="min-h-screen theme-transition">
      {/* Fixed Top Bar - spans full width */}
      {/* Pass mobile menu state and toggle function to TopBar */}
      <TopBar 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu}
        isMusicPlayerOpen={isMusicPlayerOpen}
        openMusicPlayer={openMusicPlayer}
      />

      <div className="flex">
        {/* Sidebar - fixed width on desktop, slides in on mobile */}
        {/* Pass mobile menu state, close function, and music player controls to Sidebar */}
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
          isMusicPlayerOpen={isMusicPlayerOpen}
          openMusicPlayer={openMusicPlayer}
        />

        {/* Main Content Area - scrolls under top bar */}
        {/* On mobile: remove left margin (ml-64 becomes ml-0) */}
        <main className="flex-1 pt-16 lg:ml-64 border-l-[0.5px] border-solid border-[var(--surface-container-stroke)]">
          <div className="min-h-screen bg-[var(--surface-page)]">
            {children}
          </div>
        </main>
      </div>

      {/* Music Player - Fixed bottom-right corner, visible on all pages */}
      {/* Only rendered when open */}
      {isMusicPlayerOpen && (
        <MusicPlayer onClose={closeMusicPlayer} />
      )}
    </div>
  );
}

