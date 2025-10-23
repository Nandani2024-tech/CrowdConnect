// components/dashboard/ProfileOverview.jsx
import React from 'react';
import { Edit2, Briefcase, Building, MapPin, Tag } from 'lucide-react';

const ProfileOverview = ({ user }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Profile Overview</h2>
        <button className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-1 transition-colors">
          <Edit2 className="w-4 h-4" />
          Edit Profile
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="text-slate-400 text-sm">Occupation</label>
            <div className="text-white font-medium">{user.occupation}</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Building className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="text-slate-400 text-sm">Company</label>
            <div className="text-white font-medium">{user.company}</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="text-slate-400 text-sm">Location</label>
            <div className="text-white font-medium">{user.location}</div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-slate-700">
          <label className="text-slate-400 text-sm block mb-2">Bio</label>
          <p className="text-white text-sm leading-relaxed">{user.bio}</p>
        </div>
        
        <div className="pt-4 border-t border-slate-700">
          <label className="text-slate-400 text-sm mb-2 flex items-center gap-2">
            <Tag className="w-4 h-4" />
            Interests
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.interests.map((interest, idx) => (
              <span 
                key={idx} 
                className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500/30 transition-colors cursor-pointer"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Profile Completion</span>
            <span className="text-white font-semibold">{user.stats.profileComplete}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${user.stats.profileComplete}%` }}
            />
          </div>
          {user.stats.profileComplete < 100 && (
            <p className="text-slate-400 text-xs mt-2">
              Complete your profile to unlock all features
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;