import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, Briefcase, Star, MapPin, Clock, ArrowRight, Menu, X, Search } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2025",
      date: "Oct 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      attendees: 1250,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      organizer: "Tech Leaders Inc."
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      date: "Oct 20, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual Event",
      attendees: 890,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      organizer: "Marketing Pro Academy"
    },
    {
      id: 3,
      title: "Startup Founders Networking",
      date: "Oct 25, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "New York, NY",
      attendees: 450,
      category: "Business",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop",
      organizer: "Startup Hub"
    },
    {
      id: 4,
      title: "AI & Machine Learning Conference",
      date: "Nov 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Boston, MA",
      attendees: 2100,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      organizer: "AI Research Foundation"
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Networking",
      description: "Connect with like-minded professionals using AI-powered matchmaking"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Management",
      description: "Create, manage, and discover events with comprehensive tools"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Real-time Chat",
      description: "Engage in instant messaging and group discussions"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project Sharing",
      description: "Showcase your portfolio and collaborate on projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CrowdConnect
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Events</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Network</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                Log In
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Events</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Network</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
              <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg">
                Log In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect. Network. <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Collaborate.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the ultimate event networking platform where professionals connect, share experiences, and build meaningful relationships. Discover events, showcase your projects, and grow your network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition">
              Explore Events
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Events Hosted</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Connections Made</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600">Everything you need for successful event networking</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Events Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join thousands of professionals at these featured events</p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{event.organizer}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-semibold">{event.attendees} Attendees</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-1">
                    Register <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <button className="flex items-center gap-2 px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition mx-auto">
            View All Events <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Expand Your Network?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of professionals connecting at amazing events</p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:shadow-xl transition">
            Create Your Profile Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EventConnect</span>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate platform for event networking and professional connections.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Browse Events</a></li>
                <li><a href="#" className="hover:text-white transition">Create Event</a></li>
                <li><a href="#" className="hover:text-white transition">Network</a></li>
                <li><a href="#" className="hover:text-white transition">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 EventConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}