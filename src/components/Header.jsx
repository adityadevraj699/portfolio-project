// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faBriefcase, faEnvelope, faBlog, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../utils/ThemeContext.jsx';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [brandName] = useState("Shivajee");
  const [menuLinks] = useState([
    { title: 'Home', link: '/home', icon: faHome, id: 1 },
    { title: 'About', link: '/about', icon: faUser, id: 2 },
    { title: 'Portfolio', link: '/portfolio', icon: faBriefcase, id: 3 },
    { title: 'Contact', link: '/contact', icon: faEnvelope, id: 4 },
    { title: 'My Blogs', link: '/blogs', icon: faBlog, id: 5 },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-4 sm:px-16 font-bold text-lg ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
      {/* Brand Name */}
      <div className="font-bold  text-2xl sm:text-5xl">
        <Link to={menuLinks[0].link}>{brandName.toUpperCase()}</Link>
      </div>

      {/* Theme Toggle and Dropdown */}
      <div className="flex items-center">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 transform transition-transform duration-200 hover:scale-110"
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className={`w-6 h-10 ${darkMode ? 'text-white' : 'text-black'}`}
          />
        </button>

        {/* Hamburger Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={`ml-4 py-2 px-5 rounded-full transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : 'rotate-0'} hover:scale-110`}
          >
            <FontAwesomeIcon
              icon={isDropdownOpen ? faTimes : faBars}
              className={`w-7 h-7 ${darkMode ? 'text-white' : 'text-black'}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-0 p-2 rounded-full transform ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300 opacity-100 translate-y-0 rounded `}
              style={{ opacity: isDropdownOpen ? 1 : 0, transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-10px)' }}
            >
              {menuLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.link}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg mb-3 transform transition-transform duration-300 hover:scale-110  hover:text-sky-500"
                  onClick={handleLinkClick}
                >
                  {link.icon && (
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="w-5 sm:w-6 h-5 sm:h-6"
                    />
                  )}
                 
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
