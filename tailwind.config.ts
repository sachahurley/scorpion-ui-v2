import type { Config } from "tailwindcss";
import scorpPreset from "./vendor/scorp-ds/tailwind.preset.cjs";

/**
 * The theme comes entirely from the vendored scorp-ds preset (see vendor/scorp-ds/),
 * which maps Tailwind classes onto the token CSS variables imported in index.css.
 * Radius utilities (rounded-button / rounded-container) are retired with it:
 * the merged design language uses plate clip-path silhouettes (.plate-round,
 * .plate-round-lg) instead of border-radius.
 */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [scorpPreset],
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
