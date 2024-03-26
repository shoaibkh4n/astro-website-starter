import { z, defineCollection } from "astro:content";

const NestingDummyData = defineCollection({
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      description: z.string(),
      image: image(),
      date: z.date(),
      media: z.array(
        z.object({
          name: z.string(),
          link: z.string(),
        })
      ),
      draft: z.boolean(),
    }),
});

export const collections = { NestingDummyData };
