import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setEvents(data.data);
        } else {
          setEvents([]); // fallback to empty if something wrong
        }
      });
  }, []);

  // Guard register per-user if you want (for now it's global per browser)
  const handleRegister = (eventId) => {
    const userRegs = JSON.parse(localStorage.getItem("registeredEvents") || "[]");
    if (!userRegs.includes(eventId)) {
      const updated = [...userRegs, eventId];
      localStorage.setItem("registeredEvents", JSON.stringify(updated));
    }
    setEvents(
      events.map(ev => ev._id === eventId ? { ...ev, registered: true } : ev)
    );
  };

  // Only render/allow events that have a valid _id
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">All Events</h1>
        <div className="grid gap-6">
          {events
            .filter(event => Boolean(event._id))
            .map(event => (
              <div key={event._id} className="bg-slate-800 rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-4 flex-1">
                  {/* Optional: replace with actual poster or category icon */}
                  <div className="w-14 h-14 text-2xl flex items-center justify-center bg-slate-700 rounded-full">
                    {event.category ? event.category.charAt(0) : "E"}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-1">{event.eventName}</h2>
                    <div className="text-slate-400 text-sm mb-1">
                      {new Date(event.eventDate).toLocaleString()} &middot; {event.venue}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {event.tags && event.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-cyan-600/20 text-cyan-300 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="text-slate-300 text-xs mt-1">
                      {event.maxParticipants} participants
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end items-center gap-2 mt-4 md:mt-0">
                  {/* Defensive: only link if event._id is present */}
                  {event._id ? (
                    <Link to={`/events/${event._id}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                        View Details
                      </button>
                    </Link>
                  ) : null}
                  {event.registered ? (
                    <span className="text-green-400 mt-2">Registered</span>
                  ) : (
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-2 transition"
                      onClick={() => handleRegister(event._id)}
                    >
                      Register
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
