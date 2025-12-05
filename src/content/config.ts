import { defineCollection, z } from "astro:content";

const projectContent = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        link: z.string(),
        tags: z.array(z.string()),
        content: z.string(),
    }),
});

export const collections = { project_content: projectContent };
