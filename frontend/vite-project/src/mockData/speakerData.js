// mockData/speakerData.js

export const mockSpeaker = {
  name: "Dr. Priya Nair",
  avatar: "PN",
  bio: "Renowned expert in Machine Learning, keynote speaker at global tech conferences.",
  expertise: ["Machine Learning", "AI Ethics", "Data Science"],
  topics: ["Deep Learning", "AI in Healthcare", "Model Explainability"],
  email: "priya.nair@email.com",
  phone: "+91 98765 12345",
  location: "Pune, India",
  stats: {
    sessions: 18,
    upcoming: 2,
    avgRating: 4.8,
    attendees: 3200,
    profileComplete: 95
  },
  socialLinks: {
    linkedin: "linkedin.com/in/priyanair",
    twitter: "@priyanair_ai",
    website: "priyanair.com"
  }
};

export const mockSessions = [
  {
    id: 1,
    title: "AI in Healthcare: Transforming Patient Outcomes",
    date: "2025-11-15",
    time: "11:00 AM",
    event: "AI Summit 2025",
    topic: "AI in Healthcare",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Ethical Challenges in Deep Learning",
    date: "2025-11-30",
    time: "2:00 PM",
    event: "Global Ethics Symposium",
    topic: "AI Ethics",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Automating Diagnostics with Machine Vision",
    date: "2025-09-29",
    time: "4:00 PM",
    event: "MedTech Conclave",
    topic: "Machine Learning",
    status: "Completed"
  }
];

export const mockInvites = [
  {
    id: 11,
    event: "Devs United 2025",
    topic: "ML for Social Good",
    date: "2025-12-10",
    organiser: "TechNations",
    action: "Respond"
  }
];

export const mockAnalytics = {
  sessions: 18,
  avgRating: 4.8,
  totalAttendees: 3200,
  feedbackCount: 47,
  chartData: [
    { month: "Jan", talks: 2 },
    { month: "Feb", talks: 1 },
    { month: "Mar", talks: 3 },
    { month: "Apr", talks: 2 }
  ]
};

export const mockFeedback = [
  {
    id: 1001,
    session: "AI in Healthcare",
    rating: 5,
    comment: "Outstanding, very actionable and engaging.",
    from: "Ravi Mehra"
  },
  {
    id: 1002,
    session: "Ethical Challenges in Deep Learning",
    rating: 4,
    comment: "Great talk, insightful policy discussion.",
    from: "Li Chen"
  }
];

export const mockNotifications = [
  {
    id: 1,
    type: "invite",
    message: "You've been invited to speak at Devs United 2025.",
    date: "Today",
    unread: true
  },
  {
    id: 2,
    type: "reminder",
    message: "Submit your slides for AI Summit 2025 by Nov 5.",
    date: "2 days ago",
    unread: true
  }
];

export const mockPastSessions = [
  {
    id: 20,
    title: "Vision Transformers for Real-World Applications",
    date: "2025-08-20",
    event: "AI Vision Summit",
    downloads: 83,
    feedbackAvg: 4.6,
    materialLink: "/downloads/session20.pdf"
  }
];

// You can add more as components need (Achievements, NetworkingPanel, etc.)
