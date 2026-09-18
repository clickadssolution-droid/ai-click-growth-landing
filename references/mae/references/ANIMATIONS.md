# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| **Web Animations API (7 active)** | animation |  |

## Scroll Journey

The page is **6,254px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 910px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 1,767px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 2,677px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 3,587px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 4,444px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 5,354px

![Scroll 100%](../screens/scroll/scroll-100.png)

## Scroll Animation Patterns

| Pattern | Library | Element Count | Duration | Delay | Easing |
|---------|---------|---------------|----------|-------|--------|
| parallax / sticky scroll | CSS | 2 | — | — | — |

### CSS Implementation

## CSS Keyframes (81 extracted)

### `@keyframes blink`

Duration: `2.5s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.t-ey::before`, `.hero-tag::before`, `.badge-dot`, `.dash-live::before`

```css
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
}
```

> Opacity fade

### `@keyframes fa-spin`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.fa-spin`, `.fa-pulse`

```css
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
```

> Transform/motion animation

### `@keyframes fa-spin`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.fa-spin`, `.fa-pulse`

```css
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-blinds-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="blinds`, `.jkit-preloader-overlay .jkit-preloader-type .jkit-preloader span`

```css
@keyframes jkit-animated-blinds-in {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-blinds-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="blinds`, `.jkit-preloader-overlay .jkit-preloader-type .jkit-preloader span`

```css
@keyframes jkit-animated-blinds-in {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
```

> Transform/motion animation

### `@keyframes eicon-spin`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.elementor-custom-embed-play.elementor-playing i, .elementor-custom-embed-play.e`, `.eicon-animation-spin`

```css
@keyframes eicon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes float`

Duration: `5s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.chip1`, `.chip2`

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
```

> Transform/motion animation

### `@keyframes slide-from-left`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit:hover .border-bottom.left`

```css
@keyframes slide-from-left {
  0% {
    left: 0px;
  }
  100% {
    left: 101%;
  }
}
```

### `@keyframes slide-from-left`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit:hover .border-bottom.left`

```css
@keyframes slide-from-left {
  0% {
    left: 0px;
  }
  100% {
    left: 101%;
  }
}
```

### `@keyframes slide-from-right`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit:hover .border-bottom.right`

```css
@keyframes slide-from-right {
  0% {
    left: 0px;
  }
  100% {
    left: -101%;
  }
}
```

### `@keyframes slide-from-right`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit:hover .border-bottom.right`

```css
@keyframes slide-from-right {
  0% {
    left: 0px;
  }
  100% {
    left: -101%;
  }
}
```

### `@keyframes slide-from-left-reverse`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit .border-bottom.left`

```css
@keyframes slide-from-left-reverse {
  0% {
    left: -101%;
  }
  100% {
    left: 0px;
  }
}
```

### `@keyframes slide-from-left-reverse`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit .border-bottom.left`

```css
@keyframes slide-from-left-reverse {
  0% {
    left: -101%;
  }
  100% {
    left: 0px;
  }
}
```

### `@keyframes slide-from-right-reverse`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit .border-bottom.right`

```css
@keyframes slide-from-right-reverse {
  0% {
    left: 101%;
  }
  100% {
    left: 0px;
  }
}
```

### `@keyframes slide-from-right-reverse`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit .border-bottom.right`

```css
@keyframes slide-from-right-reverse {
  0% {
    left: 101%;
  }
  100% {
    left: 0px;
  }
}
```

### `@keyframes jkit-fadeinup`

Duration: `0.4s` · Fill: `both`

Used by: `.jeg-elementor-kit.jkit-pagination-disable.loaded .jkit-ajax-loaded, .jeg-elemen`

```css
@keyframes jkit-fadeinup {
  0% {
    opacity: 0;
    transform: translate3d(0px, 30px, 0px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-fadeinup`

Duration: `0.4s` · Fill: `both`

Used by: `.jeg-elementor-kit.jkit-pagination-disable.loaded .jkit-ajax-loaded, .jeg-elemen`

```css
@keyframes jkit-fadeinup {
  0% {
    opacity: 0;
    transform: translate3d(0px, 30px, 0px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-scrolling-vertical`

Duration: `0.3s`

Used by: `.jeg-elementor-kit.jkit-team .social-list .social-icon:hover i::before`

```css
@keyframes jkit-scrolling-vertical {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  49% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-scrolling-vertical`

Duration: `0.3s`

Used by: `.jeg-elementor-kit.jkit-team .social-list .social-icon:hover i::before`

```css
@keyframes jkit-scrolling-vertical {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  49% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-dash`

Duration: `10s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text .animated-text svg path`

