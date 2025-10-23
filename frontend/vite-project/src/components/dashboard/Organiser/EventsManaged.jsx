// components/dashboard/Organiser/EventsManaged.jsx
import React, { useState } from 'react';
import { Calendar, Users, Edit, Trash2, Eye, TrendingUp } from 'lucide-react';

const EventsManaged = ({ events }) => {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.status === filter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Upcoming': return 'bg-green-500/20 text-green-300 border-green-500/50';
      case 'Ongoing': return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      case 'Past': return 'bg-slate-500/20 text-slate-300 border-slate-500/50';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/50';
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Calendar className="w-6 h-6 text-purple-400" />
          Events You Manage
        </h2>
        
        <div className="flex gap-2">
          {['All', 'Upcoming', 'Ongoing', 'Past'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                filter === status 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredEvents.map(event => (
          <div
            key={event.id}
            className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-purple-500/50"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg mb-1">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(event.status)}`}>
                {event.status}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-600">
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">{event.registrations} Registered</span>
              </div>

              <div className="flex gap-2">
                <button className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {event.status === 'Ongoing' && (
              <div className="mt-3 flex items-center gap-2 text-xs text-blue-400">
                <TrendingUp className="w-3 h-3" />
                <span>Live now - Monitor engagement</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No {filter.toLowerCase()} events found</p>
        </div>
      )}
    </div>
  );
};

export default EventsManaged;