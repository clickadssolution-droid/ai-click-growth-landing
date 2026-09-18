# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Eyebrow** | unknown | 8× | `.eyebrow` |
| **H2** | unknown | 8× |  |
| **Container** | unknown | 6× | `.container` |
| **Card** | card | 6× | `.card` |
| **Ico** | unknown | 6× | `.ico` |
| **Eco Name** | unknown | 6× | `.eco-name` |
| **Eco Domain** | unknown | 6× | `.eco-domain` |
| **Eco Tags** | badge | 6× | `.eco-tags` |
| **Visit** | unknown | 6× | `.visit` |
| **Mega Col** | unknown | 5× | `.mega-col` |
| **Eco Card** | card | 5× | `.eco-card`, `.reveal` |
| **Eco Logo** | unknown | 5× | `.eco-logo` |
| **Step** | unknown | 4× | `.step` |
| **Num** | unknown | 4× | `.num` |
| **Stat** | unknown | 3× | `.stat` |
| **Scene3d** | unknown | 3× | `.scene3d` |
| **Via** | unknown | 3× | `.via` |
| **Bg Soft** | unknown | 3× | `.bg-soft` |
| **Lead** | unknown | 3× | `.lead`, `.muted` |
| **Container** | unknown | 3× | `.container` |

## Cards

### Card

**Instances found:** 6

**CSS classes:** `.card`

**HTML structure:**

```html
<article class="card"> <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3v18h18"></path><path d="m7 14 4-4 3 3 5-6"></path></svg></div> <h3>01 · Strategic Growth Advisory</h3> <p>Business growth consulting, go-to-market…</p> </article>
```

**Base styles (from design tokens):**

```css
.card {
  background: #f6f6f9;
  border: 1px solid #444444;
  border-radius: 12px;
  padding: 8px;
}```

### Eco Card

**Instances found:** 5

**CSS classes:** `.eco-card` `.reveal`

**HTML structure:**

```html
<a href="ecosystem.html" class="eco-card reveal"> <img src="assets/img/logos/vebsight.svg" alt="Vebsight" class="eco-logo"> <span class="eco-type">Design Division</span> <span class="eco-name">Vebsight</span> <span class="eco-domain">vebsight.com</span> <p>The premium design division, web design,…</p> <div class="eco-tags"><span>Web design</span><span>UI/UX</span><span>Framer</span></div> <span class="visit">Explore <span class="arrow">↗</span></span> </a>
```

**Base styles (from design tokens):**

```css
.eco-card {
  background: #f6f6f9;
  border: 1px solid #444444;
  border-radius: 12px;
  padding: 8px;
}```

## Badges & Chips

### Eco Tags

**Instances found:** 6

**CSS classes:** `.eco-tags`

**HTML structure:**

```html
<div class="eco-tags"><span>Web design</span><span>UI/UX</span><span>Framer</span></div>
```

**Base styles (from design tokens):**

```css
.eco-tags {
  background: #f6f6f9;
  border: 1px solid #444444;
  border-radius: 12px;
  padding: 2px 4px;
  font-size: 12px;
}```

## Other Components

### Eyebrow

**Instances found:** 8

**CSS classes:** `.eyebrow`

**HTML structure:**

```html
<span class="eyebrow">The capability stack</span>
```

**Base styles (from design tokens):**

```css
.eyebrow {
  background: #f6f6f9;
  padding: 4px;
}```

### H2

**Instances found:** 8

**HTML structure:**

```html
<h2 class="h2">Six pillars. The full operating scope.</h2>
```

**Base styles (from design tokens):**

```css
.h2 {
  background: #f6f6f9;
  padding: 4px;
}```

### Container

**Instances found:** 6

**CSS classes:** `.container`

**HTML structure:**

```html
<div class="container"> <div class="section-head reveal"> <span class="eyebrow">The capability stack</span> <h2 class="h2">Six pillars. The full operating scope.</h2> <p class="lead muted">Koldconvert is the parent company, everything from strategy to software shown openly, not buried in dropdowns. <a href="services.html" class="link-arrow">Explore the full service architecture <span class="arrow">→</span></a></p> </div> <div class="cards reveal"> <article class="card"> <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3v18h18"></path><p
```

**Base styles (from design tokens):**

```css
.container {
  background: #f6f6f9;
  padding: 4px;
}```

### Ico

**Instances found:** 6

**CSS classes:** `.ico`

**HTML structure:**

```html
<div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3v18h18"></path><path d="m7 14 4-4 3 3 5-6"></path></svg></div>
```

**Base styles (from design tokens):**

```css
.ico {
  background: #f6f6f9;
  padding: 4px;
}```

### Eco Name

**Instances found:** 6

**CSS classes:** `.eco-name`

**HTML structure:**

```html
<span class="eco-name">Vebsight</span>
```

**Base styles (from design tokens):**

```css
.eco-name {
  background: #f6f6f9;
  padding: 4px;
}```

### Eco Domain

**Instances found:** 6

**CSS classes:** `.eco-domain`

**HTML structure:**

```html
<span class="eco-domain">vebsight.com</span>
```

**Base styles (from design tokens):**

```css
.eco-domain {
  background: #f6f6f9;
  padding: 4px;
}```

### Visit

**Instances found:** 6

**CSS classes:** `.visit`

**HTML structure:**

```html
<span class="visit">Explore <span class="arrow">↗</span></span>
```

