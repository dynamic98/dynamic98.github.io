# Junryeol Jeon — Research Portfolio

The site is content-driven. Routine research updates should only require Markdown files in `src/content/` and images in `assets/images/`.

## Preview locally

```bash
nvm use
npm install
npm run dev -- --host 0.0.0.0
```

Open port `4321` in Codespaces.

## Site structure

```
src/content/
├── research/       # the three PhD research axes
├── projects/       # PhD research + other research
└── publications/   # publication entries

assets/images/
├── img-profil.jpg  # profile photo
└── projects/       # recommended folder for project images
```

## Edit the PhD research axes

Each file in `src/content/research/` controls one part of the Perception → Biometrics → Coordination research arc.

Important fields:

```yaml
order: 1
number: "01"
rq: "RQ1 · Perception / Visual Attention"
action: "Elicit"
title: "Perception & Visual Attention"
question: "..."
detail: "..."
keywords:
  - "Visual attention"
```

## Add a PhD project

Create a Markdown file in `src/content/projects/`:

```md
---
order: 6
group: "phd"
area: "RQ3 · Coordination"
stage: "Design coordination behavior"
eyebrow: "RQ3 · Coordination"
title: "Project title"
description: "One or two sentences."
tags:
  - "Gaze"
  - "Human–AI interaction"
image: "/images/projects/project-name.jpg"
imageAlt: "Project image description"
href: "https://doi.org/..."
linkLabel: "Paper ↗"
---
```

`order` controls the sequence within the PhD research roadmap.

## Add other research

Use the same format but set:

```yaml
group: "other"
```

Other research appears in a separate section below the PhD sequence.

## Project images

Put images in:

```
assets/images/projects/
```

and reference them like:

```yaml
image: "/images/projects/project-name.jpg"
```

To update an image later, replace the file while keeping the same filename. No code or Markdown change is needed.

If no image is ready, omit `image` and use one of the built-in placeholders:

```yaml
art: "perception"
art: "preattentive"
art: "vr"
art: "model"
art: "coordination"
art: "analysis"
```

Once a real image is available, replace the `art:` line with an `image:` line.

## Add a publication

Create a Markdown file in `src/content/publications/`:

```md
---
year: 2027
order: 1
title: "Paper title"
authors: "Author A, Junryeol Jeon, Author B"
venue: "CHI 2027"
href: "https://doi.org/..."
tag: "Gaze · Interaction"
thesis: true
---
```

Set `thesis: true` only when you want the publication labeled as part of the PhD research line. Publications are automatically sorted by year and then by `order`.

## Profile image

Replace:

```
assets/images/img-profil.jpg
```

with a new image using the same filename.

## Design files

Normal updates should not require these files:

- Homepage layout: `src/pages/index.astro`
- Header/footer: `src/layouts/BaseLayout.astro`
- Visual styling: `src/styles/global.css`
- Content schemas: `src/content.config.ts`
