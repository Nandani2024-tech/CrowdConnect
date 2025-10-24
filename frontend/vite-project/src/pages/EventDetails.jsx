import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/events/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setEvent(data.data);
        else setEvent(null);
      });

    const registeredEvents = JSON.parse(localStorage.getItem("registeredEvents") || "[]");
    setRegistered(registeredEvents.includes(id));
  }, [id]);

  const handleRegister = () => {
    const registeredEvents = JSON.parse(localStorage.getItem("registeredEvents") || "[]");
    if (!registeredEvents.includes(id)) {
      registeredEvents.push(id);
      localStorage.setItem("registeredEvents", JSON.stringify(registeredEvents));
      setRegistered(true);
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div>
          <h2 className="text-2xl font-semibold">Event not found</h2>
          <Link to="/events" className="text-blue-400 underline mt-4 inline-block">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl shadow-lg p-8 mt-8">
        <button
          className="text-cyan-300 hover:underline mb-5"
          onClick={() => navigate(-1)}
        >
          &larr; Back to Events
        </button>
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-slate-700 flex items-center justify-center text-4xl rounded-full">
            {event.category ? event.category.charAt(0) : "E"}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">{event.eventName}</h1>
            <div className="text-slate-400 text-md mb-1">
              {new Date(event.eventDate).toLocaleString()} &middot; {event.venue}
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {event.tags && event.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs bg-cyan-600/20 text-cyan-300 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-slate-200 mb-5 text-lg">{event.description}</p>
        <div className="flex items-center gap-4 mb-5">
          <span className="text-slate-300">{event.maxParticipants} participants expected</span>
        </div>
        {registered ? (
          <span className="px-6 py-2 rounded bg-green-500/20 text-green-400 font-semibold">
            You are registered for this event!
          </span>
        ) : (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md text-lg font-semibold transition"
            onClick={handleRegister}
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
}
