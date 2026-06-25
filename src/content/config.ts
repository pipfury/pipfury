import { defineCollection, z } from "astro:content";

const flexibleSchema = z.object({}).passthrough();

export const collections = {
  learn: defineCollection({ type: "content", schema: flexibleSchema }),
  analysis: defineCollection({ type: "content", schema: flexibleSchema }),
  journal: defineCollection({ type: "content", schema: flexibleSchema }),
  tools: defineCollection({ type: "content", schema: flexibleSchema }),
  resources: defineCollection({ type: "content", schema: flexibleSchema }),
  glossary: defineCollection({ type: "content", schema: flexibleSchema }),
  legal: defineCollection({ type: "content", schema: flexibleSchema })
};