import React from 'react';
import { Star, Users, Calendar } from 'lucide-react';

const SpeakerWelcomeBanner = ({ speaker }) => (
  <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-6 mb-6 text-white shadow-lg">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
        {speaker.avatar || "🎤"}
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          Hi, {(speaker.name || "").split(" ")[0] || "Speaker"}!
        </h1>
        <p className="text-purple-100 mt-1">
          Welcome to your speaker dashboard.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      {/* Stats must be available in the speaker.stats object */}
      <div className="bg-white/10 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-5 h-5 text-purple-100" />
          <span className="text-sm text-purple-100">Sessions</span>
        </div>
        <div className="text-3xl font-bold">
          {speaker.stats?.sessions ?? 0}
        </div>
      </div>
      <div className="bg-white/10 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-purple-100" />
          <span className="text-sm text-purple-100">Attendees</span>
        </div>
        <div className="text-3xl font-bold">
          {speaker.stats?.attendees ?? 0}
        </div>
      </div>
      <div className="bg-white/10 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-sm text-yellow-200">Avg Rating</span>
        </div>
        <div className="text-3xl font-bold">
          {speaker.stats?.avgRating ?? 0} ★
        </div>
      </div>
      <div className="bg-white/10 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-blue-100" />
          <span className="text-sm text-blue-100">Profile</span>
        </div>
        <div className="text-3xl font-bold">
          {speaker.stats?.profileComplete ?? 100}%
        </div>
      </div>
    </div>
  </div>
);
export default SpeakerWelcomeBanner;
