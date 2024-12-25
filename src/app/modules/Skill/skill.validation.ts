import { z } from "zod";

const createSkill = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    percentage: z.string({
      required_error: "Percentage is required",
    }),
    color: z.string().optional(),
  }),
});

export const SkillValidations = {
  createSkill,
};
