/**
 * TABS DOCUMENTATION PAGE
 *
 * Documentation for the Tabs component: the WAI-ARIA tablist / tab / tabpanel
 * pattern for switching between related views.
 *
 * Structure:
 * 1. Page header (title + description)
 * 2. Basic usage: uncontrolled tabs with real panels
 * 3. States: disabled trigger, controlled value, forceMount
 * 4. Implementation example (printed code)
 * 5. Keyboard model and when to use
 */

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Panel, PlateChip } from "@/components/docs/Panel";

export default function TabsPage() {
  // Controlled specimen state
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* PAGE HEADER SECTION */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl font-mono text-[var(--text-primary)]">Tabs</h2>
        <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
          The WAI-ARIA tablist pattern for switching between related views in the same space. Compose Tabs, TabsList, TabsTrigger, and TabsContent; selection is an accent underline on the tab strip, sharp-cornered and monospace like the rest of the system.
        </p>
      </div>

      {/* BASIC USAGE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Basic Usage</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Uncontrolled tabs: pass defaultValue (or omit it to auto-select the first tab). Each TabsContent renders only while its value is active. TabsList needs an aria-label naming the strip.
            </p>
          </div>

          <Tabs defaultValue="tokens">
            <TabsList aria-label="Design system layers">
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
            </TabsList>
            <TabsContent value="tokens">
              <p className="text-sm text-secondary-800 dark:text-secondary-500">
                The foundation layer: color scales, typography, spacing, motion, and radius values defined once in tokens.json and exposed as CSS variables.
              </p>
            </TabsContent>
            <TabsContent value="components">
              <p className="text-sm text-secondary-800 dark:text-secondary-500">
                The building blocks: buttons, inputs, badges, tables. Every component consumes tokens through Tailwind classes, never raw values.
              </p>
            </TabsContent>
            <TabsContent value="patterns">
              <p className="text-sm text-secondary-800 dark:text-secondary-500">
                Compositions of components solving a recurring product problem: forms, cards, the music player.
              </p>
            </TabsContent>
          </Tabs>
        </Panel>
      </section>

      {/* STATES SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Controlled and Disabled</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Pass value plus onValueChange to own the selection in app state, for example to sync tabs with the URL. Disabled triggers drop to half opacity and are skipped by pointer input.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList aria-label="Spec view">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="history" disabled>
                History
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <p className="text-sm text-secondary-800 dark:text-secondary-500">
                Rendered preview panel. The active value lives in page state: {activeTab}.
              </p>
            </TabsContent>
            <TabsContent value="code">
              <p className="text-sm text-secondary-800 dark:text-secondary-500">
                Source panel. Selecting a tab called onValueChange, which updated the controlled value.
              </p>
            </TabsContent>
          </Tabs>

          <p className="mt-4 text-xs font-mono text-secondary-700 dark:text-secondary-600">
            Tip: TabsContent unmounts inactive panels by default. Pass forceMount to keep a panel mounted but hidden, preserving form state inside it.
          </p>
        </Panel>
      </section>

      {/* IMPLEMENTATION EXAMPLE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Implementation Example</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              Typical uncontrolled usage. Trigger and content pair through matching value strings; TabsList children must be TabsTrigger elements, and their order defines the keyboard flow.
            </p>
          </div>

          <Panel innerClassName="bg-secondary-950 p-4 lg:p-6">
            <pre className="text-xs font-mono text-primary-300 overflow-x-auto">
{`<Tabs defaultValue="tokens">
  <TabsList aria-label="Design system layers">
    <TabsTrigger value="tokens">Tokens</TabsTrigger>
    <TabsTrigger value="components">Components</TabsTrigger>
  </TabsList>
  <TabsContent value="tokens">
    <p>Foundation layer content</p>
  </TabsContent>
  <TabsContent value="components">
    <p>Component layer content</p>
  </TabsContent>
</Tabs>`}
            </pre>
          </Panel>
        </Panel>
      </section>

      {/* KEYBOARD AND USAGE SECTION */}
      <section className="mb-10">
        <Panel>
          <div className="mb-6">
            <h3 className="text-base font-mono text-[var(--text-primary)] mb-1">Keyboard and When to Use</h3>
            <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
              The strip uses roving tabindex: only the selected tab is in the page tab order, and arrows move selection within the strip, wrapping at the ends.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <PlateChip>
              <div className="px-3 py-2">
                <p className="text-xs font-mono text-[var(--text-primary)]">Arrow Left / Right</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Previous / next tab, wraps</p>
              </div>
            </PlateChip>
            <PlateChip>
              <div className="px-3 py-2">
                <p className="text-xs font-mono text-[var(--text-primary)]">Home / End</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">First / last tab</p>
              </div>
            </PlateChip>
            <PlateChip>
              <div className="px-3 py-2">
                <p className="text-xs font-mono text-[var(--text-primary)]">Tab</p>
                <p className="text-xs font-mono text-secondary-700 dark:text-secondary-600">Leaves the strip, into the panel</p>
              </div>
            </PlateChip>
          </div>

          <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
            Use tabs when views are peers of the same object and users switch between them without losing context, such as preview versus code. Do not use tabs for sequential steps (use a wizard flow) or for navigation between pages (use links, so the URL and history stay honest). Icon-only triggers must set aria-label.
          </p>
        </Panel>
      </section>
    </div>
  );
}
