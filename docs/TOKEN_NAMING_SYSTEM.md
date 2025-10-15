# Scorpion UI Design Token Naming System

**Version:** 2.0  
**Purpose:** Reference guide for AI agents and developers working on the Scorpion UI project  
**Token File Location:** `src/tokens/tokens.json`

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

#### Surface Tokens
**Pattern:** `{theme}.surface.{property}`

**Light Theme:**
```
light.surface.page              → {color.amber.50}
light.surface.container         → {color.amber.50}
light.surface.container-stroke  → {color.sepia.300}
```

**Dark Theme:**
```
dark.surface.page              → {color.sepia.900}
dark.surface.container         → {color.sepia.900}
dark.surface.container-stroke  → {color.sepia.700}
```

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

## Appendix: Complete Token Type Reference

| **$type** | **Used For** |
|-----------|-------------|
| `color` | All color values |
| `fontFamilies` | Font family names |
| `fontSizes` | Font size values |
| `spacing` | Spacing/padding values |
| `sizing` | Width/height values |
| `borderRadius` | Border radius values |
| `boxShadow` | Shadow definitions |

---

## For AI Agents: Quick Start Checklist

Before implementing any component:

1. ✅ Read the **CRITICAL RULES** at the top of this document
2. ✅ Confirm you understand the token hierarchy (Base → Semantic → Theme)
3. ✅ Verify you're creating tokens in BOTH light and dark themes
4. ✅ Double-check token names match exactly across JSON, docs, and code
5. ✅ Reference existing component patterns before creating new ones
6. ✅ Use semantic tokens (e.g., `{color.primary.500}`) not base tokens in theme layers
7. ✅ Add proper `$type` to all new tokens

---

**Document Version:** 2.0  
**Last Updated:** October 2025  
**Maintained By:** Scorpion UI Design System Team

