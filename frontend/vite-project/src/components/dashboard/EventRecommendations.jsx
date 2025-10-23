// components/dashboard/EventRecommendations.jsx
import React from 'react';
import { TrendingUp, Clock, MapPin, Users, Sparkles } from 'lucide-react';

const EventRecommendations = ({ events }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-pink-400" />
          Recommended For You
        </h2>
        <button className="text-pink-400 text-sm hover:text-pink-300 transition-colors">
          See More →
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(event => (
          <div 
            key={event.id} 
            className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-pink-500/50"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-4xl">{event.image}</div>
              <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {event.match}% Match
              </span>
            </div>
            
            <h3 className="text-white font-semibold mb-2 line-clamp-2">{event.title}</h3>
            
            <div className="text-sm text-slate-300 space-y-1 mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{event.date} • {event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{event.attendees} registered</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-slate-600">
              <span className="text-slate-400 text-xs">{event.price}</span>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventRecommendations;