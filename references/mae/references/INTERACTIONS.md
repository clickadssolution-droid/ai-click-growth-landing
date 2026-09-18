# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Link | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s;
transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Link Interactions

### Link 1 — `Obtén tu diagnóstico gratis`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On hover:**

```css
/* box-shadow: rgba(255, 205, 88, 0.25) 0px 4px 20px 0px → */ box-shadow: rgba(255, 205, 88, 0.45) 0px 8px 32px 0px, rgba(255, 205, 88, 0.12) 0px 0px 0px 4px;
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, -2);
/* outline: rgb(6, 7, 45) none 3px → */ outline: rgb(6, 7, 45) none 0px;
```

**On focus:**

```css
/* outline: rgb(6, 7, 45) none 3px → */ outline: rgb(6, 7, 45) dotted 1px;
```

**Transition:** `transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s`

### Link 2 — `Ver servicios`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On hover:**

```css
/* background-color: rgba(255, 255, 255, 0.06) → */ background-color: rgba(255, 255, 255, 0.1);
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, -1);
/* outline: rgb(238, 238, 255) none 3px → */ outline: rgb(238, 238, 255) none 0px;
```

**On focus:**

```css
/* outline: rgb(238, 238, 255) none 3px → */ outline: rgb(238, 238, 255) dotted 1px;
```

**Transition:** `transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s`

### Link 3 — `eCommerce full service
Shopify, VTEX y W`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On hover:**

```css
/* border-color: rgba(255, 255, 255, 0.07) → */ border-color: rgba(255, 255, 255, 0.14);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 24px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px;
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, -3);
/* outline: rgb(238, 238, 255) none 3px → */ outline: rgb(238, 238, 255) none 0px;
```

**On focus:**

```css
/* outline: rgb(238, 238, 255) none 3px → */ outline: rgb(238, 238, 255) dotted 1px;
```

**Transition:** `border-color 0.3s, transform 0.3s, box-shadow 0.3s`

## Interaction Rules

- Accent color `#ffc402` is used for focus rings, active states, and hover highlights
- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.25s`, `0.2s`, `0.3s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

