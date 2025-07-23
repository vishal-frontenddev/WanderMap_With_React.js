import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const toggleMenu = () => setIsOpen(!isOpen);
  const openLogin = () => {
    setAuthMode('login');
    setModalOpen(true);
  };
  const openSignup = () => {
    setAuthMode('signup');
    setModalOpen(true);
  };

  return (
    <header className="bg-blue-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-5 px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          WanderMap
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 text-lg items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/planner" className="hover:text-blue-600">Planner</Link>
          <Link to="/map" className="hover:text-blue-600">Map</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <button onClick={openLogin} className="text-sm bg-white border border-blue-500 text-blue-600 px-4 py-1 rounded-md hover:bg-blue-100">Login</button>
          <button onClick={openSignup} className="text-sm bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">Sign Up</button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pb-4 space-y-3 shadow-md transform transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" onClick={toggleMenu} className=" block hover:text-blue-600">About</Link>
        <Link to="/planner" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Planner</Link>
        <Link to="/map" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Map</Link>
        <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</Link>
        <button onClick={() => { toggleMenu(); openLogin(); }} className="block text-blue-600">Login</button>
        <button onClick={() => { toggleMenu(); openSignup(); }} className="block text-blue-600">Sign Up</button>
      </div>

      {/* Auth Modal */}
      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </header>
  );
};

export default Navbar;
