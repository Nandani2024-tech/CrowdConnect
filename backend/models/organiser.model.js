import mongoose from 'mongoose';

const organiserSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  organizationName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  website: { type: String }, // Optional URL
  verified: { type: Boolean, default: false }, // Verification status
});


export default organiserSchema
