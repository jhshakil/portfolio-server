import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { BlogControllers } from "./blog.controller";
import { BlogValidations } from "./blog.validation";

const router = Router();

router.get("/", BlogControllers.getAllBlog);
router.get("/:slug", BlogControllers.getBlogBySlug);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(BlogValidations.createBlog),
  BlogControllers.createBlog
);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(BlogValidations.createBlog),
  BlogControllers.updateBlog
);
router.delete("/:id", auth(UserRole.ADMIN), BlogControllers.deleteBlog);

export const BlogRoutes = router;
