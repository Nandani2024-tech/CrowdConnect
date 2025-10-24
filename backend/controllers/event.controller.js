import Event from '../models/event.model.js';

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
      tags,
      posterImage
    } = req.body;
    // Server-side validation (sample)
    if (!eventName || eventName.length < 5) return res.status(400).json({ success: false, message: "Event name too short" });
    if (!description || description.length < 20) return res.status(400).json({ success: false, message: "Description too short" });
    // ...repeat for other fields...

    // Create new event
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
      ticketPrice,
      speakerNames: speakerNames ? speakerNames.split(",").map(s => s.trim()) : [],
      tags: tags ? tags.split(",").map(s => s.trim()) : [],
      posterImage,
      organiser: req.user.id // Assuming auth middleware attaches organiser to req.user
    });

    res.status(201).json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}


export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Returns detail for single event by id
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
