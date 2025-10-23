// components/dashboard/WelcomeBanner.jsx
import React from 'react';
import { Calendar, Users, TrendingUp } from 'lucide-react';

const WelcomeBanner = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-6 mb-6 text-white shadow-lg">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
            {user.avatar}
          </div>
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user.name.split(' ')[0]}! 👋</h1>
            <p className="text-blue-100 mt-1">Ready to explore exciting events today?</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-blue-100" />
            <span className="text-sm text-blue-100">Events Registered</span>
          </div>
          <div className="text-3xl font-bold">{user.stats.eventsRegistered}</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-blue-100" />
            <span className="text-sm text-blue-100">Connections</span>
          </div>
          <div className="text-3xl font-bold">{user.stats.connections}</div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-100" />
            <span className="text-sm text-blue-100">Profile Complete</span>
          </div>
          <div className="text-3xl font-bold">{user.stats.profileComplete}%</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;