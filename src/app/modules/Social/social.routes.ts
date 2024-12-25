import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { SocialControllers } from "./social.controller";
import { SocialValidations } from "./social.validation";

const router = Router();

router.get("/", SocialControllers.getAllSocial);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(SocialValidations.createSocial),
  SocialControllers.createSocial
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(SocialValidations.createSocial),
  SocialControllers.updateSocial
);
router.delete("/:id", auth(UserRole.ADMIN), SocialControllers.deleteSocial);

export const SocialRoutes = router;
