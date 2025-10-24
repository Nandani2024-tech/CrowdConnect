import Attendee from "../models/attendee.model.js";
import User from "../models/user.model.js";
import Event from "../models/event.model.js";

// @desc    Get current attendee profile with populated user info
// @route   GET /api/attendee/me
// @access  Private
export const getAttendeeProfile = async (req, res) => {
  try {
    const attendee = await Attendee.findOne({ userId: req.user._id }).populate(
      "userId",
      "username email bio role createdAt"
    );

    if (!attendee) {
      return res.status(404).json({
        success: false,
        message: "Attendee profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: attendee,
    });
  } catch (error) {
    console.error("Error fetching attendee profile:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching attendee profile",
    });
  }
};
// Register the logged-in attendee for an event
export const registerForEvent = async (req, res) => {
  try {
    const attendee = await Attendee.findOne({ userId: req.user._id });
    if (!attendee)
      return res
        .status(404)
        .json({ success: false, message: "Attendee not found" });

    // check if already registered
    if (
      attendee.registeredEvents.some(
        (ev) => ev.eventId.toString() === req.params.eventId
      )
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Already registered for this event" });
    }

    // Add event to attendee's registeredEvents
    attendee.registeredEvents.push({
      eventId: req.params.eventId,
      status: "registered",
    });

    // Save attendee first
    await attendee.save();

    console.log("Updated Attendee:", attendee);

    const eventUpdate = await Event.findByIdAndUpdate(req.params.eventId, {
      $addToSet: { registrations: attendee._id },
    });
    console.log("Event update result:", eventUpdate);

    res.status(200).json({ success: true, message: "Registered for event" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get registration status for a specific event
export const isRegisteredForEvent = async (req, res) => {
  try {
    const attendee = await Attendee.findOne({ userId: req.user._id });
    if (!attendee)
      return res
        .status(404)
        .json({ success: false, message: "Attendee not found" });

    const isRegistered = attendee.registeredEvents.some(
      (ev) => ev.eventId.toString() === req.params.eventId
    );
    res.json({ success: true, registered: isRegistered });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
