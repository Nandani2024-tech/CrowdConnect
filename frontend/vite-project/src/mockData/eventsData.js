// mockData/eventsData.js

export const mockUpcomingEvents = [
  {
    id: 1,
    title: "AI & Machine Learning Summit 2025",
    description: "Join industry leaders to explore the latest in AI and ML technologies",
    date: "2025-11-15",
    time: "09:00 AM",
    endTime: "05:00 PM",
    location: "Tech Hub, Bengaluru",
    status: "registered",
    daysLeft: 23,
    image: "🤖",
    category: "AI",
    organizer: "Tech Events Inc",
    attendees: 450,
    speakers: ["Dr. Amit Shah", "Sarah Chen", "Prof. Rachel Green"]
  },
  {
    id: 2,
    title: "Web3 Developer Conference",
    description: "Dive deep into blockchain, DeFi, and decentralized applications",
    date: "2025-11-20",
    time: "10:00 AM",
    endTime: "06:00 PM",
    location: "Innovation Center, Mumbai",
    status: "registered",
    daysLeft: 28,
    image: "⛓️",
    category: "Blockchain",
    organizer: "Blockchain Association",
    attendees: 320,
    speakers: ["Michael Wong", "Vitalik Singh", "Emma Rodriguez"]
  },
  {
    id: 3,
    title: "Cloud Architecture Masterclass",
    description: "Learn advanced cloud architecture patterns and best practices",
    date: "2025-11-25",
    time: "02:00 PM",
    endTime: "04:00 PM",
    location: "Virtual Event",
    status: "registered",
    daysLeft: 33,
    image: "☁️",
    category: "Cloud Computing",
    organizer: "Cloud Experts Guild",
    attendees: 580,
    speakers: ["Priya Patel", "James Wilson", "Lisa Kumar"]
  },
  {
    id: 4,
    title: "Startup Funding Workshop",
    description: "Connect with investors and learn fundraising strategies",
    date: "2025-12-02",
    time: "11:00 AM",
    endTime: "03:00 PM",
    location: "Startup Hub, Pune",
    status: "registered",
    daysLeft: 40,
    image: "💰",
    category: "Entrepreneurship",
    organizer: "Startup India",
    attendees: 200,
    speakers: ["Ravi Mehta", "Jennifer Lee", "Ankit Gupta"]
  }
];

export const mockRecommendedEvents = [
  {
    id: 5,
    title: "DevOps Best Practices Workshop",
    description: "Master CI/CD, containerization, and modern DevOps workflows",
    date: "2025-12-01",
    time: "09:00 AM",
    location: "Hyderabad Tech Park",
    match: 95,
    image: "⚙️",
    category: "DevOps",
    organizer: "DevOps Community",
    attendees: 180,
    price: "Free"
  },
  {
    id: 6,
    title: "Cybersecurity Trends 2025",
    description: "Stay ahead of cyber threats with expert insights",
    date: "2025-12-05",
    time: "10:00 AM",
    location: "Delhi Convention Center",
    match: 88,
    image: "🔒",
    category: "Cybersecurity",
    organizer: "Security First",
    attendees: 350,
    price: "₹999"
  },
  {
    id: 7,
    title: "Python for Data Science",
    description: "Hands-on workshop on data analysis and visualization",
    date: "2025-12-08",
    time: "01:00 PM",
    location: "Virtual Event",
    match: 82,
    image: "🐍",
    category: "Data Science",
    organizer: "Data Academy",
    attendees: 420,
    price: "₹1499"
  },
  {
    id: 8,
    title: "IoT Innovation Summit",
    description: "Explore the future of connected devices and smart cities",
    date: "2025-12-10",
    time: "09:30 AM",
    location: "Bengaluru Tech Center",
    match: 76,
    image: "📡",
    category: "IoT",
    organizer: "IoT Alliance",
    attendees: 280,
    price: "₹799"
  }
];

export const mockPastEvents = [
  {
    id: 101,
    title: "Tech Innovation Expo 2024",
    description: "Annual showcase of breakthrough technologies",
    date: "2025-09-15",
    location: "Bangalore International Exhibition Centre",
    rating: 5,
    certificate: true,
    image: "💡",
    category: "Technology",
    attendees: 1200,
    feedback: "Amazing speakers and great networking opportunities!"
  },
  {
    id: 102,
    title: "Startup Pitch Day",
    description: "Watch innovative startups pitch to top investors",
    date: "2025-08-20",
    location: "Mumbai Startup Hub",
    rating: 4,
    certificate: false,
    image: "🚀",
    category: "Entrepreneurship",
    attendees: 350,
    feedback: "Inspiring pitches but could have been better organized."
  },
  {
    id: 103,
    title: "Frontend Developer Meetup",
    description: "Monthly meetup for frontend developers",
    date: "2025-07-10",
    location: "Virtual Event",
    rating: 5,
    certificate: true,
    image: "💻",
    category: "Web Development",
    attendees: 520,
    feedback: "Learned so much about React and modern web technologies!"
  },
  {
    id: 104,
    title: "Digital Marketing Summit",
    description: "Latest trends in digital marketing and social media",
    date: "2025-06-05",
    location: "Delhi Marketing Center",
    rating: 3,
    certificate: false,
    image: "📱",
    category: "Marketing",
    attendees: 280,
    feedback: "Good content but audio issues during presentations."
  }
];

export const mockCalendarEvents = [
  ...mockUpcomingEvents.map(event => ({
    ...event,
    type: 'registered'
  })),
  {
    id: 201,
    title: "Team Meeting",
    date: "2025-10-25",
    time: "03:00 PM",
    type: "personal",
    color: "purple"
  },
  {
    id: 202,
    title: "Project Deadline",
    date: "2025-10-28",
    time: "11:59 PM",
    type: "deadline",
    color: "red"
  }
];

export default {
  mockUpcomingEvents,
  mockRecommendedEvents,
  mockPastEvents,
  mockCalendarEvents
};