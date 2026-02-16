/**
 * TAILWIND CONFIG EXAMPLE
 * 
 * Copy this to your project's tailwind.config.js
 * Make sure to update the content paths to match your project structure
 */

module.exports = {
  // IMPORTANT: Use the Scorpion UI preset
  presets: [require('scorpion-ui/tailwind.preset.js')],
  
  // Required for theme switching
  darkMode: ["class"],
  
  // Update these paths to match your project
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include scorpion-ui components in content scanning
    "./node_modules/scorpion-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  // You can extend the theme further if needed
  theme: {
    extend: {
      // Add your own customizations here
      // The preset already includes all Scorpion UI tokens
    },
  },
  
  plugins: [
    // tailwindcss-animate is already included in the preset
    // Add other plugins here if needed
  ],
}
