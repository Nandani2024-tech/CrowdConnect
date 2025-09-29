import mongoose from 'mongoose';

const attendeeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  isStudent: { type: Boolean, default: false }, // Whether attendee is a student
  occupation: { type: String }, // e.g., "Software Engineer", "Researcher"
  company: { type: String }, // Company or institution name if working
  interests: [{ type: String }], // Interests or event topics
});


export default attendeeSchema;
