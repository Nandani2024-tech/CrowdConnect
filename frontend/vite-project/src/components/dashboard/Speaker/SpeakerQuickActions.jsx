import React from 'react';
import { Upload, User, CheckSquare, MessageSquare } from 'lucide-react';

const SpeakerQuickActions = () => {
  const actions = [
    {
      id: 1,
      label: "Submit Slides",
      icon: Upload,
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:from-blue-600 hover:to-cyan-700"
    },
    {
      id: 2,
      label: "Update Profile",
      icon: User,
      color: "from-purple-500 to-pink-600",
      hoverColor: "hover:from-purple-600 hover:to-pink-700"
    },
    {
      id: 3,
      label: "Confirm Attendance",
      icon: CheckSquare,
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-600 hover:to-emerald-700"
    },
    {
      id: 4,
      label: "Messages",
      icon: MessageSquare,
      color: "from-yellow-500 to-amber-600",
      hoverColor: "hover:from-yellow-600 hover:to-amber-700"
    },
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map(action => (
          <button
            key={action.id}
            className={`bg-gradient-to-br ${action.color} ${action.hoverColor} transition-all p-4 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1`}
          >
            <action.icon className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-sm font-medium">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeakerQuickActions;
