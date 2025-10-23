import mongoose from 'mongoose';

const speakerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  topics: [{
    type: String,
    required: [true, 'At least one topic is required'],
    trim: true
  }],
  bio: {
    type: String,
    default: '',
    maxlength: [1000, 'Bio cannot exceed 1000 characters']
  },
  socialLinks: {
    linkedin: {
      type: String,
      trim: true,
      default: ''
    },
    twitter: {
      type: String,
      trim: true,
      default: ''
    },
    website: {
      type: String,
      trim: true,
      default: ''
    }
  },
  eventsSpokeAt: [{
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    },
    date: {
      type: Date
    },
    topic: {
      type: String
    }
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalSessions: {
    type: Number,
    default: 0
  },
  verified: {
    type: Boolean,
    default: false
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

// Validation: Ensure at least one topic is provided
speakerSchema.path('topics').validate(function(topics) {
  return topics && topics.length > 0;
}, 'At least one topic is required');

// Index for faster queries
speakerSchema.index({ userId: 1 });
speakerSchema.index({ topics: 1 });

const Speaker = mongoose.model('Speaker', speakerSchema);

export default Speaker;