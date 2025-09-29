import mongoose from 'mongoose';

const speakerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  topics: [{ type: String, required: true }], // Topics speaker specializes in
  bio: { type: String }, // Speaker bio or description
  socialLinks: {
    // Speaker's social media links
    linkedin: { type: String },
    twitter: { type: String },
    website: { type: String },
  },
});

export default speakerSchema
