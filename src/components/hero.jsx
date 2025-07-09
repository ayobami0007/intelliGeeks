// import React from 'react'
// import heroWoman from '../assets/hero-woman.svg'
// const hero = () => {
//   return (
//     <div>
//         <section className="px-6 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
//   {/* Left Text */}
//   <div className="lg:w-1/2 text-center lg:text-left">
//     <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
//       Master Digital Skills<br />with Ease!
//     </h1>
//     <p className="mt-4 text-gray-600 text-sm md:text-base">
//       Unlock Digital Mastery Effortlessly. Explore and enhance your skills on our user-friendly platform.
//     </p>

//     <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//       <button className="bg-[#2545F5] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
//         Start learning
//       </button>
//       <button className="border border-[#2545F5] text-[#2545F5] px-6 py-3 rounded-md hover:bg-[#2545F5] hover:text-white transition">
//         Learn more
//       </button>
//     </div>

//     <div className="mt-8">
//       <p className="text-gray-500 text-sm mb-2">Trusted by</p>
//       <div className="flex items-center gap-4 justify-center lg:justify-start">
//         <img src="/assets/google.png" alt="Google" className="h-6" />
//         <img src="/assets/canva.png" alt="Canva" className="h-6" />
//         <img src="/assets/amazon.png" alt="Amazon" className="h-6" />
//         <img src="/assets/sketch.png" alt="Sketch" className="h-6" />
//       </div>
//     </div>
//   </div>

//   {/* Right Image */}
//   <div className="lg:w-1/2">
//   <img src="{heroWoman}" className="w-full max-w-md mx-auto" alt="Hero"  />
//     {/* <img src="/assets/heroWoman.png" alt="Hero" className="w-full max-w-md mx-auto" /> */}
//   </div>
// </section>

//     </div>
//   )
// }

// export default hero

import React from "react";
import woman from "../assets/hero-woman.svg";
import google from "../assets/googleLogo.png";
import canva from "../assets/canvaLogo.png";
import amazon from "../assets/amazonLogo.png";
import sketch from "../assets/sketchLogo.png";
import student1 from "../assets/student1Hero.png";
import student2 from "../assets/student1Hero.png";
import student3 from "../assets/student1Hero.png";
import student4 from "../assets/student1Hero.png";
import instructor1 from "../assets/student1Hero.png";
import instructor2 from "../assets/student1Hero.png";

const Hero = () => {
  return (
    // <section className=" flex flex-col-reverse lg:flex-row items-center justify-between gap-10 bg-[#F9FAFB]">
      
    // <section className="px-6 md:px-12 lg: py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-140 bg-[#F9FAFB]">
<section className=" bg-red-500 px-6 md:px-8   flex flex-col-reverse lg:flex-row md:justify-between bg-[#F9FAFB]">

    {/* LEFT SIDE */}
      <div className="lg:w-1/2 text-center lg:text-left bg-red-300">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
          Master Digital Skills <br className="hidden md:block" /> with Ease!
        </h1>

        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md mx-auto lg:mx-0">
          Unlock Digital Mastery Effortlessly! Explore and enhance your skills
          with our user-friendly platform.
        </p>

        {/*  Total Students */}
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
          <div className="flex -space-x-3">
            <img src={student1} alt="student" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={student2} alt="student" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={student3} alt="student" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src={student4} alt="student" className="w-6 h-6 rounded-full border-2 border-white" />
          </div>
          <span className="text-sm text-[#2545F5] font-semibold">900+ Total students</span>
        </div>

 
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#2545F5] text-white px-12 py-3 rounded-md hover:bg-blue-700 transition">
            Start learning
          </button>
          <button className="border border-[#2545F5] text-[#2545F5] px-12 py-3 rounded-md hover:bg-[#2545F5] hover:text-white transition">
            Learn more
          </button>
        </div>

       
        <div className="mt-8">
          <p className="text-gray-500 text-sm mb-2">Trusted by</p>
          <div className="flex items-center gap-4 justify-center lg:justify-start flex-wrap">
            <img src={google} alt="Google" className="h-6" />
            <img src={canva} alt="Canva" className="h-6" />
            <img src={amazon} alt="Amazon" className="h-6" />
            <img src={sketch} alt="Sketch" className="h-6" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative  bg-red-900">
        <img src={woman} alt="Instructor" className="w-full max-w-sm mx-auto lg:mx-0 rounded-xl" />

        {/* certi? */}
        
        
        <div className=" absolute top-6 left-4 md:-left-50 bg-white shadow-lg p-4 rounded-xl w-64 hidden lg:block">
        {/* <div className="absolute top-6 right-6 lg:right-16 bg-white shadow-lg p-4 rounded-xl w-64 hidden lg:block"> */}

          <p className="text-sm font-semibold text-gray-600 mb-3">Certified Instructor</p>
          <div className="flex items-center gap-3 mb-2">
            <img src={instructor1} alt="Donald" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-medium">Donald Robert</p>
              <p className="text-xs text-gray-400">UI/UX Design</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={instructor2} alt="John" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-medium">John White</p>
              <p className="text-xs text-gray-400">Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
