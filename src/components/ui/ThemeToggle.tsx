/**
 * THEME TOGGLE COMPONENT
 * 
 * A sliding toggle switch to switch between light and dark themes
 * Uses the Switch component with small size for consistency with the design system
 * Includes Moon/Sun icons inside the knob to indicate current theme
 */

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/Switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-11 h-6 rounded-full bg-sepia-300 dark:bg-sepia-700" />
        <span className="text-sm font-mono text-sepia-600 dark:text-sepia-400">Theme</span>
      </div>
    );
  }

  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-3">
      {/* Small Switch for Theme Toggle - matches small toggle size exactly */}
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        size="small"
        icon={isDark ? <Moon className="w-3 h-3 text-primary-500" /> : <Sun className="w-3 h-3 text-secondary-700" />}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      />

      {/* Label Text */}
      <span className="text-sm font-mono text-sepia-900 dark:text-sepia-50">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </div>
  );
}

