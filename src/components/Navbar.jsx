import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white p-4 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-bold cursor-pointer py-4">Pritam Patra</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 py-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link to="/blog">
              <div className="flex items-center space-x-2 hover:text-gray-400">
                {/* Image Placeholder or Actual Image */}
                <img
                  src="/sihlogo.png"
                  alt="Blog Icon"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                {/* Text Content */}
                <span>
                  <span className="text-orange-500">Smart </span>
                  <span className="text-white">India </span>
                  <span className="text-green-500">Hackathon</span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
