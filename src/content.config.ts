import { defineCollection, z } from 'astro:content';

const tours = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    city: z.string(),
    country: z.string(),
    duration: z.string(),
    category: z.string(),
    priceFrom: z.number().nonnegative(),
    rating: z.number().min(0).max(5),
    reviews: z.number().int().nonnegative(),
    summary: z.string(),
    featured: z.boolean().default(false),
    badge: z.string().optional(),
  }),
});

export const collections = { tours };
