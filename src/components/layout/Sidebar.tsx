/**
 * SIDEBAR NAVIGATION
 *
 * Data-driven nav on the merged DS plate language: every row is a quiet
 * plate (plate-round) that fills with surface.muted and flips its text to
 * the accent on hover, the same recipe as the portfolio's nav rows. The
 * active route holds the filled + accent state (color plus fill, never a
 * weight change). Sections are always visible; the old accordion state and
 * per-link SVG markup are gone in favor of one NAV data structure.
 */

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AboutCard } from "./AboutCard";

interface SidebarProps {
  // Mobile menu open state (sidebar slides in below lg)
  isMobileMenuOpen: boolean;
  // Closes the mobile menu after a nav click
  closeMobileMenu: () => void;
  // Music player controls (mobile block only; desktop lives in TopBar)
  isMusicPlayerOpen: boolean;
  openMusicPlayer: () => void;
  closeMusicPlayer: () => void;
}

/** One nav section: a pixel-icon header plus its page rows. */
interface NavSection {
  label: string;
  /** Path under public/Icons/Dark theme/ for the section's pixel icon. */
  icon: string;
  items: { to: string; label: string }[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    label: "Foundation",
    icon: "3. System folders/Library.png",
    items: [
      { to: "/foundation/base-colors", label: "Base Colors" },
      { to: "/foundation/semantic-colors", label: "Semantic Colors" },
      { to: "/foundation/typography", label: "Typography" },
      { to: "/foundation/spacing", label: "Spacing" },
      { to: "/foundation/surfaces-elevation", label: "Surfaces & Elevation" },
      { to: "/foundation/focus-states", label: "Focus States" },
      { to: "/foundation/animations", label: "Animations" },
      { to: "/foundation/z-index", label: "Z-Index" },
    ],
  },
  {
    label: "Components",
    icon: "3. System folders/Applications.png",
    items: [
      { to: "/components", label: "Overview" },
      { to: "/components/buttons", label: "Buttons" },
      { to: "/components/inputs", label: "Inputs" },
      { to: "/components/dropdowns", label: "Dropdowns" },
      { to: "/components/toggles", label: "Toggles" },
      { to: "/components/textareas", label: "Textareas" },
      { to: "/components/checkboxes", label: "Checkboxes" },
      { to: "/components/radios", label: "Radios" },
      { to: "/components/selects", label: "Selects" },
      { to: "/components/badges", label: "Badges" },
      { to: "/components/dividers", label: "Dividers" },
      { to: "/components/tooltips", label: "Tooltips" },
      { to: "/components/alerts", label: "Alerts" },
      { to: "/components/avatars", label: "Avatars" },
      { to: "/components/list-rows", label: "List Rows" },
      { to: "/components/sliders", label: "Sliders" },
      { to: "/components/tables", label: "Tables" },
      { to: "/components/tabs", label: "Tabs" },
      { to: "/components/toasts", label: "Toasts" },
      { to: "/components/bottom-sheets", label: "Bottom Sheets" },
      { to: "/components/modals", label: "Modals" },
    ],
  },
  {
    label: "Patterns",
    icon: "2. System apps/Mission Control.png",
    items: [
      { to: "/patterns/side-navigation", label: "Side Navigation" },
      { to: "/patterns/forms", label: "Forms" },
      { to: "/patterns/music-player", label: "Music Player" },
      { to: "/patterns/case-study", label: "Case Study" },
    ],
  },
];

/**
 * A single nav row on the plate recipe. Focus uses the inset ring
 * (box-shadow) because the plate clip swallows outside outlines.
 */
function NavRow({
  to,
  active,
  onNavigate,
  children,
}: {
  to: string;
  active: boolean;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`
        flex items-center gap-3 px-3 py-2 plate-round font-mono text-sm
        transition-colors [transition-duration:var(--duration-fast)]
        focus:outline-none focus-visible:[box-shadow:inset_0_0_0_var(--focus-ring-width)_var(--focus-ring-primary)]
        ${
          active
            ? "bg-[var(--surface-muted)] text-[var(--accent)]"
            : "text-secondary-800 dark:text-secondary-500 hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]"
        }
      `}
    >
      {children}
    </Link>
  );
}

export function Sidebar({ isMobileMenuOpen, closeMobileMenu, isMusicPlayerOpen, openMusicPlayer, closeMusicPlayer }: SidebarProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Dark overlay - mobile only, closes the menu on click */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden top-16"
          style={{ zIndex: 'var(--z-index-overlay)' }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar: container surface with a hairline seam against the page */}
      <aside
        className={`
          w-full lg:w-64 bg-[var(--surface-container)] flex flex-col fixed left-0 top-16
          border-r border-solid border-[var(--border-hairline)]
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{ height: 'calc(100vh - 4rem)', zIndex: 'var(--z-index-modal)' }}
      >
        <nav aria-label="Design system" className="flex-1 overflow-y-auto px-6 lg:px-4 py-6 lg:py-4">
          {/* Mobile-only controls: music player + theme toggle */}
          <div className="lg:hidden flex items-center gap-3 pb-4 mb-4 border-b border-[var(--border-hairline)]">
            <Button
              onClick={isMusicPlayerOpen ? closeMusicPlayer : openMusicPlayer}
              variant="outline"
              size="small"
              className={isMusicPlayerOpen ? "bg-secondary-200 dark:bg-secondary-700" : ""}
              aria-label={isMusicPlayerOpen ? "Close music player" : "Open music player"}
            >
              <span className="font-mono" aria-hidden="true">♫</span>
            </Button>
            <ThemeToggle />
          </div>

          {/* Home */}
          <NavRow to="/" active={isActive("/")} onNavigate={closeMobileMenu}>
            <img
              src={`${import.meta.env.BASE_URL}Icons/Dark theme/2. System apps/Home.png`}
              alt=""
              className="w-7 h-7 object-contain"
            />
            <span>Home</span>
          </NavRow>

          {/* Sections: pixel-icon header + plate rows, always visible */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.label}>
              <div className="flex items-center gap-3 px-3 pt-6 pb-2">
                <img
                  src={`${import.meta.env.BASE_URL}Icons/Dark theme/${section.icon}`}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <span className="font-mono text-2xs uppercase tracking-wider text-secondary-700 dark:text-secondary-600">
                  {section.label}
                </span>
              </div>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavRow key={item.to} to={item.to} active={isActive(item.to)} onNavigate={closeMobileMenu}>
                    <span>{item.label}</span>
                  </NavRow>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* About card - fixed at bottom, nav scrolls underneath */}
        <AboutCard />
      </aside>
    </>
  );
}
