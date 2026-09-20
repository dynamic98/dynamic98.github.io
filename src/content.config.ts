import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    order: z.number(),
    number: z.string(),
    title: z.string(),
    question: z.string(),
    detail: z.string(),
    keywords: z.array(z.string())
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    art: z.enum(['perception', 'preattentive', 'vr', 'model', 'coordination', 'analysis', 'neutral']).optional(),
    href: z.string().url().optional(),
    linkLabel: z.string().optional()
  })
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    year: z.number(),
    order: z.number(),
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    href: z.string().url(),
    tag: z.string(),
    thesis: z.boolean().optional()
  })
});

export const collections = { research, projects, publications };
