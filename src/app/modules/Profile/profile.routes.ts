import { Router } from "express";
import { ProfileControllers } from "./profile.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { ProfileValidations } from "./profile.validation";
import { auth } from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = Router();

router.get("/", ProfileControllers.getProfile);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(ProfileValidations.createProfile),
  ProfileControllers.createProfile
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(ProfileValidations.createProfile),
  ProfileControllers.updateProfile
);

export const ProfileRoutes = router;
