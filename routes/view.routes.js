import { Router } from "express";
import * as viewController from "../controllers/view.controller.js";

const router = Router();

router.get("/", viewController.renderHome);
router.get("/section/:slug", viewController.renderSection);

export default router;
