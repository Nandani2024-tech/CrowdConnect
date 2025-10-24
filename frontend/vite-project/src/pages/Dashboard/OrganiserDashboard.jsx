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

// REMOVE all mock imports here

export default function OrganiserDashboard() {
  const [organiser, setOrganiser] = useState(null);

  useEffect(() => {
    // Fetch organiser profile from backend
    const fetchOrganiserProfile = async () => {
      const token = localStorage.getItem("token"); // Assuming token is stored at login
      const res = await fetch("http://localhost:5000/api/organiser/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const json = await res.json();
      if (json.success) {
        setOrganiser(json.data);
      }
    };
    fetchOrganiserProfile();
  }, []);

  if (!organiser) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <span className="text-cyan-400 text-xl">Loading your organiser dashboard...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Banner */}
        <OrganiserWelcomeBanner organiser={organiser} />

        {/* Quick Actions */}
        <OrganiserQuickActions />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            <EventsManaged events={organiser.eventsOrganized || []} />
            <RegistrationsOverview registrations={organiser.registrations || []} />
            <OrganiserAnalytics analytics={organiser.analytics || {}} />
            <SpeakerTeamManagement team={organiser.team || []} />
            <EventReports reports={organiser.reports || []} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <OrganiserProfileOverview organiser={organiser} />
            <OrganiserNotifications notifications={organiser.notifications || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
