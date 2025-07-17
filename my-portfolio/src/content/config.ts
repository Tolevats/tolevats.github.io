/// <reference types="astro/client" />

import { z, defineCollection } from 'astro:content';

// The schema for a single project
const projectsCollection = defineCollection({
  type: 'content', // can be 'content' for .md/.mdx or 'data' for .json/.yaml
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    category: z.enum(["Frontend", "Full-Stack", "Testing"]),
    imgSrc: image(),
    imgAlt: z.string(),
    url: z.string().url().optional(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    platform: z.string(),
    url: z.string().url(),
  }),
});

// Export `collections` object to register my collections
export const collections = {
  'projects': projectsCollection,
  'posts': postsCollection,
};