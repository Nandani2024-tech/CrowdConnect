import React, { useEffect, useState } from "react";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import QuickActions from "../../components/dashboard/QuickActions";
import Notifications from "../../components/dashboard/Notifications";
import Connections from "../../components/dashboard/Connections";
import ProfileOverview from "../../components/dashboard/ProfileOverview";
import UpcomingEvents from "../../components/dashboard/UpcomingEvents";
import EventRecommendations from "../../components/dashboard/EventRecommendations";
import PastEvents from "../../components/dashboard/PastEvents";
import MySchedule from "../../components/dashboard/MySchedule";

export default function AttendeeDashboard() {
  const [attendee, setAttendee] = useState(null);
  const [eventData, setEventData] = useState({
    upcoming: [],
    recommended: [],
    past: [],
    calendar: [],
  });

  useEffect(() => {
    // Fetch attendee profile
    async function fetchAttendee() {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/attendee/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        const attendeeData = json.data;
        // Add a stats property containing the eventsRegistered count
        const stats = {
          eventsRegistered: attendeeData.registeredEvents
            ? attendeeData.registeredEvents.length
            : 0,
          connections: attendeeData.connections
            ? attendeeData.connections.length
            : 0,
          profileComplete: attendeeData.profileComplete || 0, // Adjust this to your logic if needed
        };
        setAttendee({ ...attendeeData, stats });
      }
    }

    // Fetch events (example endpoint—replace with your actual events endpoint)
    async function fetchEvents() {
      const res = await fetch("http://localhost:5000/api/events");
      const json = await res.json();
      if (json.success)
        setEventData({
          upcoming: json.data,
          recommended: [],
          past: [],
          calendar: [],
        });
    }
    fetchAttendee();
    fetchEvents();
  }, []);

  if (!attendee) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <span className="text-cyan-400 text-xl">Loading your dashboard…</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Banner - Full Width */}
        <WelcomeBanner user={attendee} />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left/Main Column - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <QuickActions />
            <UpcomingEvents events={eventData.upcoming || []} />
            <MySchedule calendarEvents={eventData.calendar || []} />
            <EventRecommendations events={eventData.recommended || []} />
            <PastEvents pastEvents={eventData.past || []} />
          </div>
          {/* Right Sidebar */}
          <div className="space-y-6">
            <ProfileOverview user={attendee} />
            <Notifications notifications={attendee.notifications || []} />
            <Connections connections={attendee.connections || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
