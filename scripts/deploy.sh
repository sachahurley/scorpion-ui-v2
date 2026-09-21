#!/usr/bin/env bash
#
# deploy.sh
#
# The ONE way to deploy this site to GitHub Pages. Builds, creates the SPA
# 404 fallback, refuses to publish without it, then pushes dist/ to the
# gh-pages branch.
#
# Why the fallback matters: this is a BrowserRouter SPA on GitHub Pages.
# Pages only knows about real files, so a deep link like /components is
# served from 404.html, which must be a copy of index.html for the app to
# boot and render the route client-side. A deploy that skips the copy
# (e.g. running `npx gh-pages -d dist` by hand) breaks every deep link
# and refresh, which is exactly what happened once before. Always run
# `npm run deploy`; never invoke gh-pages directly.

set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Building"
npm run build

echo "==> Creating SPA 404 fallback"
cp dist/index.html dist/404.html

if ! cmp -s dist/index.html dist/404.html; then
  echo "ERROR: dist/404.html does not match dist/index.html; refusing to deploy." >&2
  exit 1
fi

echo "==> Publishing dist/ to gh-pages"
npx gh-pages -d dist

echo "==> Deployed. Verify a deep link:"
echo "    https://sachahurley.github.io/scorpion-design-system/components"
