# Scorpion UI Design Token Naming System

**Version:** 2.3  
**Purpose:** Reference guide for AI agents and developers working on the Scorpion UI project  
**Token File Location:** `src/tokens/tokens.json`  
**Last Updated:** October 15, 2025

---

## 🚨 CRITICAL RULES FOR AI AGENTS

**These rules are NON-NEGOTIABLE and must be followed for every implementation:**

### Rule 1: Automatic Dark Mode (No Exceptions)

**EVERY new component MUST have both light AND dark theme tokens implemented simultaneously.**

- ✅ When creating any new component, define tokens in both `light` and `dark` objects
- ✅ Both themes should be visible and functional during development
- ✅ It's acceptable if exact token values need refinement later
- ❌ NEVER create a component that exists in only one theme
- ❌ NEVER defer dark mode implementation to "later"

**Example:**
```json
// ✅ CORRECT - Both themes defined together
"light": {
  "card": {
    "background": { "$value": "{color.white}", "$type": "color" }
  }
},
"dark": {
  "card": {
    "background": { "$value": "{color.sepia.800}", "$type": "color" }
  }
}

// ❌ WRONG - Only light theme defined
"light": {
  "card": {
    "background": { "$value": "{color.white}", "$type": "color" }
  }
}
// Missing dark theme - THIS IS NOT ALLOWED
```

### Rule 2: Naming Consistency Across All Sources

**Token names must be IDENTICAL in all three locations:**

1. **JSON Token File** (`src/tokens/tokens.json`)
2. **Documentation Website** (all docs pages)
3. **UI Implementation** (actual component code)

**Why this matters:**
- Prevents confusion between documented vs. implemented tokens
- Makes the system predictable and reliable
- Allows AI agents to reference documentation with confidence
- Ensures developers and designers speak the same language

**Process for any token name change:**
1. Update the JSON token file (`src/tokens/tokens.json`)
2. Update all documentation pages
3. Update all component implementations
4. Verify consistency across all three sources

**Verification Questions:**
- Does the token name in the docs match the JSON exactly?
- Can I find this exact token name in the implementation?
- Are there any aliases or variations that could cause confusion?

### Rule 3: Implementation Standard (CSS Variables vs Tailwind Classes)

**This project uses a HYBRID APPROACH - see detailed section below for complete guide.**

**Quick Rule:**
- ✅ Theme tokens (surface, text, buttons, elevation) → Use CSS variables: `bg-[var(--surface-card)]`
- ✅ Specific color shades (success, error, semantic colors) → Use direct Tailwind: `bg-success-500`

**Why this matters:**
- Ensures consistent implementation across all components
- Makes theme switching automatic and reliable
- Provides clear guidance for AI agents and developers
- Balances maintainability with code readability

👉 **See "Implementation Standard" section below for complete decision tree and examples.**

---

## Overview

Scorpion UI uses a **three-tier token architecture** that follows the W3C Design Tokens specification:

1. **Base Tokens (Global)** → Primitive values that never reference other tokens
2. **Semantic Tokens (Global)** → Purpose-driven tokens that reference base tokens
3. **Theme Tokens (Light/Dark)** → Context-specific tokens that reference semantic or base tokens

All tokens use the format:
```json
{
  "$value": "value or {reference}",
  "$type": "tokenType"
}
```

---

## Token Hierarchy & Naming Conventions

### 1. Base Tokens (Global)

**Location:** `global` object in `src/tokens/tokens.json`  
**Purpose:** Foundation colors and properties that never reference other tokens

#### Base Color Scales
**Pattern:** `color.{scale}.{step}`

**Available Scales:**
- `color.amber.{50-950}` — Primary brand color scale (11 steps)
- `color.sepia.{50-950}` — Neutral gray scale (11 steps)
- `color.green.{50-950}` — Success/positive scale (11 steps)
- `color.blue.{50-950}` — Informational scale (11 steps)
- `color.purple.{50-950}` — Warning scale (11 steps)
- `color.red.{50-950}` — Error/destructive scale (11 steps)

