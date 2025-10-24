// components/dashboard/Organiser/OrganiserProfileOverview.jsx
import React from 'react';
import { Edit2, Briefcase, Building, MapPin, Tag } from 'lucide-react';

const OrganiserProfileOverview = ({ organiser }) => {
  const orgName = organiser?.organizationName || "Not specified";
  const contact = organiser?.contactNumber || "Not specified";
  const website = organiser?.website || "Not specified";
  const bio = organiser?.userId?.bio || "No bio provided";
  const verified = organiser?.verified ? "Verified" : "Pending Verification";
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Organiser Profile</h2>
        <button className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-1 transition-colors">
          <Edit2 className="w-4 h-4" />
          Edit Profile
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="text-slate-400 text-sm">Organization</label>
            <div className="text-white font-medium">{orgName}</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Building className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="text-slate-400 text-sm">Contact</label>
            <div className="text-white font-medium">{contact}</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <label className="text-slate-400 text-sm">Website</label>
            <div className="text-white font-medium">{website}</div>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-700">
          <label className="text-slate-400 text-sm block mb-2">Bio</label>
          <p className="text-white text-sm leading-relaxed">{bio}</p>
        </div>
        <div className="pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Verification Status</span>
            <span className="text-white font-semibold">{verified}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganiserProfileOverview;
