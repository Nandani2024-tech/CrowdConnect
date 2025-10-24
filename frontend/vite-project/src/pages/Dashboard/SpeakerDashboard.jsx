import React, { useEffect, useState } from "react";
import SpeakerWelcomeBanner from "../../components/dashboard/Speaker/SpeakerWelcomeBanner";
import SpeakerQuickActions from "../../components/dashboard/Speaker/SpeakerQuickActions";
import MySessions from "../../components/dashboard/Speaker/MySessions";
import EventInvites from "../../components/dashboard/Speaker/EventInvites";
import SpeakerAnalytics from "../../components/dashboard/Speaker/SpeakerAnalytics";
import FeedbackCenter from "../../components/dashboard/Speaker/FeedbackCenter";
import SpeakerProfileOverview from "../../components/dashboard/Speaker/SpeakerProfileOverview";
import SpeakerNotifications from "../../components/dashboard/Speaker/SpeakerNotifications";
import PastSessions from "../../components/dashboard/Speaker/PastSessions";

// REMOVE mock imports

const SpeakerDashboard = () => {
  const [speakerData, setSpeakerData] = useState(null);

  useEffect(() => {
    const fetchSpeaker = async () => {
      const token = localStorage.getItem("token"); // depends on your login storage
      const res = await fetch("http://localhost:5000/api/speaker/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
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

  // Add more fields as your backend supplies them.
  const stats = {
    sessions: speakerData?.sessions?.length ?? 0,
    attendees: speakerData?.attendees ?? 0,
    avgRating: speakerData?.rating ?? 0,
    profileComplete: 100, // Or calculate if needed
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-8">
      <SpeakerWelcomeBanner speaker={{ 
        name: speakerData?.userId?.username || "Speaker",
        avatar: "🎤",
        stats 
      }} />
      <div className="mt-8 mb-8"><SpeakerQuickActions /></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SpeakerProfileOverview speaker={speakerData} />
        </div>
        <div>
          <SpeakerAnalytics analytics={speakerData.analytics || {}} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MySessions sessions={speakerData.sessions || []} />
        <EventInvites invites={speakerData.invites || []} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <FeedbackCenter feedbacks={speakerData.feedback || []} />
        <SpeakerNotifications notifications={speakerData.notifications || []} />
      </div>
      <div className="mb-8">
        <PastSessions pastSessions={speakerData.pastSessions || []} />
      </div>
      <footer className="text-center text-slate-500 text-sm border-t border-slate-700 pt-4">
        © {new Date().getFullYear()} Speaker Dashboard • All Rights Reserved
      </footer>
    </div>
  );
};
export default SpeakerDashboard;
