# markpasacreta.github.io

A minimalist Jekyll portfolio for GitHub Pages. The site uses a custom layout and one stylesheet—there is no theme, JavaScript, or separate build step.

## Add a project

Adding a project means adding one Markdown file to `_projects/`. Copy `_projects/supercap-buffer.md` as a starting point and use this front matter schema:

```yaml
---
title: Project title
subtitle: A one-line description of what it actually is
date: 2025-03-15
stack: [Altium, LTspice, STM32]
summary: One or two sentences shown on the landing-page card.
order: 1
---
```

Write the project below the front matter in normal Markdown. Level-two and level-three headings, images, tables, blockquotes, inline code, and fenced code blocks are styled automatically. Put project images in `assets/img/` and reference them with a root-relative URL:

```markdown
![Oscilloscope capture](/assets/img/scope-capture.png)
```

Projects appear on the landing page in ascending `order`. Each project is published at `/projects/file-name/`.

## Run locally

With Ruby and the `github-pages` gem available, serve the repository using the standard GitHub Pages/Jekyll workflow:

```sh
jekyll serve
```

Then open `http://localhost:4000`. GitHub Pages builds and publishes the `main` branch automatically once Pages is enabled for the repository.
