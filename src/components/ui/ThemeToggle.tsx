/**
 * THEME TOGGLE COMPONENT
 * 
 * A simple button to switch between light and dark themes
 * Uses icons from lucide-react to show the current theme state
 */

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        className="p-2 rounded-button border border-secondary-300 dark:border-secondary-700 bg-transparent"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-button border transition-colors",
        "border-secondary-300 dark:border-secondary-700",
        "hover:bg-secondary-100 dark:hover:bg-secondary-800",
        "focus:outline-none focus:ring-2 focus:ring-primary-500"
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-stone-700" />
      )}
    </button>
  );
}

