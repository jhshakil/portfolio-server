import { z } from "zod";

const createUser = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
    }),
    password: z.string({
      required_error: "Password is required",
    }),
  }),
});

export const UserValidations = {
  createUser,
};
