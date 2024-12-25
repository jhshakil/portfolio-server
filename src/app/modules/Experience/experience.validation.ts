import { z } from "zod";

const createExperience = z.object({
  body: z.object({
    companyName: z.string({
      required_error: "Company Name is required",
    }),
    duration: z.string({
      required_error: "Duration is required",
    }),
    designation: z.string({
      required_error: "Designation is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    priority: z.number().optional(),
  }),
});

export const ExperienceValidations = {
  createExperience,
};
