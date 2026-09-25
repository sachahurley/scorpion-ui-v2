#!/usr/bin/env node
/**
 * gen-harness-index.mjs <scorp-ds dir> <git ref> <output path>
 *
 * Builds the Harness page's facts from the scorp-ds repo itself, so the page
 * cannot quietly go stale: vendor:ds writes the JSON and ds:check flags drift
 * when a lint rule, a CI job, a decision record, or a baseline count changes.
 *
 * Everything here is read at <ref>, never from a working tree, for the same
 * reason vendor-ds.sh does: the checkout may be on someone else's branch.
 *
 * The Harness page is about a system that refuses to report a layer it did not
 * check, so nothing below is allowed to fail softly. A parse that finds nothing
 * where something is expected exits non-zero rather than writing a confident
 * zero into the page.
 *
 * Produces:
 *   counts      the numbers the page quotes (components, specs, baselines, ...)
 *   lintRules   each scorp/* rule, its description, and the globs it runs on
 *   workflows   each CI workflow, its trigger, and its named steps
 *   decisions   the decision-record table, straight from its README
 *   insights    the insight files, newest first
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const [dsDir, ref, outPath] = process.argv.slice(2);
if (!dsDir || !ref || !outPath) {
  console.error("usage: gen-harness-index.mjs <scorp-ds dir> <git ref> <output path>");
  process.exit(1);
}

const REPO = "sachahurley/scorp-ds";
const blob = (path) => `https://github.com/${REPO}/blob/main/${path}`;
const tree = (path) => `https://github.com/${REPO}/tree/main/${path}`;

const git = (...args) => execFileSync("git", ["-C", dsDir, ...args], { encoding: "utf8" });
const show = (path) => git("show", `${ref}:${path}`);

/** Every path under `dir` at `ref`, optionally filtered. */
function list(dir, filter = () => true) {
  return git("ls-tree", "-r", "--name-only", ref, dir)
    .split("\n")
    .filter((p) => p && filter(p));
}

/** A count that must not be zero: a zero here means the parse missed, not that
 *  the harness shrank, and a confident zero on the page is worse than a crash. */
function nonEmpty(label, items) {
  if (items.length === 0) {
    console.error(`gen-harness-index: found no ${label} at ${ref}. Refusing to write a zero.`);
    process.exit(1);
  }
  return items;
}

// ─── counts ────────────────────────────────────────────────────────────────

const isTsx = (p) => p.endsWith(".tsx") && !p.includes(".test.");

const components = list("packages/components/src/components/", isTsx);
const primitives = list("packages/components/src/primitives/", isTsx);
const specs = list("docs/specs/", (p) => p.endsWith(".md") && !p.endsWith("CHANGELOG.md"));
const stories = list("packages/storybook/stories/", (p) => p.endsWith(".stories.tsx"));
const baselines = list("packages/storybook/visual-baselines/", (p) => p.endsWith(".png"));
// Skills are directories of SKILL.md; index.json alongside them is not a skill.
const skills = list(".claude/skills/", (p) => p.endsWith("/SKILL.md"));
const decisionFiles = list(
  "docs/decisions/",
  (p) => /\/\d{4}-/.test(p) && !p.includes("0000-template"),
);
const insightFiles = list("docs/insights/", (p) => /\/\d{4}-\d{2}-\d{2}-/.test(p));
const tokenLeaves = (show("packages/tokens/src/tokens.json").match(/"\$value"/g) || []).length;

nonEmpty("components", components);
nonEmpty("specs", specs);
nonEmpty("visual baselines", baselines);
nonEmpty("stories", stories);

// ─── lint rules ────────────────────────────────────────────────────────────
//
// The rule bodies carry the description; eslint.config.mjs carries the globs
// each one is switched on for. Both matter on the page: a rule that only runs
// on stories is a different promise from one that runs on every component.

const rulesSrc = show("eslint-rules/index.js");
const configSrc = show("eslint.config.mjs");

