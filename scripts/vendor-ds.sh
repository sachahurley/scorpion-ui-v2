#!/usr/bin/env bash
#
# vendor-ds.sh [check]
#
# Re-vendors the merged Scorp DS visual language into this showcase:
#   1. vendor/scorp-ds/tokens.css + tailwind.preset.cjs  (token layer)
#   2. src/components/ui/<Component>.tsx                 (every component in
#      the COMPONENTS list below, with three mechanical Vite adaptations)
#   3. src/components/ui/Stack.tsx + src/lib/utils.ts    (barrel exports that
#      live outside components/: the Stack primitive and the cn() helper)
#      + src/lib/field.tsx (internal helper/error-text plumbing the form
#      components import)
#   4. vendor/scorp-ds/VERSION                           (source commit)
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
  Divider Dropdown Input Link ListRow Modal Radio Select Slider Switch Table
  Tabs Textarea ThemeToggle Toast Tooltip TuiIcon)

# Known deliberate forks — NOT synced, listed so every check run surfaces
# them as decisions rather than silent drift. Review each when its DS
# counterpart changes.
KNOWN_FORKS=(
  "src/components/ui/MusicPlayer.tsx — site-owned audio engine wearing the DS Patterns/MusicPlayer shell"
  "src/theme/ThemeProvider.tsx — hand-adapted DS ThemeProvider (drops enableSystem)"
)

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
    -e 's|from "\.\./lib/field"|from "@/lib/field"|g' \
    > "$STAGE/ui/$c.tsx"
done

# Barrel exports that live outside components/: the Stack primitive (same
# adaptations) and the cn() helper (copied verbatim so it stops being a
# by-luck-identical hand copy).
ds_file "packages/components/src/primitives/Stack.tsx" | sed \
  -e 's/process\.env\.NODE_ENV === "production"/import.meta.env.PROD/g' \
  -e 's/NodeJS\.Timeout/ReturnType<typeof setTimeout>/g' \
  -e 's|from "\.\./lib/utils"|from "@/lib/utils"|g' \
  > "$STAGE/ui/Stack.tsx"
mkdir -p "$STAGE/lib"
ds_file "packages/components/src/lib/utils.ts" > "$STAGE/lib/utils.ts"
# field.tsx imports DS components relative to src/lib; here components live
# under src/components/ui, so point those imports at the @/ alias.
ds_file "packages/components/src/lib/field.tsx" | sed \
  -e 's|from "\.\./components/\([A-Za-z]*\)"|from "@/components/ui/\1"|g' \
  > "$STAGE/lib/field.tsx"

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
compare_or_copy "$STAGE/ui/Stack.tsx" "$REPO_ROOT/src/components/ui/Stack.tsx"
compare_or_copy "$STAGE/lib/utils.ts" "$REPO_ROOT/src/lib/utils.ts"
compare_or_copy "$STAGE/lib/field.tsx" "$REPO_ROOT/src/lib/field.tsx"

if [ "$MODE" = "check" ]; then
  for f in "${KNOWN_FORKS[@]}"; do
    echo "fork    $f"
  done
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
