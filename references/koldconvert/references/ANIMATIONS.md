# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| Canvas (3 elements) | WebGL/3D | WebGL context detected — likely Three.js or custom shader |

## Scroll Journey

The page is **8,884px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 1,357px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 2,635px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 3,992px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 5,349px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 6,627px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 7,984px

![Scroll 100%](../screens/scroll/scroll-100.png)

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
transition: transform 0.2s;
transition: border-color 0.3s;
transition: color 0.2s;
transition: background 0.3s;
transition: transform 0.3s;
transition: opacity 0.22s, visibility 0.22s, transform 0.22s;
transition: color 0.15s;
transition: transform 0.25s;
transition: max-height 0.35s;
transition: width 0.2s;
transition: color 0.25s;
```

## How to Recreate This Motion Design

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **WebGL/3D layer detected** — product visualizations use Three.js or custom WebGL. Use `<canvas>` with Three.js for 3D product renders
- **Canvas elements (3)** — animated via requestAnimationFrame loop. Use canvas for particle effects, gradient animations, and WebGL scenes
- **Duration scale:** `0.2s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`1357px`) → `screens/scroll/scroll-017.png`
- **33%** (`2635px`) → `screens/scroll/scroll-033.png`
- **50%** (`3992px`) → `screens/scroll/scroll-050.png`
- **67%** (`5349px`) → `screens/scroll/scroll-067.png`
- **83%** (`6627px`) → `screens/scroll/scroll-083.png`
- **100%** (`7984px`) → `screens/scroll/scroll-100.png`