/** The `files: [...]` array that governs the config block a match sits in. */
function globsGoverning(index) {
  const before = configSrc.slice(0, index);
  const opens = [...before.matchAll(/files:\s*\[([^\]]*)\]/g)];
  if (opens.length === 0) return [];
  return [...opens[opens.length - 1][1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

const lintRules = nonEmpty(
  "scorp/* lint rules",
  [...rulesSrc.matchAll(/^ {4}"([a-z0-9-]+)":\s*\{/gm)].map((m) => {
    const body = rulesSrc.slice(m.index, m.index + 2000);
    const desc = body.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
    const name = `scorp/${m[1]}`;
    const appliesTo = [
      ...new Set(
        [...configSrc.matchAll(new RegExp(`"${name}"`, "g"))].flatMap((hit) =>
          globsGoverning(hit.index),
        ),
      ),
    ];
    return {
      name,
      description: desc ? desc[1] : null,
      appliesTo,
      // A rule defined but never switched on is worth seeing on the page.
      enabled: appliesTo.length > 0,
    };
  }),
);

// ─── workflows ─────────────────────────────────────────────────────────────

const workflows = nonEmpty(
  "workflows",
  list(".github/workflows/", (p) => p.endsWith(".yml")).map((path) => {
    const src = show(path);
    // The comment block above `name:` is the workflow's own one-line summary.
    // A first line ending in a colon introduces something (a URL, a list) that
    // is not worth quoting, so it becomes a sentence instead of a dangling lead.
    const lead = src
      .split(/^name:/m)[0]
      .split("\n")
      .filter((l) => l.startsWith("#"))
      .map((l) => l.replace(/^#\s?/, "").trim())
      .filter(Boolean)
      .map((l, i) => (i === 0 ? l.replace(/:$/, ".") : l));
    const on = src.match(/^on:\n([\s\S]*?)^\S/m);
    return {
      file: path.replace(".github/workflows/", ""),
      name: (src.match(/^name:\s*(.+)$/m) || [])[1]?.trim() ?? path,
      summary: lead[0] ?? null,
      note: lead.slice(1).join(" ") || null,
      triggers: on
        ? [...on[1].matchAll(/^ {2}([a-z_]+):/gm)].map((m) => m[1])
        : [...src.matchAll(/^on:\s*\[?([a-z_,\s]+)\]?$/gm)].flatMap((m) =>
            m[1].split(/[,\s]+/).filter(Boolean),
          ),
      steps: [...src.matchAll(/^\s+- name:\s*(.+)$/gm)]
        .map((m) => m[1].trim())
        .filter((s) => !/^uses:/.test(s)),
      url: blob(path),
    };
  }),
);

// ─── decision records ──────────────────────────────────────────────────────
//
// The README table is the curated list (title plus what it affects); the files
// on disk are the truth about how many there are. Parse the table, then check
// it against the files so a record added without a README row is visible.

const decisionsReadme = show("docs/decisions/README.md");
/** Markdown cell text: unescape \| (a literal pipe inside a cell) and drop code ticks. */
const cell = (s) => s.replace(/\\\|/g, "|").replace(/`/g, "").trim();
const decisions = nonEmpty(
  "decision records",
  decisionsReadme
    .split("\n")
    .filter((line) => /^\|\s*\[\d{4}\]\(/.test(line))
    .map((line) => {
      // Split on pipes the author did NOT escape: decision 0011's title is
      // `sm` \| `md` \| `lg`, and a plain split on | tears it into three cells.
      const cells = line
        .replace(/^\||\|$/g, "")
        .split(/(?<!\\)\|/)
        .map(cell);
      const link = cells[0].match(/^\[(\d{4})\]\(([^)]+)\)$/);
      return {
        id: link[1],
        title: cells[1],
        affects: cells[2],
        url: blob(`docs/decisions/${link[2]}`),
      };
    }),
);
if (decisions.length !== decisionFiles.length) {
  console.error(
    `gen-harness-index: ${decisionFiles.length} decision files but ${decisions.length} README rows. ` +
      `Fix docs/decisions/README.md in scorp-ds before vendoring.`,
  );
  process.exit(1);
}

// ─── insights ──────────────────────────────────────────────────────────────

const insights = nonEmpty(
  "insights",
  insightFiles
    .map((path) => {
      const md = show(path);
      return {
        date: path.match(/(\d{4}-\d{2}-\d{2})/)[1],
        title: ((md.match(/^#\s+(.+)$/m) || [])[1] || path).replace(/`/g, ""),
        url: blob(path),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date)),
);

// ─── write ─────────────────────────────────────────────────────────────────

const index = {
  _comment:
    "Generated by scripts/gen-harness-index.mjs during vendor:ds. Do not edit by hand.",
  source: `https://github.com/${REPO}`,
  // NO commit field on purpose. vendor/scorp-ds/VERSION already records the
  // snapshot, and vendor-ds.sh reports it as a note rather than as drift. A
  // commit string in here would flip on every scorp-ds merge, so ds:check
  // would report harness drift for a commit that changed nothing this page
  // shows. The page reads VERSION directly.
  links: {
    rules: blob("CLAUDE.md"),
    vision: blob("docs/vision.md"),
    decisions: tree("docs/decisions"),
    insights: tree("docs/insights"),
    lintRules: blob("eslint-rules/index.js"),
    workflows: tree(".github/workflows"),
    contracts: blob("docs/contracts/api-surface.json"),
    baselines: tree("packages/storybook/visual-baselines"),
  },
  counts: {
    components: components.length,
    primitives: primitives.length,
    specs: specs.length,
    stories: stories.length,
    // Every story is captured in both themes, minus the ones tagged skip-visual.
    baselines: baselines.length,
    lintRules: lintRules.length,
    skills: skills.length,
    decisions: decisions.length,
    insights: insights.length,
    tokens: tokenLeaves,
  },
  lintRules,
  workflows,
  decisions,
  insights,
};

writeFileSync(outPath, JSON.stringify(index, null, 2) + "\n");