```css
@keyframes jkit-animated-dash {
  0% {
    stroke-dasharray: 0, 1500;
  }
  15% {
    stroke-dasharray: 1500, 1500;
  }
  85% {
    opacity: 1;
  }
  90% {
    stroke-dasharray: 1500, 1500;
    opacity: 0;
  }
  100% {
    stroke-dasharray: 0, 1500;
    opacity: 0;
  }
}
```

> Opacity fade · SVG stroke animation

### `@keyframes jkit-animated-dash`

Duration: `10s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text .animated-text svg path`

```css
@keyframes jkit-animated-dash {
  0% {
    stroke-dasharray: 0, 1500;
  }
  15% {
    stroke-dasharray: 1500, 1500;
  }
  85% {
    opacity: 1;
  }
  90% {
    stroke-dasharray: 1500, 1500;
    opacity: 0;
  }
  100% {
    stroke-dasharray: 0, 1500;
    opacity: 0;
  }
}
```

> Opacity fade · SVG stroke animation

### `@keyframes jkit-animated-pulse`

Duration: `1s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="typing`

```css
@keyframes jkit-animated-pulse {
  0% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  40% {
    transform: translateY(-50%) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-pulse`

Duration: `1s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="typing`

```css
@keyframes jkit-animated-pulse {
  0% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  40% {
    transform: translateY(-50%) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-swirl-in`

Duration: `0.4s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="swirl"`

```css
@keyframes jkit-animated-swirl-in {
  0% {
    opacity: 0;
    transform: translateZ(-20px) rotateX(90deg);
  }
  60% {
    opacity: 1;
    transform: translateZ(-20px) rotateX(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateZ(-20px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-swirl-in`

Duration: `0.4s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="swirl"`

```css
@keyframes jkit-animated-swirl-in {
  0% {
    opacity: 0;
    transform: translateZ(-20px) rotateX(90deg);
  }
  60% {
    opacity: 1;
    transform: translateZ(-20px) rotateX(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateZ(-20px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-wave-up`

Duration: `0.3s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="wave"]`

```css
@keyframes jkit-animated-wave-up {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-wave-up`

Duration: `0.3s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="wave"]`

```css
@keyframes jkit-animated-wave-up {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-flip-in`

Duration: `1.2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="flip"]`

```css
@keyframes jkit-animated-flip-in {
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  35% {
    transform: rotateX(120deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(360deg);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-flip-in`

Duration: `1.2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="flip"]`

```css
@keyframes jkit-animated-flip-in {
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  35% {
    transform: rotateX(120deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(360deg);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-flip-out`

Duration: `1.2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="flip"]`

```css
@keyframes jkit-animated-flip-out {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  35% {
    transform: rotateX(-40deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(180deg);
    opacity: 0;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-flip-out`

Duration: `1.2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="flip"]`

```css
@keyframes jkit-animated-flip-out {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  35% {
    transform: rotateX(-40deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(180deg);
    opacity: 0;
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-drop-in-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="drop-i`

```css
@keyframes jkit-animated-drop-in-in {
  0% {
    opacity: 0;
    transform: translateZ(100px);
  }
  100% {
    opacity: 1;
    transform: translateZ(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-drop-in-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="drop-i`

```css
@keyframes jkit-animated-drop-in-in {
  0% {
    opacity: 0;
    transform: translateZ(100px);
  }
  100% {
    opacity: 1;
    transform: translateZ(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-drop-in-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="drop-i`

```css
@keyframes jkit-animated-drop-in-out {
  0% {
    opacity: 1;
    transform: translateZ(0px);
  }
  100% {
    opacity: 0;
    transform: translateZ(-100px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-drop-in-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="drop-i`

```css
@keyframes jkit-animated-drop-in-out {
  0% {
    opacity: 1;
    transform: translateZ(0px);
  }
  100% {
    opacity: 0;
    transform: translateZ(-100px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-right-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-right-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  60% {
    opacity: 1;
    transform: translateX(10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-right-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-right-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  60% {
    opacity: 1;
    transform: translateX(10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-right-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-right-out {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  60% {
    opacity: 0;
    transform: translateX(110%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-right-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-right-out {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  60% {
    opacity: 0;
    transform: translateX(110%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-left-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-left-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  60% {
    opacity: 1;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-left-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-left-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  60% {
    opacity: 1;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-left-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-left-out {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  60% {
    opacity: 0;
    transform: translateX(-110%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-left-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-left-out {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  60% {
    opacity: 0;
    transform: translateX(-110%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-up-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-up-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  60% {
    opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-up-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-up-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  60% {
    opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-up-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-up-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  60% {
    opacity: 0;
    transform: translateY(-120%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-up-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-up-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  60% {
    opacity: 0;
    transform: translateY(-120%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-down-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-down-in {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  60% {
    opacity: 1;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-down-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-down-in {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  60% {
    opacity: 1;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-down-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-down-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  60% {
    opacity: 0;
    transform: translateY(120%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-slide-down-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="slide-`

