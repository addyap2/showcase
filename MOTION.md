# Motion system — Antony Addy / showcase

A cinematic-but-quiet motion language. Every movement earns its place: it
directs attention, reveals hierarchy, or confirms an action. Nothing moves for
decoration alone. The whole system collapses to static instantly under
`prefers-reduced-motion`.

## 1. Foundations (design tokens)

Defined once in `:root`, reused everywhere so sections feel like one system.

| Token | Value | Use |
|---|---|---|
| `--ease-cine` | `cubic-bezier(.16,1,.3,1)` | Primary. Fast start, long soft settle — the "expensive" feel. Entrances, reveals. |
| `--ease-soft` | `cubic-bezier(.22,.61,.36,1)` | Hovers, small UI moves. |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | Symmetric moves (toggles). |
| `--dur-1` | 180ms | Micro-feedback (press, hover). |
| `--dur-2` | 420ms | Standard reveal / state change. |
| `--dur-3` | 700ms | Cinematic reveal (headlines, hero items). |
| `--dur-4` | 900ms | Hero headline only. |
| `--stagger` | 70–90ms | Gap between siblings in a sequence. |

**Only `transform` and `opacity` are animated** (compositor-friendly, no
layout/paint). `will-change` is added on interaction start and removed on end.

## 2. Loading state
- **Trigger:** document parse.
- **What:** the page background and type are painted immediately (no spinner —
  a portfolio should never gate content). Screenshots use a **blur-up**: each
  `img` starts at `opacity:0; filter:blur(12px)` and transitions to sharp over
  `--dur-3` `--ease-cine` on `load`. Cached images resolve on the same frame.
- **Why:** perceived quality; avoids the "pop" of raw images.

## 3. Page entrance / hero sequence
- **Trigger:** load (CSS animation, no JS wait).
- **Sequence (staggered rise + fade, `translateY(18px)→0`):**
  1. Kicker — delay 50ms, `--dur-3`
  2. H1 — delay 150ms, `--dur-4` (longest; it's the hero of the hero)
  3. Lead paragraph — delay 300ms, `--dur-3`
  4. CTA row — delay 420ms, `--dur-2`
  5. Stat row — delay 540ms, `--dur-2`
- **Easing:** `--ease-cine` throughout, so the sequence shares one "voice".
- **Direction:** upward — content "arrives" from below, reading order top-down.
- **Relationship:** none to input; it plays once to set the tone, then gets out
  of the way.

## 4. Scroll choreography (the spine of the site)
- **Trigger:** element crosses 8% into viewport (IntersectionObserver, unobserved
  after firing — plays once, never on scroll-up).
- **What:** `.reveal` elements rise 16px and fade in over `--dur-3` `--ease-cine`.
- **Stagger:** project cards carry a per-column delay (`0 / 90 / 180ms`) via a
  CSS var, so each row reveals as a left-to-right wave rather than a slab.
- **Continuity:** section headers, About, Services and cards all use the *same*
  reveal — the site reads as one evolving surface, not a reel of separate tricks.

## 5. Depth / parallax
- **Trigger:** scroll (rAF-throttled, passive listener).
- **What:** the hero's soft light-glow layer translates at ~15% of scroll speed,
  giving the header depth as you leave it. Deliberately the *only* parallax —
  more would compete with the reveals.
- **Guards:** disabled on touch/coarse pointers, small screens and reduced motion.

## 6. Scroll progress
- **Trigger:** scroll.
- **What:** a 2px amber bar pinned to the very top scales on the X axis
  (`transform: scaleX(progress)`) — a quiet "you are here" for a long page.

## 7. Header
- **Trigger:** scroll past 10px.
- **What:** header gains a hairline shadow and slightly denser blur
  (`--dur-2`), lifting it above the scrolling content.

## 8. 3D / object transformation — project cards
- **Trigger:** pointer movement over a card (fine pointer + hover only).
- **What:** the card tilts toward the cursor — `perspective(1000px)` with
  `rotateX/rotateY` capped at ±4° — plus the standing hover lift
  (`translateY(-6px)`) and a screenshot zoom (`scale(1.045)`, `--dur-3`).
  Transition is suppressed *during* the move for 1:1 tracking, and restored on
  leave so the card eases back to rest.
- **Relationship:** directly couples to cursor position — the card feels
  physical and responsive.
- **Fallback:** coarse pointers get the lift + zoom only (no tilt).

## 9. Text reveal — headlines
- H1 rises as one block on entrance (§3). Section `h2`s ride the scroll reveal.
  No per-letter animation: at these sizes it reads as fussy, not premium.

## 10. Section transitions & continuity
- There are no hard "slides between screens" — continuity comes from **one
  shared reveal grammar, one easing, one stagger rhythm**. Scrolling feels like
  a single camera push through a set, not cuts between scenes.

## 11. Hover / button feedback / micro-interactions
| Element | Motion | Trigger | Timing |
|---|---|---|---|
| Primary/ghost buttons | `translateY(-1px)` in, `scale(.97)` on press | hover / `:active` | `--dur-1` `--ease-soft` |
| Nav links | underline wipes in from left | hover | `--dur-2` |
| Filter pills | fill + text swap | click | `--dur-2` |
| Language toggle | active segment slides colour | click | `--dur-2` `--ease-in-out` |
| "Visit site ↗" | arrow nudges up-right | card hover | `--dur-1` |
| Card | tilt + lift + image zoom (§8) | pointer | mixed |
| Filter change | cards hide/show instantly (no reflow dance) | click | — |

## 12. Accessibility & performance
- **`prefers-reduced-motion: reduce`** → all entrances, reveals, parallax, tilt
  and blur-up are neutralised; every element renders in its final state with no
  transitions. Content and layout are identical.
- Keyboard focus is never gated behind an animation; reveals never trap focus
  (content is present in the DOM, only visually offset).
- All animation is `transform`/`opacity`; observers are `once`; scroll and
  pointer handlers are rAF-throttled and passive. Target: a steady 60fps on a
  mid-range phone.
