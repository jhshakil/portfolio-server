import { z } from "zod";

const createProject = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    link: z.string({
      required_error: "link is required",
    }),
    technology: z.string({
      required_error: "Technology is required",
    }),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const ProjectValidations = {
  createProject,
};
