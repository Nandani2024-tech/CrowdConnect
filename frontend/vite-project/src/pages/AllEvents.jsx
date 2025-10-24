import React, { useState } from "react";
import { mockEvents } from "../mockData/mockEvents";
import { Link, useNavigate } from "react-router-dom";

export default function AllEvents() {
  const [events, setEvents] = useState(mockEvents);
  const navigate = useNavigate();

  // Demo: Save registration to localStorage (per user)
  const handleRegister = (eventId) => {
    // Get current user registrations (simulate storage per user)
    const userRegistrations = JSON.parse(localStorage.getItem("registeredEvents") || "[]");
    if (!userRegistrations.includes(eventId)) {
      const updated = [...userRegistrations, eventId];
      localStorage.setItem("registeredEvents", JSON.stringify(updated));
    }
    // For instant feedback
    setEvents(events.map(ev =>
      ev.id === eventId ? { ...ev, registered: true } : ev
    ));
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">All Events</h1>
        <div className="grid gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-slate-800 rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-14 text-3xl flex items-center justify-center bg-slate-700 rounded-full">
                  {event.cover}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">{event.title}</h2>
                  <div className="text-slate-400 text-sm mb-1">
                    {new Date(event.date).toLocaleString()} &middot; {event.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {event.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs bg-cyan-600/20 text-cyan-300 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="text-slate-300 text-xs mt-1">{event.attendees} attendees</div>
                </div>
              </div>
              <div className="flex flex-col md:items-end items-center gap-2 mt-4 md:mt-0">
                <Link to={`/events/${event.id}`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">View Details</button>
                </Link>
                {event.registered ? (
                  <span className="text-green-400 mt-2">Registered</span>
                ) : (
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-2 transition"
                    onClick={() => handleRegister(event.id)}
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