**Base styles (from design tokens):**

```css
.visit {
  background: #f6f6f9;
  padding: 4px;
}```

### Mega Col

**Instances found:** 5

**CSS classes:** `.mega-col`

**HTML structure:**

```html
<div class="mega-col"> <h4><a href="/services/strategic-growth/">Strategic Growth</a></h4> <a href="/services/strategic-growth/business-growth-consulting">Business Consulting</a> <a href="/services/strategic-growth/go-to-market-revenue-strategy">Go-To-Market Strategy</a> <a href="/services/strategic-growth/fractional-cmo">Fractional CMO</a> <a href="/services/strategic-growth/product-marketing">Product Marketing</a> <a href="/services/strategic-growth/pricing-strategy-monetisation">Pricing &amp; Monetisation</a> <a href="/services/strategic-growth/pitch-deck-investor-materials">Pitch Deck &amp
```

**Base styles (from design tokens):**

```css
.mega-col {
  background: #f6f6f9;
  padding: 4px;
}```

### Eco Logo

**Instances found:** 5

**CSS classes:** `.eco-logo`

**HTML structure:**

```html
<img src="assets/img/logos/vebsight.svg" alt="Vebsight" class="eco-logo">
```

**Base styles (from design tokens):**

```css
.eco-logo {
  background: #f6f6f9;
  padding: 4px;
}```

### Step

**Instances found:** 4

**CSS classes:** `.step`

**HTML structure:**

```html
<div class="step"><div class="num">01</div><h3>Diagnose</h3><p>We audit your funnel, offer and stack to…</p></div>
```

**Base styles (from design tokens):**

```css
.step {
  background: #f6f6f9;
  padding: 4px;
}```

### Num

**Instances found:** 4

**CSS classes:** `.num`

**HTML structure:**

```html
<div class="num">01</div>
```

**Base styles (from design tokens):**

```css
.num {
  background: #f6f6f9;
  padding: 4px;
}```

### Stat

**Instances found:** 3

**CSS classes:** `.stat`

**HTML structure:**

```html
<div class="stat"><b><span data-count="3.2" data-suffix="M+">3.2M+</span></b><span>Outbound touches sent</span></div>
```

**Base styles (from design tokens):**

```css
.stat {
  background: #f6f6f9;
  padding: 4px;
}```

### Scene3d

**Instances found:** 3

**CSS classes:** `.scene3d`

**HTML structure:**

```html
<div class="scene3d" id="scene-core" role="img" aria-label="3D visualization of a connected growth engine: nodes and links converging on a glowing core" style="cursor: grab;"><canvas data-engine="three.js r160" width="506" height="506" style="display: block;"></canvas></div>
```

**Base styles (from design tokens):**

```css
.scene3d {
  background: #f6f6f9;
  padding: 4px;
}```

### Via

**Instances found:** 3

**CSS classes:** `.via`

**HTML structure:**

```html
<span class="via">division · <b>vebsight.com</b></span>
```

**Base styles (from design tokens):**

```css
.via {
  background: #f6f6f9;
  padding: 4px;
}```

### Bg Soft

**Instances found:** 3

**CSS classes:** `.bg-soft`

**HTML structure:**

```html
<section class="bg-soft" id="ecosystem"> <div class="container"> <div class="feature-3d reveal" style="margin-bottom:clamp(48px,6vw,72px)"> <div class="scene-col"><div class="scene3d" id="scene-orbit" role="img" aria-label="3D visualization of five brands orbiting the Koldconvert core"><canvas data-engine="three.js r160" width="510" height="510" style="display: block;"></canvas></div></div> <div> <span class="eyebrow">The ecosystem</span> <h2 class="h2">One parent. Two divisions. A full ecosys…</h2> <p class="lead muted">Koldconvert is the core, strategy, marke…</p> </div> </div> <div class="e
```

**Base styles (from design tokens):**

```css
.bg-soft {
  background: #f6f6f9;
  padding: 4px;
}```

### Lead

**Instances found:** 3

**CSS classes:** `.lead` `.muted`

**HTML structure:**

```html
<p class="lead muted">Koldconvert is the core, strategy, marketing and AI. Around it orbit specialist divisions (Vebsight, Dev4ager), focused brands (Scale to Skies, Touch the Skies, Wassuply) and a store layer. One brief, one team, one number.</p>
```

**Base styles (from design tokens):**

```css
.lead {
  background: #f6f6f9;
  padding: 4px;
}```

### Container

**Instances found:** 3

**CSS classes:** `.container`

**HTML structure:**

```html
<div class="container"> <div class="feature-3d rev reveal"> <div class="scene-col"><div class="scene3d" id="scene-globe" role="img" aria-label="3D globe showing outbound campaigns firing from London worldwide"><canvas data-engine="three.js r160" width="510" height="510" style="display: block;"></canvas></div></div> <div> <span class="eyebrow">Outbound, everywhere</span> <h2 class="h2">Rooted in London. Reaching buyers worldw…</h2> <p class="lead muted">We run cold email, LinkedIn and multicha…</p> <ul class="feature-list"> <li><span class="check"><svg viewBox="0 0 24 24" fill="none" stroke="cu
```

**Base styles (from design tokens):**

```css
.container {
  background: #f6f6f9;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#444444` for all dividers within components
- Use `#f23557` for all interactive/active states

