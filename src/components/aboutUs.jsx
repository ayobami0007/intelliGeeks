import React from 'react';
import aboutImage from '../assets/about_img.png';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaStar, FaUsers, FaGraduationCap } from 'react-icons/fa';


const AboutUs = () => {
  return (
    <section className="relative text-gray-800 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 px-6 md:px-16 py-20 overflow-hidden" id="about">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#0d1b6e] rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={aboutImage}
                alt="About us illustration"
                className="relative w-full max-w-[550px] h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#0d1b6e] rounded-full"></span>
              <span className="text-sm font-bold text-[#0d1b6e] uppercase tracking-wide">About Us</span>
            </div>

            {/* Headline */}
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Building Tomorrow's
              <span className="block mt-2 text-[#0d1b6e]">
                AI Engineers Today
              </span>
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We train kids aged <span className="font-bold text-[#0d1b6e]">12-18</span> to become AI and software engineering professionals. With only <span className="font-bold text-[#0d1b6e]">20 students per cohort</span>, every child receives personalized attention and mentorship.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0d1b6e] rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Expert Instructors</h4>
                  <p className="text-sm text-gray-600">CS graduates (2:1+) building real AI solutions</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <FaStar className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">100% Refund</h4>
                  <p className="text-sm text-gray-600">Top student every cohort gets a full refund</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <FaCheckCircle className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">10% Cashback</h4>
                  <p className="text-sm text-gray-600">Maintain 95%+ attendance to earn reward</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <FaUsers className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Small Classes</h4>
                  <p className="text-sm text-gray-600">Maximum 20 students per cohort</p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-[#0d1b6e] text-white p-6 rounded-xl shadow-lg w-full">
              <p className="text-lg font-semibold mb-2">16-Week Intensive Program</p>
              <p className="text-blue-100">
                Investment: <span className="font-bold text-white text-2xl">₦200,000</span> or <span className="font-bold text-white text-2xl">$130</span>
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-3 bg-[#0d1b6e] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0d1b6e] transition-all transform hover:scale-105 shadow-xl mt-4"
            >
              Enroll Now <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
