# Mark Pasacreta — Design System

A design system for Mark Pasacreta's personal portfolio site: a single, quiet showcase of who he is and what he's made. No external sources (codebase, Figma, decks) were provided — this system was built from a direct written brief the user gave in chat, reproduced below in spirit:

> a really clean but minimal light green background, super clean minimalist typeset, smooth static site... don't have the projects on the landing page... return button can just be "m"... in the middle, "Mark Pasacreta"... three forwarding links: experience, portfolio, hobbies, sleek, minimal arrow... project labels stacked vertically, never side by side... hover the project link, it underlines; click, it darkens.

There is no logo file for this brand — the wordmark is just the name, set in type, and the return mark is the lowercase letter "m". Nothing here should be treated as an actual logo.

## Site structure
- **Landing** — full-bleed light-green background, "Mark Pasacreta" centered, three `ForwardLink`s below it (experience / portfolio / hobbies). No project content here.
- **Portfolio** (and Experience, Hobbies) — `BackMark` ("m") top-left returns to landing. Portfolio shows a vertical stack of plain-text `ProjectLink`s.
- **Project detail** — Title, Dates, then Writing (paragraphs with images embedded inline via `WritingBlock`).

## Components
- `BackMark` — the "m" return-to-landing mark.
- `ForwardLink` — sleek text + minimal arrow, used for the three landing destinations.
- `ProjectLink` — plain-text project row: gray by default, underlines on hover, darkens to black on press/active. Rows always stack vertically.
- `SectionHeader` — bold Title + small gray Dates, atop a project page.
- `WritingBlock` — a paragraph of body copy with an optional embedded image + caption.

### Intentional additions
None beyond the brief — every component above maps directly to something the user described. No Button/Card/Tag/etc. were added since this brand has no such surfaces.

## Content fundamentals
- **Voice**: first person, plain, unadorned. Short declarative sentences. No taglines, no marketing verbs ("leverage", "empower"), no exclamation points.
- **Casing**: sentence case everywhere, including the three nav links (`experience`, `portfolio`, `hobbies` — lowercase, not Title Case) and the "m" mark (lowercase).
- **Structure**: every project page follows Title → Dates → Writing, in that order, with images embedded inline in the writing rather than in a separate gallery.
- **Emoji**: never.
- **Vibe**: quiet and precise. The writing should read like the design looks — nothing extra.

## Visual foundations
- **Background**: a single very light green fills the entire page (`--surface-bg`). This is the one signature color move of the whole system — everything else is black, white, or gray.
- **Text color**: black, gray, or white — no other hues, ever. No colored links, no colored accents, no colored icons.
- **Type**: one family, Instrument Sans, used at every weight from regular body copy up to a bold display size for the landing-page name. No serif, no mono, no display font swap.
- **Spacing**: 4px base scale (`--space-1`…`--space-10`), generous — content is narrow (~560–640px max-width) and vertically breathing, not dense.
- **Backgrounds**: flat color only. No photography, no illustration, no gradients, no textures or patterns.
- **Animation**: fluid but restrained — 120–220ms, standard ease-in-out, no bounce/spring/scale. Motion is limited to color/opacity shifts and a small arrow nudge on `ForwardLink` hover.
- **Hover states**: `ForwardLink` — arrow shifts right 4px. `ProjectLink` — underline appears. `BackMark` — opacity drops to ~55%.
- **Press/active states**: `ProjectLink` darkens from gray to black. Nothing shrinks or scales.
- **Borders/shadows**: none. No card borders, no drop shadows, no inner glows — the light-green field itself is the only surface.
- **Corner radii**: essentially none; a 2px radius (`--radius-sm`) softens only embedded images.
- **Layout rules**: the "m" mark is always pinned top-left. The landing page is always centered, both axes. Project lists are always a single vertical column — never a grid, never side-by-side.
- **Transparency/blur**: not used anywhere.
- **Imagery color vibe**: N/A until real project photos are supplied — treat embedded images as neutral, unfiltered, no forced grain/warmth.

## Iconography
The only "icon" in this system is a minimal right-pointing arrow (→, a plain Unicode glyph) used in `ForwardLink`. No icon font, no SVG icon set, no emoji. If future work needs more icons, match this same restrained, single-glyph approach rather than introducing a full icon library.

## Assets
No logo, photography, or illustration files were supplied. `assets/` is intentionally empty for now — real project screenshots/photos should be dropped into project `WritingBlock`s once available.

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/interactions.css` — design tokens (colors, Instrument Sans + type scale, spacing/motion, shared hover CSS for `ForwardLink`/`ProjectLink`).
- `components/navigation/BackMark.*` — the "m" mark.
- `components/links/ForwardLink.*`, `components/links/ProjectLink.*` — the two link styles.
- `components/content/SectionHeader.*`, `components/content/WritingBlock.*` — project-page content blocks.
- `guidelines/*.card.html` — foundation specimens (color, type, spacing, motion) shown in the Design System tab.
- `ui_kits/portfolio-site/` — full click-through recreation: landing → experience/portfolio/hobbies → project detail.
- `SKILL.md` — portable skill file for use outside this product.

## Caveats — please help me iterate
- **No real content yet.** Project titles, dates, writing, and photos in the UI kit are placeholders I invented to demonstrate structure — swap in your real projects, and I'll adjust spacing/line-length to fit.
- **No logo/mark file** was given, so the "m" is set in Instrument Sans type, not a designed mark — if you have (or want) an actual drawn wordmark, send it over.
- **Font substitution**: no font files were provided, so I chose Instrument Sans (Google Fonts) as a clean, minimal grotesk match for "super clean minimalist type set." If you had a specific typeface in mind, tell me and I'll swap every token over.
- **Green tone is my interpretation** of "really light green" — nudge `--green-50`/`--green-100` in `tokens/colors.css` if it should read warmer, cooler, or more saturated.
