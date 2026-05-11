import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">EduSchool</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/facilities" className="text-gray-700 hover:text-blue-600">Facilities</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 space-y-2">
          <Link to="/" className="block py-2 text-gray-700">Home</Link>
          <Link to="/about" className="block py-2 text-gray-700">About</Link>
          <Link to="/facilities" className="block py-2 text-gray-700">Facilities</Link>
          <Link to="/contact" className="block py-2 text-gray-700">Contact</Link>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;