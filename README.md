# Junryeol Jeon — Research Portfolio

This site is content-driven. Routine updates should only require Markdown files in `src/content/` and images in `assets/images/`.

## Preview locally

```bash
nvm use
npm install
npm run dev -- --host 0.0.0.0
```

## Content structure

```
src/content/
├── research/       # broad research areas
├── projects/       # all research projects in one list
└── publications/   # publication entries

assets/images/
├── img-profil.jpg
└── projects/
```

## Add a project

Create a Markdown file in `src/content/projects/`:

```md
---
order: 9
eyebrow: "Conversational agents · Multimodal"
title: "Project title"
description: "One or two sentences describing the project."
tags:
  - "Multimodal interaction"
  - "User modeling"
image: "/images/projects/project-name.webp"
imageAlt: "Short description of the project image"
href: "https://doi.org/..."
linkLabel: "Paper ↗"
---
```

The `order` field controls display order.

## Project images

Put images in `assets/images/projects/` and reference them with a web path:

```yaml
image: "/images/projects/project-name.webp"
```

To replace an image later, keep the same filename and replace the file. No Astro code needs to change.

The gaze project cards currently use figures extracted and cropped from the PhD proposal presentation.

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
tag: "Multimodal Interaction"
---
```

Publications are sorted automatically by year and then by `order`.

## Profile image

Replace `assets/images/img-profil.jpg` with a new image using the same filename.

## Design files

Normal content updates should not require editing:

- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `src/content.config.ts`
