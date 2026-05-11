import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-blue-800 pb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 italic">EduSchool</h3>
          <p className="text-blue-200">
            Smart School Management System helps to manage school activities easily and efficiently.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-blue-200">
            <li>Home</li>
            <li>About Us</li>
            <li>Facilities</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-blue-400" />
              <span>123, School Street, Education City, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-blue-400" />
              <span>+91 8128052078</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-blue-400" />
              <span>info@eduschool.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-blue-400 text-sm">
        © 2026 EduSchool. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;