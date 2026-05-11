import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Award, BookOpen, X, Linkedin, Twitter } from "lucide-react";
import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";

const TeachersPage = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { 
      id: 1,
      name: "Dr. Priya Sharma", 
      subject: "Mathematics", 
      exp: "15 Years", 
      qualification: "Ph.D. in Mathematics",
      expertise: "Algebra, Calculus, Vedic Maths",
      email: "priya.sharma@school.com",
      phone: "+91 98765 43210",
      bio: "Dr. Priya has transformed the way students perceive math. She believes in making complex concepts simple through real-life examples.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
      social: { fb: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    { 
      id: 2,
      name: "Mr. Rajesh Patel", 
      subject: "Physics & Science", 
      exp: "18 Years", 
      qualification: "M.Sc. Physics, B.Ed",
      expertise: "Robotics, Space Science, Lab Experiments",
      email: "rajesh.patel@school.com",
      phone: "+91 98765 43211",
      bio: "Mr. Rajesh heads the science department. His interactive experiments and projects have won many state-level awards.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
      social: { fb: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    { 
      id: 3,
      name: "Ms. Neha Gupta", 
      subject: "English Literature", 
      exp: "10 Years", 
      qualification: "M.A. English, M.Ed",
      expertise: "Creative Writing, Public Speaking, Drama",
      email: "neha.gupta@school.com",
      phone: "+91 98765 43212",
      bio: "Neha has a passion for language and literature. She has authored two children's storybooks and runs the school's literary club.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800",
      social: { fb: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    { 
      id: 4,
      name: "Mr. Amit Joshi", 
      subject: "Social Studies", 
      exp: "12 Years", 
      qualification: "M.A. History, B.Ed",
      expertise: "Indian History, Geography, Civics",
      email: "amit.joshi@school.com",
      phone: "+91 98765 43213",
      bio: "Mr. Amit makes history come alive with his storytelling and educational trips. He is a recipient of the Best Teacher Award 2022.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      social: { fb: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    { 
      id: 5,
      name: "Mrs. Sunita Rao", 
      subject: "Computer Science", 
      exp: "14 Years", 
      qualification: "M.Tech (CSE), B.Ed",
      expertise: "Python, AI, Web Development",
      email: "sunita.rao@school.com",
      phone: "+91 98765 43214",
      bio: "Sunita has trained students for national-level coding competitions. She believes every child should learn to code.",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
      social: { fb: "#", twitter: "#", linkedin: "#", instagram: "#" }
    },
    { 
      id: 6,
      name: "Dr. Vikram Singh", 
      subject: "Chemistry", 
      exp: "20 Years", 
      qualification: "Ph.D. Chemistry",
      expertise: "Organic Chemistry, Lab Safety",
      email: "vikram.singh@school.com",
      phone: "+91 98765 43215",
      bio: "Dr. Vikram has guided students to win science fairs at the national level. His practical approach is highly appreciated.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
      social: { fb: "#", twitter: "#", linkedin: "#", instagram: "#" }
    }
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
          alt="Teachers"
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
            <span className="text-xs sm:text-sm font-medium">👩‍🏫 Meet Our Mentors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Teachers</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Passionate educators dedicated to shaping young minds and building a brighter future.
          </p>
        </motion.div>
      </section>

      {/* Stats / Quick Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">{teachers.length}+</div>
            <div className="text-xs sm:text-sm text-gray-500">Expert Teachers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">15+</div>
            <div className="text-xs sm:text-sm text-gray-500">Avg. Experience</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">100%</div>
            <div className="text-xs sm:text-sm text-gray-500">Qualified</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">50+</div>
            <div className="text-xs sm:text-sm text-gray-500">Awards Won</div>
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedTeacher(teacher)}
            >
              <div className="relative overflow-hidden h-64 sm:h-72">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-2 justify-end">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-medium text-sm sm:text-base">{teacher.subject}</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-gray-500 text-xs sm:text-sm">
                  <BookOpen className="w-3 h-3" />
                  <span>{teacher.exp} Experience</span>
                </div>
                <div className="mt-3 flex justify-center gap-3">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {teacher.qualification.split(',')[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Teacher Detail Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedTeacher(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56 sm:h-64">
                <img src={selectedTeacher.img} alt={selectedTeacher.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold">{selectedTeacher.name}</h2>
                <p className="text-blue-600 font-medium mt-1">{selectedTeacher.subject}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{selectedTeacher.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{selectedTeacher.exp} Experience</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Expertise</h4>
                  <p className="text-gray-600 text-sm">{selectedTeacher.expertise}</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Bio</h4>
                  <p className="text-gray-600 text-sm">{selectedTeacher.bio}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{selectedTeacher.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{selectedTeacher.phone}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                      <FaFacebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-blue-400 hover:text-white transition">
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-blue-700 hover:text-white transition">
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-pink-500 hover:text-white transition">
                      <FaInstagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-xl sm:text-3xl font-bold mb-3">Become a Part of Our Teaching Family</h2>
          <p className="text-sm sm:text-base text-blue-100 mb-6">Join our team of passionate educators and make a difference.</p>
          <button
            onClick={() => window.location.href = "/contact"}
            className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition shadow-lg"
          >
            Careers at EduSchool
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeachersPage;