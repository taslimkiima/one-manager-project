import { Router } from "express";
import * as controller from "../controllers/groups.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();


router.get("/", requireAuth, controller.listGroups);
router.post("/", requireAuth, controller.createGroup);
router.get("/:id", requireAuth, controller.getGroup);
router.put("/:id", requireAuth, controller.updateGroup);
router.delete("/:id", requireAuth, controller.deleteGroup);


export default router;