**Special Colors:**
- `color.black` — Pure black (#000000)
- `color.white` — Pure white (#FFFFFF)

**Example:**
```
color.amber.500 → #F59E0B
color.sepia.900 → #2B2718
```

#### Typography Tokens
**Pattern:** `font.{category}.{name}`

**Font Families:**
```
font.family.mono → "Fragment Mono"
```

**Font Sizes:**
```
font.size.xs   → 12px
font.size.sm   → 14px
font.size.base → 16px
font.size.lg   → 18px
font.size.xl   → 20px
font.size.2xl  → 24px
```

#### Border Radius
**Pattern:** `radius.{context}`

```
radius.button    → 12px
radius.container → 24px
```

---

### 2. Semantic Color Tokens (Global)

**Location:** `global.color` object in `src/tokens/tokens.json`  
**Purpose:** Semantic meaning mapped to base color scales  
**Pattern:** `color.{semantic}.{step}`

**Available Semantic Colors:**
- `color.primary.{50-950}` → References `color.amber.{*}`
- `color.secondary.{50-950}` → References `color.sepia.{*}`
- `color.success.{50-950}` → References `color.green.{*}`
- `color.info.{50-950}` → References `color.blue.{*}`
- `color.warning.{50-950}` → References `color.purple.{*}`
- `color.error.{50-950}` → References `color.red.{*}`

**Example:**
```json
"color.primary.500": {
  "$value": "{color.amber.500}",
  "$type": "color"
}
```

**Usage:** Use semantic tokens in theme tokens, not base tokens. This allows the entire system to be rebranded by changing only the semantic mappings.

---

### 3. Theme Tokens (Light/Dark)

**Location:** `light` and `dark` objects in `src/tokens/tokens.json`  
**Purpose:** Theme-specific implementations that reference semantic or base tokens

---

## 🎯 Implementation Standard: When to Use CSS Variables vs Tailwind Classes

**This project uses a HYBRID APPROACH for optimal maintainability and clarity.**

### ✅ USE CSS Variables for Theme Tokens

**Rule:** If the token exists in the `light` or `dark` theme objects, use CSS variables.

**Syntax:** `bg-[var(--token-name)]` or `text-[var(--token-name)]`

**Use for:**
- **Surfaces:** `bg-[var(--surface-card)]`, `bg-[var(--surface-page)]`, `bg-[var(--surface-container)]`
- **Text:** `text-[var(--text-primary)]`, `text-[var(--text-secondary)]`
- **Borders:** `border-[var(--surface-container-stroke)]`
- **Buttons:** `bg-[var(--button-primary-bg)]`, `hover:bg-[var(--button-primary-bg-hover)]`
- **Elevation:** `shadow-[var(--elevation-1-shadow)]`, `border-[var(--elevation-1-border)]`

**Example:**
```tsx
// ✅ CORRECT - Uses theme tokens via CSS variables
<div className="bg-[var(--surface-card)] text-[var(--text-primary)] border-[var(--surface-container-stroke)]">
  Card content
</div>
```

**Why:** These tokens change between light/dark themes. Using CSS variables ensures automatic theme switching and maintains a single source of truth.

### ✅ USE Direct Tailwind Classes for Base & Semantic Colors

**Rule:** If you need a specific color shade from the base or semantic scales, use direct Tailwind classes.

**Syntax:** `bg-{color}-{shade}` or `text-{color}-{shade}`

**Use for:**
- **Semantic colors:** `bg-success-500`, `text-error-600`, `border-warning-400`
- **Specific shades:** `bg-amber-100`, `text-sepia-600`, `hover:bg-amber-200`
- **Fixed colors:** `bg-white`, `bg-black`, `text-white`

**Example:**
```tsx
// ✅ CORRECT - Uses direct Tailwind for specific color needs
<div className="bg-success-100 text-success-800 border-success-500">
  Success message
</div>

// ✅ CORRECT - Uses specific shade for hover effect
<button className="bg-amber-400 hover:bg-amber-500">
  Click me
</button>
```

**Why:** Direct Tailwind classes are cleaner for specific color needs and provide better autocomplete/readability when you need a particular shade.

### ❌ INCORRECT Examples

```tsx
// ❌ WRONG - Should use CSS variable for theme token
<div className="bg-sepia-50 dark:bg-sepia-1000">  
  // This hardcodes theme colors instead of using --surface-page
</div>

// ✅ CORRECT VERSION
<div className="bg-[var(--surface-page)]">
  // Automatically switches between themes
</div>

// ❌ WRONG - Should use direct Tailwind for semantic color
<div className="bg-[var(--color-success-500)]">  
  // This CSS variable doesn't exist
</div>

// ✅ CORRECT VERSION
<div className="bg-success-500">
  // Uses Tailwind's configured color scale
</div>
```

### Quick Decision Tree

```
Do you need a color/style that changes with theme (light/dark)?
├─ YES → Use CSS variable: `bg-[var(--surface-card)]`
└─ NO → Is it a specific color shade you need?
   ├─ YES → Use direct Tailwind: `bg-success-500`
   └─ NO → Consider if you need a new theme token
```

---

#### Surface Tokens
**Pattern:** `{theme}.surface.{property}`

**Light Theme:**
```
light.surface.page              → {color.sepia.50}
light.surface.container         → {color.sepia.50}
light.surface.card              → {color.white}
light.surface.container-stroke  → {color.sepia.500}
```

**Dark Theme:**
```
dark.surface.page              → {color.sepia.1000}
dark.surface.container         → {color.sepia.1000}
dark.surface.card              → {color.sepia.975}
dark.surface.container-stroke  → {color.sepia.800}
```

#### Elevation Tokens (Shadows & Borders)
**Pattern:** `{theme}.elevation.{level}.{property}`

**Purpose:** Apple-inspired elevation system for cards, modals, and elevated UI elements. Dark mode uses subtle shadows with light borders for better depth perception.

**Levels:** `0`, `1`, `2`, `3`  
**Properties:** `shadow`, `border`

**Light Theme:**
```
light.elevation.0.shadow  → none (flat, no elevation)
light.elevation.0.border  → transparent

light.elevation.1.shadow  → 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)
light.elevation.1.border  → {color.sepia.200}

light.elevation.2.shadow  → 0 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.10)
light.elevation.2.border  → {color.sepia.300}

light.elevation.3.shadow  → 0 10px 40px rgba(0,0,0,0.20), 0 4px 8px rgba(0,0,0,0.12)
light.elevation.3.border  → {color.sepia.300}
```

**Dark Theme (Apple's Approach):**
```
dark.elevation.0.shadow  → none (flat, no elevation)
dark.elevation.0.border  → transparent

dark.elevation.1.shadow  → 0 2px 8px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)
dark.elevation.1.border  → rgba(255, 255, 255, 0.08)

dark.elevation.2.shadow  → 0 4px 16px rgba(0,0,0,0.5), 0 2px 0 rgba(255,255,255,0.08)
dark.elevation.2.border  → rgba(255, 255, 255, 0.10)

dark.elevation.3.shadow  → 0 8px 32px rgba(0,0,0,0.6), 0 2px 0 rgba(255,255,255,0.10)
dark.elevation.3.border  → rgba(255, 255, 255, 0.12)
```

**Usage Guidelines:**
- **Level 0:** Flat elements (no shadow needed)
- **Level 1:** Default cards, containers (subtle elevation)
- **Level 2:** Dropdowns, popovers, hover states (medium elevation)
- **Level 3:** Modals, dialogs, tooltips (high elevation)

**Dark Mode Features:**
- Layered shadows (dark + light highlight)
- Light borders for edge definition
- Increased blur radius for softer appearance
- Subtle top highlight simulates "light from above"

#### Text Tokens
**Pattern:** `{theme}.text.{hierarchy}`

**Light Theme:**
```
light.text.primary   → {color.sepia.900}
light.text.secondary → {color.sepia.600}
```

**Dark Theme:**
```
dark.text.primary   → {color.sepia.50}
dark.text.secondary → {color.sepia.400}
```

#### Component Tokens
**Pattern:** `{theme}.{component}.{variant}.{property}.{state?}`

##### Button Tokens

**Variants:** `primary`, `secondary`  
**Properties:** `background`, `background-hover`, `text`

**Light Theme Examples:**
```
light.button.primary.background       → {color.sepia.900}
light.button.primary.background-hover → {color.sepia.800}
light.button.primary.text             → {color.white}

light.button.secondary.background       → {color.amber.200}
light.button.secondary.background-hover → {color.amber.300}
light.button.secondary.text             → {color.sepia.900}
```

**Dark Theme Examples:**
```
dark.button.primary.background       → {color.amber.400}
dark.button.primary.background-hover → {color.amber.500}
dark.button.primary.text             → {color.black}

dark.button.secondary.background       → {color.sepia.700}
dark.button.secondary.background-hover → {color.sepia.600}
dark.button.secondary.text             → {color.sepia.50}
```

##### Button Size Tokens

**Pattern:** `{theme}.button.size.{size}.{property}`

**Sizes:** `small`, `medium`, `large`  
**Properties:** `height`, `padding-x`, `padding-y`

**Size Specifications (same for both themes):**
```
button.size.small.height     → 32px
button.size.small.padding-x  → 16px
button.size.small.padding-y  → 6px

button.size.medium.height    → 40px
button.size.medium.padding-x → 20px
button.size.medium.padding-y → 10px

button.size.large.height     → 48px
button.size.large.padding-x  → 24px
button.size.large.padding-y  → 14px
```

---

## Token Naming Rules for AI Agents

### ✅ DO:

1. **Always reference tokens, never hardcode values** in theme layers
   ```json
   // ✅ GOOD
   "light.surface.page": {
     "$value": "{color.amber.50}",
     "$type": "color"
   }
   
   // ❌ BAD
   "light.surface.page": {
     "$value": "#FFFBEB",
     "$type": "color"
   }
   ```

2. **Use semantic tokens in theme tokens** when possible
   ```json
   // ✅ GOOD
   "light.button.primary.background": {
     "$value": "{color.primary.500}",
     "$type": "color"
   }
   ```

3. **Follow the established naming patterns:**
   - Use lowercase
   - Use hyphens for multi-word properties (e.g., `background-hover`, `container-stroke`)
   - Use dots (.) to separate hierarchy levels
   - Use consistent terminology across components

4. **Match the token type to the value:**
   - Colors: `$type: "color"`
   - Font families: `$type: "fontFamilies"`
   - Font sizes: `$type: "fontSizes"`
   - Spacing: `$type: "spacing"`
   - Sizing: `$type: "sizing"`
   - Border radius: `$type: "borderRadius"`

### ❌ DON'T:

1. **Don't create base tokens that reference other tokens**
   ```json
   // ❌ BAD - Base tokens should be primitives
   "global.color.amber.500": {
     "$value": "{color.amber.400}",
     "$type": "color"
   }
   ```

2. **Don't skip the hierarchy**
   ```json
   // ❌ BAD - Theme token referencing base instead of semantic
   "light.button.success.background": {
     "$value": "{color.green.500}"
   }
   
   // ✅ GOOD - Use semantic layer
   "light.button.success.background": {
     "$value": "{color.success.500}"
   }
   ```

3. **Don't use inconsistent naming conventions**
   ```json
   // ❌ BAD
   "light.btn-primary-bg-hover"
   
   // ✅ GOOD
   "light.button.primary.background-hover"
   ```

---

## Creating New Component Tokens

### Pattern Template:

```
{theme}.{component}.{variant}.{property}.{state?}
```

### Example: Adding a new "Card" component

**REMEMBER: Define BOTH light and dark themes simultaneously!**

```json
"light": {
  "card": {
    "default": {
      "background": {
        "$value": "{color.white}",
        "$type": "color"
      },
      "border": {
        "$value": "{color.secondary.300}",
        "$type": "color"
      },
      "shadow": {
        "$value": "0px 2px 8px rgba(0,0,0,0.1)",
        "$type": "boxShadow"
      }
    },
    "elevated": {
      "background": {
        "$value": "{color.white}",
        "$type": "color"
      },
      "border": {
        "$value": "transparent",
        "$type": "color"
      },
      "shadow": {
        "$value": "0px 4px 16px rgba(0,0,0,0.15)",
        "$type": "boxShadow"
      }
    }
  }
},
"dark": {
  "card": {
    "default": {
      "background": {
        "$value": "{color.sepia.800}",
        "$type": "color"
      },
      "border": {
        "$value": "{color.secondary.700}",
        "$type": "color"
      },
      "shadow": {
        "$value": "0px 2px 8px rgba(0,0,0,0.3)",
        "$type": "boxShadow"
      }
    },
    "elevated": {
      "background": {
        "$value": "{color.sepia.800}",
        "$type": "color"
      },
      "border": {
        "$value": "transparent",
        "$type": "color"
      },
      "shadow": {
        "$value": "0px 4px 16px rgba(0,0,0,0.5)",
        "$type": "boxShadow"
      }
    }
  }
}
```

---

## Token Reference Syntax

**Format:** `{path.to.token}`

**Example:**
```json
{
  "$value": "{color.amber.500}"
}
```

**Resolution:** The build system will resolve references automatically. Never manually resolve token references in JSON.

---

## Working with Themes

### Current Themes:
1. **Light** (default) — Warm, amber-based light theme
2. **Dark** — Sophisticated dark theme with amber accents

### Theme Selection:
Both themes are defined in `$themes` array in `src/tokens/tokens.json`:
```json
"$themes": [
  {
    "id": "light",
    "name": "Light",
    "selectedTokenSets": {
      "global": "enabled",
      "light": "enabled"
    }
  },
  {
    "id": "dark",
    "name": "Dark",
    "selectedTokenSets": {
      "global": "enabled",
      "dark": "enabled"
    }
  }
]
```

### Adding a New Theme:
1. Create a new top-level object (e.g., `"high-contrast": {}`)
2. Mirror the structure of `light` or `dark`
3. Add theme configuration to `$themes` array
4. Reference `global` tokens appropriately

---

## Quick Reference Chart

| **Token Layer** | **Purpose** | **Can Reference** | **Example** |
|-----------------|-------------|-------------------|-------------|
| **Base (Global)** | Primitive values | Nothing | `color.amber.500: #F59E0B` |
| **Semantic (Global)** | Purpose-driven | Base tokens | `color.primary.500: {color.amber.500}` |
| **Theme** | Context-specific | Base or Semantic | `light.button.primary.background: {color.primary.500}` |

---

## Component Token Checklist

When creating tokens for a new component, ensure:

- [ ] Component has **BOTH** light and dark theme tokens defined
- [ ] All tokens reference semantic or base tokens (no hardcoded values)
- [ ] Naming follows the established pattern
- [ ] Token names are identical in JSON, documentation, and implementation
- [ ] All states are defined (default, hover, active, disabled, etc.)
- [ ] All variants are defined (primary, secondary, etc.)
- [ ] Tokens include proper `$type` values
- [ ] Size variants are defined if applicable

---

## Token Documentation Cards

**What They Are:**  
Token Documentation Cards are UI components used throughout the Scorpion UI documentation site to display which design tokens are used in a specific component. They break down a component's implementation into organized categories (Colors, Typography, Spacing, Border, etc.) showing the exact token names and values.

**Purpose:**  
- Bridge the gap between raw design tokens and actual component implementations
- Help developers understand which tokens to use when implementing or customizing components
- Provide a quick reference for token usage in each component
- Ensure consistency by showing both light and dark theme token values

**Structure:**  
Each Token Documentation Card typically includes:
- **Card Title:** The token category (e.g., "Colors", "Typography", "Spacing")
- **Theme Sections:** Side-by-side comparison of Light and Dark theme values
- **Token Names:** The exact token path (e.g., `color.amber.400`, `font.size.sm`)
- **Resolved Values:** The actual computed values (e.g., `#FBBF24`, `14px`)
- **Usage Context:** What each token is used for (e.g., "Default", "Hover", "Active")

**Example Layout:**

```
┌─────────────────────────────────────────────────────┐
│ Colors                                              │
├─────────────────────────────────────────────────────┤
│ Background (Light)        Background (Dark)         │
│ Default: color.amber.400  Default: color.amber.400  │
│ Hover: color.amber.500    Hover: color.amber.500    │
│ Active: color.amber.600   Active: color.amber.600   │
└─────────────────────────────────────────────────────┘
```

**Implementation Notes:**  
- Token Documentation Cards are displayed on component documentation pages (e.g., Buttons page, Card page)
- They should always show both light and dark theme tokens when applicable
- Token names must match exactly between the cards and the actual `tokens.json` file
- Cards help maintain the **Naming Consistency Across All Sources** rule (see Critical Rule #2)

**Naming Convention:**  
Use the term **"Token Documentation Cards"** consistently throughout:
- Code comments
- Component documentation
- Developer discussions
- Design system conversations

---

## When to Use Semantic Tokens vs Base Tokens

**This is a critical architectural decision that affects maintainability and rebranding capability.**

### ✅ USE SEMANTIC TOKENS in Component Implementations

**Rule:** Components should consume semantic tokens (primary, secondary, error, success, etc.) NOT base tokens (amber, sepia, red, green).

**Examples:**
```tsx
// ✅ CORRECT - Component uses semantic tokens
<button className="bg-primary-400 hover:bg-primary-500 text-black">
  Primary Button
</button>

<div className="text-error-600">
  Error message
</div>

// ❌ WRONG - Component uses base tokens directly
<button className="bg-amber-400 hover:bg-amber-500 text-black">
  Primary Button  // This is tightly coupled to amber!
</button>
```

**Why This Matters:**
- ✅ **Easy Rebranding:** Change primary from amber to blue by updating ONE mapping
- ✅ **Semantic Clarity:** Code communicates intent (primary action) not implementation detail (amber color)
- ✅ **Token Hierarchy:** Respects the Base → Semantic → Theme token architecture
- ✅ **Consistency:** All components follow the same pattern

### ✅ USE SEMANTIC TOKENS in Component Documentation

**Rule:** Token Documentation Cards should show semantic tokens with base resolution in parentheses.

**Format:** `color.semantic.shade (base.shade)`

**Examples:**
```
✅ CORRECT:
Default: color.primary.400 (amber.400)
Hover: color.primary.500 (amber.500)
Error: color.error.600 (red.600)

❌ WRONG:
Default: color.amber.400
Hover: color.amber.500
Error: color.red.600
```

**Why Show Resolution:**
- Developers see the semantic name (what to use)
- Developers see the resolved color (what it actually is)
- Maintains traceability from semantic → base
- Helps understand the token hierarchy

### ✅ USE BASE TOKENS in Palette Documentation

**Rule:** Pages that document the color scales themselves (Colors page, SemanticColors page) should show base tokens.

**Examples:**
- **Colors.tsx** - Documents `color.amber.{50-950}`, `color.sepia.{50-950}` scales
- **SemanticColors.tsx** - Documents the semantic mappings themselves

**Why:**
These pages ARE the source of truth for the palette - they document the base scales and how semantics map to them.

### 🎯 Decision Matrix

| **Location** | **Use Semantic?** | **Example** | **Why** |
|-------------|------------------|-------------|---------|
| Component Implementation (Button.tsx) | ✅ YES | `bg-primary-400` | Components should consume semantic meaning |
| Component Documentation Cards | ✅ YES (with resolution) | `color.primary.400 (amber.400)` | Shows intent + resolution |
| Layout Components (Sidebar, TopBar) | ⚠️ DEPENDS | `bg-secondary-600` for neutral UI | Use secondary for neutral elements |
| Colors Page | ❌ NO | `color.amber.400` | Documenting the base palette itself |
| Semantic Colors Page | ❌ NO | Shows mappings | Documenting semantic layer itself |

### 📝 Semantic Token Mappings

**Current mappings in tokens.json:**
```
color.primary.*   → color.amber.*    (Brand color)
color.secondary.* → color.sepia.*    (Neutral/gray)
color.success.*   → color.green.*    (Positive actions)
color.info.*      → color.blue.*     (Informational)
color.warning.*   → color.purple.*   (Caution)
color.error.*     → color.red.*      (Destructive/danger)
```

### 🔄 Rebranding Example

**If you wanted to change primary from amber to blue:**

With semantic tokens (CORRECT approach):
```json
// Change ONE LINE in tokens.json
"color.primary.500": { "$value": "{color.blue.500}" }

// ✅ All components automatically update
// ✅ Documentation stays accurate
// ✅ Zero code changes needed
```

Without semantic tokens (WRONG approach):
```tsx
// Would need to change EVERY component file
❌ Update Button.tsx: bg-amber-500 → bg-blue-500
❌ Update Link.tsx: text-amber-600 → text-blue-600
❌ Update all documentation cards
❌ High risk of missing instances
```

---

## Appendix: Complete Token Type Reference

| **$type** | **Used For** | **Example** |
|-----------|-------------|-------------|
| `color` | All color values | `#F59E0B` or `rgba(255, 255, 255, 0.08)` |
| `fontFamilies` | Font family names | `"Fragment Mono"` |
| `fontSizes` | Font size values | `16px` |
| `spacing` | Spacing/padding values | `16px` |
| `sizing` | Width/height values | `40px` |
| `borderRadius` | Border radius values | `12px` |
| `boxShadow` | Shadow definitions | `0 2px 8px rgba(0,0,0,0.4)` |

---

## For AI Agents: Quick Start Checklist

Before implementing any component:

1. ✅ Read the **CRITICAL RULES** at the top of this document
2. ✅ Confirm you understand the token hierarchy (Base → Semantic → Theme)
3. ✅ Verify you're creating tokens in BOTH light and dark themes
4. ✅ Double-check token names match exactly across JSON, docs, and code
5. ✅ **Use the HYBRID APPROACH:** CSS variables for theme tokens, direct Tailwind for specific colors
6. ✅ Reference existing component patterns before creating new ones
7. ✅ Use semantic tokens (e.g., `{color.primary.500}`) not base tokens in theme layers
8. ✅ Add proper `$type` to all new tokens

**Implementation Quick Reference:**
- Theme tokens (surfaces, text, buttons) → `bg-[var(--surface-card)]`
- Specific color shades (success, error) → `bg-success-500`
- See "Implementation Standard" section for complete guide

---

**Document Version:** 2.3  
**Last Updated:** October 15, 2025  
**Maintained By:** Scorpion UI Design System Team  

**Changelog:**
- **v2.3** - Added comprehensive "Semantic Tokens vs Base Tokens" guidance section
- **v2.2** - Added "Token Documentation Cards" section defining component documentation pattern
- **v2.1** - Added Rule 3: Implementation Standard (CSS Variables vs Tailwind Classes)
- **v2.0** - Initial comprehensive token naming system documentation

