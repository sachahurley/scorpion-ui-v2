/**
 * MUSIC PLAYER PATTERN PAGE
 *
 * Documents the floating now-playing pattern (DS: Patterns/MusicPlayer).
 * This site's player is a deliberate fork of the DS pattern: identical
 * presentational shell (card, collapsed bar, marquee, plate recipes), but
 * a real <audio> engine instead of the DS story's simulated playback -
 * the vendor pipeline lists it as a known fork for exactly that reason.
 *
 * The page mounts its own player instance (same wiring as Layout: the
 * close handler plays the slide-out, then unmounts after the animation).
 *
 * Structure:
 * 1. Page header (title + description)
 * 2. Live demo: open/close the real player from this page
 * 3. Composition: what the pattern is built from
 * 4. States and behaviors
 */

import { useRef, useState } from "react";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/docs/Panel";

// Matches the player's slide-out transition (0.5s) before unmounting
const CLOSE_ANIMATION_MS = 500;

export default function MusicPlayerPattern() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPlayer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsClosing(false);
    setIsOpen(true);
  };

  const closePlayer = () => {
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);
  };

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Music Player</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          The floating now-playing pattern: an expanded card and a collapsed bar
          on the plate recipe, with a real audio engine behind the DS shell.
        </p>
      </div>

      {/* LIVE DEMO SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Live Demo</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              The same player the top-bar note button opens, mounted by this page.
              Drag it by the grip on wide viewports; collapse it with the chevron.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={openPlayer} disabled={isOpen && !isClosing}>
              Open player
            </Button>
            <Button variant="secondary" onClick={closePlayer} disabled={!isOpen || isClosing}>
              Close player
            </Button>
          </div>
          {isOpen && <MusicPlayer onClose={closePlayer} isClosing={isClosing} />}
        </Panel>
      </section>

      {/* COMPOSITION SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Composition</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Everything on the plate recipe; no new primitives
            </p>
          </div>
          <ul className="space-y-2">
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              <span className="text-[var(--text-primary)]">Card / bar plates</span> - plate-round-lg
              and plate-round rings (stroke layer + fill layer) with a hoisted drop shadow
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              <span className="text-[var(--text-primary)]">Timeline</span> - native range input
              styled on the tokens, two-stop progress gradient, square thumb nub
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              <span className="text-[var(--text-primary)]">Marquee title</span> - 30px/s alternate
              scroll, 10% end holds, only when the title overflows; disabled under reduced motion
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              <span className="text-[var(--text-primary)]">Transport</span> - 40px plate toggles
              (shuffle/repeat show the pressed state), 32px chevron and close
            </li>
          </ul>
        </Panel>
      </section>

      {/* STATES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">States & Behavior</h3>
          </div>
          <ul className="space-y-2">
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • Expanded card and collapsed bar share one state; the chevron toggles between them
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • Mounts with a slide-in from the bottom edge and slides out on close - the page
              unmounts it only after the transition finishes
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • Mouse-drag repositioning on viewports 1024px and wider, clamped to the viewport;
              mobile pins bottom-left
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • Track changes are announced politely to screen readers; seeking is the native
              range input's arrow-key behavior
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • This is the site-owned twin of the DS Patterns/MusicPlayer story: presentational
              shell identical, playback engine real - registered as a known fork in vendor-ds.sh
            </li>
          </ul>
        </Panel>
      </section>
    </div>
  );
}
