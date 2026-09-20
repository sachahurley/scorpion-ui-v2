/**
 * CASE STUDY PATTERN DOCUMENTATION PAGE
 *
 * Documentation for the CaseStudy block library: a typed, data-driven set of
 * nine editorial blocks rendered by one component (CaseStudyBlocks). Covers
 * the block inventory, a short composed excerpt, breakout sizing, and the
 * authoring format.
 */

import { CaseStudyBlocks, type CaseStudyBlock } from "@/components/ui/CaseStudy";
import { Panel, PlateChip } from "@/components/docs/Panel";

// Block inventory: every member of the CaseStudyBlock union with a
// one-line purpose. Rendered as a PlateChip grid below.
const BLOCK_INVENTORY: { name: string; purpose: string }[] = [
  { name: "meta", purpose: "Project fact grid (role, timeline, team) as a responsive definition list" },
  { name: "headline", purpose: "Section header with optional kicker and lede text" },
  { name: "prose", purpose: "A body paragraph in the AA secondary pair" },
  { name: "image", purpose: "Hatched media placeholder on the plate ring, with caption and aspect" },
  { name: "imagePair", purpose: "Two 4:3 placeholders side by side, stacking on small screens" },
  { name: "callouts", purpose: "Title and blurb grid; subgrid rows keep bodies aligned across columns" },
  { name: "insights", purpose: "Numbered findings list with accent-colored two-digit numerals" },
  { name: "quote", purpose: "Pull quote with accent glyph and optional Avatar attribution" },
  { name: "list", purpose: "Stacked title and blurb items without numbering" },
];

// Short composed excerpt: four blocks, not a full case study.
const EXCERPT: CaseStudyBlock[] = [
  {
    type: "headline",
    kicker: "Case study excerpt",
    title: "Rebuilding the checkout flow",
    text: "Four blocks from the library composing into a narrative page: headline, prose, figure, and an attributed quote.",
  },
  {
    type: "prose",
    text: "The old flow buried the order summary two screens deep. We flattened it into a single scrolling page, keeping totals pinned while the payment fields validated inline.",
  },
  {
    type: "image",
    aspect: "16 / 9",
    caption: "Fig 1. The flattened checkout, totals pinned right",
  },
  {
    type: "quote",
    text: "I stopped double-checking the total on every step. It was just there.",
    name: "Riley Nakamura",
    role: "Usability session, round 2",
  },
];

export default function CaseStudyPage() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Case Study</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          The long-form section library for narrative pages. Content is authored as a typed CaseStudyBlock array and rendered by one component, CaseStudyBlocks. These are editorial layout blocks, not app UI: compose dashboards and screens from components instead.
        </p>
      </div>

      {/* BLOCK LIBRARY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Block Library</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              All nine members of the CaseStudyBlock union. Each block is a plain object; the type field picks the renderer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {BLOCK_INVENTORY.map((block) => (
              <PlateChip key={block.name}>
                <div className="p-3">
                  <p className="text-xs font-mono text-[var(--text-primary)] mb-1">{block.name}</p>
                  <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">
                    {block.purpose}
                  </p>
                </div>
              </PlateChip>
            ))}
          </div>
        </Panel>
      </section>

      {/* COMPOSED EXCERPT SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Composed Excerpt</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Four blocks rendered by CaseStudyBlocks: headline, prose, a hatched figure placeholder, and a quote with Avatar attribution. A real page would run many more blocks in one array.
            </p>
          </div>

          <Panel>
            <div className="mx-auto max-w-2xl [container-type:inline-size]">
              <CaseStudyBlocks blocks={EXCERPT} />
            </div>
          </Panel>
        </Panel>
      </section>

      {/* BREAKOUTS AND USAGE NOTES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Usage Notes</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Breakout sizing, placeholders, and the text scale
            </p>
          </div>

          <div className="space-y-4">
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Breakout figures</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                image and imagePair accept width wide or full. Wide pushes about 120px past the column on each side; full runs to the container margins. Both size against the nearest inline-size container (100cqw), so give an ancestor container-type inline-size, or the viewport fallback applies. Neither ever exceeds the container.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Hatch placeholders</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Figures render a theme-aware hatch texture built from surface.subtle and surface.muted stripes on the plate ring recipe, so drafts read correctly in both themes before real media exists. The aspect prop takes any CSS aspect-ratio string, defaulting to 16 / 9.
              </p>
            </Panel>
            <Panel>
              <p className="text-sm font-mono text-[var(--text-primary)] mb-2">Text and accents</p>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                Labels and captions use the secondary 700/600 pair, body copy the 800/500 pair, both AA-passing. Insight numerals and the quote glyph carry the accent; the quote glyph is aria-hidden so screen readers hear only the quote itself. Quote attribution renders the DS Avatar with empty alt (the visible name is the label).
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
              Author the page as data, render it with one component
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`import { CaseStudyBlocks, type CaseStudyBlock } from "@/components/ui/CaseStudy";

const blocks: CaseStudyBlock[] = [
  { type: "headline", kicker: "Case study", title: "Rebuilding the checkout flow" },
  { type: "prose", text: "The old flow buried the order summary two screens deep..." },
  { type: "image", aspect: "16 / 9", caption: "Fig 1. The flattened checkout", width: "wide" },
  { type: "quote", text: "It was just there.", name: "Riley Nakamura", role: "Usability session" },
];

// Breakout widths need an inline-size container ancestor
<div className="mx-auto max-w-2xl [container-type:inline-size]">
  <CaseStudyBlocks blocks={blocks} />
</div>`}
            </pre>
          </Panel>
        </Panel>
      </section>
    </div>
  );
}
