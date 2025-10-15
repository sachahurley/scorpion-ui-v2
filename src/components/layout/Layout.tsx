/**
 * LAYOUT COMPONENT
 * 
 * Main layout wrapper with fixed top bar and fixed-width sidebar
 * Applied to all pages including home
 */

import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen theme-transition">
      {/* Fixed Top Bar - spans full width */}
      <TopBar />

      <div className="flex">
        {/* Sidebar - fixed width, below top bar */}
        <Sidebar />

        {/* Main Content Area - scrolls under top bar */}
        <main className="flex-1 pt-16 ml-64 border-l border-[var(--surface-container-stroke)]">
          <div className="min-h-screen bg-[var(--surface-page)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

