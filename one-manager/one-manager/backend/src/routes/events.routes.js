import { Router } from "express";
import * as controller from "../controllers/events.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();


router.get("/", requireAuth, controller.listEvents);
router.post("/", requireAuth, controller.createEvent);
router.put("/:id", requireAuth, controller.updateEvent);
router.delete("/:id", requireAuth, controller.deleteEvent);
router.post("/:id/attendance", requireAuth, controller.markAttendance);


export default router;
