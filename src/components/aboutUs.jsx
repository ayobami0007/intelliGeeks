import React from 'react';
import aboutImage from '../assets/aboutImg.svg';
import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa';


const AboutUs = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-16  text-gray-800">
      <div className="flex flex-col lg:flex-row  gap-12">

          {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="About us illustration"
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Left Text */}
        <div className="w-full lg:w-1/2 space-y-9">
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <h3 className="text-xl font-semibold">E-Learning Platform for Digital Skills</h3>
          <p className="text-gray-600 text-base leading-relaxed">
           Empower yourself with the knowledge and skills gained through online education! The key to your future! Empower yourself with the knowledge and skills gained through online education! The key to your future!
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Learn More  <FaArrowRight className="text-sm" />
          </Link>
        </div>

      
      </div>
    </section>
  );
};

export default AboutUs;
