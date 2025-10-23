import React from "react";
import { Calendar, Download } from "lucide-react";

const PastSessions = ({ pastSessions }) => (
  <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <Calendar className="w-6 h-6 text-indigo-400" />
        Past Sessions
      </h2>
      <button className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors">
        View All →
      </button>
    </div>

    <div className="space-y-4">
      {pastSessions.length === 0 && (
        <p className="text-center text-slate-400 py-6">No past sessions yet.</p>
      )}

      {pastSessions.map((session) => (
        <div
          key={session.id}
          className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-indigo-500/50 flex items-center justify-between"
        >
          <div>
            <h3 className="text-white font-semibold mb-1">{session.title}</h3>
            <p className="text-slate-300 text-sm mb-2">{session.event}</p>
            <p className="text-slate-300 text-sm mb-1">Date: {session.date}</p>
            <p className="text-slate-300 text-sm mb-2 italic">{session.feedbackAvg} avg. feedback</p>
          </div>

          <a
            href={session.materialLink || "#"}
            download
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Download className="inline-block w-4 h-4 mr-2" />
            Download Materials
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default PastSessions;
