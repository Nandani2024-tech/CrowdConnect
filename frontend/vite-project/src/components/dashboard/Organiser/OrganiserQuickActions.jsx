// components/dashboard/Organiser/OrganiserQuickActions.jsx
import React from 'react';
import { Plus, Edit, BarChart3, Users, FileText, Settings } from 'lucide-react';

const OrganiserQuickActions = () => {
  const actions = [
    { 
      id: 1, 
      label: "Create Event", 
      icon: Plus, 
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-600 hover:to-emerald-700"
    },
    { 
      id: 2, 
      label: "Edit Events", 
      icon: Edit, 
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:from-blue-600 hover:to-cyan-700"
    },
    { 
      id: 3, 
      label: "View Analytics", 
      icon: BarChart3, 
      color: "from-purple-500 to-pink-600",
      hoverColor: "hover:from-purple-600 hover:to-pink-700"
    },
    { 
      id: 4, 
      label: "Manage Team", 
      icon: Users, 
      color: "from-orange-500 to-red-600",
      hoverColor: "hover:from-orange-600 hover:to-red-700"
    },
    { 
      id: 5, 
      label: "Event Reports", 
      icon: FileText, 
      color: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700"
    },
    { 
      id: 6, 
      label: "Settings", 
      icon: Settings, 
      color: "from-slate-600 to-slate-700",
      hoverColor: "hover:from-slate-700 hover:to-slate-800"
    },
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map(action => (
          <button
            key={action.id}
            className={`bg-gradient-to-br ${action.color} ${action.hoverColor} transition-all p-4 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1`}
          >
            <action.icon className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-sm font-medium text-center">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrganiserQuickActions;