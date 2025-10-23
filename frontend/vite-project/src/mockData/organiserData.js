// mockData/organiserData.js

// Mock data for Organiser Welcome Banner
export const mockOrganiser = {
  logo: "E", // Could be initials or an image URL
  verified: true,
  orgName: "EventXcellence",
  adminName: "Riya Sharma",
  since: "2018",
  stats: {
    totalEvents: 32,
    totalAttendees: 15890,
    rating: 4.7,
    reports: 12
  }
};

// Mock data for events managed
export const mockEvents = [
  {
    id: 1,
    title: "AI Summit 2025",
    date: "2025-11-15",
    status: "Upcoming",
    registrations: 250
  },
  {
    id: 2,
    title: "Startup Expo",
    date: "2025-10-05",
    status: "Ongoing",
    registrations: 180
  },
  {
    id: 3,
    title: "Blockchain India",
    date: "2025-09-20",
    status: "Past",
    registrations: 320
  }
];

// Mock data for registrations overview
export const mockRegistrations = [
  {
    eventId: 1,
    eventName: "AI Summit 2025",
    pending: 10,
    approved: 200,
    declined: 40
  },
  {
    eventId: 2,
    eventName: "Startup Expo",
    pending: 5,
    approved: 150,
    declined: 25
  }
];

// Mock data for speaker & team management
export const mockTeam = [
  {
    id: 1,
    name: "Amit Verma",
    role: "Speaker",
    expertise: "AI & ML"
  },
  {
    id: 2,
    name: "Neha Singh",
    role: "Organizer",
    expertise: "Event Management"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Speaker",
    expertise: "Blockchain"
  }
];

// Mock data for event reports
export const mockReports = [
  {
    id: 1,
    event: "AI Summit 2025",
    feedbackAvg: 4.5,
    downloads: 120
  },
  {
    id: 2,
    event: "Startup Expo",
    feedbackAvg: 4.2,
    downloads: 85
  }
];

// Mock data for notifications
export const mockNotifications = [
  {
    id: 1,
    type: "success",
    message: "New registration approved for AI Summit 2025",
    date: "2 hours ago",
    unread: true,
    actionText: "View"
  },
  {
    id: 2,
    type: "alert",
    message: "Payment failed for Startup Expo",
    date: "1 day ago",
    unread: true,
    actionText: "Resolve"
  },
  {
    id: 3,
    type: "success",
    message: "Report generated for Blockchain India",
    date: "3 days ago",
    unread: false
  }
];

// Mock data for organiser analytics
export const mockAnalytics = {
  totalEvents: 32,
  avgRegistrations: 198,
  engagementRate: 76,
  feedbackScore: 4.7
};
