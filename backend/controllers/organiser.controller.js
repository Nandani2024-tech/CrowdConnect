import Organiser from "../models/organiser.model.js";

// @desc    Get current organiser profile with populated user info
// @route   GET /api/organiser/me
// @access  Private
export const getOrganiserProfile = async (req, res) => {
  try {
    const organiser = await Organiser.findOne({ userId: req.user._id }).populate(
      "userId",
      "username email bio role createdAt"
    );
    if (!organiser) {
      return res.status(404).json({
        success: false,
        message: "Organiser profile not found"
      });
    }
    res.status(200).json({
      success: true,
      data: organiser
    });
  } catch (error) {
    console.error("Error fetching organiser profile:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching organiser profile"
    });
  }
};
