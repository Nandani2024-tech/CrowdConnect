import express from "express";
import { getAttendeeProfile } from "../controllers/attendee.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protected route — returns only logged-in attendee’s data
router.get("/me", protect, getAttendeeProfile);

export default router;
