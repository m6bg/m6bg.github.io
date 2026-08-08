# Handoff: Portfolio Site Shell

## Overview
Personal portfolio site shell for Mark Pasacreta: a centered landing page with three links (experience, portfolio, hobbies), an experience list, an interactive portfolio (hover-to-preview project list + detail page), and a hobbies placeholder. All screens share a light-green background and a single "m" back mark top-left.

## About the Design Files
The bundled file (`PortfolioSite.dc.html`) is a **design reference built in HTML** — a working prototype showing intended look, content structure, and behavior. It is not production code to copy verbatim. The task is to **recreate this design in the target codebase's environment** (React, Vue, plain static site, etc.) using its existing patterns — or, if no framework exists yet, choose the simplest appropriate one (a static site generator or lightweight React app is a good fit for a personal portfolio) and implement fresh.

## Fidelity
**High-fidelity.** Colors, type, spacing, and interaction behavior below are final — implement pixel-accurately.

## Screens / Views

### 1. Landing (`route === "landing"`)
- Purpose: entry point, routes to the three sections.
- Layout: full-viewport (`min-height:100vh`), flex column, centered both axes, `gap:56px`.
- Components:
  - Name: "Mark Pasacreta", `font-weight:700`, `letter-spacing:-0.02em`, size `clamp(2.75rem, 6vw, 5.5rem)`, color `--text-primary` (black).
  - Nav row: flex row, `gap:56px`, three `ForwardLink`s: "experience", "portfolio", "hobbies" (lowercase, sentence case, not Title Case).

### 2. Experience (`route === "experience"`)
- Purpose: simple editable list of roles.
- Layout: `BackMark` top-left (padding `32px 48px`), content column `max-width:560px`, centered, `padding:20px 24px 120px`, `gap:40px`.
- Components:
  - Heading "experience": `--text-h1`, `font-weight:700`, `letter-spacing:-0.02em`.
  - Repeated row per entry, `gap:6px` each, list `gap:40px` between rows:
    - Top line: flex row, `justify-content:space-between`, `align-items:baseline` — role (`--text-h2`, `font-weight:600`, black) and dates (`--text-small`, `--text-secondary` gray, `white-space:nowrap`).
    - Org line: `--text-body`, `--text-secondary`.
    - Description line: `--text-body`, `line-height:var(--leading-normal)`, black.
  - Data is a plain array of `{ role, org, dates, description }` objects — should be the easiest content in the site to edit (e.g. a JSON/YAML/Markdown data file the developer wires up).

### 3. Portfolio (`route === "portfolio"`)
- Purpose: interactive project list; hovering a project navigates straight to its detail page (no click required).
- Layout: `BackMark` top-left, content column `max-width:560px`, `padding:40px 24px 120px`, `gap:22px`.
- Components: one `ProjectLink` per project, stacked vertically, plain text. `onMouseEnter` triggers navigation to that project's detail screen.

### 4. Project detail (`route === "project"`)
- Purpose: documentation for a single project, reached via hover from Portfolio.
- Layout: `BackMark` top-left (returns to Portfolio, not Landing), content column `max-width:640px`, `padding:20px 24px 120px`, `gap:36px`.
- Components:
  - `SectionHeader` with `title` and `dates` props.
  - `WritingBlock` containing the body copy (plain paragraph text in this shell; supports inline images + captions per the design system).
- Data per project: `{ slug, title, dates, body }`.

### 5. Hobbies (`route === "hobbies"`)
- Purpose: placeholder for future content.
- Layout: same shell as Experience (`BackMark` top-left, `max-width:560px` column, `gap:16px`).
- Components: heading "hobbies" (`--text-h1`), single line of secondary-colored text: "more to come here soon."

## Interactions & Behavior
- **Navigation**: single-page state machine with a `route` (`landing | experience | portfolio | project | hobbies`) and optional `slug` (selected project). No page reloads.
  - Landing → experience/portfolio/hobbies: `onClick` on each `ForwardLink`.
  - Portfolio → project detail: `onMouseEnter` on each `ProjectLink` (hover, not click) — sets `slug` and switches to the project route.
  - Every non-landing screen: `BackMark` top-left. Experience/Hobbies/Portfolio's back mark returns to Landing; Project detail's back mark returns to Portfolio.
