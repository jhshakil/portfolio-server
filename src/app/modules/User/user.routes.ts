import { Router } from "express";
import { UserValidations } from "./user.validation";
import { auth } from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { UserControllers } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(UserValidations.createUser),
  UserControllers.createUser
);

export const UserRoutes = router;
