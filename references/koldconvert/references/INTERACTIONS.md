# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Link | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: all;
transition: color 0.2s;
transition: color 0.15s;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Link Interactions

### Link 1 — `Koldconvert home`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On focus:**

```css
/* outline: rgb(84, 84, 110) none 3px → */ outline: rgb(242, 53, 87) solid 2px;
/* outline-color: rgb(84, 84, 110) → */ outline-color: rgb(242, 53, 87);
```

**Transition:** `all`

### Link 2 — `Services`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On hover:**

```css
/* color: rgb(84, 84, 110) → */ color: rgb(20, 19, 46);
/* border-color: rgb(84, 84, 110) → */ border-color: rgb(20, 19, 46);
/* outline: rgb(84, 84, 110) none 3px → */ outline: rgb(20, 19, 46) none 3px;
/* outline-color: rgb(84, 84, 110) → */ outline-color: rgb(20, 19, 46);
```

**On focus:**

```css
/* outline: rgb(84, 84, 110) none 3px → */ outline: rgb(242, 53, 87) solid 2px;
/* outline-color: rgb(84, 84, 110) → */ outline-color: rgb(242, 53, 87);
```

**Transition:** `color 0.2s`

### Link 3 — `a`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**Transition:** `color 0.15s`

_No visible style changes detected for this element._

## Interaction Rules

- Accent color `#f23557` is used for focus rings, active states, and hover highlights
- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.2s`, `0.15s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

