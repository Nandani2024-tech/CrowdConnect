import React from 'react';
import { Edit2, Building, PhoneCall, Globe } from 'lucide-react';

const OrganiserProfileOverview = ({ organiser }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Organization Profile</h2>
        <button className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-1 transition-colors">
          <Edit2 className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Building className="w-5 h-5 text-slate-400" />
          <span className="text-white font-medium">{organiser.orgName}</span>
        </div>
        <div className="flex items-center gap-3">
          <PhoneCall className="w-5 h-5 text-slate-400" />
          <span className="text-white font-medium">{organiser.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-slate-400" />
          <a href={organiser.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            {organiser.website}
          </a>
        </div>
        
        <div className="pt-4 border-t border-slate-700">
          <p className="text-slate-400 text-sm">{organiser.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default OrganiserProfileOverview;
