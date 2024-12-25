import { z } from "zod";

const createSocial = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    url: z.string({
      required_error: "URL is required",
    }),
    icon: z.string().optional(),
  }),
});

export const SocialValidations = {
  createSocial,
};
