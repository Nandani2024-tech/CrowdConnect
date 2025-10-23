// components/dashboard/MySchedule.jsx
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const MySchedule = ({ calendarEvents }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Calendar className="w-6 h-6 text-green-400" />
          My Schedule
        </h2>
        <button className="text-green-400 text-sm hover:text-green-300 transition-colors">
          View Calendar →
        </button>
      </div>

      <div className="space-y-3">
        {calendarEvents.map(event => (
          <div 
            key={event.id} 
            className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50 hover:border-green-500/50 hover:bg-slate-700 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-medium">{event.title}</h3>
                <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {event.date} - {event.time}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {event.location}
                    </span>
                  )}
                </div>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  event.type === 'registered'
                    ? 'bg-blue-500/20 text-blue-300'
                    : event.type === 'personal'
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'bg-red-500/20 text-red-300'
                }`}
              >
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySchedule;
