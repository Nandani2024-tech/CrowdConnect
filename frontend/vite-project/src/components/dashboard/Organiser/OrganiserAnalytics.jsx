// components/dashboard/Organiser/OrganiserAnalytics.jsx
import React from 'react';
import { TrendingUp, Users, Target, Star, BarChart3 } from 'lucide-react';

const OrganiserAnalytics = ({ analytics }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-cyan-400" />
          Analytics Overview
        </h2>
        <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
          Detailed Report →
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-300">Total Events</span>
          </div>
          <div className="text-3xl font-bold text-blue-400">{analytics.totalEvents}</div>
          <p className="text-xs text-blue-300 mt-1">All time</p>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-sm text-green-300">Avg Registrations</span>
          </div>
          <div className="text-3xl font-bold text-green-400">{analytics.avgRegistrations}</div>
          <p className="text-xs text-green-300 mt-1">Per event</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-300">Engagement</span>
          </div>
          <div className="text-3xl font-bold text-purple-400">{analytics.engagementRate}%</div>
          <p className="text-xs text-purple-300 mt-1">Avg rate</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-yellow-300">Feedback Score</span>
          </div>
          <div className="text-3xl font-bold text-yellow-400">{analytics.feedbackScore}</div>
          <p className="text-xs text-yellow-300 mt-1">Out of 5.0</p>
        </div>
      </div>

      <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
        <h3 className="text-white font-semibold mb-4">Registration Trends</h3>
        
        <div className="space-y-3">
          {[
            { month: 'January', registrations: 420, color: 'bg-blue-500', percent: 85 },
            { month: 'February', registrations: 380, color: 'bg-cyan-500', percent: 76 },
            { month: 'March', registrations: 520, color: 'bg-purple-500', percent: 100 },
            { month: 'April', registrations: 450, color: 'bg-pink-500', percent: 86 },
          ].map(item => (
            <div key={item.month}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-slate-300">{item.month}</span>
                <span className="text-sm text-white font-semibold">{item.registrations}</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                <div 
                  className={`${item.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
          <h4 className="text-white font-semibold mb-2 text-sm">Top Performing Events</h4>
          <div className="space-y-2">
            {['AI Summit 2025', 'Startup Expo', 'Blockchain India'].map((event, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-slate-300">{event}</span>
                <span className="text-green-400 font-medium">★ 4.{9 - idx}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
          <h4 className="text-white font-semibold mb-2 text-sm">Revenue Insights</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300">Total Revenue</span>
              <span className="text-cyan-400 font-medium">₹4.2L</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300">Avg Ticket Price</span>
              <span className="text-cyan-400 font-medium">₹850</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300">Growth</span>
              <span className="text-green-400 font-medium">+23%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganiserAnalytics;