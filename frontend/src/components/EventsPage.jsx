import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, MapPin, Clock, Users, Music, Trophy, 
  FlaskConical, Palette, ChevronRight, X, Bell, 
  Filter, Search, ExternalLink 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    { 
      id: 1,
      title: "Annual Day Celebration", 
      date: "2026-03-15", 
      time: "6:00 PM - 9:00 PM",
      venue: "School Auditorium",
      category: "cultural",
      desc: "A spectacular evening of cultural performances, music, dance, and drama by our talented students. Chief Guest: Dr. APJ Abdul Kalam Awardee.",
      fullDesc: "The Annual Day is the most awaited event of the year. Students showcase their talents in dance, music, theater, and art. Parents and dignitaries are invited to celebrate the achievements of our students. This year's theme is 'Unity in Diversity'.",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
      icon: <Music className="w-5 h-5" />,
      registrationLink: "/contact"
    },
    {
      id: 2,
      title: "Sports Day",
      date: "2026-04-22",
      time: "8:00 AM - 4:00 PM",
      venue: "School Sports Ground",
      category: "sports",
      desc: "Annual sports meet featuring athletics, team games, and fun races.",
      fullDesc: "Students compete in various track and field events, football, basketball, cricket, and more. The event promotes physical fitness, teamwork, and sportsmanship. Prizes will be awarded to winners.",
      img: "https://plus.unsplash.com/premium_photo-1661605523899-f97ec76e9e98?q=80&w=1169",
      icon: <Trophy className="w-5 h-5" />,
      registrationLink: "/contact"
    },
    { 
      id: 3,
      title: "Cultural Festival", 
      date: "2026-05-10", 
      time: "10:00 AM - 8:00 PM",
      venue: "Open Air Theatre",
      category: "cultural",
      desc: "Showcasing rich Indian heritage through folk dances, art, and cuisine.",
      fullDesc: "A day-long festival celebrating India's diverse culture. Food stalls, art exhibitions, traditional dance performances, and workshops for students and parents.",
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200",
      icon: <Palette className="w-5 h-5" />,
      registrationLink: "/contact"
    },
    { 
      id: 4,
      title: "Science Exhibition", 
      date: "2026-06-05", 
      time: "9:00 AM - 5:00 PM",
      venue: "Science Block",
      category: "academic",
      desc: "Innovative projects by young scientists on environmental sustainability.",
      fullDesc: "Students from grades 6-12 present working models and research projects. Topics include renewable energy, AI, robotics, and climate change solutions. Open to parents and visiting schools.",
      img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1200",
      icon: <FlaskConical className="w-5 h-5" />,
      registrationLink: "/contact"
    },
    {
      id: 5,
      title: "Parent-Teacher Meet",
      date: "2026-07-20",
      time: "9:00 AM - 1:00 PM",
      venue: "Classrooms",
      category: "academic",
      desc: "Interactive session to discuss student progress and development.",
      fullDesc: "Parents can meet teachers individually to discuss academic performance, co-curricular activities, and overall growth. Appointment slots available.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
      icon: <Users className="w-5 h-5" />,
      registrationLink: "/contact"
    },
    {
      id: 6,
      title: "Robotics Workshop",
      date: "2026-08-15",
      time: "10:00 AM - 3:00 PM",
      venue: "STEM Lab",
      category: "workshop",
      desc: "Hand-on workshop on building and programming robots.",
      fullDesc: "Students will learn basics of robotics, sensors, and coding using Arduino. Limited seats – register early.",
      img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800",
      icon: <FlaskConical className="w-5 h-5" />,
      registrationLink: "/contact"
    }
  ];

  const categories = [
    { value: "all", label: "All Events", icon: <Calendar className="w-4 h-4" /> },
    { value: "cultural", label: "Cultural", icon: <Music className="w-4 h-4" /> },
    { value: "sports", label: "Sports", icon: <Trophy className="w-4 h-4" /> },
    { value: "academic", label: "Academic", icon: <FlaskConical className="w-4 h-4" /> },
    { value: "workshop", label: "Workshops", icon: <Users className="w-4 h-4" /> },
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === "all" || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Sort by date (upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070" 
          alt="Events" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-sm font-medium">📅 Stay Updated</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Events & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Activities</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Creating Memories, Celebrating Achievements – Join us in making every moment special.
          </p>
        </motion.div>
      </section>

      {/* ========== FILTER & SEARCH BAR ========== */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md shadow-md py-4 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat.value
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== EVENTS GRID ========== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {sortedEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-xl">No events found. Try a different filter or check back later!</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={event.img} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full shadow flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1">
                      {event.icon}
                      <span className="capitalize">{event.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 line-clamp-1">{event.title}</h3>
                    <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-2">{event.desc}</p>
                    <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========== EVENT DETAILS MODAL ========== */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img src={selectedEvent.img} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedEvent.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>{formatDate(selectedEvent.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{selectedEvent.venue}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedEvent.fullDesc}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      navigate(selectedEvent.registrationLink);
                      setSelectedEvent(null);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition"
                  >
                    Register Now <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== UPCOMING HIGHLIGHTS / NEWSLETTER ========== */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 text-white">
          <Bell className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter and get the latest updates on events, workshops, and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-full text-gray-900 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ========== CALL TO ACTION ========== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Parents, teachers, or students – if you have an idea for an event, we'd love to hear from you.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition inline-flex items-center gap-2"
          >
            Contact Us <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;