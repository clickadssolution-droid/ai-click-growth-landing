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
| `div.mhd-row` | row | space-between | center | 16px | 3 |
| `div.ast-container` | row | — | — | — | 1 |
| `div.elementor-element.elementor-element-b8cd4ea` | column | — | — | 0px | 1 |
| `div.proof-row` | row | center | center | — | 4 |
| `div.plat-rows.rv` | column | — | — | 14px | 4 |
| `div.plat-row` | row | — | center | 14px | 2 |
| `div.plat-row` | row | — | center | 14px | 2 |
| `div.plat-row` | row | — | center | 14px | 2 |
| `div.plat-row` | row | — | center | 14px | 2 |
| `div.btn-row` | row | center | center | 12px | 1 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.mft-cols` | `164.625px 164.625px 164.625px` | 56px | 3 |
| `div.hero-grid` | `498px 498px` | 56px | 2 |
| `div.serv-grid` | `344px 344px 344px` | 10px | 6 |
| `div.bars-grid` | `344.656px 344.672px 344.656px` | 9px | 3 |

## Structural Containers

### `<footer>` (`footer.elementor.elementor-457`)

```
display:          block
children:         1
```

### `<main>` (`main#main.site-main`)

```
display:          block
children:         1
```

### `<article>` (`article#post-261.post-261.page`)

```
display:          block
children:         2
```

### `<footer>` (`footer.mft-wrap`)

```
display:          block
padding:          48px 0px 36px
children:         1
```

### `<section>` (`section.mae-sec.mae-hero`)

```
display:          block
padding:          104px 0px 92px
children:         1
```

### `<section>` (`section.mae-sec.mae-plat`)

```
display:          block
padding:          56px 0px
children:         1
```

### `<section>` (`section#mae-servicios.mae-sec.mae-serv`)

```
display:          block
padding:          72px 0px
children:         1
```

### `<section>` (`section#mae-proceso.mae-sec.mae-proc`)

```
display:          block
padding:          64px 0px
children:         1
```

### `<section>` (`section.mae-sec.mae-res`)

```
display:          block
padding:          72px 0px
children:         1
```

### `<section>` (`section.mae-sec.mae-cases`)

```
display:          block
padding:          72px 0px
children:         1
```

### `<section>` (`section.mae-sec.mae-blog`)

```
display:          block
padding:          56px 0px
children:         1
```

### `<section>` (`section#mae-faq.mae-sec.mae-faq`)

```
display:          block
padding:          56px 0px
children:         1
```

## Layout Rules

- **Container max-width:** `1180px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

