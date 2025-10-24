import React from 'react';
import { Edit2, Link, Twitter, Linkedin } from 'lucide-react';

const SpeakerProfileOverview = ({ speaker }) => (
  <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-white">Profile Overview</h2>
      <button className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-1 transition-colors">
        <Edit2 className="w-4 h-4" />
        Edit Profile
      </button>
    </div>
    <div className="space-y-4">
      <p className="text-white font-semibold text-lg">{speaker.userId?.username || "Speaker"}</p>
      <p className="text-slate-300 italic">{speaker.bio}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-slate-700/50 p-2 rounded text-sm text-cyan-400">
          Topics: {(speaker.topics || []).join(', ')}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        {speaker.socialLinks?.linkedin && (
          <a
            href={speaker.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        )}
        {speaker.socialLinks?.twitter && (
          <a
            href={speaker.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </a>
        )}
        {speaker.socialLinks?.website && (
          <a
            href={speaker.socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
          >
            <Link className="w-5 h-5" />
            Website
          </a>
        )}
      </div>
    </div>
  </div>
);
export default SpeakerProfileOverview;
