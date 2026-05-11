import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wifi, BookOpen, Coffee, Bus, Shield, Droplets, Dumbbell, Library,
  Flame, Microscope, Music, Paintbrush, Trophy, Video, Home, Award,
  X, ChevronRight, Sparkles
} from "lucide-react";

const FacilitiesPage = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  const facilities = [
    { 
      id: 1,
      icon: <Wifi className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Smart Classrooms", 
      desc: "Interactive digital boards, projectors, and e-learning modules for an engaging education.",
      category: "academic",
      featured: true,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
      details: "Each classroom is equipped with a 75-inch smart board, high-speed Wi-Fi, and individual tablets for students. Our teachers use multimedia content to make lessons fun and interactive."
    },
    { 
      id: 2,
      icon: <Library className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Central Library", 
      desc: "10,000+ books, digital resources, and a peaceful reading zone.",
      category: "academic",
      featured: true,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
      details: "Our library houses over 15,000 books, including reference materials, fiction, and periodicals. Students have access to e-books, research journals, and a quiet study area."
    },
    { 
      id: 3,
      icon: <Microscope className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "STEM & Robotics Lab", 
      desc: "Hands-on learning with 3D printers, AI kits, and advanced equipment.",
      category: "academic",
      featured: true,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
      details: "Our state‑of‑the‑art STEM lab allows students to build robots, experiment with circuits, and learn coding through practical projects."
    },
    { 
      id: 4,
      icon: <Dumbbell className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Sports Complex", 
      desc: "Indoor & outdoor games – cricket, basketball, badminton, and more.",
      category: "sports",
      featured: true,
      image: "https://images.unsplash.com/photo-1535964811847-69a1b1c98d18?q=80&w=800",
      details: "Our sports facilities include a cricket ground, basketball court, badminton courts, table tennis, and a fully equipped gym. Professional coaches train students year-round."
    },
    { 
      id: 5,
      icon: <Droplets className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Swimming Pool", 
      desc: "Olympic-size pool with certified lifeguards and trainers.",
      category: "sports",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c256?q=80&w=800",
      details: "Our heated swimming pool is maintained daily. We offer swimming lessons for beginners and advanced training for competitive swimmers."
    },
    { 
      id: 6,
      icon: <Trophy className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Athletics Track", 
      desc: "400m synthetic track for running and field events.",
      category: "sports",
      image: "https://images.unsplash.com/photo-1533419116793-52c35f7f7c34?q=80&w=800",
      details: "The athletic track is certified by national sports authorities. Regular inter‑school competitions are held here."
    },
    { 
      id: 7,
      icon: <Music className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Performing Arts", 
      desc: "Music, dance, and drama studios with expert instructors.",
      category: "arts",
      featured: true,
      image: "https://images.unsplash.com/photo-1516450360605-7132cf3131a6?q=80&w=800",
      details: "We have sound-proof music rooms, a dance studio with sprung floors, and a theatre for annual productions. Students can learn various instruments and art forms."
    },
    { 
      id: 8,
      icon: <Paintbrush className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Art Studio", 
      desc: "Drawing, painting, pottery, and craft workshops.",
      category: "arts",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
      details: "Our art studio is equipped with easels, pottery wheels, and a kiln. Students explore various mediums like watercolor, acrylic, and clay modeling."
    },
    { 
      id: 9,
      icon: <Coffee className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Cafeteria", 
      desc: "Healthy, hygienic meals with a variety of cuisines.",
      category: "amenities",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
      details: "Our cafeteria serves nutritious breakfast, lunch, and snacks. The menu is planned by a nutritionist and changes weekly."
    },
    { 
      id: 10,
      icon: <Bus className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Transportation", 
      desc: "GPS-enabled buses with female attendants and CCTV.",
      category: "amenities",
      featured: true,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800",
      details: "Our fleet of 20 buses covers all major routes. Each bus has a first-aid kit, fire extinguisher, and real-time tracking via parent app."
    },
    { 
      id: 11,
      icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Security System", 
      desc: "24/7 CCTV surveillance, biometric access, and security guards.",
      category: "amenities",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800",
      details: "The campus is secured with 200+ HD cameras, visitor management system, and trained security personnel. Parents receive entry/exit notifications."
    },
    { 
      id: 12,
      icon: <Home className="w-7 h-7 sm:w-8 sm:h-8" />, 
      title: "Hostel Facility", 
      desc: "Separate boarding for boys and girls with round-the-clock care.",
      category: "amenities",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800",
      details: "Our hostel accommodates 300 students with modern amenities: AC rooms, study halls, recreation rooms, and nutritious meals. Wardens ensure safety and discipline."
    }
  ];

  const categories = [
    { value: "all", label: "All Facilities" },
    { value: "academic", label: "Academic" },
    { value: "sports", label: "Sports" },
    { value: "arts", label: "Arts" },
    { value: "amenities", label: "Amenities" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFacilities = activeCategory === "all" 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[60vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070"
          alt="Facilities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-xs sm:text-sm font-medium">✨ World‑Class Infrastructure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Facilities</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            State‑of‑the‑art infrastructure designed to nurture talent and foster holistic development.
          </p>
        </motion.div>
      </section>

      {/* Category Filter - Responsive */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md shadow-md py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {filteredFacilities.length === 0 ? (
          <div className="text-center py-16">
            <Sparkles className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No facilities found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredFacilities.map((facility, i) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedFacility(facility)}
              >
                {/* Optional image for featured facilities */}
                {facility.featured && (
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Award className="w-3 h-3" /> Featured
                    </div>
                  </div>
                )}
                <div className="p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{facility.desc}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View details</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Facility Detail Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedFacility.image && (
                <div className="relative h-48 sm:h-64">
                  <img src={selectedFacility.image} alt={selectedFacility.title} className="w-full h-full object-cover rounded-t-2xl" />
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {selectedFacility.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">{selectedFacility.title}</h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {selectedFacility.details || selectedFacility.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <Video className="w-12 h-12 mx-auto mb-4 text-blue-300" />
          <h2 className="text-xl sm:text-3xl font-bold mb-3">Experience Our Campus Virtually</h2>
          <p className="text-sm sm:text-base text-blue-100 mb-6">Can't visit in person? Take a 360° virtual tour of our facilities.</p>
          <button
            onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
            className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-2"
          >
            <Video className="w-4 h-4" /> Virtual Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;