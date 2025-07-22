import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto  py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 ">
          WanderMap
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 text-lg">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/planner" className="hover:text-blue-600">Planner</Link>
          <Link to="/map" className="hover:text-blue-600">Map</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`
          md:hidden bg-white px-4 pb-4 space-y-3 shadow-md 
          transform transition-all duration-300 ease-in-out origin-top
          ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
        `}
      >
        <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/planner" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Planner</Link>
        <Link to="/map" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Map</Link>
        <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</Link>
      </div>
    </header>
  );
};

export default Navbar;
