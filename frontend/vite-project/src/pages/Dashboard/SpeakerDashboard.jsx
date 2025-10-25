import React, { useEffect, useState } from "react";
import SpeakerWelcomeBanner from "../../components/dashboard/Speaker/SpeakerWelcomeBanner";
import SpeakerProfileOverview from "../../components/dashboard/Speaker/SpeakerProfileOverview";
import MySessions from "../../components/dashboard/Speaker/MySessions";
import EventInvites from "../../components/dashboard/Speaker/EventInvites";

const SpeakerDashboard = () => {
  const [speakerData, setSpeakerData] = useState(null);

  useEffect(() => {
    const fetchSpeaker = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/speaker/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const json = await res.json();
      if (json.success) setSpeakerData(json.data);
    };
    fetchSpeaker();
  }, []);

  if (!speakerData) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <span className="text-cyan-400 text-xl">Loading your speaker dashboard…</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      {/* Max-width container - centered */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Welcome Banner */}
        <SpeakerWelcomeBanner 
          speaker={{ 
            name: speakerData?.userId?.username || "Speaker",
            sessions: speakerData?.sessions?.length ?? 0
          }} 
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Right Column - Sessions & Invitations (takes 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <EventInvites invites={speakerData.invites || []} />
            <MySessions sessions={speakerData.sessions || []} />
          </div>

          {/* Left Column - Profile (takes 1 column - sidebar) */}
          <div>
            <SpeakerProfileOverview speaker={speakerData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDashboard;
