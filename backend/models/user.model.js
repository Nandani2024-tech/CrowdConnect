import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: { type: String, required: true },
    bio: { type: String },
    role: {
      type: String,
      enum: ["attendee", "organiser", "speaker"],
      required: true,
    },
  },
  { timestamps: true }
);

export default userSchema
