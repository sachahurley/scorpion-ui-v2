/**
 * BOTTOM SHEETS DOCUMENTATION PAGE
 *
 * Documentation for the BottomSheet component: the bottom-anchored panel
 * with the stepped-top large plate silhouette. Covers the interactive
 * open/close demo, anatomy, dismissal behavior, and dialog semantics.
 */

import { useState } from "react";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { Button } from "@/components/ui/Button";
import { ListRow } from "@/components/ui/ListRow";
import { Panel } from "@/components/docs/Panel";

export default function BottomSheets() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Bottom Sheets</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          A bottom-anchored panel for menus and quick actions that dismiss easily. The sheet slides up over a scrim and squares its bottom edge against the viewport. Not for blocking confirmations (use Modal) or persistent navigation.
        </p>
      </div>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Interactive Demo</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              The sheet is controlled: isOpen shows it, onClose is called on scrim click or ESC. This demo also wires a Done button inside the sheet to the same close handler, so every path leads out.
            </p>
          </div>

          <Button variant="primary" size="medium" onClick={() => setIsOpen(true)}>
            Open bottom sheet
          </Button>

          <BottomSheet
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            ariaLabel="Quick actions"
          >
            <div className="flex flex-col gap-1 font-mono">
              <p className="mb-2 text-sm text-secondary-800 dark:text-secondary-500">
                Quick actions
              </p>
              <ListRow title="Share" description="Copy a link to this page" onClick={() => setIsOpen(false)} />
              <ListRow title="Duplicate" description="Make an editable copy" onClick={() => setIsOpen(false)} />
              <ListRow title="Archive" description="Move it out of the active list" onClick={() => setIsOpen(false)} />
              <div className="mt-3 flex justify-end">
                <Button variant="ghost" size="medium" onClick={() => setIsOpen(false)}>
                  Done
                </Button>
              </div>
            </div>
          </BottomSheet>
        </Panel>
      </section>

      {/* ANATOMY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Anatomy</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              A large plate whose top corners step while the bottom edge runs flush with the viewport
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Stepped-top silhouette</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The sheet uses plate-round-lg-top: the large plate's stepped corners on top only, with a square bottom edge against the viewport. Because clip-path slices borders, the ring is built from two layers, a surface.container-stroke layer with 1px top and side padding under a surface.card fill layer clipped to the same shape.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Grabber and scroll region</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                A small grabber bar marks the top seam (decorative, aria-hidden). Content lives in a scrollable region capped at 70vh; the region is focusable (tabIndex 0) so keyboard users can scroll long content.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Motion</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The sheet slides in from the bottom and the scrim fades, both on the slow duration token. It is centered with inset-x-0 plus mx-auto rather than a translate, so the slide animation travels straight up instead of diagonally. On close it stays mounted until animationend, then unmounts, so exit timing always matches the CSS token.
              </p>
            </Panel>
          </div>
        </Panel>
      </section>

      {/* DISMISSAL SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Dismissal</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              The component wires two close paths; your content should add an explicit third
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Built in: scrim click and ESC</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Clicking the scrim calls onClose, and while open a document-level keydown listener calls onClose on Escape, matching Modal behavior. Body scroll is locked while the sheet is open and restored on close or unmount.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Add a visible close action</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The sheet renders no close button of its own, so include one in children that calls the same handler (the Done button in the demo above). Touch users without a keyboard should never depend on finding the scrim.
              </p>
            </Panel>
          </div>
        </Panel>
      </section>

      {/* ACCESSIBILITY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Accessibility</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Dialog semantics and what the component expects from you
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Dialog semantics</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The sheet renders role dialog with aria-modal true, and ariaLabel is a required prop, so the dialog always has an accessible name. The scrim is aria-hidden.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Focus is not trapped</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Unlike a strict modal, the sheet does not move or trap focus. Keep sheet content short and actionable, put an interactive element (like the close button) early in children, and rely on ESC as the universal keyboard exit.
              </p>
            </Panel>
          </div>
        </Panel>
      </section>

      {/* IMPLEMENTATION EXAMPLE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Implementation Example</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Controlled open state with all three close paths wired to one handler
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`const [isOpen, setIsOpen] = useState(false);
const close = () => setIsOpen(false);

<Button variant="primary" onClick={() => setIsOpen(true)}>
  Open bottom sheet
</Button>

<BottomSheet isOpen={isOpen} onClose={close} ariaLabel="Quick actions">
  {/* scrim click and ESC already call onClose; add a visible exit too */}
  <ListRow title="Share" description="Copy a link" onClick={close} />
  <Button variant="ghost" onClick={close}>Done</Button>
</BottomSheet>`}
            </pre>
          </Panel>
        </Panel>
      </section>
    </div>
  );
}
