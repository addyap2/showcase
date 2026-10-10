# Interactions — Antony Addy showcase

## Navigation

Desktop links identify the current section with an underline and
`aria-current="location"`. Below 1100px the navigation uses a toggle with
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

Every project title displays its website address as an actual link. A stretched
hit area keeps the full card clickable with one keyboard stop. The accessible
name includes both the address and project name. Links open in a new tab.
In-progress projects retain their status badge and link to their supplied URL.
SpeakUp and Lola use larger split layouts on desktop and native expandable
design notes; category
filters restore a consistent card grid. Browser frames use subtle category
colors. Actual client testimonials can be displayed; placeholders are excluded.

Filters use buttons with `aria-pressed`. They update a live result count and
hide nonmatching cards immediately. Small-screen filters scroll horizontally.
The initial all-project view shows six selected projects. Its expand/collapse
button exposes the entire collection and announces `aria-expanded`. Category
filters always search the full collection, including projects outside the six.

## Language

French is the default; nine languages can be selected using a labelled
native select. The choice is saved locally when available. Headings, previews,
project details, filters, FAQ, video controls, email subject, and WhatsApp
message follow the selected language. The selected category, collection expansion and AI example step are preserved.
Arabic uses a right-to-left layout; website addresses and the English example
retain left-to-right direction.

## AI example

A real illustrative conversation and sample report from SpeakUp’s public
homepage are shown in three immediate steps: opening question, reply and
follow-up, then sample feedback. The button cycles back to the beginning.
The English example has a polite live region, while controls and explanatory
copy follow the interface language. It does not record audio or call an AI API.
The real product opens through a normal link. Space is reserved for the longest
step so the navigation button stays steady.

## Video and keyboard access

Video has native playback controls and a separate labelled sound toggle.
Playback starts only after the visitor presses play; leaving the section or
hiding the tab pauses it. The current interface language selects a translated
caption track. French uses the film’s existing burned-in text by default; its
optional native caption track remains available in the player. Sound state is announced with
`aria-pressed`, and its visible label matches its action.

A skip link targets the focusable main element. All links, buttons, and FAQ
summaries have a visible focus ring. Cards use an inset ring so it remains
visible inside their clipped border. The FAQ uses native details/summary.

## Progressive enhancement

The initial HTML includes French text, hero previews, projects and FAQ. If
JavaScript is unavailable, the content and ordinary links remain usable; the
filter toolbar and language controls are hidden, and mobile navigation stays
visible. With JavaScript enabled, the page enhances that content in place.