```css
@keyframes jkit-animated-slide-down-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  60% {
    opacity: 0;
    transform: translateY(120%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-bounce-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="bounce`

```css
@keyframes jkit-animated-bounce-in {
  0%, 20%, 40%, 60%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-bounce-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="bounce`

```css
@keyframes jkit-animated-bounce-in {
  0%, 20%, 40%, 60%, 80%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-bounce-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="bounce`

```css
@keyframes jkit-animated-bounce-out {
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%, 55% {
    opacity: 0;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  100% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-bounce-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="bounce`

```css
@keyframes jkit-animated-bounce-out {
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%, 55% {
    opacity: 0;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  100% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
```

> Fade + motion enter animation

### `@keyframes jkit-animated-swing-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="swing"`

```css
@keyframes jkit-animated-swing-in {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-swing-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="swing"`

```css
@keyframes jkit-animated-swing-in {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-swing-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="swing"`

```css
@keyframes jkit-animated-swing-out {
  20% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(15deg);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-swing-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="swing"`

```css
@keyframes jkit-animated-swing-out {
  20% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(15deg);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-rubber-band-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="rubber`

```css
@keyframes jkit-animated-rubber-band-in {
  0% {
    transform: scaleX(1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-rubber-band-in`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="rubber`

```css
@keyframes jkit-animated-rubber-band-in {
  0% {
    transform: scaleX(1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-rubber-band-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="rubber`

```css
@keyframes jkit-animated-rubber-band-out {
  0% {
    transform: scaleX(1);
  }
  30% {
    transform: scale3d(1.05, 0.95, 1);
  }
  40% {
    transform: scale3d(0.95, 1.05, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.75, 1.25, 1);
  }
  75% {
    transform: scale3d(1.25, 0.75, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-animated-rubber-band-out`

Duration: `0.6s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-animated-text[data-style="rotating"][data-rotate="rubber`

```css
@keyframes jkit-animated-rubber-band-out {
  0% {
    transform: scaleX(1);
  }
  30% {
    transform: scale3d(1.05, 0.95, 1);
  }
  40% {
    transform: scale3d(0.95, 1.05, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.75, 1.25, 1);
  }
  75% {
    transform: scale3d(1.25, 0.75, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
```

> Transform/motion animation

### `@keyframes jkit-ripple`

Duration: `3s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.glow-enable.hover-gra`

```css
@keyframes jkit-ripple {
  70% {
    box-shadow: currentcolor 0px 0px 0px 15px;
    opacity: 0;
  }
  100% {
    box-shadow: currentcolor 0px 0px 0px 0px;
    opacity: 0;
  }
}
```

> Opacity fade · Shadow pulse/glow effect

### `@keyframes jkit-ripple`

Duration: `3s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.glow-enable.hover-gra`

```css
@keyframes jkit-ripple {
  70% {
    box-shadow: currentcolor 0px 0px 0px 15px;
    opacity: 0;
  }
  100% {
    box-shadow: currentcolor 0px 0px 0px 0px;
    opacity: 0;
  }
}
```

> Opacity fade · Shadow pulse/glow effect

### `@keyframes jkit-search-background`

