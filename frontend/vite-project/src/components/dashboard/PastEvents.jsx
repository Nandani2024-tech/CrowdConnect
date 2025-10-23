// components/dashboard/PastEvents.jsx
import React from 'react';
import { Star, Award, Calendar } from 'lucide-react';

const PastEvents = ({ pastEvents }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Calendar className="w-6 h-6 text-yellow-400" />
          Past Events
        </h2>
        <button className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors">
          View All →
        </button>
      </div>

      <div className="space-y-4">
        {pastEvents.map(event => (
          <div
            key={event.id}
            className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-yellow-500/50"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{event.image}</div>

              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">{event.title}</h3>
                <p className="text-slate-400 text-sm mb-2">{event.description}</p>

                <div className="text-slate-400 text-sm flex items-center gap-3 mb-2">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  {[...Array(event.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {event.certificate && (
                  <div className="flex items-center gap-1 text-green-400 text-xs">
                    <Award className="w-4 h-4" /> Certificate Earned
                  </div>
                )}
              </div>
            </div>

            <p className="text-slate-300 text-sm mt-3 italic">
              “{event.feedback}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
