#!/usr/bin/env bash
#
# vendor-ds.sh [check]
#
# Re-vendors the merged Scorp DS visual language into this showcase:
#   1. vendor/scorp-ds/tokens.css + tailwind.preset.cjs  (token layer)
#   2. src/components/ui/<Component>.tsx                 (17 DS component
#      sources, with three mechanical Vite adaptations applied)
#   3. vendor/scorp-ds/VERSION                           (source commit)
#
# Source of truth: origin/main of the scorp-ds repo, read via git from the
# checkout at $SCORP_DS_DIR (default ~/Projects/scorp-ds). The checkout's
# working tree and current branch are irrelevant (other agent sessions may
# have it on a feature branch). This site is a deliberate snapshot, NOT
# auto-synced on every DS merge: run this when the visual language changes.
#
# "check" mode diffs what would be written against what exists and exits
# non-zero on drift, without touching anything.

set -euo pipefail

SCORP_DS_DIR="${SCORP_DS_DIR:-$HOME/Projects/scorp-ds}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MODE="${1:-apply}"

if ! git -C "$SCORP_DS_DIR" rev-parse --git-dir >/dev/null 2>&1; then
  echo "error: scorp-ds repo not found at '$SCORP_DS_DIR' (set SCORP_DS_DIR to override)" >&2
  exit 1
fi

# Refresh origin/main if we can; offline falls back to the last fetch
git -C "$SCORP_DS_DIR" fetch origin main -q 2>/dev/null || \
  echo "warn: could not fetch; vendoring from last-fetched origin/main" >&2

REF="origin/main"
ds_file() { git -C "$SCORP_DS_DIR" show "$REF:$1"; }

# Components mirrored from the DS (MusicPlayer is site-owned: it wears the
# DS pattern shell but keeps the site's real audio engine).
COMPONENTS=(Alert Avatar Badge BottomSheet Button Card CaseStudy Checkbox
  Divider Dropdown Input ListRow Modal Radio Select Slider Switch Table
  Tabs Textarea ThemeToggle Toast Tooltip TuiIcon)

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

# --- stage the token layer -------------------------------------------------
mkdir -p "$STAGE/vendor"
ds_file "packages/tokens/src/styles/tokens.css" > "$STAGE/vendor/tokens.css"
ds_file "packages/tokens/tailwind.preset.js" > "$STAGE/vendor/tailwind.preset.cjs"
git -C "$SCORP_DS_DIR" log --oneline -1 "$REF" > "$STAGE/vendor/VERSION"

# --- stage component sources with the Vite adaptations ---------------------
mkdir -p "$STAGE/ui"
for c in "${COMPONENTS[@]}"; do
  # Adaptations: no Node types in the app tsconfig, and cn lives at @/lib/utils
  ds_file "packages/components/src/components/$c.tsx" | sed \
    -e 's/process\.env\.NODE_ENV === "production"/import.meta.env.PROD/g' \
    -e 's/NodeJS\.Timeout/ReturnType<typeof setTimeout>/g' \
    -e 's|from "\.\./lib/utils"|from "@/lib/utils"|g' \
    > "$STAGE/ui/$c.tsx"
done

# --- diff or apply ---------------------------------------------------------
drift=0
compare_or_copy() {
  local staged="$1" target="$2"
  if [ "$MODE" = "check" ]; then
    if ! diff -q "$staged" "$target" >/dev/null 2>&1; then
      echo "drift   ${target#"$REPO_ROOT"/}"
      drift=1
    else
      echo "match   ${target#"$REPO_ROOT"/}"
    fi
  else
    cp "$staged" "$target"
  fi
}

compare_or_copy "$STAGE/vendor/tokens.css" "$REPO_ROOT/vendor/scorp-ds/tokens.css"
compare_or_copy "$STAGE/vendor/tailwind.preset.cjs" "$REPO_ROOT/vendor/scorp-ds/tailwind.preset.cjs"
for c in "${COMPONENTS[@]}"; do
  compare_or_copy "$STAGE/ui/$c.tsx" "$REPO_ROOT/src/components/ui/$c.tsx"
done

if [ "$MODE" = "check" ]; then
  # VERSION is informational; report it without counting it as drift
  if ! diff -q "$STAGE/vendor/VERSION" "$REPO_ROOT/vendor/scorp-ds/VERSION" >/dev/null 2>&1; then
    echo "note    vendor/scorp-ds/VERSION differs (source: $(cat "$STAGE/vendor/VERSION"))"
  fi
  if [ "$drift" -ne 0 ]; then
    echo "✗ DRIFT — run 'npm run vendor:ds' to re-sync" >&2
    exit 1
  fi
  echo "✓ IN SYNC — vendored DS matches $SCORP_DS_DIR"
else
  cp "$STAGE/vendor/VERSION" "$REPO_ROOT/vendor/scorp-ds/VERSION"
  echo "✓ vendored $(cat "$REPO_ROOT/vendor/scorp-ds/VERSION")"
  echo "Next: npm run build, review git diff, then commit."
fi
