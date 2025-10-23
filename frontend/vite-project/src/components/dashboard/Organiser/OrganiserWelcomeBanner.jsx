// components/dashboard/Organiser/OrganiserWelcomeBanner.jsx
import React from 'react';
import { Calendar, Users, Star, TrendingUp, CheckCircle } from 'lucide-react';

const OrganiserWelcomeBanner = ({ organiser }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-6 mb-6 text-white shadow-lg">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-md relative">
            {organiser.logo}
            {organiser.verified && (
              <CheckCircle className="w-5 h-5 bg-green-500 text-white rounded-full absolute -bottom-1 -right-1" />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{organiser.orgName} 🎉</h1>
            <p className="text-purple-100 mt-1">
              Welcome back, {organiser.adminName}! Managing events since {organiser.since}
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-purple-100" />
            <span className="text-sm text-purple-100">Total Events</span>
          </div>
          <div className="text-3xl font-bold">{organiser.stats.totalEvents}</div>
          <p className="text-xs text-purple-200 mt-1">Organized till date</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-purple-100" />
            <span className="text-sm text-purple-100">Total Attendees</span>
          </div>
          <div className="text-3xl font-bold">{organiser.stats.totalAttendees.toLocaleString()}</div>
          <p className="text-xs text-purple-200 mt-1">Across all events</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-5 h-5 text-purple-100" />
            <span className="text-sm text-purple-100">Avg Rating</span>
          </div>
          <div className="text-3xl font-bold">{organiser.stats.rating} ⭐</div>
          <p className="text-xs text-purple-200 mt-1">Based on feedback</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-100" />
            <span className="text-sm text-purple-100">Reports Generated</span>
          </div>
          <div className="text-3xl font-bold">{organiser.stats.reports}</div>
          <p className="text-xs text-purple-200 mt-1">This month</p>
        </div>
      </div>
    </div>
  );
};

export default OrganiserWelcomeBanner;