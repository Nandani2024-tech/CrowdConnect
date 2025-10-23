// mockData/attendeeData.js

export const mockUserData = {
  id: 1,
  name: "Alex Thompson",
  email: "alex.thompson@email.com",
  avatar: "AT",
  occupation: "Software Engineer",
  company: "Tech Corp",
  bio: "Passionate about AI, Web3, and emerging technologies. Love connecting with like-minded professionals.",
  interests: ["AI", "Blockchain", "Cloud Computing", "DevOps", "Cybersecurity"],
  phone: "+91 98765 43210",
  location: "Bengaluru, Karnataka",
  stats: {
    eventsRegistered: 5,
    eventsAttended: 12,
    connections: 47,
    profileComplete: 80
  },
  socialLinks: {
    linkedin: "linkedin.com/in/alexthompson",
    twitter: "@alextech",
    github: "github.com/alexthompson"
  }
};

export const mockConnections = [
  { 
    id: 1, 
    name: "Sarah Chen", 
    role: "Speaker", 
    company: "AI Labs", 
    avatar: "SC", 
    mutual: 5,
    status: "connected",
    expertise: "Machine Learning"
  },
  { 
    id: 2, 
    name: "Rahul Sharma", 
    role: "Attendee", 
    company: "StartupXYZ", 
    avatar: "RS", 
    mutual: 3,
    status: "connected",
    expertise: "Product Management"
  },
  { 
    id: 3, 
    name: "Emily Davis", 
    role: "Organiser", 
    company: "Event Corp", 
    avatar: "ED", 
    mutual: 8,
    status: "connected",
    expertise: "Event Management"
  },
  { 
    id: 4, 
    name: "Priya Patel", 
    role: "Speaker", 
    company: "Cloud Innovations", 
    avatar: "PP", 
    mutual: 6,
    status: "pending",
    expertise: "Cloud Architecture"
  },
  { 
    id: 5, 
    name: "Michael Wong", 
    role: "Attendee", 
    company: "Blockchain Ventures", 
    avatar: "MW", 
    mutual: 4,
    status: "suggested",
    expertise: "Blockchain Development"
  }
];

export const mockNotifications = [
  { 
    id: 1, 
    type: "event", 
    message: "AI Summit starts in 23 days! Prepare your questions for the Q&A.", 
    time: "2 hours ago", 
    unread: true,
    actionUrl: "/events/1"
  },
  { 
    id: 2, 
    type: "connection", 
    message: "Sarah Chen accepted your connection request", 
    time: "1 day ago", 
    unread: true,
    actionUrl: "/connections/1"
  },
  { 
    id: 3, 
    type: "update", 
    message: "Web3 Conference venue changed to Innovation Center, Mumbai", 
    time: "2 days ago", 
    unread: false,
    actionUrl: "/events/2"
  },
  { 
    id: 4, 
    type: "reminder", 
    message: "Complete your profile to unlock networking features", 
    time: "3 days ago", 
    unread: false,
    actionUrl: "/profile"
  },
  { 
    id: 5, 
    type: "achievement", 
    message: "Congratulations! You've earned the 'Early Bird' badge", 
    time: "1 week ago", 
    unread: false,
    actionUrl: "/achievements"
  }
];

export default mockUserData;