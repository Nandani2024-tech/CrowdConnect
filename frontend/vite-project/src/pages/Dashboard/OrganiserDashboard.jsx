// pages/Dashboard/OrganiserDashboard.jsx
import React, { useEffect, useState } from "react";
import OrganiserWelcomeBanner from "../../components/dashboard/Organiser/OrganiserWelcomeBanner";
import OrganiserQuickActions from "../../components/dashboard/Organiser/OrganiserQuickActions";
import EventsManaged from "../../components/dashboard/Organiser/EventsManaged";
import RegistrationsOverview from "../../components/dashboard/Organiser/RegistrationsOverview";
import OrganiserAnalytics from "../../components/dashboard/Organiser/OrganiserAnalytics";
import SpeakerTeamManagement from "../../components/dashboard/Organiser/SpeakerTeamManagement";
import EventReports from "../../components/dashboard/Organiser/EventReports";
import OrganiserNotifications from "../../components/dashboard/Organiser/OrganiserNotifications";
import OrganiserProfileOverview from "../../components/dashboard/Organiser/OrganiserProfileOverview";
import CreateEventForm from "../../components/dashboard/Organiser/CreateEventForm";

export default function OrganiserDashboard() {
  const [organiser, setOrganiser] = useState(null);
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    // Fetch organiser profile
    const profileRes = await fetch("http://localhost:5000/api/organiser/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const profileJson = await profileRes.json();
    let organiser = profileJson.data;

    // Fetch events managed by this organiser -- make sure your backend supports this!
    const eventsRes = await fetch("http://localhost:5000/api/events?organiserId=" + organiser._id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const eventsJson = await eventsRes.json();
    organiser.eventsOrganized = eventsJson.data;

    setOrganiser(organiser);
  };
  fetchData();
}, []);


  const handleEventCreated = (newEvent) => {
    setOrganiser((prev) => ({
      ...prev,
      eventsOrganized: [newEvent, ...(prev?.eventsOrganized || [])],
    }));
    setShowCreateEvent(false);
  };

  if (showCreateEvent) {
    return (
      <CreateEventForm
        onCancel={() => setShowCreateEvent(false)}
        onEventCreated={handleEventCreated}
      />
    );
  }

  if (!organiser) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <span className="text-cyan-400 text-xl">
          Loading your organiser dashboard...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Banner */}
        <OrganiserWelcomeBanner organiser={organiser} />

        {/* Quick Actions */}
        <OrganiserQuickActions onCreateEvent={() => setShowCreateEvent(true)} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            <EventsManaged events={organiser.eventsOrganized || []} />
            <RegistrationsOverview
              registrations={organiser.registrations || []}
            />
            <OrganiserAnalytics analytics={organiser.analytics || {}} />
            <SpeakerTeamManagement team={organiser.team || []} />
            <EventReports reports={organiser.reports || []} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <OrganiserProfileOverview organiser={organiser} />
            <OrganiserNotifications
              notifications={organiser.notifications || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
