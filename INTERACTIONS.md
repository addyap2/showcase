# Interactions — Antony Addy showcase

## Navigation

Desktop links identify the current section with an underline and
`aria-current="location"`. Below 900px the navigation uses a toggle with
`aria-expanded` and `aria-controls`. Selecting a destination closes the menu;
Escape closes it and returns keyboard focus to the toggle. Outside clicks and
resizing to desktop also close the menu. There are no magnetic buttons or
replacement cursors.

## Hero

The animated screenshots are decorative; the project gallery provides the
actual visit links. The labelled pause/resume button applies to the wall,
shimmer and decorative marks, follows the chosen language, and uses
`aria-pressed` to announce its paused state. Reduced-motion users see a static
wall. Desktop pointer movement adds the original subtle perspective tilt.

## Project gallery

Live projects have one full-card link with a meaningful project name, the real
host, and a visible visit action. Links open in a new tab. In-progress projects
are clearly labelled and have no outbound link. Actual client testimonials can
be displayed; placeholder testimonials are excluded.

Filters use buttons with `aria-pressed`. They update a live result count and
hide nonmatching cards immediately. Small-screen filters scroll horizontally.
The all-project view groups client work and education projects.

## Language

French is the default; French and English can be selected using labelled
buttons. The choice is saved locally when available. Headings, previews,
project details, filters, FAQ, video controls, email subject, and WhatsApp
message follow the selected language. The selected category is preserved.

## Video and keyboard access

Video has native playback controls and a separate labelled sound toggle.
Muted autoplay is allowed only on larger screens without reduced motion or
Data Saver; leaving the section pauses it. Sound state is announced with
`aria-pressed`, and its visible label matches its action.

A skip link targets the focusable main element. All links, buttons, and FAQ
summaries have a visible focus ring. Cards use an inset ring so it remains
visible inside their clipped border. The FAQ uses native details/summary.

## Progressive enhancement

The initial HTML includes French text, hero previews, projects and FAQ. If
JavaScript is unavailable, the content and ordinary links remain usable; the
filter toolbar and language controls are hidden, and mobile navigation stays
visible. With JavaScript enabled, the page enhances that content in place.
