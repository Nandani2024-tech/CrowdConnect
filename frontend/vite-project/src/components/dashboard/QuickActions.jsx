// components/dashboard/QuickActions.jsx
import React from 'react';
import { Plus, Calendar, Users, Star } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { id: 1, label: "Create New Event", icon: Plus, color: "text-cyan-400" },
    { id: 2, label: "View My Schedule", icon: Calendar, color: "text-green-400" },
    { id: 3, label: "Find Connections", icon: Users, color: "text-purple-400" },
    { id: 4, label: "View Achievements", icon: Star, color: "text-yellow-400" },
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map(action => (
          <button
            key={action.id}
            className="bg-slate-700/50 hover:bg-slate-700 transition-all p-4 rounded-lg flex flex-col items-center justify-center border border-slate-600/50 hover:border-cyan-500/50"
          >
            <action.icon className={`w-6 h-6 ${action.color} mb-2`} />
            <span className="text-white text-sm font-medium text-center">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