- **Hover states**: `ForwardLink` — arrow (`→`) shifts right 4px, `transform:translateX(4px)`, using `--duration-fast`/`--ease-standard`. `ProjectLink` — underline appears (`text-decoration:underline`). `BackMark` — opacity drops to ~55%.
- **Active/press states**: `ProjectLink` darkens from gray to black on press. Nothing scales or bounces.
- **Transitions**: 120–220ms, `cubic-bezier(0.4,0,0.2,1)` — color/opacity/transform only, no spring/bounce.
- **Responsive behavior**: not addressed in this shell (desktop-first prototype); content columns are capped at 560–640px so they should reflow reasonably on narrower viewports, but this should be verified/adjusted during implementation.

## State Management
- `route`: string, one of `landing`, `experience`, `portfolio`, `project`, `hobbies`.
- `slug`: string or null — which project is selected when `route === "project"`.
- All data (`projectData`, `experienceData`) is static/local in this prototype. In production, experience and project data should live in easily-editable source files (JSON, YAML, or Markdown with frontmatter) rather than hardcoded in components — this was an explicit requirement.

## Design Tokens

### Colors
- `--green-50: oklch(97.5% 0.018 140)` → `--surface-bg` (page background, the one signature color)
- `--green-100: oklch(95.5% 0.03 140)` → `--surface-bg-raised`
- `--green-200: oklch(91% 0.045 140)` → `--surface-line`
- `--black: oklch(18% 0 0)` → `--text-primary`
- `--white: oklch(100% 0 0)` → `--text-on-dark`
- `--gray-100: oklch(94% 0 0)` → `--border-hairline`
- `--gray-300: oklch(82% 0 0)` → `--text-tertiary`
- `--gray-500: oklch(58% 0 0)` → `--text-secondary`
- `--gray-700: oklch(38% 0 0)`
- Rule: text is only ever black, gray, or white. No colored links, accents, or icons anywhere.

### Typography
- Single family: **Instrument Sans** (Google Fonts), all weights from regular body to bold display.
- Scale (see `tokens/typography.css` in bundle for exact `--text-*` values): `--text-h1`, `--text-h2`, `--text-body`, `--text-small`, plus `--leading-normal` for body line-height.
- Landing name size: `clamp(2.75rem, 6vw, 5.5rem)`.
- `letter-spacing: -0.02em` on large headings (name, section headers).

### Spacing (4px base scale)
`--space-1:4px` `--space-2:8px` `--space-3:12px` `--space-4:16px` `--space-5:24px` `--space-6:32px` `--space-7:48px` `--space-8:64px` `--space-9:96px` `--space-10:144px`

### Radius & Motion
- `--radius-sm:2px` (used only to soften embedded images) — otherwise no rounding anywhere.
- `--radius-md:4px`
- `--ease-standard: cubic-bezier(0.4,0,0.2,1)`
- `--duration-fast:120ms`, `--duration-normal:220ms`

### Borders/shadows
None used anywhere — flat color fields only, no card borders, no drop shadows.

## Assets
No logos, photography, or illustration assets. The "m" back mark and "Mark Pasacreta" wordmark are both set in Instrument Sans type, not drawn/vector marks. Project detail pages support inline images via `WritingBlock`, but no real photos are included yet — placeholder only.

## Files
- `PortfolioSite.dc.html` — the full design reference (all 5 screens + component wiring + placeholder content/data).
- `design-system/` — the bound design system source: tokens (`colors.css`, `typography.css`, `spacing.css`, `interactions.css`), compiled `styles.css`, and the component bundle (`_ds_bundle.js`) implementing `BackMark`, `ForwardLink`, `ProjectLink`, `SectionHeader`, `WritingBlock`. Read `design-system/readme.md` for the full system guide.

Open `PortfolioSite.dc.html` directly in a browser to click through all five screens and see the live interactions (hover-to-navigate on Portfolio, hover states, etc.).
