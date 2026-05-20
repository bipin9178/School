import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, MapPin, Phone, Mail, School, 
  Home, Info, Building, Users, Calendar, 
  Image, Contact, GraduationCap,
  ChevronRight
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Facilities', path: '/facilities', icon: Building },
    { name: 'Teachers', path: '/teachers', icon: Users },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Contact', path: '/contact', icon: Contact },
  ];

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0" 
            onClick={() => navigate('/')}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                EduSchool
              </span>
              <p className="text-[10px] sm:text-xs text-gray-500 -mt-0.5 sm:-mt-1 hidden xs:block">Bright Future School</p>
            </div>
          </div>

          {/* Desktop Menu - Text Only, No Icons */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                    : 'hover:text-blue-600 transition-colors duration-300'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Enroll Button */}
          <button
            className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-full font-semibold transition-all duration-300 shadow-md text-sm xl:text-base"
            onClick={() => navigate('/contact')}
          >
            Enroll Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden text-gray-800 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Drawer - Icons Only Here */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Sidebar Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 h-full min-w-full   bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                    EduSchool
                  </span>
                </div>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-800 p-1"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links with Icons - Mobile Only */}
              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-4 mx-2 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      <div className="flex items-center gap-4">
                        <IconComponent size={22} />
                        <span className="text-base font-medium">{link.name}</span>
                      </div>
                      <ChevronRight size={18} className="text-gray-400" />
                    </NavLink>
                  );
                })}
              </div>

              {/* Enroll Button in Sidebar */}
              <div className="p-5 border-t border-gray-100 mt-auto">
                <button
                  onClick={() => {
                    navigate('/contact');
                    setMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <School size={20} />
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* About Section */}
            <div className="sm:col-span-2 lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-white">EduSchool</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Empowering young minds with quality education, modern infrastructure, and holistic development since 2000.
              </p>
            </div>

            {/* Quick Links - Text Only */}
            <div className="sm:col-span-1 lg:col-span-3">
              <h5 className="text-white text-lg sm:text-xl font-semibold mb-5">Quick Links</h5>
              <ul className="space-y-2.5 text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink 
                      to={link.path} 
                      className="hover:text-white transition text-sm sm:text-base"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-1 lg:col-span-3">
              <h5 className="text-white text-lg sm:text-xl font-semibold mb-5">Contact Info</h5>
              <div className="space-y-4 text-gray-400">
                <div className="flex gap-3 text-sm sm:text-base">
                  <MapPin size={18} className="mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>123, School Street, Education City, India - 560001</span>
                </div>
                <div className="flex gap-3 items-center text-sm sm:text-base">
                  <Phone size={18} className="text-blue-400 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex gap-3 items-center text-sm sm:text-base">
                  <Mail size={18} className="text-blue-400 flex-shrink-0" />
                  <span>info@eduschool.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h5 className="text-white text-lg sm:text-xl font-semibold mb-5">Follow Us</h5>
              <div className="flex gap-5">
                <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-pink-400 transition" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-red-500 transition" aria-label="YouTube">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="hover:text-blue-400 transition" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-xs sm:text-sm mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
            © 2026 EduSchool - Bright Future School. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }
        @media (max-width: 479px) {
          .xs\\:hidden {
            display: none;
          }
        }
        /* Mobile first - smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        /* Fix for iOS tap highlight */
        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
};

export default Layout;