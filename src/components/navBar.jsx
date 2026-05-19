

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isProgramsActive = () => ['/junior-geeks', '/other-programs'].includes(location.pathname);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm px-6 md:px-16 py-4 flex justify-between items-center relative">

      <Link to="/">
      <img src={logo} alt="IntelliGeeks Logo" className="h-20 w-auto" />
      </Link>

      <ul className="hidden md:flex gap-8 text-base font-semibold text-[#424352] items-center">
      <li>
        <Link
          to="/"
          className={`pb-1 ${isActive('/') ? 'border-b-2 border-[#0d1b6e] text-[#0d1b6e]' : 'hover:text-[#0d1b6e]'}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`pb-1 ${isActive('/about') ? 'border-b-2 border-[#0d1b6e] text-[#0d1b6e]' : 'hover:text-[#0d1b6e]'}`}
        >
          About us
        </Link>
      </li>
      {/* Programs dropdown */}
      <li className="relative" ref={dropdownRef}>
        <button
          onClick={() => setProgramsOpen((o) => !o)}
          className={`flex items-center gap-1 pb-1 ${isProgramsActive() ? 'border-b-2 border-[#0d1b6e] text-[#0d1b6e]' : 'hover:text-[#0d1b6e]'}`}
        >
          Programs <FaChevronDown className={`text-xs transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
        </button>
        {programsOpen && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 py-2">
            <Link
              to="/junior-geeks"
              onClick={() => setProgramsOpen(false)}
              className="flex flex-col px-4 py-3 hover:bg-[#f5f7ff] transition-colors"
            >
              <span className="font-semibold text-[#0d1b6e] text-sm">Junior Geeks Club</span>
              <span className="text-xs text-gray-500 mt-0.5">Ages 9–12 · Coming soon</span>
            </Link>
            <div className="border-t border-gray-100 mx-3" />
            <Link
              to="/other-programs"
              onClick={() => setProgramsOpen(false)}
              className="flex flex-col px-4 py-3 hover:bg-[#f5f7ff] transition-colors"
            >
              <span className="font-semibold text-[#0d1b6e] text-sm">Other Programmes</span>
              <span className="text-xs text-gray-500 mt-0.5">Terminal class & private tutoring</span>
            </Link>
          </div>
        )}
      </li>
      <li>
        <Link
          to="/careers"
          className={`pb-1 ${isActive('/careers') ? 'border-b-2 border-[#0d1b6e] text-[#0d1b6e]' : 'hover:text-[#0d1b6e]'}`}
        >
          Careers
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={`pb-1 ${isActive('/contact') ? 'border-b-2 border-[#0d1b6e] text-[#0d1b6e]' : 'hover:text-[#0d1b6e]'}`}
        >
          Contact Us
        </Link>
      </li>
      </ul>

      <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-2xl text-[#0d1b6e] focus:outline-none"
      >
      {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
      <ul className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-6 flex flex-col gap-4 text-base font-semibold text-[#424352] md:hidden z-50">
        <li>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive('/') ? 'text-[#0d1b6e] border-l-4 border-[#0d1b6e] pl-2' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive('/about') ? 'text-[#0d1b6e] border-l-4 border-[#0d1b6e] pl-2' : ''}`}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/junior-geeks"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive('/junior-geeks') ? 'text-[#0d1b6e] border-l-4 border-[#0d1b6e] pl-2' : ''}`}
          >
            Junior Geeks Club
          </Link>
        </li>
        <li>
          <Link
            to="/other-programs"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive('/other-programs') ? 'text-[#0d1b6e] border-l-4 border-[#0d1b6e] pl-2' : ''}`}
          >
            Other Programmes
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive('/careers') ? 'text-[#0d1b6e] border-l-4 border-[#0d1b6e] pl-2' : ''}`}
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`block ${isActive('/contact') ? 'text-[#0d1b6e] border-l-4 border-[#0d1b6e] pl-2' : ''}`}
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
