/**
 * HOME PAGE
 * 
 * Clean, minimal introduction to Scorpion UI v2
 * Features animated hero, three feature cards, and about card
 * All cards match the exact styling from other token pages
 */

import { useState } from "react";
import { ASSETS } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export default function Home() {
  // STATE: Controls whether the "About This Project" modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container mx-auto pb-5 lg:pb-20">
        {/* Hero Section - Graphic with smaller margins for optical alignment */}
        <section className="mb-0 mx-3 lg:mx-6 mt-5 lg:mt-10">
          {/* 
            Scorpion UI Graphic 3b:
            - Hero graphic with no animation
            - 40px margin on top, left, and right (mx-10 mt-10 = 40px)
            - Responsive and scales with viewport
            - Light mode: sepia-900 (#2B2718 - dark warm)
            - Dark mode: sepia-50 (#FDFCFB - light warm)
          */}
          <div className="relative w-full">
            {/* Light mode version - sepia-900 tint */}
            <img 
              src={ASSETS.scorpionUIGraphic3b}
              alt="Scorpion UI"
              className="w-full block dark:hidden"
              style={{
                filter: 'brightness(0) saturate(100%) invert(10%) sepia(21%) saturate(939%) hue-rotate(344deg) brightness(94%) contrast(91%)'
              }}
            />
            {/* Dark mode version - sepia-50 tint */}
            <img 
              src={ASSETS.scorpionUIGraphic3b}
              alt="Scorpion UI"
              className="w-full block hidden dark:block"
              style={{
                filter: 'brightness(0) saturate(100%) invert(99%) sepia(7%) saturate(221%) hue-rotate(328deg) brightness(104%) contrast(96%)'
              }}
            />
          </div>
        </section>

        {/* Subtitle - Short description */}
        <section className="mb-6 mx-5 lg:mx-10">
          <p className="font-mono text-base lg:text-2xl text-sepia-900 dark:text-sepia-50 leading-relaxed">
            A token-based design system for learning React, TypeScript, and modern UI architecture.
          </p>
        </section>

        {/* 
          Action Buttons Section
          - Primary button: Opens modal with project philosophy and approach (document icon indicates content overlay)
          - Secondary button: Links to GitHub repository (external arrow indicates new tab)
          - Larger bottom margin (64px) creates breathing room before feature cards
          - Button spacing: 8px gap between primary and secondary
        */}
        <section className="mb-16 mx-5 lg:mx-10">
          <div className="flex gap-2">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Design Philosophy
              {/* Document icon - indicates readable content in modal */}
              <svg 
                className="inline-block w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => window.open('https://github.com/sachahurley/scorpion-ui-v2', '_blank')}
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

        {/* Three Feature Cards in a Row */}
        <section className="mb-10 px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {/* Card 1: Design Tokens */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
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
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Design Tokens</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  A growing token system starting with colors and typography. All tokens are defined in JSON and automatically converted to CSS variables, making them work seamlessly with Tailwind.
                </p>
              </div>
            </div>

            {/* Card 2: Components */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
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
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Components</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  React components built strictly from design tokens. Currently includes buttons and UI primitives, with more components being added as the system grows into a complete library.
                </p>
              </div>
            </div>

            {/* Card 3: Theme System */}
            <div className="bg-[var(--surface-card)] border-[0.5px] border-solid border-sepia-500 dark:border-sepia-800 rounded-[24px] p-8">
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
                <h3 className="text-sm font-mono text-sepia-900 dark:text-sepia-50 mb-2">Theme System</h3>
                <p className="text-sm font-mono text-sepia-600 dark:text-sepia-400">
                  Fully functional light and dark modes with smooth transitions. Every design token adapts automatically to the selected theme, ensuring consistent styling across all components.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 
          DESIGN PHILOSOPHY MODAL
          - Opens when "Design Philosophy" button is clicked
          - Displays detailed information about design systems for AI-first development
          - 740px wide, max 80vh height
          - Scrollable content with fixed header
        */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Design Philosophy"
        >
          {/* Modal content styled with design tokens */}
          <div className="font-mono text-sepia-900 dark:text-sepia-50">
            
            {/* Main heading */}
            <h1 className="text-xl font-medium mb-6">Design Systems for AI-First Product Development</h1>
            
            {/* The Philosophy section */}
            <h2 className="text-base font-medium mb-3 mt-8">The Philosophy</h2>
            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              As product design evolves with AI-first tools, <strong className="text-sepia-900 dark:text-sepia-50">design-system-first has become essential, not optional</strong>. The quality of your input—whether design tokens in Figma or a code-based design system—directly determines the quality and accuracy of AI-generated outputs. Pixel-perfect products require systematic, high-quality foundations that AI agents can reliably draw from.
            </p>

            {/* The Challenge section */}
            <h2 className="text-base font-medium mb-3 mt-8">The Challenge</h2>
            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              Most teams face one of these scenarios:
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>No design system exists</li>
              <li>Design system only exists in code</li>
              <li>Robust systems exist in both Figma and code, but they're disconnected—creating a gap between what designers make and what gets implemented</li>
            </ul>

            {/* Approach 1 section */}
            <h2 className="text-base font-medium mb-3 mt-8">Approach 1: Zero to One (No Design System)</h2>
            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">Foundation First</strong>: Establish a three-layer design token system covering:
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Base colors → Semantic colors</li>
              <li>Typography</li>
              <li>Spacing and corner radius</li>
              <li>Surface colors (page, container, card, button, etc.)</li>
            </ul>

            <h3 className="text-base font-medium mb-3 mt-6">The Workflow</h3>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">1. Start with Established Foundations</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Leverage existing frameworks like Tailwind colors as your starting point</li>
              <li>Build base colors first, then semantic colors, then typography</li>
              <li>Create documentation simultaneously—you're designing and maintaining the design system hand-in-hand</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">2. The Cursor → Figma → Cursor Loop</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Use Cursor agents to generate HTML documentation pages expressing your design tokens (e.g., "bring in Tailwind amber colors")</li>
              <li>Use an HTML-to-Figma plugin to pull these components into Figma</li>
              <li>In Figma, refine the visual expression and tokenize elements (e.g., color swatches for amber 100-950)</li>
              <li>Use Figma MCP to create a link to your refined design</li>
              <li>Paste the link in Cursor and instruct the agent to replace the initial documentation with pixel-perfect implementation from your Figma design</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">3. Create Your Token Naming Structure</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Once you have a rough skeleton, document every token in your foundational structure:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Base colors → Semantic colors</li>
                  <li>Radius variables (e.g., 0-32)</li>
                  <li>Containers, hover states, all foundational elements</li>
                </ul>
              </li>
              <li>Use Claude (or your preferred LLM) to help establish consistent naming conventions</li>
              <li>Generate a <strong className="text-sepia-900 dark:text-sepia-50">markdown file</strong> containing your complete token naming system</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">4. Integrate the Naming System into Your Workflow</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Add the markdown file to your Cursor project</li>
              <li>Paste it into chat and explain your design system structure to the agent</li>
              <li>This file becomes your <strong className="text-sepia-900 dark:text-sepia-50">comparison tool</strong> and source of truth</li>
              <li>As you build components (buttons, inputs, etc.), ensure the code uses accurate token names</li>
              <li>Perform code reviews: map each new page against your markdown naming file to catch inconsistencies</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">5. Build with Precision</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>As you add components, make sure token names are embedded in the page construction</li>
              <li>This enables precise communication: "Change button radius from `radius-sm` to `radius-md`"</li>
              <li>For complex tokens (e.g., primary button hover states), exact naming lets you communicate changes clearly and accurately</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">Critical Step</strong>: Your documentation must show:
            </p>
            <ol className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-decimal pl-5 space-y-1">
              <li>The visual expression of each token</li>
              <li>The exact naming convention</li>
            </ol>
            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              This documentation becomes your <strong className="text-sepia-900 dark:text-sepia-50">controlled palette</strong>—the guardrails that constrain what AI agents can use when generating product flows.
            </p>

            {/* Approach 2 section */}
            <h2 className="text-base font-medium mb-3 mt-8">Approach 2: Existing Code Token System (No Visual Documentation)</h2>
            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">The Reality</strong>: A design token system exists in code, but there's no visual documentation for designers to reference. Designers can't see what tokens exist or how they're expressed visually.
            </p>

            <h3 className="text-base font-medium mb-3 mt-6">The Workflow</h3>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">1. Extract the Existing Token System</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Dive into the codebase and pull out all existing design tokens</li>
              <li>Document the complete token structure:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Base colors and semantic colors</li>
                  <li>Typography scales and weights</li>
                  <li>Spacing and radius values</li>
                  <li>Component-specific tokens (buttons, inputs, cards, etc.)</li>
                </ul>
              </li>
              <li>Create a comprehensive <strong className="text-sepia-900 dark:text-sepia-50">markdown file</strong> listing every token name and its value</li>
              <li>This is your learning tool—you're adopting the company's existing naming conventions</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">2. Build Visual Documentation Using Existing Tokens</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Use Cursor agents to generate HTML documentation pages</li>
              <li>Critical: Instruct agents to use <strong className="text-sepia-900 dark:text-sepia-50">only the extracted tokens</strong> from the existing system</li>
              <li>Build documentation pages for each token category (colors, typography, spacing, components)</li>
              <li>Ensure every visual element displays both:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>The visual expression of the token</li>
                  <li>The exact token name from the existing system</li>
                </ul>
              </li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">3. The Cursor → Figma → Cursor Loop (Learning the System)</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Use Cursor to express the existing tokens in HTML documentation</li>
              <li>Use HTML-to-Figma plugin to pull these documented components into Figma</li>
              <li>In Figma, refine the visual presentation (but keep the token names consistent with code)</li>
              <li>Create color swatches, type specimens, component examples—all labeled with the existing token names</li>
              <li>Use Figma MCP to create links to your refined documentation design</li>
              <li>Feed these back to Cursor to update the documentation pixel-perfectly</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">4. Internalize the Naming Conventions</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>As you document each component, you're learning how the company names things</li>
              <li>Your markdown file becomes the bridge between code and visual documentation</li>
              <li>Paste this file into Cursor chat as your reference</li>
              <li>When building new pages or components, always reference existing token names</li>
              <li>Perform code reviews: map your work against the markdown file to ensure you're using company conventions correctly</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">5. Document as You Learn</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Start with foundational tokens (colors, typography, spacing)</li>
              <li>Move to component tokens (buttons, inputs, cards)</li>
              <li>Then document complex interactions (hover states, focus states, disabled states)</li>
              <li>Each documentation page you build teaches you more about the system's logic and naming patterns</li>
              <li>The documentation you create becomes the visual reference designers have been missing</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-2 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">6. Maintain Token Accuracy</strong>
            </p>
            <ul className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed list-disc pl-5 space-y-1">
              <li>Ensure all documentation code uses the actual token names from the codebase</li>
              <li>This enables precise communication: "Change the button to use `color-primary-600` instead of `color-primary-500`"</li>
              <li>As you document more components, you build fluency in the company's design language</li>
              <li>The visual documentation bridges the gap between what exists in code and what designers need to see</li>
            </ul>

            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              <strong className="text-sepia-900 dark:text-sepia-50">The Key Difference</strong>: You're not creating a new system—you're making the existing system visible and learnable. By pulling tokens from code and documenting them visually, you create the missing bridge between engineering and design while adopting the company's established conventions.
            </p>

            {/* The Payoff section */}
            <h2 className="text-base font-medium mb-3 mt-8">The Payoff</h2>
            <p className="text-base text-sepia-600 dark:text-sepia-400 mb-4 leading-relaxed">
              A well-documented design system with accurate token naming allows you to rapidly assemble components when working with AI agents, ensuring consistency and quality while dramatically accelerating development speed. The bidirectional workflow between Figma and code, anchored by your markdown naming system, keeps design and implementation synchronized from day one.
            </p>
          </div>
        </Modal>
    </div>
  );
}

