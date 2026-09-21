/**
 * HOME PAGE
 *
 * Clean, minimal introduction to Scorpion Design System
 * Features animated hero, three "what's inside" cards pointing at the
 * deployed Storybook (the system's reference docs), and two feature cards
 * for the Essay and Case Study pages
 * All cards match the exact styling from the rest of the site
 */

import { Link as RouterLink } from "react-router-dom";
import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";

// The deployed Storybook: the system's reference documentation.
// Deep links use the docs page ids from the Storybook build (autodocs).
const STORYBOOK_URL = "https://sachahurley.github.io/scorp-ds/";
const STORYBOOK_TOKENS_URL = `${STORYBOOK_URL}?path=/docs/foundation-colors--docs`;
const STORYBOOK_COMPONENTS_URL = `${STORYBOOK_URL}?path=/docs/components-actions-button--docs`;
const STORYBOOK_THEME_URL = `${STORYBOOK_URL}?path=/docs/components-theme-themetoggle--docs`;

export default function Home() {
  return (
    <div className="container mx-auto pb-5 lg:pb-20">
        {/* Hero Section - Unified Responsive Logo Lockup */}
        <section className="mb-6 lg:mb-10 mt-5 lg:mt-10 px-5 lg:px-10">
          {/*
            Hero Layout - Scorpion-Driven Scaling:
            - Container height is determined by the Scorpion graphic's aspect ratio
            - Scorpion graphic sizes itself based on available width (respects padding)
            - Scorpion maintains its aspect ratio (2924:521) - very wide, short
            - Torches scale to match the Scorpion's height proportionally
            - Torches maintain their aspect ratio (304:721) - very tall, narrow
            - justify-between: Pushes torches to left/right edges, scorpion fills middle
            - All three elements scale together as viewport changes
            - Result: Torches at edges match Scorpion height, all scale proportionally
          */}
          {/* Wrapper establishes height based on Scorpion's aspect ratio and available width */}
          <div
            className="w-full"
            style={{
              aspectRatio: '2924 / 521'
            }}
          >
            <div className="flex items-center w-full h-full min-w-0">
              {/* Left Torch - Scales to match container height, maintains 304:721 aspect ratio */}
              <img
                src={ASSETS.torch001}
                alt="Torch"
                className="h-full w-auto shrink-0"
                style={{
                  aspectRatio: '304 / 721'
                }}
              />

              {/* Spacer - Right of left torch */}
              <div className="w-4 lg:w-8 shrink-0"></div>

              {/* Scorpion Design System Graphic - Fills available width, height matches container */}
              {/* Aspect ratio: 2924:521 (very wide, short) */}
              <div className="flex-1 min-w-0 flex items-center justify-center h-full">
                <img
                  src={ASSETS.scorpionUIGraphic3b}
                  alt="Scorpion Design System"
                  className="w-full h-full object-contain block dark:hidden"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(10%) sepia(21%) saturate(939%) hue-rotate(344deg) brightness(94%) contrast(91%)'
                  }}
                />
                <img
                  src={ASSETS.scorpionUIGraphic3b}
                  alt="Scorpion Design System"
                  className="w-full h-full object-contain block hidden dark:block"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(99%) sepia(7%) saturate(221%) hue-rotate(328deg) brightness(104%) contrast(96%)'
                  }}
                />
              </div>

              {/* Spacer - Left of right torch */}
              <div className="w-4 lg:w-8 shrink-0"></div>

              {/* Right Torch - Scales to match container height, maintains 304:721 aspect ratio */}
              <img
                src={ASSETS.torch001}
                alt="Torch"
                className="h-full w-auto shrink-0"
                style={{
                  aspectRatio: '304 / 721'
                }}
              />
            </div>
          </div>
        </section>

        {/* Subtitle - Short description */}
        <section className="mb-6 mx-5 lg:mx-10">
          <p className="font-mono text-base lg:text-2xl text-[var(--text-primary)] leading-relaxed">
            A working example of implementing a design system with AI tools: tokens first, React and TypeScript, every rule written for agents.
          </p>
        </section>

        {/*
          Action Buttons Section
          - Primary button: Opens the deployed Storybook (the full reference docs)
          - Secondary button: Links to GitHub repository (external arrow indicates new tab)
          - 32px bottom margin on mobile creates breathing room before feature cards
          - Button spacing: 8px gap between primary and secondary on desktop, stacked on mobile
        */}
        <section className="mb-8 mx-5 lg:mx-10">
          {/* Flex container: stacked vertically on mobile, side-by-side on desktop */}
          <div className="flex flex-col lg:flex-row gap-2">
            <Button
              variant="primary"
              size="large"
              href={STORYBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto"
            >
              Browse Storybook
              {/* External link icon - indicates opens in new tab */}
              <svg
                className="inline-block w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
            <Button
              variant="secondary"
              size="large"
              href="https://github.com/sachahurley/scorpion-design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto"
            >
              View on GitHub
              {/* External link icon - indicates opens in new tab */}
              <svg
                className="inline-block w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </div>
        </section>

        {/* Three "What's Inside" Cards in a Row - each links into the Storybook reference docs */}
        <section className="mb-5 px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {/* Card 1: Design Tokens */}
            <Card>
              <div>
                {/* ColorSync Utility Icon - switches between light/dark */}
                <div className="mb-4">
                  <img
                    src={ASSETS.icons.colorSyncLight}
                    alt="Design Tokens"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img
                    src={ASSETS.icons.colorSyncDark}
                    alt="Design Tokens"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-[var(--text-primary)] mb-2">Design Tokens</h3>
                <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">
                  A growing token system starting with colors and typography. All tokens are defined in JSON and automatically converted to CSS variables, making them work seamlessly with Tailwind.
                </p>
                <Link href={STORYBOOK_TOKENS_URL} external className="text-sm">
                  Browse tokens in Storybook
                </Link>
              </div>
            </Card>

            {/* Card 2: Components */}
            <Card>
              <div>
                {/* Automator Icon - switches between light/dark */}
                <div className="mb-4">
                  <img
                    src={ASSETS.icons.automatorLight}
                    alt="Components"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img
                    src={ASSETS.icons.automatorDark}
                    alt="Components"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-[var(--text-primary)] mb-2">Components</h3>
                <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">
                  React components built strictly from design tokens. Currently includes buttons and UI primitives, with more components being added as the system grows into a complete library.
                </p>
                <Link href={STORYBOOK_COMPONENTS_URL} external className="text-sm">
                  Browse components in Storybook
                </Link>
              </div>
            </Card>

            {/* Card 3: Theme System */}
            <Card>
              <div>
                {/* System Preferences Icon - switches between light/dark */}
                <div className="mb-4">
                  <img
                    src={ASSETS.icons.systemPrefsLight}
                    alt="Theme System"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img
                    src={ASSETS.icons.systemPrefsDark}
                    alt="Theme System"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-[var(--text-primary)] mb-2">Theme System</h3>
                <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">
                  Fully functional light and dark modes with smooth transitions. Every design token adapts automatically to the selected theme, ensuring consistent styling across all components.
                </p>
                <Link href={STORYBOOK_THEME_URL} external className="text-sm">
                  Browse theming in Storybook
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Two Feature Cards - the site's own long-form pages */}
        <section className="mb-10 px-5 lg:px-10">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Card 4: Essay */}
            <Card>
              <div>
                {/* Notes Icon - switches between light/dark */}
                <div className="mb-4">
                  <img
                    src={ASSETS.icons.notesLight}
                    alt="Essay"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img
                    src={ASSETS.icons.notesDark}
                    alt="Essay"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-[var(--text-primary)] mb-2">Essay</h3>
                <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">
                  Design Systems for AI-First Product Development: why design-system-first is essential when AI agents build the product, and two workflows for getting there.
                </p>
                <Link as={RouterLink} asProps={{ to: "/essay" }} className="text-sm">
                  Read the essay
                </Link>
              </div>
            </Card>

            {/* Card 5: Case Study */}
            <Card>
              <div>
                {/* Books Icon - switches between light/dark */}
                <div className="mb-4">
                  <img
                    src={ASSETS.icons.booksLight}
                    alt="Case Study"
                    className="w-12 h-12 block dark:hidden"
                  />
                  <img
                    src={ASSETS.icons.booksDark}
                    alt="Case Study"
                    className="w-12 h-12 hidden dark:block"
                  />
                </div>
                <h3 className="text-sm font-mono text-[var(--text-primary)] mb-2">Case Study</h3>
                <p className="text-sm font-mono text-secondary-800 dark:text-secondary-500 mb-4">
                  Building the Scorpion Design System: tokens-first architecture, a TUI identity applied without exceptions, and AI agents working inside written rules.
                </p>
                <Link as={RouterLink} asProps={{ to: "/case-study" }} className="text-sm">
                  Read the case study
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer links - GitHub + Storybook */}
        <section className="px-5 lg:px-10">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="https://github.com/sachahurley/scorpion-design-system" external className="text-sm">
              GitHub
            </Link>
            <Link href={STORYBOOK_URL} external className="text-sm">
              Storybook
            </Link>
          </div>
        </section>
    </div>
  );
}
