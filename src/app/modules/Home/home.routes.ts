import { Router } from "express";
import { HomeControllers } from "./home.controller";

const router = Router();

router.get("/", HomeControllers.getAllHomeData);

export const HomeRoutes = router;
