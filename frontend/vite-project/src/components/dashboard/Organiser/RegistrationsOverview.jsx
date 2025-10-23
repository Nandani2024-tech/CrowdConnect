// components/dashboard/Organiser/RegistrationsOverview.jsx
import React from 'react';
import { UserCheck, UserX, Clock, TrendingUp } from 'lucide-react';

const RegistrationsOverview = ({ registrations }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-green-400" />
          Registration Status
        </h2>
        <button className="text-green-400 text-sm hover:text-green-300 transition-colors">
          View All →
        </button>
      </div>

      <div className="space-y-4">
        {registrations.map(reg => {
          const total = reg.pending + reg.approved + reg.declined;
          const approvedPercent = ((reg.approved / total) * 100).toFixed(0);

          return (
            <div
              key={reg.eventId}
              className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-green-500/50 hover:bg-slate-700 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{reg.eventName}</h3>
                <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {approvedPercent}% Approved
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-yellow-300">Pending</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{reg.pending}</div>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <UserCheck className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-300">Approved</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">{reg.approved}</div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <UserX className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-red-300">Declined</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">{reg.declined}</div>
                </div>
              </div>

              <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                <div className="flex h-full">
                  <div 
                    className="bg-yellow-500" 
                    style={{ width: `${(reg.pending / total) * 100}%` }}
                  />
                  <div 
                    className="bg-green-500" 
                    style={{ width: `${(reg.approved / total) * 100}%` }}
                  />
                  <div 
                    className="bg-red-500" 
                    style={{ width: `${(reg.declined / total) * 100}%` }}
                  />
                </div>
              </div>

              {reg.pending > 0 && (
                <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Review {reg.pending} Pending Registrations
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegistrationsOverview;