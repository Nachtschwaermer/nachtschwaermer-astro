import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const persons = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/pages/_persons" }),
	schema: z.object({
		title: z.string(),
		rank: z.string().optional(),
	}),
});
const deceased = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/pages/_deceased" }),
	schema: z.object({
		title: z.string(),
		rank: z.string().optional(),
	}),
});

export const collections = { persons, deceased };
