import React from "react";
import { Calendar, UserPlus, Mail } from "lucide-react";

const EventInvites = ({ invites }) => (
  <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <UserPlus className="w-6 h-6 text-green-400" />
        Event Invitations
      </h2>
      <button className="text-green-400 text-sm hover:text-green-300 transition-colors">
        View All →
      </button>
    </div>
    <div className="space-y-4">
      {invites.map((invite) => (
        <div
          key={invite.id}
          className="bg-slate-700/50 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between border border-slate-600/50 hover:bg-slate-700 hover:border-green-500/50 transition-all"
        >
          <div>
            <h3 className="text-white font-semibold mb-1">{invite.event}</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {invite.date}
              </span>
              <span>{"•"}</span>
              <span>{invite.topic}</span>
              <span>{"•"}</span>
              <span>By {invite.organiser}</span>
            </div>
          </div>
          <div className="mt-3 md:mt-0 flex gap-2 flex-shrink-0">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Accept
            </button>
            <button className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Decline
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-lg transition-colors" title="Contact">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
      {invites.length === 0 && (
        <div className="py-8 text-center text-slate-400">
          <UserPlus className="w-8 h-8 mx-auto mb-2" />
          No event invites at the moment.
        </div>
      )}
    </div>
  </div>
);

export default EventInvites;
