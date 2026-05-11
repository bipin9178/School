import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, School } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-md">
              <School className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                EduSchool
              </span>
              <p className="text-xs text-gray-500 -mt-1">Bright Future School</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
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

          <button
            className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
            onClick={() => navigate('/contact')}
          >
            Enroll Now
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-3xl text-gray-800">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden fixed inset-0 bg-white z-50 pt-24 px-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-2xl font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  navigate('/contact');
                  setMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl text-xl mt-4"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <School className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">EduSchool</span>
            </div>
            <p className="text-gray-400 text-lg">
              Empowering young minds with quality education, modern infrastructure, and holistic development since 2000.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-white text-xl font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3 text-gray-400">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <NavLink to={l.path} className="hover:text-white transition">
                    {l.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-white text-xl font-semibold mb-6">Contact Info</h5>
            <div className="space-y-5 text-gray-400">
              <div className="flex gap-3">
                <MapPin className="mt-1 text-blue-400" />
                <span>123, School Street, Education City, India - 560001</span>
              </div>
              <div className="flex gap-3">
                <Phone className="text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex gap-3">
                <Mail className="text-blue-400" />
                <span>info@eduschool.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-white text-xl font-semibold mb-6">Follow Us</h5>
            <div className="flex gap-6 text-3xl">
              <FaFacebook className="hover:text-blue-400 cursor-pointer transition" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
              <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-20 border-t border-gray-800 pt-8">
          © 2026 EduSchool - Bright Future School. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;