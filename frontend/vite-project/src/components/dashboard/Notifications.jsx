// components/dashboard/Notifications.jsx
import React from 'react';
import { Bell, Clock } from 'lucide-react';

const Notifications = ({ notifications }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Bell className="w-6 h-6 text-orange-400" />
          Notifications
        </h2>
        <button className="text-orange-400 text-sm hover:text-orange-300 transition-colors">
          Mark all read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map(note => (
          <div
            key={note.id}
            className={`p-4 rounded-lg border ${
              note.unread
                ? 'bg-slate-700/60 border-orange-500/40'
                : 'bg-slate-700/30 border-slate-600/40'
            } hover:bg-slate-700 transition-all`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-white text-sm">{note.message}</p>
                <div className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {note.time}
                </div>
              </div>
              {note.unread && (
                <span className="w-2 h-2 bg-orange-400 rounded-full ml-2 mt-1"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
