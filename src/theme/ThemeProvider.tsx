/**
 * THEME PROVIDER
 * 
 * Manages light/dark theme switching using next-themes
 * This wraps your app and provides theme context to all components
 */

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      /* Dark is the merged system's default (portfolio identity); no system
         preference so the ported ThemeToggle's theme check stays accurate */
      defaultTheme="dark"
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

