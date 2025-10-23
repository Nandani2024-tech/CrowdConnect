import React from "react";
import { Calendar, Clock, TrendingUp, FileText } from "lucide-react";

const MySessions = ({ sessions }) => (
  <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <Calendar className="w-6 h-6 text-cyan-400" />
        My Sessions
      </h2>
      <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
        View All →
      </button>
    </div>
    <div className="space-y-4">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-cyan-500/50 flex items-center justify-between"
        >
          <div className="flex-1 min-w-0">
            <div className="flex gap-4 items-center mb-2">
              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium inline-block">
                {session.status}
              </span>
              <span className="text-sm text-slate-400">{session.topic}</span>
            </div>
            <h3 className="text-white font-semibold text-lg truncate">{session.title}</h3>
            <div className="flex flex-wrap gap-4 items-center text-sm text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {session.date} {session.time}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {session.event}
              </span>
            </div>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors ml-4">
            {session.status === "Upcoming" ? "Details" : "View Recap"}
          </button>
        </div>
      ))}
      {sessions.length === 0 && (
        <div className="text-center text-slate-400 py-8">
          <Calendar className="w-8 h-8 mx-auto mb-2" />
          No sessions scheduled.
        </div>
      )}
    </div>
  </div>
);

export default MySessions;
