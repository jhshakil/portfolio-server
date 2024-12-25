import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { ProjectControllers } from "./project.controller";
import { ProjectValidations } from "./project.validation";

const router = Router();

router.get("/", ProjectControllers.getAllProject);
router.get("/:id", ProjectControllers.getProjectById);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(ProjectValidations.createProject),
  ProjectControllers.createProject
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(ProjectValidations.createProject),
  ProjectControllers.updateProject
);
router.delete("/:id", auth(UserRole.ADMIN), ProjectControllers.deleteProject);

export const ProjectRoutes = router;
