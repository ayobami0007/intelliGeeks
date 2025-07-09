import React from 'react';
import personImage from '../assets/manLaptop.svg'; 
import google from "../assets/googleLogo.png";
import canva from "../assets/canvaLogo.png";
import amazon from "../assets/amazonLogo.png";
import sketch from "../assets/sketchLogo.png";

const HeroSection = () => {
  return (
    <section
      className=" relative bg-blue-500"
      
    >
       <div className="absolute right-100 top-87  transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block pointer-events-none">
    <img
      src={personImage}
      alt="Man with laptop"
      className="w-[300px] md:w-[400px] lg:w-[450px] object-contain"
    />
  </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-black/60 text-white">
        {/* Left Section */}
        
        <div className="md:w-1/2 space-y-6">
         <div className="mb-4">
        <div className="inline-block bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Specialization over Generalization
        </div>
      </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Build the Future. Learn <br/> AI Today.
          </h1>
          <p className="text-base">
            A beginner-friendly program designed to teach you the fundamentals of artificial intelligence and software development through practical, project-based learning.
          </p>
          <div className="text-lg font-semibold">Live Interactive Classes</div>
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
            Download Brochure
          </button>
          <div className="flex flex-col gap-2 mt-4 relative z-20">
  <span className="text-xs">Trusted by:</span>
  <div className="flex flex-row items-center gap-4">
    <img src={google} alt="Google" className="h-9" />
    <img src={canva} alt="Canva" className="h-9" />
    <img src={amazon} alt="Amazon" className="h-9" />
    <img src={sketch} alt="Sketch" className="h-9" />
  </div>
</div>

        </div>

          {/* <div className="absolute right-100 top-87 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
          <img
            src={personImage}
            alt="Man with laptop"
            className="w-[300px] md:w-[400px] lg:w-[450px] object-contain"
          />
        </div> */}

        {/* Right Section */}
        <div className="md:w-1/2  text-black p-6 rounded-lg mt-10 md:mt-0 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Enrol Your Child Today</h2>
          <p className="mb-6 text-sm">
            Give them a head start in AI and coding, designed for curious young minds.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full md:w-3/4 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
