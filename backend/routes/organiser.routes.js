import express from "express";
import { getOrganiserProfile } from "../controllers/organiser.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getOrganiserProfile);

export default router;
