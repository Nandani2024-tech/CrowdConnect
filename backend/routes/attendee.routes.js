import express from "express";
import { getAttendeeProfile } from "../controllers/attendee.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { registerForEvent, isRegisteredForEvent } from "../controllers/attendee.controller.js";

const router = express.Router();

// Protected route — returns only logged-in attendee’s data
router.get("/me", protect, getAttendeeProfile);
// New: Register for a specific event
router.post("/events/:eventId/register", protect, registerForEvent);

// New: Get registration status for a specific event
router.get("/events/:eventId/registered", protect, isRegisteredForEvent);

export default router;
