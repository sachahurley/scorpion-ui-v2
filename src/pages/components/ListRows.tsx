/**
 * LIST ROWS DOCUMENTATION PAGE
 *
 * Documentation for the ListRow component: the list/navigation tier of the
 * container system. Covers the three row types (display, anchor, button),
 * the router-link slot (as/asProps), content slots, and a nav-list
 * composition.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { ListRow } from "@/components/ui/ListRow";
import { Panel } from "@/components/docs/Panel";

export default function ListRows() {
  const [clickCount, setClickCount] = useState(0);

  // Small framed placeholder used for the thumb slot demos. The row never
  // scales the thumb, so the node must bring its own size.
  const thumbNode = (
    <span
      className="block h-14 w-14 plate-round bg-[var(--surface-muted)]"
      aria-hidden="true"
    />
  );

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">List Rows</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          The plate row for scannable lists and navigation. Each row is clipped to the small plate; the clip stays invisible until hover fills it with surface.muted, so resting lists stay quiet. Not for framed content panels (use Card) or tabular data (use Table).
        </p>
      </div>

      {/* ROW TYPES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Row Types</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              One component, three elements: a div for display-only rows, an anchor when href is set, a button when onClick is set. Interactive rows get the pointer cursor, the hover fill, and the accent-colored title; display rows keep text.primary and no hover.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <ListRow
              meta="Display only"
              title="A plain row"
              description="No href, no onClick: renders a div. No hover fill, title in text.primary."
            />
            <ListRow
              meta="Anchor row"
              title="A row that navigates"
              description="href renders an anchor. Hover fills the plate; the title takes the accent."
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              titleSuffix={<span aria-hidden="true">-&gt;</span>}
            />
            <ListRow
              meta="Button row"
              title={clickCount > 0 ? `Clicked ${clickCount} times` : "A row that acts"}
              description="onClick renders a button (type button), for in-page actions."
              onClick={() => setClickCount((c) => c + 1)}
            />
          </div>
        </Panel>
      </section>

      {/* ROUTER LINKS SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Router Links</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              The as prop is the router-link slot: pass a custom link component and the row renders it with full interactive styling, spreading asProps (to, state, and friends) onto it. Client-side navigation, no full page load.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <ListRow
              as={Link}
              asProps={{ to: "/components/buttons" }}
              meta="react-router"
              title="Buttons"
              description="Navigates with the SPA router via as={Link} and asProps={{ to }}."
            />
            <ListRow
              as={Link}
              asProps={{ to: "/components/badges" }}
              meta="react-router"
              title="Badges"
              description="Same row, different destination. The as slot accepts any link component."
            />
          </div>
        </Panel>
      </section>

      {/* CONTENT SLOTS SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Content Slots</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              meta sits above the title in the tertiary pair, description sits below in the body pair, and titleSuffix trails the title for affordance glyphs. The thumb slot reserves a fixed-size media column (flex-shrink 0) so long titles ellipsize instead of pushing the image; thumbPosition flips it to the end.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <ListRow
              meta="2026-09-19"
              title="Every text slot at once"
              titleSuffix={<span aria-hidden="true">-&gt;</span>}
              description="meta above, titleSuffix beside the title, description below."
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            />
            <ListRow
              thumb={thumbNode}
              meta="thumbPosition: start (default)"
              title="Row with a leading thumb"
              description="The thumb slot takes a sized img or framed node; the row never scales it."
            />
            <ListRow
              thumb={thumbNode}
              thumbPosition="end"
              meta="thumbPosition: end"
              title="Row with a trailing thumb"
              description="flex-row-reverse puts the media column after the text."
            />
          </div>
        </Panel>
      </section>

      {/* NAV LIST COMPOSITION SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Composition: Nav List</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              A small navigation list inside a Panel: rows stack with a tight gap and stay flat until hover, so the plate silhouettes only appear on the row you are pointing at.
            </p>
          </div>

          <Panel>
            <nav aria-label="Recent writing (demo)">
              <ul className="m-0 flex list-none flex-col gap-1 p-0">
                <li>
                  <ListRow
                    as={Link}
                    asProps={{ to: "/patterns/forms" }}
                    meta="Pattern"
                    title="Forms"
                    description="Composing the field components into a full form."
                  />
                </li>
                <li>
                  <ListRow
                    as={Link}
                    asProps={{ to: "/patterns/cards" }}
                    meta="Pattern"
                    title="Cards"
                    description="The framed content tier of the container system."
                  />
                </li>
                <li>
                  <ListRow
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer"
                    meta="External"
                    title="Release notes"
                    titleSuffix={<span aria-hidden="true">-&gt;</span>}
                    description="An external anchor row with a trailing glyph."
                  />
                </li>
              </ul>
            </nav>
          </Panel>
        </Panel>
      </section>

      {/* ACCESSIBILITY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Accessibility</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Semantics and focus behavior baked into the row
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Inset focus ring</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                The plate clip would swallow an outside outline, so interactive rows draw an inset box-shadow ring with the focus-ring tokens on focus-visible. Keyboard users always see the ring inside the plate.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Native semantics</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Rows are real anchors and real buttons (type button), never divs with click handlers, so they are focusable and activate with Enter or Space for free. Decorative glyphs in titleSuffix should be aria-hidden.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Color is not the only cue</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Interactive rows pair the accent title with the pointer cursor and hover fill; external links add a trailing glyph. Meta and description use AA-passing secondary theme pairs (700/600 and 800/500).
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
              A router-link row with the full slot set. asProps is spread onto the Link, so any Link prop works.
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`import { Link } from "react-router-dom";
import { ListRow } from "@/components/ui/ListRow";

<ListRow
  as={Link}
  asProps={{ to: "/writing/plate-rows" }}
  meta="2026-09-19"
  title="Promoting the plate row"
  titleSuffix={<span aria-hidden="true">-&gt;</span>}
  description="How the portfolio's list row became a DS component."
  thumb={<img src={cover} alt="" className="h-14 w-14 plate-round object-cover" />}
  thumbPosition="start"
/>`}
            </pre>
          </Panel>
        </Panel>
      </section>
    </div>
  );
}
