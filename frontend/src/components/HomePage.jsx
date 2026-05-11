import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  MonitorPlay, 
  Users, 
  Target, 
  ShieldCheck, 
  GraduationCap,
  CalendarHeart,
  School2,
  ChevronRight,
  Quote,
  Star,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Award,
  BookOpen,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const statsRef = useRef(null);
  const [counters, setCounters] = useState({
    students: 0,
    teachers: 0,
    years: 0,
    activities: 0
  });

  // Hero Images - High quality school/education images
  const heroImages = [
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2069", // Modern school building
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032", // Happy students
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070", // Interactive classroom
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070", // Students studying
  ];

  // Auto Slide Hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const step = 20;
          const targets = { students: 2500, teachers: 120, years: 25, activities: 45 };
          const increments = {
            students: targets.students / (duration / step),
            teachers: targets.teachers / (duration / step),
            years: targets.years / (duration / step),
            activities: targets.activities / (duration / step),
          };
          let current = { students: 0, teachers: 0, years: 0, activities: 0 };
          const timer = setInterval(() => {
            let allFinished = true;
            for (const key of Object.keys(targets)) {
              if (current[key] < targets[key]) {
                allFinished = false;
                current[key] = Math.min(current[key] + increments[key], targets[key]);
              }
            }
            setCounters({ ...current });
            if (allFinished) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <MonitorPlay className="w-8 h-8" />, title: "Smart Classes", desc: "Interactive digital classrooms with modern technology", color: "from-blue-500 to-cyan-500" },
    { icon: <Users className="w-8 h-8" />, title: "Expert Teachers", desc: "Highly qualified and passionate educators", color: "from-purple-500 to-pink-500" },
    { icon: <Target className="w-8 h-8" />, title: "Holistic Growth", desc: "Sports, arts, and personality development", color: "from-green-500 to-emerald-500" },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Safe Campus", desc: "24/7 security with CCTV surveillance", color: "from-orange-500 to-red-500" },
  ];

  const events = [
    { img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800", title: "Annual Day Celebration", date: "March 15, 2025" },
    { img: "https://images.unsplash.com/photo-1535964811847-69a1b1c98d18?q=80&w=2070", title: "Sports Fest 2025", date: "April 5-7, 2025" },
    { img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800", title: "Cultural Carnival", date: "May 10, 2025" },
    { img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800", title: "Science Exhibition", date: "June 20, 2025" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
    "https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=800",
    "https://images.unsplash.com/photo-1588075592449-150f6d9f4a0a?q=80&w=800",
  ];

  const testimonials = [
    { name: "Rahul Sharma", role: "Parent", content: "Bright Future School has transformed my child's learning experience. The teachers are incredibly supportive and the facilities are world-class.", rating: 5, img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Mehta", role: "Alumni", content: "I owe my success to the strong foundation built here. The holistic education approach truly prepares students for life beyond academics.", rating: 5, img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Dr. Karthik", role: "Education Expert", content: "One of the finest schools in the region with innovative teaching methods and excellent student outcomes. Highly recommended!", rating: 5, img: "https://randomuser.me/api/portraits/men/45.jpg" },
  ];

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* ====================== ENHANCED HERO SECTION ====================== */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImage]}
              alt="School Scene"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multiple Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        {/* Animated Particles / Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
              animate={{ y: [null, -100], opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-20 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
          >
            <span className="text-sm font-medium">✨ Excellence in Education Since 2000</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            Welcome to <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bright Future
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto"
          >
            Empowering young minds with 21st-century skills, character development, and academic excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/admissions")}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="group border-2 border-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Contact Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentImage === index ? "bg-white w-12" : "bg-white/40 w-3 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-30"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </header>

      {/* ====================== STATS SECTION ====================== */}
      <div ref={statsRef} className="relative -mt-16 z-30 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <GraduationCap className="w-8 h-8" />, value: Math.floor(counters.students), label: "Happy Students", suffix: "+" },
            { icon: <Users className="w-8 h-8" />, value: Math.floor(counters.teachers), label: "Expert Teachers", suffix: "+" },
            { icon: <Award className="w-8 h-8" />, value: Math.floor(counters.years), label: "Years of Excellence", suffix: "" },
            { icon: <Sparkles className="w-8 h-8" />, value: Math.floor(counters.activities), label: "Activities", suffix: "+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center backdrop-blur-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}{stat.suffix}</div>
              <div className="text-gray-500 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ====================== ABOUT SECTION ====================== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070"
                alt="About School"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl hidden md:block">
              <School2 className="w-12 h-12 text-blue-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Shaping Tomorrow's <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leaders Today</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Bright Future School is more than just an educational institution; it's a nurturing ground for young minds. 
              With state-of-the-art infrastructure, innovative teaching methods, and a focus on holistic development, 
              we prepare students for the challenges of tomorrow.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-700">10,000+ alumni excelling worldwide</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-700">Student-teacher ratio of 15:1 for personalized attention</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-700">100% board exam success rate for 5 consecutive years</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/about")}
              className="group bg-gray-900 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition"
            >
              Learn More <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ====================== FEATURES SECTION ====================== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Exceptional Features That <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Make Us Different</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                  <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== EVENTS SECTION ====================== */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 backdrop-blur-sm">
              Upcoming Events
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Mark Your Calendar & <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Join the Celebration</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => navigate("/events")}
              >
                <img src={event.img} alt={event.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                    <CalendarHeart className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h4 className="text-xl font-bold">{event.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/events")}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-2"
            >
              View All Events <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS SECTION ====================== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Community Says <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Us</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative">
                  <img
                    src={testimonials[activeTestimonial].img}
                    alt={testimonials[activeTestimonial].name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                  <h4 className="text-xl font-bold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? "bg-blue-600 w-8" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== GALLERY SECTION ====================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Our Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Capturing Moments of <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Joy & Learning</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => window.open(img, "_blank")}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/gallery")}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg inline-flex items-center gap-2"
            >
              View Full Gallery <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Give Your Child <br />
              the Best Education?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join the Bright Future family today and watch your child flourish into a confident, compassionate, and successful individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/admissions")}
                className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-gray-100 transition"
              >
                Apply for Admission
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition"
              >
                Schedule a Visit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== FOOTER ====================== */}
      {/* <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <School2 className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">Bright Future</span>
              </div>
              <p className="mb-6">
                Empowering young minds with quality education, character development, and global exposure since 2000.
              </p>
              <div className="flex gap-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-gray-400 rounded-full" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Admissions", "Academics", "Events", "Gallery"].map((link) => (
                  <li key={link}>
                    <button onClick={() => navigate(`/${link.toLowerCase().replace(" ", "")}`)} className="hover:text-white transition flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {["Student Portal", "Parent Login", "Faculty Login", "Career", "Contact"].map((link) => (
                  <li key={link}>
                    <button onClick={() => navigate(`/${link.toLowerCase().replace(" ", "")}`)} className="hover:text-white transition flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span>123 Education Avenue, Knowledge City, 560001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@brightfuture.edu</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Bright Future School. All rights reserved. | Designed with ❤️ for excellence in education</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomePage;