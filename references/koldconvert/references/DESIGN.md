# koldconvert DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 17 · Fonts: 2 · Components: 7
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![koldconvert Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a warm tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Inter** for display/headings with **Arial** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#f23557** anchors interactive elements (buttons, links, focus rings). Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#14132e` | background | Page background, darkest surface |
| card | `#f6f6f9` | surface | Card and panel backgrounds |
| surface | `#11103d` | surface | Card and panel backgrounds |
| text-primary | `#ebebf1` | text-primary | Headings and body text |
| text-muted | `#54546e` | text-muted | Captions, placeholders, secondary info |
| border | `#444444` | border | Dividers, card borders, outlines |
| accent | `#f23557` | accent | CTAs, links, focus rings, active states |
| accent-700 | `#d81e45` | accent | CTAs, links, focus rings, active states |
| accent | `#7a2a5e` | accent | CTAs, links, focus rings, active states |
| danger | `#c0392b` | danger | Error states, destructive actions |
| success | `#4cd964` | success | Success states, positive indicators |
| info | `#232255` | info | Informational highlights |
| unknown | `#82829a` | unknown | Palette color |
| unknown | `#e0e0e8` | unknown | Palette color |
| unknown | `#000000` | unknown | Palette color |
| unknown | `#3a2a6e` | unknown | Palette color |
| unknown | `#b6b6c6` | unknown | Palette color |

### CSS Variable Tokens

```css
--accent: #f23557;
--accent-700: #d81e45;
--card: #f6f6f9;
--accent: #f23557;
--accent-700: #d81e45;
--card: #f6f6f9;
--accent: #f23557;
--accent-700: #d81e45;
--card: #f6f6f9;
--accent: #f23557;
--accent-700: #d81e45;
--card: #f6f6f9;
```


---

## 3. Typography Rules

**Font Stack:**
- **Arial** — Heading 1, Heading 2, Heading 3
- **Inter** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Arial | 3.4rem | 700 |
| Heading 2 | Arial | clamp(2.5rem,5.4vw,4.1rem) | 700 |
| Heading 3 | Arial | clamp(2.1rem,4.6vw,3.3rem) | 700 |
| Body | Inter | .92rem | 400 |
| Caption | Inter | .82rem | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Arial** for body/UI text, **Inter** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Data Display (3)

**Card** — `html`

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Variants: `primary`, `lg`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Media (2)

**Image** — `html`

**Icon** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** 2px, 3px, 4px, 8px, 12px, 14px, 22px, 999px
- **Max content width:** 1100px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Overlay — full-screen overlays, top-level dialogs

- `0 12px 48px rgba(0,0,0,.12)`
- `rgba(0, 0, 0, 0.12) 0px 12px 48px 0px`

### Z-Index Scale

`98, 100, 500`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#f23557` for interactive elements (buttons, links, focus rings)
- Use `#14132e` as the primary page background
- Pair **Arial** (body) with **Inter** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 2px, 3px, 4px, 8px, 12px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Arial and Inter
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 460px | css |
| xs | 480px | css |
| sm | 560px | css |
| sm | 561px | css |
| sm | 600px | css |
| sm | 640px | css |
| md | 680px | css |
| md | 700px | css |
| md | 760px | css |
| lg | 820px | css |
| lg | 880px | css |
| lg | 940px | css |
| lg | 941px | css |
| xl | 1100px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f6f6f9
Border: 1px solid #444444
Radius: 12px
Padding: 16px
Font: Arial
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #f23557, text white
Ghost: bg transparent, border #444444
Padding: 8px 16px
Radius: 12px
Hover: opacity 0.9 or lighter shade
Focus: ring with #f23557
```

### Build a Page Layout

```
Background: #14132e
Max-width: 1100px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f6f6f9
Label: #54546e (muted, 12px, uppercase)
Value: #ebebf1 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #14132e
Input border: 1px solid #444444
Focus: border-color #f23557
Label: #54546e 12px
Spacing: 16px between fields
Radius: 12px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Arial, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
