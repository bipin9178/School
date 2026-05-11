import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  Globe, Heart, Lightbulb, Shield, Users, Trophy, 
  Calendar, School, Award, Quote, ChevronRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({ students: 0, teachers: 0, awards: 0, years: 0 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Counter animation
  useEffect(() => {
    if (isStatsInView) {
      const targets = { students: 3500, teachers: 180, awards: 45, years: 15 };
      const duration = 2000;
      const step = 20;
      const increments = {
        students: targets.students / (duration / step),
        teachers: targets.teachers / (duration / step),
        awards: targets.awards / (duration / step),
        years: targets.years / (duration / step),
      };
      let current = { students: 0, teachers: 0, awards: 0, years: 0 };
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
      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  const coreValues = [
    { icon: <Globe className="w-8 h-8" />, title: "Global Outlook", desc: "Preparing students for a connected world" },
    { icon: <Heart className="w-8 h-8" />, title: "Compassion", desc: "Fostering empathy and kindness" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation", desc: "Encouraging creative thinking" },
    { icon: <Shield className="w-8 h-8" />, title: "Integrity", desc: "Building strong moral character" },
    { icon: <Users className="w-8 h-8" />, title: "Collaboration", desc: "Teamwork and mutual respect" },
    { icon: <Trophy className="w-8 h-8" />, title: "Excellence", desc: "Striving for the best in everything" },
  ];

  const timelineEvents = [
    { year: "2010", title: "Foundation", desc: "Bright Future School opened its doors to 150 students." },
    { year: "2015", title: "New Campus", desc: "State-of-the-art campus with smart classrooms and labs." },
    { year: "2018", title: "Top School Award", desc: "Recognized as Best School in the region." },
    { year: "2023", title: "100% Results", desc: "Perfect board exam results for 3 consecutive years." },
  ];

  const leadership = [
    { name: "Dr. Anita Sharma", role: "Founder & Chairperson", img: "https://randomuser.me/api/portraits/women/79.jpg", quote: "Education is the most powerful tool to transform society." },
    { name: "Mr. Rajesh Mehta", role: "Principal", img: "https://randomuser.me/api/portraits/men/32.jpg", quote: "Every child has unique potential – we nurture it." },
    { name: "Mrs. Neha Kapoor", role: "Head of Academics", img: "https://randomuser.me/api/portraits/women/68.jpg", quote: "Innovative teaching methods make learning joyful." },
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070"
          alt="School Campus"
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
            <span className="text-sm font-medium">✨ Excellence Since 2010</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Bright Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Nurturing young minds with values, knowledge, and 21st-century skills.
          </p>
        </motion.div>
      </section>

      {/* ========== STATS COUNTER SECTION ========== */}
      <div ref={statsRef} className="relative -mt-16 z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Users className="w-7 h-7" />, value: Math.floor(counters.students), label: "Happy Students", suffix: "+" },
            { icon: <School className="w-7 h-7" />, value: Math.floor(counters.teachers), label: "Expert Teachers", suffix: "+" },
            { icon: <Award className="w-7 h-7" />, value: Math.floor(counters.awards), label: "Awards Won", suffix: "+" },
            { icon: <Calendar className="w-7 h-7" />, value: Math.floor(counters.years), label: "Years of Excellence", suffix: "" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}{stat.suffix}</div>
              <div className="text-gray-500 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========== MISSION & VISION ========== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Shaping Tomorrow's Leaders</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Bright Future School, our mission is to provide a nurturing environment that fosters academic excellence,
              character development, and global readiness. We believe in empowering every child to discover their unique potential
              and become compassionate, confident, and responsible citizens.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl border-l-4 border-blue-600">
              <Quote className="w-10 h-10 text-blue-600 mb-4" />
              <p className="italic text-xl text-gray-700">"Education is not the filling of a pail, but the lighting of a fire."</p>
              <p className="mt-3 font-semibold text-gray-600">— William Butler Yeats</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
              alt="Students learning"
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl hidden md:block">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== OUR JOURNEY (TIMELINE) ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Milestones of <span className="text-blue-600">Excellence</span></h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A legacy of growth, innovation, and achievement.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full hidden md:block" />
            <div className="space-y-12">
              {timelineEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <span className="text-blue-600 font-bold text-2xl">{event.year}</span>
                      <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                      <p className="text-gray-600 mt-2">{event.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">What We Stand For</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Principles that guide our every action.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP TEAM ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Meet Our <span className="text-blue-600">Visionaries</span></h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Dedicated leaders shaping the future of education.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600 italic">"{leader.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ACHIEVEMENTS / RECOGNITIONS ========== */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Proud Achievements</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Recognized as one of the top schools in the region for academic excellence and innovative teaching.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Best School Award 2022",
                "100% Board Results",
                "Green Campus Certified",
                "Innovation in Education",
              ].map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                >
                  <span className="text-lg font-semibold">{ach}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CALL TO ACTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Part of Our <span className="text-blue-600">Family</span></h2>
            <p className="text-gray-600 text-xl mb-10">
              Give your child the gift of quality education in a nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl inline-flex items-center gap-2"
              >
                Enroll Now <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/events")}
                className="border-2 border-gray-300 hover:border-blue-600 px-10 py-4 rounded-full font-semibold text-lg transition"
              >
                Upcoming Events
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;