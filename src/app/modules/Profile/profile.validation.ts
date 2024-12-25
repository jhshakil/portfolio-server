import { z } from "zod";

const createProfile = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    designation: z.string({
      required_error: "Designation is required",
    }),
    instruction: z.string().optional(),
    resumeLink: z.string().optional(),
    image: z.string().optional(),
    about: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string().optional(),
    language: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const ProfileValidations = {
  createProfile,
};
