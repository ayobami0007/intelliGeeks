import React from 'react';
import aboutImage from '../assets/aboutImg.svg';
import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa';


const AboutUs = () => {
  return (
    <section className="text-gray-800 bg-gray-50 px-6 md:px-16  " id="about">
      <div className="flex flex-col gap-12 lg:flex-row  ">

          
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="About us illustration"
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Left side */}
        <div className="w-full space-y-3 lg:w-1/2  ">
          <h2 className="text-3xl md:text-2xl text-blue-400">About Us</h2>
          <h3 className="text-[34px] mb-16  font-semibold ">E-Learning Platform for Digital Skills</h3>
          <p className="text-gray-600 text-xl leading-relaxed ">
           Empower yourself with the knowledge and skills gained through online education! The key to your future! Empower yourself with the knowledge and skills gained through online education! The key to your future!
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-white text-xl px-6 py-2  gap-2 bg-blue-600  rounded-xl hover:bg-blue-700 transition"
          >
            Learn More  <FaArrowRight className="text-xl" />
          </Link>
        </div>

      
      </div>
    </section>
  );
};

export default AboutUs;
