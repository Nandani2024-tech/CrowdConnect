import Attendee from "../models/attendee.model.js";
import User from "../models/user.model.js";

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
