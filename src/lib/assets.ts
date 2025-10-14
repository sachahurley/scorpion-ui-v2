/**
 * ASSET PATHS
 * 
 * Centralized references to all static assets in the public folder
 * This makes it easy to use your graphics and icons throughout the app
 */

export const ASSETS = {
  // Scorpion graphics
  scorpion1: '/scorpion-1.png',
  scorpion2: '/scorpion-2.png',
  scorpionBlack: '/scorpion-black.png',
  scorpionWhite: '/scorpion-white.png',
  scorpionNeutral: '/scorpion-neutral.png',
  scorpionHero: '/scorpion-hero.png',
  scorpionHeroV2: '/scorpion-hero-v2.png',
  scorpionFavicon: '/scorpion-favicon.svg',
  
  // Avatar images
  avatar8bit: '/avatar_8bit.png',
  avatarProfile2: '/avatar-profile-2.png',
  
  // Landscape backgrounds
  landscape01: '/landscape-01.png',
  landscape1: '/landscape-1.png',
  landscape2: '/landscape-2.png',
  landscape3: '/landscape-3.png',
  landscape4: '/landscape-4.png',
  landscape5: '/landscape-5.png',
  landscape6: '/landscape-6.png',
  
  // Favicons
  favicon16: '/favicon-16x16.png',
  favicon32: '/favicon-32x32.png',
  faviconIco: '/favicon.ico',
  faviconSvg: '/favicon.svg',
  appleTouchIcon: '/apple-touch-icon.png',
} as const;

/**
 * RETRO ICON PATHS
 * 
 * Helper to get paths to the retro icon sets
 */
export const ICON_PATHS = {
  // Dark theme icons
  darkTheme: {
    userApps: '/Icons/Dark theme/1. User apps/',
    systemApps: '/Icons/Dark theme/2. System apps/',
    systemFolders: '/Icons/Dark theme/3. System folders/',
    extensions: '/Icons/Dark theme/4. Extensions/',
    drives: '/Icons/Dark theme/5. Drives/',
  },
  
  // Light theme icons
  lightTheme: {
    userApps: '/Icons/Light theme/1. User apps/',
    systemApps: '/Icons/Light theme/2. System apps/',
    systemFolders: '/Icons/Light theme/3. System folders/',
    extensions: '/Icons/Light theme/4. Extensions/',
    drives: '/Icons/Light theme/5. Drives/',
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

