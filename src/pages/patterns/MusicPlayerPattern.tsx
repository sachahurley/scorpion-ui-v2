/**
 * MUSIC PLAYER DEMO PAGE
 *
 * The floating now-playing pattern (DS: Patterns/MusicPlayer), live.
 * This site's player is a deliberate fork of the DS pattern: identical
 * presentational shell (card, collapsed bar, marquee, plate recipes), but
 * a real <audio> engine instead of the DS story's simulated playback -
 * the vendor pipeline lists it as a known fork for exactly that reason.
 *
 * The page mounts its own player instance (same wiring as Layout: the
 * close handler plays the slide-out, then unmounts after the animation).
 * Composition and state documentation lives in the deployed Storybook.
 */

import { useRef, useState } from "react";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
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
        </Panel>
      </section>

      {/* The player mounts OUTSIDE the Panel: the plate recipe is a
          clip-path, which clips descendant painting, and a fixed-position
          child at viewport coordinates lands outside the clip region and
          disappears entirely. */}
      {isOpen && <MusicPlayer onClose={closePlayer} isClosing={isClosing} />}

      {/* REFERENCE DOCS: composition and state documentation lives in Storybook */}
      <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
        Composition, states, and token usage are documented in the{" "}
        <Link
          href="https://sachahurley.github.io/scorp-ds/?path=/docs/patterns-musicplayer--docs"
          external
        >
          Storybook MusicPlayer pattern story
        </Link>
        .
      </p>
    </div>
  );
}
