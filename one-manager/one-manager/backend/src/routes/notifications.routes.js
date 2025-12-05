import { Router } from "express";
import * as controller from "../controllers/notifications.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();


router.get("/", requireAuth, controller.listNotifications);
router.post("/send", requireAuth, controller.sendNotification);


export default router;
