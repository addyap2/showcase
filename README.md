# Antony Addy — Portfolio

A static showcase of live websites and tools, designed and built with AI.
No build step, no dependencies — plain HTML, CSS and JavaScript.

## Structure
```
index.html            The page
assets/styles.css     All styling
assets/app.js         Renders cards + filtering + reveal animations
assets/projects.js    ← EDIT THIS to add / edit / reorder projects
screenshots/          One .jpg per project (1200px wide, web-optimised)
```

## Add or change a project
1. Add a screenshot to `screenshots/<slug>.jpg` (16:10 works best).
2. Add an entry to `window.PROJECTS` in `assets/projects.js`, using the same
   `slug`. Set its `category` to one of the ids in `window.CATEGORIES`.
That's it — the card appears automatically.

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
