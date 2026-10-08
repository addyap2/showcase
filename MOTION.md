# Motion — Antony Addy showcase

The work and headlines are visible as soon as the page renders. The three hero
previews are static, linked project screenshots; they do not scroll or tilt.

## Tokens and feedback

`--ease: cubic-bezier(.16,1,.3,1)` controls a short, once-only reveal. Buttons
lift 2px on hover, project screenshots zoom to 1.025, and preview windows lift
8px. Filters fade their results over 250ms. No custom cursor, pointer tracking,
continuous shimmer, marquee, count-up, or parallax is used.

## Scroll reveals

`motion.js` adds `will-reveal` only to elements initially below the viewport.
IntersectionObserver reveals them once at a 5% threshold and unobserves them.
Items already visible stay visible. Without JavaScript or IntersectionObserver,
the content remains readable. `window.motion.refresh()` observes newly rendered
cards after a language change.

The 2px progress bar updates through a passive scroll listener and one queued
requestAnimationFrame. There is no perpetual animation loop.

## Reduced motion

`prefers-reduced-motion: reduce` disables smooth scrolling, reveals, transitions,
and hover transforms. The layout and controls stay the same. Video autoplay is
also disabled; native playback controls remain available.
