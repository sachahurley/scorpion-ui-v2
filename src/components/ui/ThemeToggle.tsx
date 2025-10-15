/**
 * THEME TOGGLE COMPONENT
 * 
 * A sliding toggle switch to switch between light and dark themes
 * Uses design tokens for consistent styling across modes
 */

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="w-12 h-6 rounded-full bg-sepia-300 dark:bg-sepia-700" />
        <span className="text-sm font-mono text-sepia-600 dark:text-sepia-400">Theme</span>
      </div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3 px-3 py-2">
      {/* Toggle Switch */}
      <button
        onClick={toggleTheme}
        className="relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900"
        style={{
          backgroundColor: isDark ? '#F59E0B' : '#D6D3D1', // primary-500 (amber-500) : secondary-300 (sepia-300)
        }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        role="switch"
        aria-checked={isDark}
      >
        {/* Sliding Knob */}
        <span
          className="inline-flex items-center justify-center h-5 w-5 transform transition-transform duration-300 bg-white dark:bg-secondary-900 rounded-full shadow-sm"
          style={{
            transform: isDark ? 'translateX(26px)' : 'translateX(2px)',
          }}
        >
          {/* Icon inside knob */}
          {isDark ? (
            <Moon className="w-3 h-3 text-primary-500" />
          ) : (
            <Sun className="w-3 h-3 text-secondary-700" />
          )}
        </span>
      </button>

      {/* Label Text */}
      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </div>
  );
}

