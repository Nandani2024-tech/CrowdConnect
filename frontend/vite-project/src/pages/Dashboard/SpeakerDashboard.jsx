// src/pages/Dashboard/SpeakerDashboard.jsx
import React from "react";

// Speaker components (correct filenames from your Speaker folder)
import SpeakerWelcomeBanner from "../../components/dashboard/Speaker/SpeakerWelcomeBanner";
import SpeakerQuickActions from "../../components/dashboard/Speaker/SpeakerQuickActions";
import MySessions from "../../components/dashboard/Speaker/MySessions";
import EventInvites from "../../components/dashboard/Speaker/EventInvites";
import SpeakerAnalytics from "../../components/dashboard/Speaker/SpeakerAnalytics";
import FeedbackCenter from "../../components/dashboard/Speaker/FeedbackCenter";
import SpeakerProfileOverview from "../../components/dashboard/Speaker/SpeakerProfileOverview";
import SpeakerNotifications from "../../components/dashboard/Speaker/SpeakerNotifications";
import PastSessions from "../../components/dashboard/Speaker/PastSessions";

// Mock data (ensure this file exists at src/mockData/speakerData.js)
import {
  mockSpeaker,
  mockSessions,
  mockInvites,
  mockAnalytics,
  mockFeedback,
  mockNotifications,
  mockPastSessions,
} from "../../mockData/speakerData";

const SpeakerDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-8">
      {/* Welcome Banner */}
      <SpeakerWelcomeBanner speaker={mockSpeaker} />

      {/* Quick Actions */}
      <div className="mt-8 mb-8">
        <SpeakerQuickActions />
      </div>

      {/* Top Grid: Profile (left) + Analytics (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SpeakerProfileOverview speaker={mockSpeaker} />
        </div>
        <div>
          <SpeakerAnalytics analytics={mockAnalytics} />
        </div>
      </div>

      {/* Sessions & Invites */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MySessions sessions={mockSessions} />
        <EventInvites invites={mockInvites} />
      </div>

      {/* Feedback & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <FeedbackCenter feedbacks={mockFeedback} />
        <SpeakerNotifications notifications={mockNotifications} />
      </div>

      {/* Past Sessions (full width) */}
      <div className="mb-8">
        <PastSessions pastSessions={mockPastSessions} />
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm border-t border-slate-700 pt-4">
        © {new Date().getFullYear()} Speaker Dashboard • All Rights Reserved
      </footer>
    </div>
  );
};

export default SpeakerDashboard;
