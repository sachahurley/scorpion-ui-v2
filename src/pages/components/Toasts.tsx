/**
 * TOASTS DOCUMENTATION PAGE
 *
 * Documentation for Toast and Toaster: transient feedback plates that rise
 * from the bottom edge on a stepped transition.
 *
 * The API is deliberately headless about state: the app owns the queue
 * (an array of ToastItem), the Toaster just renders it. This page mounts a
 * live Toaster locally and drives it from Buttons.
 *
 * Structure:
 * 1. Page header (title + description)
 * 2. Live demo: buttons that push toasts into a local queue
 * 3. API breakdown: ToastItem, Toaster, standalone Toast
 * 4. Implementation example (printed code)
 * 5. Accessibility notes and when to use
 */

import { useRef, useState } from "react";
import { Toast, Toaster, type ToastItem } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/docs/Panel";

// How long a demo toast stays on screen before auto-dismissing
const TOAST_LIFETIME_MS = 4000;

export default function Toasts() {
  // The queue lives in page state: Toaster only renders what it is given
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const pushToast = (message: string) => {
    const id = nextId.current++;
    setToasts((prev) => [...prev, { id, message }]);
    // Auto-dismiss after a few seconds; click-to-dismiss also works below
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, TOAST_LIFETIME_MS);
  };

  const dismissToast = (id: ToastItem["id"]) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Toasts</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Transient feedback plates that rise from the bottom edge on a stepped transition: steps(5), not an ease, so the plate hops on the pixel grid. The app owns the queue as an array of ToastItem; the Toaster is a fixed bottom-center region that renders whatever it is given.
        </p>
      </div>

      {/* LIVE DEMO SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Live Demo</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Trigger a few toasts and watch them stack bottom-center, newest closest to the edge. These auto-dismiss after 4 seconds, and clicking a plate dismisses it early via onDismiss.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="medium" onClick={() => pushToast("Changes saved")}>
              Save toast
            </Button>
            <Button variant="secondary" size="medium" onClick={() => pushToast("Link copied to clipboard")}>
              Copy toast
            </Button>
            <Button variant="outline" size="medium" onClick={() => pushToast("3 tokens regenerated")}>
              Build toast
            </Button>
          </div>
        </Panel>
      </section>

      {/* API SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">API</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Two exports plus a type. There is no provider and no imperative toast() function: state stays in the app.
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">ToastItem</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                One queue entry: a stable id (string or number, also passed to dismissal callbacks) and a message (ReactNode, keep it to one short line; long messages truncate with an ellipsis).
              </p>
            </Panel>

            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Toaster</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The fixed bottom-center region. Props: toasts (the queue, oldest first) and optional onDismiss, called with a toast&apos;s id when its plate is clicked. The region is aria-live=&quot;polite&quot;, so screen readers announce new toasts without interrupting.
              </p>
            </Panel>

            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Toast</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                A single plate (role=&quot;status&quot;), exported for custom placements. Usually you render through Toaster instead. A static specimen, without the fixed positioning:
              </p>
              <div className="mt-3 inline-flex">
                <Toast>Changes saved</Toast>
              </div>
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
              The full pattern: a queue in state, a push helper with auto-dismiss, and the Toaster mounted once near the app root.
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`const [toasts, setToasts] = useState<ToastItem[]>([]);
const nextId = useRef(0);

const pushToast = (message: string) => {
  const id = nextId.current++;
  setToasts((prev) => [...prev, { id, message }]);
  window.setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, 4000);
};

<Button onClick={() => pushToast("Changes saved")}>Save</Button>

<Toaster
  toasts={toasts}
  onDismiss={(id) =>
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }
/>`}
            </pre>
          </Panel>
        </Panel>
      </section>

      {/* USAGE AND ACCESSIBILITY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">When to Use</h3>
          </div>
          <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
            Use toasts for low-stakes confirmations the user does not need to act on: saved, copied, sent. Do not use them for errors that require action (use Alert) or anything the user must read before continuing (use Modal). Because the region is a polite live region and each plate is role=&quot;status&quot;, announcements never steal focus; keep messages short and self-contained, and never put required actions inside a toast since it can disappear before the user reaches it.
          </p>
        </Panel>
      </section>

      {/* Live toast region for this page's demo */}
      <Toaster toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
