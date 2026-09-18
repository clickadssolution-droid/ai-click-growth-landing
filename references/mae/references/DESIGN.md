# maedigital DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 10
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![maedigital Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a warm, approachable feel. The light background emphasizes content clarity. Typography pairs **Inter** for display/headings with **Plus Jakarta Sans** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#ffc402** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| theme-color | `#ffffff` | background | Page background, darkest surface |
| wfp-button-color | `#000000` | text-primary | Headings and body text |
| ast-global-color-3 | `#67768e` | text-muted | Captions, placeholders, secondary info |
| jkit-txt-h-color | `#222222` | border | Dividers, card borders, outlines |
| wp--preset--color--luminous-vivid-amber | `#ffc402` | accent | CTAs, links, focus rings, active states |
| success | `#34d399` | success | Success states, positive indicators |
| ast-global-color-7 | `#ffcd57` | warning | Warning states, caution indicators |
| info | `#a0a3cc` | info | Informational highlights |
| ast-code-block-background | `#f1f1f1` | unknown | Palette color |
| unknown | `#8b90c8` | unknown | Palette color |
| unknown | `#6366a0` | unknown | Palette color |
| ast-global-color-2 | `#1e293b` | unknown | Palette color |
| e-global-color-primary | `#070835` | unknown | Palette color |
| ast-global-color-0 | `#060097` | unknown | Palette color |
| jkit-txt-m-color | `#999999` | unknown | Palette color |
| unknown | `#565a94` | unknown | Palette color |
| ast-search-border-color | `#e6e6e6` | unknown | Palette color |
| unknown | `#5865f2` | unknown | Palette color |
| unknown | `#444444` | unknown | Palette color |
| unknown | `#cccccc` | unknown | Palette color |

### CSS Variable Tokens

```css
--jkit-form-border-color: #D5D5D7;
--jkit-success-border-color: rgb(0,127.2,90.8571428571);
--jkit-error-border-color: rgb(214.2,0,0);
--wfp-accent: #71717a;
--wfp-text-secondary-color: hsla(0,0%,100%,.6);
--wfp-text-secondary-color: rgba(0,0,0,.6);
--wp-editor-canvas-background: #ddd;
--wp-admin-border-width-focus: 2px;
--wp-admin-border-width-focus: 1.5px;
--border-radius: 0;
--border-top-width: 0px;
--border-right-width: 0px;
--border-bottom-width: 0px;
--border-left-width: 0px;
--border-style: initial;
--border-color: initial;
--border-block-start-width: var(--border-top-width);
--border-block-end-width: var(--border-bottom-width);
--border-inline-start-width: var(--border-left-width);
--border-inline-end-width: var(--border-right-width);
```


---

## 3. Typography Rules

**Font Stack:**
- **Plus Jakarta Sans** — Heading 1, Heading 2, Heading 3
- **Inter** — Body, Caption
- **JetBrains Mono** — Code

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
@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("fonts/PlusJakartaSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Plus Jakarta Sans";
  src: url("fonts/PlusJakartaSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "JetBrains Mono";
  src: url("fonts/JetBrainsMono-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "JetBrains Mono";
  src: url("fonts/JetBrainsMono-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "jkiticon";
  src: url("fonts/jkiticon-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "SF Pro Display";
  src: url("https://maedigital.com.co/wp-content/uploads/2025/02/SF-Pro-Display-Bold.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "SF Pro Display";
  src: url("https://maedigital.com.co/wp-content/uploads/2025/02/SF-Pro-Display-Heavy.woff2") format("woff2");
  font-weight: 700;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Plus Jakarta Sans | 100px | 700 |
| Heading 2 | Plus Jakarta Sans | 6rem | 700 |
| Heading 3 | Plus Jakarta Sans | 90px | 700 |
| Body | Inter | 15px | 400 |
| Caption | Inter | 14px | 400 |
| Code | JetBrains Mono | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Plus Jakarta Sans** for body/UI text, **Inter** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (3)

**Card** — `html`

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** .1em, .125rem, 1.5em, 2px, 2em, 3px, 4px, 4.32px, 5px, 6px, 8px, 9px, 10%, 10px, 10px 10px 0px 0px, 12px, 13px, 13.6px, 14px, 15px, 16px, 17.5px, 20px, 30px, 50px, 100%, inherit, 100px
- **Max content width:** 1180px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `0 0 2px 2px rgba(0,0,0,.6)`
- `0 0 1px 1px rgba(0,0,0,.2)`
- `0 0 2px 2px rgba(0,0,0,.2)`

### Raised — cards, buttons, interactive elements

- `2.6px 2.6px .4px #ccc,0 0 2.6px #d9d9d9`
- `0 0 0 rgba(255,221,0,.37),0 0 0 rgba(255,224,26,.37)`
- `0 2px 4px rgba(0,0,0,.08)`

### Floating — dropdowns, popovers, modals

- `0 4px 10px -2px rgba(0,0,0,.1)`
- `-1.216px 6.894px 15px 0 rgba(37,117,252,.2)`
- `9px 0 0 0 var(--jkit-element-darken-bg-color),18px 0 0 0 var(--jkit-element-darken-bg-color)`

### Overlay — full-screen overlays, top-level dialogs

- `0 0 30px 0 rgba(3,29,60,.05)`
- `0 10px 30px 0 rgba(45,45,45,.2)`
- `0 10px 30px 0 rgba(255,165,0,0)`

### Z-Index Scale

`0, 1, 2, 3, 4, 5, 6, 9, 10, 15, 20, 99, 100, 999, 1000, 1001, 1002, 1200, 99999, 100000, 999999, 2000000, 2000001, 2000002, 3000000, 5000000`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes fa-spin`
- `@keyframes slide-from-left`
- `@keyframes slide-from-right`
- `@keyframes slide-from-left-reverse`
- `@keyframes slide-from-right-reverse`
- `@keyframes jkit-fadeinup`
- `@keyframes jkit-scrolling-vertical`
- `@keyframes jkit-animated-dash`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#ffc402` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Plus Jakarta Sans** (body) with **Inter** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .1em, .125rem, 1.5em, 2px, 2em
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Plus Jakarta Sans and Inter and JetBrains Mono
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
| xs | 420px | css |
| xs | 421px | css |
| xs | 479px | css |
| xs | 480px | css |
| sm | 481px | css |
| sm | 544px | css |
| sm | 545px | css |
| sm | 576px | css |
| sm | 600px | css |
| sm | 640px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 769px | css |
| lg | 781px | css |
| lg | 782px | css |
| lg | 900px | css |
| lg | 921px | css |
| lg | 921.9px | css |
| lg | 922px | css |
| lg | 960px | css |
| lg | 992px | css |
| lg | 993px | css |
| lg | 1024px | css |
| xl | 1025px | css |
| xl | 1200px | css |
| xl | 1201px | css |
| 2xl | 99999px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #ffffff
Border: 1px solid #222222
Radius: 10px 10px 0px 0px
Padding: 16px
Font: Plus Jakarta Sans
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #ffc402, text white
Ghost: bg transparent, border #222222
Padding: 8px 16px
Radius: 10px 10px 0px 0px
Hover: opacity 0.9 or lighter shade
Focus: ring with #ffc402
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1180px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #ffffff
Label: #67768e (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #222222
Focus: border-color #ffc402
Label: #67768e 12px
Spacing: 16px between fields
Radius: 10px 10px 0px 0px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Plus Jakarta Sans, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