Duration: `0.8s` · Easing: `ease-out` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-search .swal2-container::before`

```css
@keyframes jkit-search-background {
  0% {
    opacity: 0;
    transform: scale(0.04) translateY(300%);
  }
  40% {
    transform: scale(0.04) translateY(0px);
    transition-behavior: normal;
    transition-duration: 0s;
    transition-timing-function: ease-out;
    transition-delay: 0s;
    transition-property: all;
  }
  40% {
    transform: scale(0.04) translateY(0px);
  }
  60% {
    opacity: 1;
    transform: scale(0.02) translateY(0px);
  }
  61% {
    opacity: 1;
    transform: scale(0.04) translateY(0px);
  }
  99.9% {
    opacity: 1;
    height: 0px;
    padding-bottom: 100%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
  }
  100% {
    opacity: 1;
    transform: scale(2) translateY(0px);
    height: 100%;
    padding-bottom: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}
```

> Fade + motion enter animation · Dimension expand/collapse

### `@keyframes jkit-search-background`

Duration: `0.8s` · Easing: `ease-out` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.jeg-elementor-kit.jkit-search .swal2-container::before`

```css
@keyframes jkit-search-background {
  0% {
    opacity: 0;
    transform: scale(0.04) translateY(300%);
  }
  40% {
    transform: scale(0.04) translateY(0px);
    transition-behavior: normal;
    transition-duration: 0s;
    transition-timing-function: ease-out;
    transition-delay: 0s;
    transition-property: all;
  }
  40% {
    transform: scale(0.04) translateY(0px);
  }
  60% {
    opacity: 1;
    transform: scale(0.02) translateY(0px);
  }
  61% {
    opacity: 1;
    transform: scale(0.04) translateY(0px);
  }
  99.9% {
    opacity: 1;
    height: 0px;
    padding-bottom: 100%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
  }
  100% {
    opacity: 1;
    transform: scale(2) translateY(0px);
    height: 100%;
    padding-bottom: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}
```

> Fade + motion enter animation · Dimension expand/collapse

### `@keyframes open-frame`

Duration: `0.3s` · Easing: `linear` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.alert-frame`

```css
@keyframes open-frame {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(0.97);
  }
  75% {
    transform: scale(0.93);
  }
  100% {
    transform: scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes open-toast`

Duration: `0.3s` · Easing: `linear` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.toast-content`

```css
@keyframes open-toast {
  0% {
    transform: scaleX(1) scaleY(1);
  }
  20%, 45% {
    transform: scaleX(1.35) scaleY(0.1);
  }
  65% {
    transform: scaleX(0.8) scaleY(1.7);
  }
  80% {
    transform: scaleX(0.6) scaleY(0.85);
  }
  100% {
    transform: scaleX(1) scaleY(1);
  }
}
```

> Transform/motion animation

### `@keyframes moa`

Duration: `26s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.mae-o1`

```css
@keyframes moa {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(60px, 50px) scale(1.08);
  }
}
```

> Transform/motion animation

### `@keyframes mob`

Duration: `20s` · Easing: `ease-in-out` · Delay: `4s` · Iteration: `infinite` · Fill: `none`

Used by: `.mae-o2`

```css
@keyframes mob {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(-50px, 60px) scale(1.06);
  }
}
```

> Transform/motion animation

### `@keyframes moc`

Duration: `30s` · Easing: `ease-in-out` · Delay: `8s` · Iteration: `infinite` · Fill: `none`

Used by: `.mae-o3`

```css
@keyframes moc {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(-60px, -40px) scale(1.1);
  }
}
```

> Transform/motion animation

### `@keyframes mod`

Duration: `22s` · Easing: `ease-in-out` · Delay: `2s` · Iteration: `infinite` · Fill: `none`

Used by: `.mae-o4`

```css
@keyframes mod {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(40px, -30px) scale(1.06);
  }
}
```

> Transform/motion animation

### `@keyframes skel`

Duration: `1.5s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.post-sk`

```css
@keyframes skel {
  0% {
    background-color: rgba(255, 255, 255, 0.03);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.06);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.03);
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes show-content-image`

```css
@keyframes show-content-image {
  0% {
    visibility: hidden;
  }
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
```

### `@keyframes turn-on-visibility`

```css
@keyframes turn-on-visibility {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes turn-off-visibility`

```css
@keyframes turn-off-visibility {
  0% {
    opacity: 1;
    visibility: visible;
  }
  99% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
```

> Opacity fade

### `@keyframes lightbox-zoom-in`

```css
@keyframes lightbox-zoom-in {
  0% {
    transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes lightbox-zoom-out`

```css
@keyframes lightbox-zoom-out {
  0% {
    transform: translate(-50%, -50%) scale(1);
    visibility: visible;
  }
  99% {
    visibility: visible;
  }
  100% {
    transform: translate(calc((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position)),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
    visibility: hidden;
  }
}
```

> Transform/motion animation

### `@keyframes overlay-menu__fade-in-animation`

```css
@keyframes overlay-menu__fade-in-animation {
  0% {
    opacity: 0;
    transform: translateY(0.5em);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes timer`

```css
@keyframes timer {
  0% {
    width: 100%;
  }
  25% {
    width: 75%;
  }
  50% {
    width: 50%;
  }
  75% {
    width: 25%;
  }
  100% {
    width: 1%;
  }
}
```

> Dimension expand/collapse

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: 0.2s linear;
transition: 10ms;
transition: 0.2s;
transition: 0.01s;
transition: 0.3s;
transition: unset;
transition: width 0.3s;
transition: 0.4s;
transition: opacity 0.25s ease-in-out;
transition: 0.25s;
transition: 0.5s;
transition: 0.6s;
```

## How to Recreate This Motion Design

### Step 1 — Install Dependencies

```bash
```

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

- **Duration scale:** `0.2s` · `10ms` · `0.01s` · `0.3s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`910px`) → `screens/scroll/scroll-017.png`
- **33%** (`1767px`) → `screens/scroll/scroll-033.png`
- **50%** (`2677px`) → `screens/scroll/scroll-050.png`
- **67%** (`3587px`) → `screens/scroll/scroll-067.png`
- **83%** (`4444px`) → `screens/scroll/scroll-083.png`
- **100%** (`5354px`) → `screens/scroll/scroll-100.png`

