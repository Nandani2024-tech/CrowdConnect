import Speaker from "../models/speaker.model.js";

// @desc    Get current speaker profile with populated user info
// @route   GET /api/speaker/me
// @access  Private
export const getSpeakerProfile = async (req, res) => {
  try {
    const speaker = await Speaker.findOne({ userId: req.user._id }).populate(
      "userId",
      "username email bio role createdAt"
    );
    if (!speaker) {
      return res.status(404).json({
        success: false,
        message: "Speaker profile not found"
      });
    }
    res.status(200).json({
      success: true,
      data: speaker
    });
  } catch (error) {
    console.error("Error fetching speaker profile:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching speaker profile"
    });
  }
};
