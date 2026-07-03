import React from 'react';
import comptThinkingImg from '../assets/modules/comp_thinking.webp';
import introToAI from '../assets/modules/ai_ml.webp';
import softEngrImg from '../assets/modules/soft_engr.webp';
import { FaCode, FaBrain, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const modules = [
  {
    title: 'Computational Thinking',
    duration: '4 Weeks',
    image: comptThinkingImg,
    desc: 'Master the fundamentals of logical thinking and problem-solving',
    highlights: [
      'Algorithm design and analysis',
      'Pattern recognition techniques',
      'Problem decomposition strategies',
      'Debugging and optimization skills'
    ],
    icon: FaBrain,
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Introduction to Software Engineering',
    duration: '4 Weeks',
    image: softEngrImg,
    desc: 'Master the engineering mindset: design, build, and deploy scalable solutions',
    highlights: [
      'Software design and architecture',
      'Systems thinking and planning',
      'Introduction to key programming concepts',
      'Version control and collaboration'
    ],
    icon: FaLaptopCode,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'AI & Machine Learning',
    duration: '8 Weeks',
    image: introToAI,
    desc: 'Build intelligent systems and train your own AI models',
    highlights: [
      'Machine learning fundamentals',
      'The Math behind how AI thinks and learns',
      'Neural network basics',
      'Real AI project development',
      'Model training and deployment'
    ],
    icon: FaCode,
    color: 'from-green-500 to-emerald-600'
  },
];

const BestSellingCourses = () => {

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 px-6 md:px-16 py-20 text-gray-800 overflow-hidden" id="our-class">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#0d1b6e] rounded-full"></span>
            <span className="text-sm font-bold text-[#0d1b6e] uppercase tracking-wide">Our Curriculum</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            What Your Child Will Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            3-month intensive program for ages 12-18. Comprehensive training in computational thinking, software engineering, and artificial intelligence.
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {modules.map((course, i) => {
            const IconComponent = course.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-[#0d1b6e]">{course.duration}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <h3 className="font-extrabold text-2xl text-gray-900 group-hover:text-[#0d1b6e] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.desc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <p className="text-sm font-bold text-gray-900 mb-3">Key Topics:</p>
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-[#0d1b6e] text-white px-8 py-4 rounded-xl shadow-xl">
            <div className="text-left">
              <p className="text-sm text-blue-100">Complete Program Duration</p>
              <p className="text-2xl font-bold">12 Weeks</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-left">
              <p className="text-sm text-blue-100">Total Modules</p>
              <p className="text-2xl font-bold">3 Core Tracks</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-left">
              <p className="text-sm text-blue-100">Sessions Per Week</p>
              <p className="text-2xl font-bold">3 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingCourses;



