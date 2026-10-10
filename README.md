# Antony Addy — Portfolio

A static showcase of live websites and tools, designed and built with AI.
No build step, no dependencies — plain HTML, CSS and JavaScript.

## Structure
```
index.html            The page
assets/styles.css     All styling
assets/app.js         Renders cards, filtering, language and AI example
assets/showcase-content.js  Creative showcase copy in nine languages
assets/projects.js    ← EDIT THIS to add / edit / reorder projects
screenshots/          One .jpg per project (1200px wide, web-optimised)
screenshots/responsive/  480px and 960px WebP alternatives
assets/video/captions/   Nine translated WebVTT caption files
```

## Add or change a project
1. Add a screenshot to `screenshots/<slug>.jpg` (16:10 works best).
2. Add an entry to `window.PROJECTS` in `assets/projects.js`, using the same
   `slug`. Set its `category` to one of the ids in `window.CATEGORIES`.
3. Generate the 480px and 960px WebP variants in `screenshots/responsive/`
   with `python3 tools/generate-previews.py` (requires Pillow for asset preparation
   only). The site itself has no runtime dependencies.
4. Update the French fallback cards in `index.html`.

The card appears in the full collection and category filters automatically.
Edit `selectedSlugs` in `assets/app.js` to change the six curated projects.

## Run locally
```bash
python3 -m http.server 8777
# open http://localhost:8777
```

## Deploy to Vercel (same as your other sites)
- Push this folder to a GitHub repo, then "Import Project" in Vercel — it
  auto-detects a static site, no configuration needed.
- Or from this folder: `npx vercel` (then `npx vercel --prod`).
- Suggested domain: a subdomain of your main site, e.g. `work.antonyaddy.com`
  or `studio.antonyaddy.com`.

## Interface

The page uses a warm paper, navy and amber palette with Fraunces headings and
Inter body text. Spacing tokens, two-column desktop project cards, a single-column
phone gallery and the original animated wall of project screenshots provide the visual hierarchy.
The portfolio comes immediately after the hero. Website addresses are clickable
project titles, with the project names retained underneath. Browser frames and
two larger featured projects introduce variety in the desktop gallery. The opening
selection shows six projects; visitors can expand all 21 or filter the entire collection.
SpeakUp and Lola have expandable design notes. An illustrative, three-step SpeakUp
example follows the gallery and links to the real product. See `MOTION.md` and
`INTERACTIONS.md` for the interaction and accessibility behavior.

French content is also included in the initial HTML so the page remains useful
before JavaScript loads or when it is unavailable. If project data or French copy
changes, update this fallback content in `index.html` as well. Runtime rendering
still uses `assets/projects.js` and `assets/app.js`; no build step is required.

Placeholder testimonials are never rendered. Set `placeholder: false` only when
replacing a sample with a real, approved client testimonial.

The film plays on request and pauses when it leaves the screen. Its original
French audio and burned-in French text are retained, with native translated
captions and a localized summary. Captions translate the existing on-screen
text; they are not a verbatim audio transcript. NotebookLM is credited.
