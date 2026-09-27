# Interaction system — Antony Addy / showcase

Companion to `MOTION.md`. Motion is what the site does on its own; interaction is
what it does *in response to the user*. One rule governs both: every response is
subtle, legible and fast. Feedback communicates hierarchy — it never exists for
spectacle. The whole interaction layer is **desktop-enhancement only**: touch and
reduced-motion users get equivalent, simpler feedback, never a degraded page.

## Capability gating
| Layer | Enabled when |
|---|---|
| Custom cursor, magnetic buttons | `(hover:hover) and (pointer:fine)` **and** not `prefers-reduced-motion` |
| 3D card tilt (see MOTION.md §8) | same |
| Scroll-spy nav, filter transitions, focus rings | always (no motion cost / already reduced-safe) |
| `:active` tap feedback | `(hover:none)` / coarse pointers |

Nothing here is required to read or operate the site; JS-off leaves a fully
usable page.

## 1. Custom cursor
Two composited layers, `mix-blend-mode: difference` so they stay visible on paper
*and* on the dark contact panel.
- **Dot** — 6px, tracks the pointer 1:1 (no lag): precise "where am I".
- **Ring** — 30px, follows with rAF easing (lerp ~0.18): gives weight and grace.
- **Before input (idle):** dot + ring at rest, native cursor hidden.
- **Approaching interactive** (`a, button, .card, .pill, [data-magnetic]`): ring
  grows to 48px and fills faintly, dot fades — the cursor "locks on", signalling
  *this is actionable*.
- **During press** (`pointerdown`): ring contracts — a physical clickable "give".
- **After:** returns to idle/hover state.
- Leaving the window hides both layers.

## 2. Magnetic buttons (`[data-magnetic]`)
Primary actions only — nav CTA, hero CTAs, the contact buttons. Never applied to
low-priority links, so magnetism itself signals hierarchy.
- **Before:** at rest.
- **During:** within the button's field the button eases toward the cursor
  (capped ≈10px), so it feels attracted to intent.
- **After (leave):** springs back to origin over `--dur-1`.
Disabled on touch (no hover to telegraph it) — those users get `:active` instead.

## 3. Navigation
- Links: underline wipes in on hover (MOTION §11).
- **Scroll-spy:** the link for the section in view stays underlined and full-ink,
  so the nav always answers "where am I on the page". Updated via
  IntersectionObserver, no scroll cost.
- CTA is magnetic (§2).

## 4. Hover states & hierarchy
Hover intensity scales with importance: primary buttons lift + shadow + magnet;
cards tilt + lift + image zoom; pills/links get a quiet colour/underline shift.
The bigger the commitment, the richer the response.

## 5. Cards
Desktop: pointer tilt + lift + screenshot zoom + cursor lock-on; the whole card
is one hit target. Touch: `:active` press (`scale .985`) for tactile confirmation;
tap opens the site.

## 6. Content reveals & filter transitions
- First view: scroll reveal with per-column stagger (MOTION §4).
- **Filtering:** matching cards re-enter with a quick `filterIn` fade-up
  (`.4s`), so a filter feels like content *arriving*, not a hard cut. Hidden
  cards leave immediately (no dead space).

## 7. Language switch
Re-render is invisible-fast; reveal state is re-applied so cards don't flash.
Prefilled email/WhatsApp messages swap to the active language.

## 8. Forms & feedback
There is no data-collection form (contact is direct email / WhatsApp — fewer
steps, less friction). Feedback is delivered through:
- **`:focus-visible`** — a clear 2px amber ring on every interactive element for
  keyboard users (never shown on mouse click).
- **Press** — `scale(.97)` on buttons, `.985` on cards.
- **Destination clarity** — external cards/links show their real host and open in
  a new tab.

## 9. Anti-goals (explicitly avoided)
Cursor trails/particles, more than one magnetic-strength, gesture-only actions,
motion that moves content the user is trying to click, and any interaction that
adds latency to a tap or click. If a flourish would slow the user by even a beat,
it is cut.

## 10. Performance & accessibility
`transform`/`opacity` only; one rAF loop drives the cursor; pointer/scroll
handlers are throttled/passive; observers fire once where possible. Reduced
motion disables cursor, magnetism, tilt and parallax and restores the native
cursor. Keyboard focus order is DOM order; nothing is reachable only by hover.
