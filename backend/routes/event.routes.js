import express from "express";
import { createEvent, getAllEvents, getEventById } from "../controllers/event.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createEvent);

// Add these two GET routes:
router.get("/", getAllEvents);          // For GET /api/events (all events)
router.get("/:id", getEventById);       // For GET /api/events/:id (event details)

export default router;
