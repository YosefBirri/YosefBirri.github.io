import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = [
  'GIS & Spatial Analysis',
  'Geospatial Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Data Science & Statistics',
  'Web GIS & App Development',
] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    place: z.string(),
    // [longitude, latitude] of the study area, if the work has one
    coords: z.tuple([z.number(), z.number()]).optional(),
    // which locator to draw: a point on a world map, or the contiguous US as a whole
    locator: z.enum(['world', 'us', 'none']).default('none'),
    period: z.string(),
    categories: z.array(z.enum(CATEGORIES)),
    tools: z.array(z.string()),
    metric: z.object({ value: z.string(), label: z.string() }),
    featured: z.boolean().default(false),
    order: z.number(),
    status: z.enum(['published', 'in-progress']).default('in-progress'),
    context: z.string(), // course or employer
    team: z.string().optional(),
    repo: z.string().url().optional(),
    facts: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
    resumeLine: z.string().optional(),
  }),
});

export const collections = { projects };
