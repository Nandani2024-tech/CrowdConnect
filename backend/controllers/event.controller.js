import Event from '../models/event.model.js';
import mongoose from 'mongoose';
import Organiser from '../models/organiser.model.js';

export const createEvent = async (req, res) => {
  try {
    const {
      eventName,
      description,
      eventDate,
      startTime,
      endTime,
      venue,
      category,
      maxParticipants,
      registrationDeadline,
      eventType,
      ticketPrice,
      speakerNames,
      tags
    } = req.body;

    // Validation
    if (!eventName || eventName.length < 5) {
      return res.status(400).json({ 
        success: false, 
        message: "Event name must be at least 5 characters" 
      });
    }
    if (!description || description.length < 20) {
      return res.status(400).json({ 
        success: false, 
        message: "Description must be at least 20 characters" 
      });
    }

    // ✅ FIX: Get organiser ID from logged-in user
    const organiser = await Organiser.findOne({ userId: req.user._id });
    
    if (!organiser) {
      return res.status(404).json({ 
        success: false, 
        message: "Organiser profile not found. Please complete your organiser profile first." 
      });
    }

    
    // console.log("✅ Creating event for organiser:", organiser._id); // Debug log

    // Create event with correct organiser ID
    const event = await Event.create({
      eventName,
      description,
      eventDate,
      startTime,
      endTime,
      venue,
      category,
      maxParticipants,
      registrationDeadline,
      eventType,
      ticketPrice: ticketPrice || 0,
      speakerNames: speakerNames ? speakerNames.split(",").map(s => s.trim()) : [],
      tags: tags ? tags.split(",").map(t => t.trim()) : [],
      organiser: organiser._id, // ← Use organiser document ID
      registrations: []
    });

    // console.log("✅ Event created with ID:", event._id);

    res.status(201).json({ 
      success: true, 
      data: event 
    });

  } catch (error) {
    console.error("❌ Error creating event:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};



export const getAllEvents = async (req, res) => {
  try {
    const { organiserId } = req.query;

    //console.log("🔍 Fetching events with organiserId:", organiserId); // Debug

    const filter = {};
    if (organiserId) {
      filter.organiser = organiserId;
    }

    const events = await Event.find(filter);

    //console.log("📦 Found", events.length, "events"); // Debug

    res.json({ 
      success: true, 
      data: events 
    });

  } catch (error) {
    console.error("❌ Error fetching events:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};


// Returns detail for single event by id
export const getEventById = async (req, res) => {
  try {
    // Prevent server error by checking ID validity first!
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid event ID" });
    }
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
