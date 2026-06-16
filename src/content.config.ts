import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const nicheSchema = z.object({
  title: z.string(),
  icon: z.string(),
  order: z.number().optional(),
  description: z.string().optional(),
});

function makeNicheCollection(dir: string) {
  return defineCollection({
    loader: glob({ pattern: '**/*.md', base: dir }),
    schema: nicheSchema,
  });
}

export const collections = {
  niches: makeNicheCollection('./src/content/niches'),
  'niches-en': makeNicheCollection('./src/content/niches-en'),
  'niches-ja': makeNicheCollection('./src/content/niches-ja'),
  'niches-de': makeNicheCollection('./src/content/niches-de'),
  'niches-pt': makeNicheCollection('./src/content/niches-pt'),
  'niches-fr': makeNicheCollection('./src/content/niches-fr'),
};
