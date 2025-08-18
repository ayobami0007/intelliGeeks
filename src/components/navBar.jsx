

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 md:px-16 py-4 flex justify-between items-center relative">

      <Link to="/">
      <img src={logo} alt="IntelliGeeks Logo" className="h-20 w-auto" />
      </Link>

      <ul className="hidden md:flex gap-8 text-lg font-semibold text-[#424352] items-center">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li>
        <Link
        to="/"
        state={{ scrollTo: 'our-class' }}
        onClick={() => setMenuOpen(false)}
        >
        Courses
        </Link>
      </li>
      <li>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition text-lg font-semibold">
        <Link to="/contact">
          Contact Us
        </Link>
        </button>
      </li>
      </ul>

      <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-2xl text-[#2545F5] focus:outline-none"
      >
      {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
      <ul className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-6 flex flex-col gap-4 text-lg font-semibold text-[#424352] md:hidden z-50">
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link></li>
        <li>
        <Link
          to="/"
          state={{ scrollTo: 'our-class' }}
          onClick={() => setMenuOpen(false)}
        >
          Courses
        </Link>
        </li>
        <li>
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="block text-center bg-[#2545F5] text-white px-4 py-2 rounded-md hover:bg-blue-900 transition w-full text-lg font-semibold"
        >
          Contact Us
        </Link>
        </li>
      </ul>
      )}
    </nav>
    );
};

export default Navbar;
