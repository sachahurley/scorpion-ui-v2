/**
 * SKILLS PAGE
 *
 * The agent-operations story: the named, repeatable workflows (Claude Code
 * skills) that build and maintain Scorp DS. Each skill is a markdown
 * definition in the scorp-ds repo (.claude/skills/) that an AI agent invokes
 * as a slash command; this page lists them grouped by role.
 *
 * The list is a curated snapshot of the repo's skill index (Figma-pipeline
 * skills are deliberately omitted here). Source of truth:
 * https://github.com/sachahurley/scorp-ds/tree/main/.claude/skills
 */

import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";

const SKILLS_SOURCE_URL =
  "https://github.com/sachahurley/scorp-ds/tree/main/.claude/skills";

// Notion mirror of docs/specs/*.md — the per-component spec pages
const NOTION_SPECS_URL =
  "https://www.notion.so/3e29a6335da181be8280c9bfc8730512";

interface Skill {
  name: string;
  description: string;
}

interface SkillGroup {
  title: string;
  blurb: string;
  skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Core workflows",
    blurb:
      "The day-to-day build loop: make a change, propagate it, document it, ship it.",
    skills: [
      {
        name: "update-component",
        description:
          "Edit a component and propagate the change through every builder function, story playground, and screen template that uses it.",
      },
      {
        name: "update-spec",
        description:
          "Generate or update the spec for any layer of the system (tokens, primitives, components, patterns, screens) and sync it to Notion.",
      },
      {
        name: "compose-screen",
        description:
          "Build a screen composition from existing components and shared builder functions, from free-form instructions.",
      },
      {
        name: "ds-health",
        description:
          "Full health check across all design system layers: specs, tokens, storybook, docs sync, static analysis, and tests, with a prioritized report.",
      },
      {
        name: "generate-component-refs",
        description:
          "Generate portable component reference files that consumer projects use to build against the system without reading its source.",
      },
      {
        name: "release-notes",
        description:
          "Generate a formatted changelog, bump the package version, sync it to Notion, and tag the release.",
      },
    ],
  },
  {
    title: "Audits",
    blurb:
      "Enforcement of the written rules. These are what keep 'every rule written for agents' honest.",
    skills: [
      {
        name: "review-component",
        description:
          "Audit one component file against the project rules: hardcoded values, naming, docs, accessibility, and exports.",
      },
      {
        name: "a11y-audit",
        description:
          "WCAG AA accessibility audit across the whole system: semantic labels, contrast, touch targets, focus, motion, and screen reader support.",
      },
      {
        name: "audit-cascade",
        description:
          "Trace the blast radius of a token change: which semantic tokens, components, presets, stories, and screens are affected.",
      },
      {
        name: "storybook-audit",
        description:
          "Audit stories, samples, and presets for token compliance: flags hardcoded values and incorrect token usage.",
      },
      {
        name: "storybook-check",
        description:
          "Verify a story follows the documentation page structure rules every doc page must share.",
      },
      {
        name: "token-audit",
        description:
          "Verify the token documentation is in sync with the actual foundation token files.",
      },
    ],
  },
  {
    title: "Sync and operations",
    blurb:
      "Keeping the mirrors honest: docs in Notion, vendored copies in consumer sites. Local files are always the source of truth.",
    skills: [
      {
        name: "sync-specs",
        description:
          "Detect changed files across all layers and batch-update their specs and Notion pages.",
      },
      {
        name: "sync-docs",
        description:
          "Push local documentation files to their Notion pages; Notion is a read-only mirror.",
      },
      {
        name: "sync-skill-docs",
        description:
          "Keep the Notion skills index in sync with the skill definitions in the codebase.",
      },
      {
        name: "vendor-portfolio",
        description:
          "After any merge to main, re-vendor the design system into both consumer sites (the portfolio and this showcase) and ship their update PRs.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-5 lg:px-10 pt-5 lg:pt-10 pb-5 lg:pb-20">
      <div className="mx-auto max-w-2xl">
        {/* Page header */}
        <h1 className="font-mono text-2xl lg:text-3xl text-[var(--text-primary)] mb-4">
          Skills
        </h1>
        <p className="font-mono text-base text-secondary-800 dark:text-secondary-500 leading-relaxed mb-4">
          Scorp DS is built and maintained by AI agents working inside written
          rules. The rules live in the repo; the workflows live in named
          skills: markdown playbooks an agent invokes as slash commands. A
          spec update, an accessibility audit, or a release is one command,
          and the skill defines every step, so any agent session produces the
          same result.
        </p>
        <p className="font-mono text-base text-secondary-800 dark:text-secondary-500 leading-relaxed mb-10">
          These are the skills that run this system, grouped by role.{" "}
          <Link href={SKILLS_SOURCE_URL} external className="text-base">
            Read the full definitions on GitHub
          </Link>
          .
        </p>

        {/* Skill groups */}
        {SKILL_GROUPS.map((group) => (
          <section key={group.title} className="mb-10">
            <h2 className="font-mono text-lg text-[var(--text-primary)] mb-2">
              {group.title}
            </h2>
            <p className="font-mono text-sm text-secondary-800 dark:text-secondary-500 leading-relaxed mb-5">
              {group.blurb}
            </p>
            <div className="grid gap-5">
              {group.skills.map((skill) => (
                <Card key={skill.name}>
                  <div>
                    <h3 className="text-sm font-mono text-[var(--text-primary)] mb-2">
                      /{skill.name}
                    </h3>
                    <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500">
                      {skill.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Specs in Notion */}
        <section className="mb-10">
          <h2 className="font-mono text-lg text-[var(--text-primary)] mb-2">
            The specs these skills maintain
          </h2>
          <p className="font-mono text-sm text-secondary-800 dark:text-secondary-500 leading-relaxed mb-5">
            Every component, primitive, and pattern has a spec file in the
            repo covering status, intent, tokens, and accessibility. The
            sync skills mirror them to Notion, where they read as documents.
          </p>
          <Card>
            <div>
              <h3 className="text-sm font-mono text-[var(--text-primary)] mb-2">
                Scorp DS Specs
              </h3>
              <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">
                All 32 spec pages: 25 components and primitives, 5 patterns,
                the token parser, and the spec changelog. Maintained by
                /update-spec and /sync-specs; the markdown in the repo is the
                source of truth.
              </p>
              <Link href={NOTION_SPECS_URL} external className="text-sm">
                Browse the specs in Notion
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
