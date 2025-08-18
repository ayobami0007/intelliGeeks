import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';






const Footer = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm('service_5whxf7c', 'template_nrlb8e9', form.current, 'EzRvhVIDlYg7kkfK7')

      .then(() => {
        alert('You have successfully joined!');
        form.current.reset(); 
      })
      .catch((error) => {
        console.error('Email error:', error);
        alert('There was a problem. Please try again.');
      });
  };

  return (
    <footer className="text-white">
      {/* Newsletter Section */}
      <div className="bg-black px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <h2 className="text-3xl md:text-5xl font-bold md:w-1/2 text-center md:text-left">
          Join us and stay updated!
        </h2>
        <form
          ref={form}
          className="w-full md:w-[400px] bg-gray-300 flex items-center px-2 py-2 rounded-xl justify-between mx-auto"
          onSubmit={sendEmail}
        >
          <div className="flex items-center flex-grow">
            <FaEnvelope className="text-gray-600 ml-3 mr-2 text-xl" />
            <input
              name="email"
              type="email"
              placeholder="name@email.com"
              className="bg-transparent outline-none text-base md:text-lg text-gray-700 w-full placeholder:text-gray-500"
              required
              autoComplete="email"
              aria-label="Email address"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-base md:text-lg font-medium text-white px-4 py-2 rounded-sm transition-all duration-200"
            aria-label="Join newsletter"
          >
            Join now
          </button>
        </form>
      </div>

      {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row text-white px-6 md:px-16 py-16 bg-blue-700 w-full gap-10 md:gap-20 justify-between">
          <div className="md:w-1/2">
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Empower Your Tech Journey with IntelliGeeks! <br />
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
            {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-lg md:text-xl text-white/80">
              <li>
                <Link to="/about" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" state={{ scrollTo: 'our-class' }} className="hover:underline">
                  Our Class
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-lg md:text-xl text-white/80">
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Social Media</h4>
            <div className="flex gap-4 text-2xl md:text-3xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gray-300">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
