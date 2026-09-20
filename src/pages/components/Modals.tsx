/**
 * MODALS DOCUMENTATION PAGE
 *
 * Documentation for the Modal dialog: a centered plate panel on a scrim,
 * with a fixed header, scrollable body, and optional footer CTA band.
 * The component fades in on open and fades out on close (duration.normal),
 * and the docked variant pins bottom-center as a NON-modal dialog on wide
 * viewports so the page behind stays interactive.
 *
 * Structure:
 * 1. Page header (title + description)
 * 2. Live demos: standard modal, footer CTAs, compact width, docked
 * 3. Anatomy and padding
 * 4. Accessibility notes and when to use
 */

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/docs/Panel";

export default function Modals() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [footerOpen, setFooterOpen] = useState(false);
  const [compactOpen, setCompactOpen] = useState(false);
  const [dockedOpen, setDockedOpen] = useState(false);

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Modals</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Blocking dialogs on the large plate silhouette. Fixed header, scrollable
          body, optional footer CTA band; fades in and out in place.
        </p>
      </div>

      {/* LIVE DEMOS SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Live Demos</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Close with the header button, the scrim, or ESC
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => setBasicOpen(true)}>
              Standard modal
            </Button>
            <Button variant="secondary" onClick={() => setFooterOpen(true)}>
              With footer CTAs
            </Button>
            <Button variant="secondary" onClick={() => setCompactOpen(true)}>
              Compact (320px)
            </Button>
            <Button variant="secondary" onClick={() => setDockedOpen(true)}>
              Docked (non-modal)
            </Button>
          </div>

          <Modal
            isOpen={basicOpen}
            onClose={() => setBasicOpen(false)}
            title="Standard modal"
          >
            <p className="text-sm font-mono text-[var(--text-primary)]">
              The panel is a large plate (ring recipe: stroke layer clipped to the
              plate, card fill clipped 1px inset). The body scrolls when content
              exceeds the max height; header and footer stay fixed.
            </p>
          </Modal>

          <Modal
            isOpen={footerOpen}
            onClose={() => setFooterOpen(false)}
            title="Confirm dig site"
            footerContent={
              <>
                <Button variant="secondary" onClick={() => setFooterOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setFooterOpen(false)}>
                  Start digging
                </Button>
              </>
            }
          >
            <p className="text-sm font-mono text-[var(--text-primary)]">
              The footer is a fixed CTA band separated by a hairline; actions
              align right, secondary before primary.
            </p>
          </Modal>

          <Modal
            isOpen={compactOpen}
            onClose={() => setCompactOpen(false)}
            title="Level up!"
            width={320}
          >
            <p className="text-sm font-mono text-[var(--text-primary)]">
              Small celebratory dialogs pass width (default is 740).
            </p>
          </Modal>

          <Modal
            isOpen={dockedOpen}
            onClose={() => setDockedOpen(false)}
            title="Docked dialog"
            width={480}
            docked
          >
            <p className="text-sm font-mono text-[var(--text-primary)]">
              On viewports 960px and wider this pins bottom-center with no scrim
              and no scroll lock, so the page behind stays interactive. Below
              960px it falls back to the standard centered modal automatically.
            </p>
          </Modal>
        </Panel>
      </section>

      {/* ANATOMY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">Anatomy</h3>
            <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
              Three sections sharing one inset
            </p>
          </div>
          <ul className="space-y-2">
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              <span className="text-[var(--text-primary)]">Header</span> - title +
              plate close button; 24px horizontal, 20px vertical padding (px-6 py-5)
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              <span className="text-[var(--text-primary)]">Body</span> - scrollable,
              keyboard-focusable region; same px-6 py-5 inset
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              <span className="text-[var(--text-primary)]">Footer</span> - optional
              CTA band via footerContent; same inset, actions right-aligned with 12px gap
            </li>
          </ul>
        </Panel>
      </section>

      {/* ACCESSIBILITY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[var(--text-primary)] mb-1">
              Accessibility & Usage
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • Focus moves into the dialog on open and returns to the invoker on close
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • ESC closes; the scrim click closes; body scroll locks while open (centered mode)
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • Docked mode drops aria-modal and scroll lock on purpose: it is a
              non-modal dialog acting on the visible page
            </li>
            <li className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              • Use Modal for anything the user must read or decide before continuing;
              transient feedback belongs in a Toast, dismissable context in a BottomSheet
            </li>
          </ul>
        </Panel>
      </section>
    </div>
  );
}
