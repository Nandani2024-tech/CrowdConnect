// components/dashboard/UpcomingEvents.jsx
import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const UpcomingEvents = ({ events }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Calendar className="w-6 h-6 text-cyan-400" />
          Upcoming Events
        </h2>
        <Link
          to="/events"
          className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-cyan-500/50"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">{event.image}</div>

              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1 truncate">
                  {event.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.date} at {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.attendees} attendees
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full">
                    ⏰ {event.daysLeft} days left
                  </span>
                  <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full">
                    ✓ Registered
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>

              <Link
                to={`/events/${event.id}`}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
