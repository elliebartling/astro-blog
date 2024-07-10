import { defineCollection, z } from "astro:content";

const image = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    created: z.date(),
    updated: z.date().optional(),
    description: z.string(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  })
})

export const collections = { image };
