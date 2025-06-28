import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectContent = defineCollection({
    loader: glob({ pattern: '*.md', base: "./src/project_content"})
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        image: z.object({
        url: z.string(),
        alt: z.string(),
        }),
        pubDate: z.coerce.date(), 
        tags: z.array(z.string()),
        content: z.string(),
    }),
});

export const collections = { project_content };
