// components/dashboard/Connections.jsx
import React from 'react';
import { Users, MessageCircle, UserPlus } from 'lucide-react';

const Connections = ({ connections }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-400" />
          Your Network
        </h2>
        <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
          View All →
        </button>
      </div>
      
      <div className="space-y-3">
        {connections.map(conn => (
          <div 
            key={conn.id} 
            className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-purple-500/50"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                {conn.avatar}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold truncate">{conn.name}</div>
                <div className="text-sm text-slate-400 truncate">
                  {conn.role} at {conn.company}
                </div>
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                  <span>{conn.mutual} mutual connections</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-purple-400">{conn.expertise}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              {conn.status === 'connected' && (
                <button className="bg-slate-600 hover:bg-slate-500 text-white p-2 rounded transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
              )}
              {conn.status === 'suggested' && (
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 transition-colors">
                  <UserPlus className="w-4 h-4" />
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;