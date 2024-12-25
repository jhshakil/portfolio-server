import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { SkillControllers } from "./skill.controller";
import { SkillValidations } from "./skill.validation";

const router = Router();

router.get("/", SkillControllers.getAllSkill);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(SkillValidations.createSkill),
  SkillControllers.createSkill
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(SkillValidations.createSkill),
  SkillControllers.updateSkill
);
router.delete("/:id", auth(UserRole.ADMIN), SkillControllers.deleteSkill);

export const SkillRoutes = router;
