import React from 'react';
import { FileText, Download, Star } from 'lucide-react';

const EventReports = ({ reports }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FileText className="w-6 h-6 text-indigo-400" />
          Event Reports & Feedback
        </h2>
        <button className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors flex items-center gap-1">
          View All <Download className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-indigo-500/50 flex items-center justify-between"
          >
            <div>
              <h3 className="text-white font-semibold">{report.event}</h3>
              <p className="text-slate-400 text-sm mb-1">Feedback Avg: {report.feedbackAvg} / 5</p>
              <p className="text-slate-400 text-sm">Downloads: {report.downloads}</p>
            </div>

            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Download Report
            </button>
          </div>
        ))}
        {reports.length === 0 && (
          <p className="text-center text-slate-400 py-6">No reports available yet.</p>
        )}
      </div>
    </div>
  );
};

export default EventReports;
