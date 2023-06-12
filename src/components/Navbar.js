import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

function linkClasses(path) {
  const isActive = location.pathname === path;
  return `rounded-full px-4 py-2 gap-1 inline-flex list-none ${
    isActive ? 'bg-teal-600 text-white' : 'bg-gray-200'
  } hover:bg-teal-600 hover:text-white`;
}

  return (
    <div className="nav flex">
      <ul className="nav flex justify-between w-[550px] mx-auto">
        <li>
          <Link to="/" className={linkClasses('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className={linkClasses('/services')}>
            Our Services
          </Link>
        </li>
        <li>
          <Link to="/about" className={linkClasses('/about')}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className={linkClasses('/contact')}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
