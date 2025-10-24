import React from 'react';
import { BarChart3, Users, Star, TrendingUp } from 'lucide-react';

const SpeakerAnalytics = ({ analytics }) => (
  <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-purple-400" />
        Analytics Overview
      </h2>
      <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
        Detailed Report →
      </button>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-purple-400" />
          <span className="text-sm text-purple-300">Total Sessions</span>
        </div>
        <div className="text-3xl font-bold text-purple-400">{analytics.sessions}</div>
      </div>

      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-blue-300">Total Attendees</span>
        </div>
        <div className="text-3xl font-bold text-blue-400">{analytics.totalAttendees}</div>
      </div>

      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-sm text-yellow-300">Avg Rating</span>
        </div>
        <div className="text-3xl font-bold text-yellow-400">{analytics.avgRating}</div>
      </div>

      <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-cyan-400" />
          <span className="text-sm text-cyan-300">Feedback Count</span>
        </div>
        <div className="text-3xl font-bold text-cyan-400">{analytics.feedbackCount}</div>
      </div>
    </div>

    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
      <h3 className="text-white font-semibold mb-4">Sessions Over Time</h3>

      <div className="space-y-3 max-w-full overflow-x-auto">
        {[...(analytics.chartData || [])].map((item) => (
          <div key={item.month}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-slate-300">{item.month}</span>
              <span className="text-sm text-white font-semibold">{item.talks}</span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
              <div
                className="bg-purple-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(item.talks / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SpeakerAnalytics;
