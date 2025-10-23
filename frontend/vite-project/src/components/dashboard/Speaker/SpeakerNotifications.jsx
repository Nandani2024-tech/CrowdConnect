import React from 'react';
import { Bell, Mail, AlertCircle } from 'lucide-react';

const SpeakerNotifications = ({ notifications }) => (
  <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <Bell className="w-6 h-6 text-yellow-400" />
        Notifications
      </h2>
      <button className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors">
        Mark all read
      </button>
    </div>

    <div className="space-y-3">
      {notifications.length === 0 && (
        <p className="text-center text-slate-400 py-4">No new notifications</p>
      )}

      {notifications.map(note => (
        <div
          key={note.id}
          className={`p-4 rounded-lg border flex items-center gap-4 cursor-pointer transition-all ${
            note.unread ? 'bg-yellow-600/20 border-yellow-400' : 'bg-transparent border-transparent'
          } hover:bg-yellow-600/30`}
        >
          <div>
            {note.type === 'message' && <Mail className="text-yellow-400 w-6 h-6" />}
            {note.type === 'alert' && <AlertCircle className="text-red-400 w-6 h-6" />}
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">{note.message}</p>
            <p className="text-yellow-300 text-xs">{note.date}</p>
          </div>
          {note.actionText && (
            <button className="text-yellow-400 text-xs font-semibold hover:underline">
              {note.actionText}
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default SpeakerNotifications;
