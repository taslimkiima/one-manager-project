import { Router } from "express";
import * as controller from "../controllers/members.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();


router.get("/", requireAuth, controller.listMembers);
router.post("/", requireAuth, controller.createMember);
router.put("/:id", requireAuth, controller.updateMember);
router.delete("/:id", requireAuth, controller.deleteMember);


export default router;
