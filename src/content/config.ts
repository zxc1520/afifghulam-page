import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    //slug: z.string(),
  }),
});

export const collections = {
  projects: projects,
};
