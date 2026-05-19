import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5whxf7c",
        "template_nrlb8e9",
        form.current,
        "EzRvhVIDlYg7kkfK7"
      )

      .then(() => {
        alert("You have successfully joined!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("There was a problem. Please try again.");
      });
  };

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
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
            className="bg-[#0d1b6e] hover:bg-[#0d1b6e] text-base md:text-md font-medium text-white px-4 py-2 rounded-md transition-all duration-200"
            aria-label="Join newsletter"
          >
            Join
          </button>
        </form>
      </div>

      {/* Main Footer Section */}
      <div className="flex flex-col md:flex-row text-white px-6 md:px-16 py-16 bg-[#0d1b6e] w-full gap-10 md:gap-20 justify-between">
        <div className="md:w-1/2 flex flex-col items-center text-center">
          <button onClick={() => handleLinkClick('/')} className="cursor-pointer">
            <img src={logo} alt="IntelliGeeks Logo" className="h-20 w-auto mb-6" />
          </button>

          <p className="text-xl md:text-1xl text-white/80 leading-relaxed">
            Training the Next Generation of AI & Software Engineers (Ages 12-18) <br />
            Elite cohorts • Expert instructors (2:1+) • 3-month intensive program
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-lg md:text-xl text-white/80">
              <li>
                <button onClick={() => handleLinkClick('/about')} className="hover:underline cursor-pointer text-left">
                  About us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/contact')} className="hover:underline cursor-pointer text-left">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/other-programs')} className="hover:underline cursor-pointer text-left">
                  Other Programmes
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/junior-geeks')} className="hover:underline cursor-pointer text-left">
                  Junior Geeks Club
                </button>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-lg md:text-xl text-white/80">
              <li>
                <button onClick={() => handleLinkClick('/blog')} className="hover:underline cursor-pointer text-left">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/privacy')} className="hover:underline cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/terms')} className="hover:underline cursor-pointer text-left">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Social Media</h4>
            <div className="flex gap-4 text-2xl md:text-3xl">
              <a
                href="https://web.facebook.com/profile.php?id=61576986857849"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/intelligeeks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
