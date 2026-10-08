# Motion — Antony Addy showcase

The hero restores the original wall of work: two columns of screenshots drift
in opposite directions with perspective and subtle pointer tilt. At 980px and
below, the wall becomes a single horizontal moving strip. The heading reveals
word by word, its italic phrase shimmers, and the numeric project count rises.
The original small decorative marks and staggered hero entrance are restored.

A labelled pause/resume button controls the continuous hero animation. Motion
pauses automatically when the hero leaves the viewport or the tab is hidden.
Duplicated tracks include the gap at the loop boundary to avoid a jump.

## Tokens and feedback

`--ease: cubic-bezier(.16,1,.3,1)` controls a short, once-only reveal. Buttons
lift 2px on hover and project screenshots zoom to 1.025.
Filters fade their results over 250ms. Hero pointer tilt is throttled with
requestAnimationFrame. The native cursor and stable buttons are retained.

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
and hover transforms. The hero wall becomes static, words and numbers stay
visible, and the animation toggle is hidden. Video autoplay is
also disabled; native playback controls remain available.
