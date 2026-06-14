import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const niches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/niches' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { niches };
