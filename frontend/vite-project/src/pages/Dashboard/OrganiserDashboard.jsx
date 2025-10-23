// pages/Dashboard/OrganiserDashboard.jsx
import React from "react";

// Import Organiser Components
import OrganiserWelcomeBanner from "../../components/dashboard/Organiser/OrganiserWelcomeBanner";
import OrganiserQuickActions from "../../components/dashboard/Organiser/OrganiserQuickActions";
import EventsManaged from "../../components/dashboard/Organiser/EventsManaged";
import RegistrationsOverview from "../../components/dashboard/Organiser/RegistrationsOverview";
import OrganiserAnalytics from "../../components/dashboard/Organiser/OrganiserAnalytics";
import SpeakerTeamManagement from "../../components/dashboard/Organiser/SpeakerTeamManagement";
import EventReports from "../../components/dashboard/Organiser/EventReports";
import OrganiserNotifications from "../../components/dashboard/Organiser/OrganiserNotifications";
import OrganiserProfileOverview from "../../components/dashboard/Organiser/OrganiserProfileOverview";

// Import Mock Data (you need to create this in mockData/organiserData.js)
import { 
  mockOrganiser, 
  mockEvents, 
  mockRegistrations, 
  mockAnalytics, 
  mockTeam, 
  mockReports, 
  mockNotifications 
} from "../../mockData/organiserData";

export default function OrganiserDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Welcome Banner */}
        <OrganiserWelcomeBanner organiser={mockOrganiser} />

        {/* Quick Actions */}
        <OrganiserQuickActions />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Events Managed */}
            <EventsManaged events={mockEvents} />

            {/* Registrations Overview */}
            <RegistrationsOverview registrations={mockRegistrations} />

            {/* Analytics */}
            <OrganiserAnalytics analytics={mockAnalytics} />

            {/* Speaker & Team Management */}
            <SpeakerTeamManagement team={mockTeam} />

            {/* Event Reports */}
            <EventReports reports={mockReports} />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Profile Overview */}
            <OrganiserProfileOverview organiser={mockOrganiser} />

            {/* Notifications */}
            <OrganiserNotifications notifications={mockNotifications} />
          </div>
        </div>
      </div>
    </div>
  );
}
