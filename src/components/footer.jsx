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

      <div className="bg-black px-6 md:px-16 py-12 flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-4xl font-bold md:w-1/2 text-center md:text-left">
          Join the world’s largest online learning platform
        </h2>

        <form
          className="w-full md:w-[400px] bg-gray-300 flex items-center px-2 py-2 rounded-xl justify-between  mx-auto"
           onSubmit={sendEmail}
        >
          <div className="flex items-center flex-grow">
            <FaEnvelope className="text-gray-600 ml-3 mr-2" />
            <input
            name ="email"
              type="email"
              placeholder="name@email.com"
              className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder:text-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-sm text-nowrap font-medium text-white px-4 py-2  rounded-sm transition-all duration-200"
          >
            Join now 
          </button>
        </form>
      </div>





      <div className="flex flex-col md:flex-row text-white px-6 md:px-16 py-16 bg-blue-700  w-full gap-10 md:gap-50 justify-between">

        <div className="md:w-1/2">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Unlock Digital Mastery Effortlessly! <br />
            Explore and enhance your skills with our user-friendly platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to = "/about" className="hover:underline">About us</Link></li>
              <li>
                        <Link
                          to="/"
                          state={{ scrollTo: 'our-class' }}
                        >
                          Our Class
                        </Link>
                      </li>

              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>

            </ul>
          </div>


          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-xl font-semibold mb-4">Social Media</h4>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
