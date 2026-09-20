/**
 * TABLES DOCUMENTATION PAGE
 *
 * Documentation for the Table primitives: semantic data grid parts with
 * token-backed chrome.
 *
 * Structure:
 * 1. Page header (title + description)
 * 2. Basic table: all parts composed over a small token dataset
 * 3. Variants: striped and bordered
 * 4. Density options: compact, comfortable, spacious
 * 5. Implementation example (printed code)
 * 6. When to use and accessibility notes
 */

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";
import { Panel } from "@/components/docs/Panel";

// Small realistic dataset: spacing tokens from the design system
const spacingTokens = [
  { token: "--spacing-1", value: "4px", usage: "Icon gaps, hairline offsets" },
  { token: "--spacing-2", value: "8px", usage: "Chip padding, tight stacks" },
  { token: "--spacing-3", value: "12px", usage: "Cell padding, control gaps" },
  { token: "--spacing-4", value: "16px", usage: "Card padding, form rows" },
  { token: "--spacing-6", value: "24px", usage: "Section gaps" },
];

export default function Tables() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Tables</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          Semantic data grid primitives: Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, and TableCell compose into real table markup with token-backed chrome. Hairline row dividers, a subtle header fill, and optional zebra striping, all in Fragment Mono.
        </p>
      </div>

      {/* BASIC TABLE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Basic Table</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              All parts composed: header, body rows, and a footer summary row. TableHead defaults scope=&quot;col&quot; so column headers are announced correctly.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {spacingTokens.map((row) => (
                  <TableRow key={row.token}>
                    <TableCell>{row.token}</TableCell>
                    <TableCell>{row.value}</TableCell>
                    <TableCell>{row.usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>{spacingTokens.length} tokens on the 4px grid</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Panel>
      </section>

      {/* VARIANTS SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Variants</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              striped fills even body rows with the subtle surface for easier scanning of wide data. bordered frames the whole table on the large plate ring, matching the card silhouette.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Striped</h4>
              <div className="overflow-x-auto">
                <Table striped>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Usage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {spacingTokens.map((row) => (
                      <TableRow key={row.token}>
                        <TableCell>{row.token}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.usage}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">Bordered</h4>
              <div className="overflow-x-auto">
                <Table bordered>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Usage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {spacingTokens.slice(0, 3).map((row) => (
                      <TableRow key={row.token}>
                        <TableCell>{row.token}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.usage}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* DENSITY SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Density</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Three padding rhythms on the 4px grid, set once on the root and read by every cell via context. compact (12/8) is the default data-grid rhythm, comfortable (16/12) and spacious (20/16) step up for lower-density reading.
            </p>
          </div>

          <div className="space-y-8">
            {(["compact", "comfortable", "spacious"] as const).map((density) => (
              <div key={density}>
                <h4 className="text-sm font-mono text-[var(--text-primary)] mb-3">{density}</h4>
                <div className="overflow-x-auto">
                  <Table density={density}>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Token</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {spacingTokens.slice(0, 2).map((row) => (
                        <TableRow key={row.token}>
                          <TableCell>{row.token}</TableCell>
                          <TableCell>{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* IMPLEMENTATION EXAMPLE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Implementation Example</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              A striped, bordered table over a data array. Wrap in an overflow-x-auto container in product code when columns can exceed the viewport.
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<div className="overflow-x-auto">
  <Table striped bordered density="comfortable">
    <TableHeader>
      <TableRow>
        <TableHead>Token</TableHead>
        <TableHead>Value</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.token}>
          <TableCell>{row.token}</TableCell>
          <TableCell>{row.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>`}
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
            Use a table when the data is genuinely tabular: rows share the same columns and users compare values across them. For heterogeneous lists (settings, navigation, media items) prefer ListRow, and for a single record prefer a description layout inside a Card. Because these primitives render real table elements (table, thead, tbody, tr, th, td), screen readers get row and column navigation for free; keep TableHead cells in the header row, use scope=&quot;row&quot; on a leading th if a row has its own header, and never use tables purely for layout.
          </p>
        </Panel>
      </section>
    </div>
  );
}
