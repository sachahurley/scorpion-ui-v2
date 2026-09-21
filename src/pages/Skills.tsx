/**
 * SKILLS PAGE
 *
 * The agent-operations story: the named, repeatable workflows (Claude Code
 * skills) that build and maintain Scorp DS. Authored as a typed
 * CaseStudyBlock array and rendered by CaseStudyBlocks, the same editorial
 * layout as the Essay and Case Study pages: headline blocks for the title
 * and sections, list blocks for the skills themselves.
 *
 * The list is a curated snapshot of the repo's skill index (Figma-pipeline
 * skills are deliberately omitted here). Source of truth:
 * https://github.com/sachahurley/scorp-ds/tree/main/.claude/skills
 */

import { CaseStudyBlocks, type CaseStudyBlock } from "@/components/ui/CaseStudy";
import { Link } from "@/components/ui/Link";

const SKILLS_SOURCE_URL =
  "https://github.com/sachahurley/scorp-ds/tree/main/.claude/skills";

// Notion mirror of docs/specs/*.md — the per-component spec pages
const NOTION_SPECS_URL =
  "https://www.notion.so/3e29a6335da181be8280c9bfc8730512";

// The page, section by section. Blocks render in array order.
const SKILLS: CaseStudyBlock[] = [
  {
    type: "headline",
    kicker: "Skills",
    title: "The Skills That Run This System",
  },
  {
    type: "prose",
    text: "Scorp DS is built and maintained by AI agents working inside written rules. The rules live in the repo; the workflows live in named skills: markdown playbooks an agent invokes as slash commands. A spec update, an accessibility audit, or a release is one command, and the skill defines every step, so any agent session produces the same result. These are the skills, grouped by role.",
  },

  // CORE WORKFLOWS
  {
    type: "headline",
    title: "Core Workflows",
    text: "The day-to-day build loop: make a change, propagate it, document it, ship it.",
  },
  {
    type: "list",
    items: [
      {
        title: "/update-component",
        text: "Edit a component and propagate the change through every builder function, story playground, and screen template that uses it.",
      },
      {
        title: "/update-spec",
        text: "Generate or update the spec for any layer of the system (tokens, primitives, components, patterns, screens) and sync it to Notion.",
      },
      {
        title: "/compose-screen",
        text: "Build a screen composition from existing components and shared builder functions, from free-form instructions.",
      },
      {
        title: "/ds-health",
        text: "Full health check across all design system layers: specs, tokens, storybook, docs sync, static analysis, and tests, with a prioritized report.",
      },
      {
        title: "/generate-component-refs",
        text: "Generate portable component reference files that consumer projects use to build against the system without reading its source.",
      },
      {
        title: "/release-notes",
        text: "Generate a formatted changelog, bump the package version, sync it to Notion, and tag the release.",
      },
    ],
  },

  // AUDITS
  {
    type: "headline",
    title: "Audits",
    text: "Enforcement of the written rules. These are what keep 'every rule written for agents' honest.",
  },
  {
    type: "list",
    items: [
      {
        title: "/review-component",
        text: "Audit one component file against the project rules: hardcoded values, naming, docs, accessibility, and exports.",
      },
      {
        title: "/a11y-audit",
        text: "WCAG AA accessibility audit across the whole system: semantic labels, contrast, touch targets, focus, motion, and screen reader support.",
      },
      {
        title: "/audit-cascade",
        text: "Trace the blast radius of a token change: which semantic tokens, components, presets, stories, and screens are affected.",
      },
      {
        title: "/storybook-audit",
        text: "Audit stories, samples, and presets for token compliance: flags hardcoded values and incorrect token usage.",
      },
      {
        title: "/storybook-check",
        text: "Verify a story follows the documentation page structure rules every doc page must share.",
      },
      {
        title: "/token-audit",
        text: "Verify the token documentation is in sync with the actual foundation token files.",
      },
    ],
  },

  // SYNC AND OPERATIONS
  {
    type: "headline",
    title: "Sync and Operations",
    text: "Keeping the mirrors honest: docs in Notion, vendored copies in consumer sites. Local files are always the source of truth.",
  },
  {
    type: "list",
    items: [
      {
        title: "/sync-specs",
        text: "Detect changed files across all layers and batch-update their specs and Notion pages.",
      },
      {
        title: "/sync-docs",
        text: "Push local documentation files to their Notion pages; Notion is a read-only mirror.",
      },
      {
        title: "/sync-skill-docs",
        text: "Keep the Notion skills index in sync with the skill definitions in the codebase.",
      },
      {
        title: "/vendor-portfolio",
        text: "After any merge to main, re-vendor the design system into both consumer sites (the portfolio and this showcase) and ship their update PRs.",
      },
    ],
  },

  // THE SPECS THESE SKILLS MAINTAIN
  {
    type: "headline",
    title: "The Specs These Skills Maintain",
    text: "Every component, primitive, and pattern has a spec file in the repo covering status, intent, tokens, and accessibility.",
  },
  {
    type: "prose",
    text: "The sync skills mirror all 32 of them to Notion, where they read as documents: 25 components and primitives, 5 patterns, the token parser, and the spec changelog. The markdown in the repo is the source of truth; the Notion pages are a read-only mirror.",
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      {/* Reading column: same editorial width as Essay and Case Study */}
      <div className="mx-auto max-w-2xl [container-type:inline-size]">
        <CaseStudyBlocks blocks={SKILLS} />

        {/* Outbound links: block vocabulary has no link block, so they live
            in a footer row matching the Home page footer treatment */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          <Link href={SKILLS_SOURCE_URL} external className="text-sm">
            Skill definitions on GitHub
          </Link>
          <Link href={NOTION_SPECS_URL} external className="text-sm">
            Specs in Notion
          </Link>
        </div>
      </div>
    </div>
  );
}
