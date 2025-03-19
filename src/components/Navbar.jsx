import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, timeoutId]);

  return (
    <nav className={`w-full bg-black text-white p-4 shadow-lg fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${!isVisible ? "-top-16" : "top-0"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-bold cursor-pointer py-4"></h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 py-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">Skills / Experience</Link>
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
