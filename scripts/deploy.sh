#!/usr/bin/env bash
#
# deploy.sh — manual deploy to GitHub Pages.
#
# NOTE: the primary deployer is CI (.github/workflows/deploy.yml), which
# builds and publishes dist/ on every push to main. Use this script only
# when you need to push the site by hand (e.g. CI is down or you are
# testing an unmerged branch).
#
# The SPA 404 fallback (dist/404.html, a copy of index.html) is created by
# `npm run build` itself, so BOTH this script and the CI workflow ship it.
# It must exist because this is a BrowserRouter SPA on GitHub Pages: deep
# links like /components are served from 404.html, and without it every
# deep link and refresh hits GitHub's generic 404 page. This script
# verifies the fallback and refuses to publish without it.

set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Building (includes SPA 404 fallback)"
npm run build

if ! cmp -s dist/index.html dist/404.html; then
  echo "ERROR: dist/404.html is missing or does not match dist/index.html; refusing to deploy." >&2
  exit 1
fi

echo "==> Publishing dist/ to gh-pages"
npx gh-pages -d dist

echo "==> Deployed. Verify a deep link:"
echo "    https://sachahurley.github.io/scorpion-design-system/components"
