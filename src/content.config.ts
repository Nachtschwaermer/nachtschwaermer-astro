// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const persons = defineCollection({ 
    loader: glob({pattern: "**/*.md", base: "./src/pages/_persons" }), 
    schema: z.object({
        title: z.string(),
        rank: z.string().optional(),
    })
});
const deceased = defineCollection({ 
    loader: glob({pattern: "**/*.md", base: "./src/pages/_deceased" }),
    schema: z.object({
        title: z.string(),
        rank: z.string().optional(),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { persons, deceased };