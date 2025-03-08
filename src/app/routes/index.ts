import { Router } from "express";
import { UserRoutes } from "../modules/User/user.routes";
import { ProfileRoutes } from "../modules/Profile/profile.routes";
import { SkillRoutes } from "../modules/Skill/skill.routes";
import { ExperienceRoutes } from "../modules/Experience/experience.routes";
import { ProjectRoutes } from "../modules/Project/project.routes";
import { BlogRoutes } from "../modules/Blog/blog.routes";
import { SocialRoutes } from "../modules/Social/social.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { HomeRoutes } from "../modules/Home/home.routes";
import { ContactRouters } from "../modules/contact/contact.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/profile",
    route: ProfileRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/social",
    route: SocialRoutes,
  },
  {
    path: "/home",
    route: HomeRoutes,
  },
  {
    path: "/contact",
    route: ContactRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
