# Junryeol Jeon — Research Portfolio

This site is intentionally content-driven. Most routine updates do **not** require editing Astro components or CSS.

## Preview locally

```bash
nvm use
npm install
npm run dev -- --host 0.0.0.0
```

Open port `4321` in Codespaces.

## Add a publication

Create one Markdown file in:

```
src/content/publications/
```

Example:

```md
---
year: 2027
order: 1
title: "Paper title"
authors: "Author A, Junryeol Jeon, Author B"
venue: "CHI 2027"
href: "https://doi.org/..."
tag: "Conversational Agents"
---
```

The homepage sorts publications by `year` (newest first), then by `order`.

## Add or edit a research theme

Research themes live in:

```
src/content/research/
```

Edit an existing `.md` file or duplicate one. The `order` field controls display order.

## Add a project

1. Put the project image in `assets/images/projects/`.
2. Create a Markdown file in `src/content/projects/`.
3. Point `image` to the file using a web path such as `/images/projects/my-project.jpg`.

Example:

```md
---
order: 6
eyebrow: "CHI 2027 · Conversational agents"
title: "Project title"
description: "One or two sentences describing the project."
tags:
  - "Conversational agents"
  - "Gaze"
image: "/images/projects/my-project.jpg"
imageAlt: "Short description of the project image"
href: "https://doi.org/..."
linkLabel: "Paper ↗"
---
```

If a project has no image yet, omit `image` and use:

```yaml
art: "gaze"
```

to show the temporary abstract gaze graphic.

## Replace a project image

The easiest method is to keep the same filename.

For example, if a project contains:

```yaml
image: "/images/projects/my-project.jpg"
```

replace:

```
assets/images/projects/my-project.jpg
```

with the new image. No Astro code or Markdown needs to change.

If the new image has a different filename or extension, upload it to `assets/images/projects/` and change only the `image:` line in the project's Markdown file.

## Profile image

The current profile photo is:

```
assets/images/img-profil.jpg
```

Replace that file with another image using the same filename to update the portrait without changing code.

## Where the design lives

- Site content: `src/content/`
- Personal/contact info: `src/data/site.ts`
- Homepage layout: `src/pages/index.astro`
- Shared header/footer: `src/layouts/BaseLayout.astro`
- Visual styling: `src/styles/global.css`

For normal research updates, you should only need `src/content/` and `assets/images/`.
