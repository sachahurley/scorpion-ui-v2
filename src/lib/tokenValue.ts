/**
 * Read a design-token CSS custom property from the live stylesheet.
 *
 * The token documentation pages print token values next to their swatches.
 * Hand-transcribing those values is how the site ended up teaching duration
 * and palette numbers the design system had long since changed - so pages
 * resolve them from the vendored tokens.css at render time instead.
 * tokens.css is imported before the app tree, so the values are always
 * available by the time a page renders.
 */
export function tokenValue(name: string, fallback = ""): string {
  if (typeof window === "undefined") return fallback;
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() ||
    fallback
  );
}

/** tokenValue, normalized to an UPPERCASE hex string for color labels. */
export function tokenHex(name: string): string {
  return tokenValue(name).toUpperCase();
}

/**
 * tokenValue for duration tokens, normalized to milliseconds.
 * Computed custom properties can come back in seconds (".12s"), which is
 * correct but unreadable as documentation - always print "120ms".
 */
export function tokenMs(name: string, fallback = "0ms"): string {
  const raw = tokenValue(name);
  if (!raw) return fallback;
  const n = parseFloat(raw);
  if (Number.isNaN(n)) return raw;
  const ms = /ms\s*$/.test(raw) ? n : n * 1000;
  return `${Math.round(ms)}ms`;
}
