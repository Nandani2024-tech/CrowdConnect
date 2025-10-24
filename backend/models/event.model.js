import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true, minlength: 5 },
  description: { type: String, required: true, minlength: 20 },
  eventDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  venue: { type: String, required: true },
  category: { type: String, required: true },
  maxParticipants: { type: Number, required: true, min: 1 },
  registrationDeadline: { type: Date, required: true },
  eventType: { type: String, enum: ['in-person', 'virtual', 'hybrid'], default: 'in-person' },
  ticketPrice: { type: Number, default: 0 },
  speakerNames: [String],
  tags: [String],
  posterImage: { type: String },
  organiser: { type: mongoose.Schema.Types.ObjectId, ref: 'Organiser', required: true },
  registrations: [
  { type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }  // or 'User' if you use single user collection
],

}, { timestamps: true });

export default mongoose.model('Event', eventSchema);
