import express from "express";
import { getSpeakerProfile } from "../controllers/speaker.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getSpeakerProfile);

export default router;
