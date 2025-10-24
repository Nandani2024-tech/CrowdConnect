import express from "express";
import { createEvent } from "../controllers/event.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createEvent);

export default router;
