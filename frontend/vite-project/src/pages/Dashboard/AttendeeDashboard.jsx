// pages/Dashboard/AttendeeDashboard.jsx
import React from "react";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import QuickActions from "../../components/dashboard/QuickActions";
import Notifications from "../../components/dashboard/Notifications";
import Connections from "../../components/dashboard/Connections";
import ProfileOverview from "../../components/dashboard/ProfileOverview";
import UpcomingEvents from "../../components/dashboard/UpcomingEvents";
import EventRecommendations from "../../components/dashboard/EventRecommendations";
import PastEvents from "../../components/dashboard/PastEvents";
import MySchedule from "../../components/dashboard/MySchedule";

// Named imports from mockData files
import { 
  mockUserData, 
  mockConnections, 
  mockNotifications 
} from "../../mockData/attendeeData";
import { 
  mockUpcomingEvents, 
  mockRecommendedEvents, 
  mockPastEvents,
  mockCalendarEvents 
} from "../../mockData/eventsData";

export default function AttendeeDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Banner - Full Width */}
        <WelcomeBanner user={mockUserData} />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left/Main Column - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions - Prominent position */}
            <QuickActions />
            
            {/* Upcoming Events */}
            <UpcomingEvents events={mockUpcomingEvents || []} />
            
            {/* My Schedule */}
            <MySchedule calendarEvents={mockCalendarEvents || []} />
            
            {/* Event Recommendations */}
            <EventRecommendations events={mockRecommendedEvents || []} />
            
            {/* Past Events */}
            <PastEvents pastEvents={mockPastEvents || []} />
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6">
            {/* Profile Overview */}
            <ProfileOverview user={mockUserData} />
            
            {/* Notifications */}
            <Notifications notifications={mockNotifications || []} />
            
            {/* Connections */}
            <Connections connections={mockConnections || []} />
          </div>
        </div>
      </div>
    </div>
  );
}