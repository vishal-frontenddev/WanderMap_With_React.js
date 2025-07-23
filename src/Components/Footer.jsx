import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-gray-200 text-gray-700 px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">

        {/* Newsletter Signup */}
        <div id='newsletter' className='mr-40' >
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Stay Updated</h2>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to get travel stories, blogs, and exclusive tips right in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Quick Links</h2>
          <ul className="space-y-2 text-base">
            <li><Link to="/" className="hover:text-blue-600"> Home</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600"> Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600"> Contact</Link></li>
            <li><Link to="/privacy-policy" className='hover:text-blue-500'>Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-500">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Follow Us</h2>
            <div className="flex gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-600"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
            </div>
          </div>
          <p  className="font[18px] text-gray-500 mt-8 md:mt-0 text-center">
            © {new Date().getFullYear()} WanderMap. All rights reserved by Vishal Pandit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
