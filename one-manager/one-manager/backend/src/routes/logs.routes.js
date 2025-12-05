import { Router } from "express";
import * as controller from "../controllers/logs.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();


router.get("/", requireAuth, controller.listLogs);


export default router;
