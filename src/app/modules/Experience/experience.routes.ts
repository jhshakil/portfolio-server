import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { ExperienceControllers } from "./experience.controller";
import { ExperienceValidations } from "./experience.validation";

const router = Router();

router.get("/", ExperienceControllers.getAllExperience);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(ExperienceValidations.createExperience),
  ExperienceControllers.createExperience
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(ExperienceValidations.createExperience),
  ExperienceControllers.updateExperience
);
router.delete(
  "/:id",
  auth(UserRole.ADMIN),
  ExperienceControllers.updateExperience
);

export const ExperienceRoutes = router;
