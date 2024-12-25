import { z } from "zod";

const createBlog = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const BlogValidations = {
  createBlog,
};