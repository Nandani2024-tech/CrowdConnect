import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  location: {
    type: String,
    default: '',
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    default: '',
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  speakerIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Speaker'
  }],
  organiserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organiser',
    required: true
  },
  maxAttendees: {
    type: Number,
    default: 100
  },
  registeredAttendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attendee'
  }],
  status: {
    // e.g. scheduled, canceled, completed
    type: String,
    enum: ['scheduled', 'canceled', 'completed'],
    default: 'scheduled'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes for quick querying by dates and organiser
eventSchema.index({ startDate: 1, organiserId: 1 });

const Event = mongoose.model('Event', eventSchema);

export default Event;
