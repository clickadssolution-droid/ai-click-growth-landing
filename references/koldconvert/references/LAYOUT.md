# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `div.container.nav-inner` | row | — | center | 28px | 3 |
| `nav.nav-links` | row | — | center | 2px | 5 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.container.hero-grid` | `526.312px 505.688px` | 72px | 2 |
| `div.container.split` | `510px 510px` | 84px | 2 |
| `div.eco-grid` | `550px 550px` | 2px | 6 |
| `div.cards.reveal` | `367.328px 367.328px 367.344px` | 0px | 6 |

## Structural Containers

### `<header>` (`header.nav`)

```
display:          block
children:         1
```

### `<main>` 

```
display:          block
children:         11
```

### `<footer>` (`footer.footer`)

```
display:          block
padding:          72px 0px 36px
children:         1
```

### `<section>` (`section.hero`)

```
display:          block
padding:          96px 0px 104px
children:         1
```

### `<section>` (`section.logos`)

```
display:          block
padding:          44px 0px
children:         1
```

### `<section>` (`section#services`)

```
display:          block
padding:          93.6px 0px
children:         1
```

### `<section>` (`section#ecosystem.bg-soft`)

```
display:          block
padding:          93.6px 0px
children:         1
```

### `<section>` (`section#process`)

```
display:          block
padding:          93.6px 0px
children:         1
```

### `<section>` 

```
display:          block
padding:          93.6px 0px
children:         1
```

### `<section>` (`section.bg-soft`)

```
display:          block
padding:          93.6px 0px
children:         1
```

### `<section>` 

```
display:          block
padding:          93.6px 0px
children:         1
```

### `<section>` (`section.bg-soft`)

```
display:          block
padding:          93.6px 0px
children:         1
```

## Layout Rules

- **Container max-width:** `1160px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

