/**
 * ASSET PATHS
 * 
 * Centralized references to all static assets in the public folder
 * This makes it easy to use your graphics and icons throughout the app
 * 
 * Uses import.meta.env.BASE_URL to support deployment to subdirectories (like GitHub Pages)
 */

// Helper function to prepend the base URL to asset paths
// This ensures images work both locally and on GitHub Pages
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const ASSETS = {
  // Scorpion graphics
  scorpion1: asset('/scorpion-1.png'),
  scorpion2: asset('/scorpion-2.png'),
  scorpionBlack: asset('/scorpion-black.png'),
  scorpionWhite: asset('/scorpion-white.png'),
  scorpionNeutral: asset('/scorpion-neutral.png'),
  scorpionHero: asset('/scorpion-hero.png'),
  scorpionHeroV2: asset('/scorpion-hero-v2.png'),
  scorpionUIGraphic2: asset('/scorpion-ui-graphic-2.png'),
  scorpionUIGraphic2Transparent: asset('/scorpion-ui-graphic-2-transparent.png'),
  scorpionUIGraphic3b: asset('/scorpion-ui-graphic-3b.png'),
  scorpionFavicon: asset('/scorpion-favicon.svg'),
  
  // Avatar images
  avatar8bit: asset('/avatar_8bit.png'),
  avatarProfile2: asset('/avatar-profile-2.png'),
  
  // Landscape backgrounds
  landscape01: asset('/landscape-01.png'),
  landscape1: asset('/landscape-1.png'),
  landscape2: asset('/landscape-2.png'),
  landscape3: asset('/landscape-3.png'),
  landscape4: asset('/landscape-4.png'),
  landscape5: asset('/landscape-5.png'),
  landscape6: asset('/landscape-6.png'),
  
  // Favicons
  favicon16: asset('/favicon-16x16.png'),
  favicon32: asset('/favicon-32x32.png'),
  faviconIco: asset('/favicon.ico'),
  faviconSvg: asset('/favicon.svg'),
  appleTouchIcon: asset('/apple-touch-icon.png'),
  
  // Homepage feature card icons
  icons: {
    // Design Tokens card
    colorSyncLight: asset('/Icons/Light theme/2. System apps/ColorSync Utility.png'),
    colorSyncDark: asset('/Icons/Dark theme/2. System apps/ColorSync Utility.png'),
    // Components card
    automatorLight: asset('/Icons/Light theme/2. System apps/Automator.png'),
    automatorDark: asset('/Icons/Dark theme/2. System apps/Automator.png'),
    // Theme System card
    systemPrefsLight: asset('/Icons/Light theme/2. System apps/System preferences.png'),
    systemPrefsDark: asset('/Icons/Dark theme/2. System apps/System preferences.png'),
  },
} as const;

/**
 * RETRO ICON PATHS
 * 
 * Helper to get paths to the retro icon sets
 */
export const ICON_PATHS = {
  // Dark theme icons
  darkTheme: {
    userApps: asset('/Icons/Dark theme/1. User apps/'),
    systemApps: asset('/Icons/Dark theme/2. System apps/'),
    systemFolders: asset('/Icons/Dark theme/3. System folders/'),
    extensions: asset('/Icons/Dark theme/4. Extensions/'),
    drives: asset('/Icons/Dark theme/5. Drives/'),
  },
  
  // Light theme icons
  lightTheme: {
    userApps: asset('/Icons/Light theme/1. User apps/'),
    systemApps: asset('/Icons/Light theme/2. System apps/'),
    systemFolders: asset('/Icons/Light theme/3. System folders/'),
    extensions: asset('/Icons/Light theme/4. Extensions/'),
    drives: asset('/Icons/Light theme/5. Drives/'),
  },
} as const;

/**
 * Get an icon path based on the current theme
 * 
 * Example usage:
 * const figmaIcon = getIconPath('userApps', 'Figma.png', 'dark');
 * // Returns: '/Icons/Dark theme/1. User apps/Figma.png'
 */
export function getIconPath(
  category: 'userApps' | 'systemApps' | 'systemFolders' | 'extensions' | 'drives',
  filename: string,
  theme: 'light' | 'dark' = 'dark'
): string {
  const basePath = theme === 'dark' 
    ? ICON_PATHS.darkTheme[category]
    : ICON_PATHS.lightTheme[category];
  
  return `${basePath}${filename}`;
}

