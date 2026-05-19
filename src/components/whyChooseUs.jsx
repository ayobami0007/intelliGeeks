import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode, FaBrain, FaTrophy, FaUsers, FaGraduationCap, FaRocket, FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CURRENT_COHORT } from '../config/program';

const cards = [
  {
    icon: FaGraduationCap,
    title: 'Expert Instructors',
    desc: 'Learn from CS graduates with 2:1+ honors degrees actively building world-class AI solutions in the industry.',
    color: 'from-blue-500 to-[#0d1b6e]'
  },
  {
    icon: FaUsers,
    title: 'Exclusive Small Classes',
    desc: 'Limited to just 20 students per cohort, ensuring personalized mentorship and maximum learning impact.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: FaBrain,
    title: 'Comprehensive Curriculum',
    desc: 'Comprehensive training in computational thinking, software engineering, AI, and machine learning fundamentals.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: FaRocket,
    title: 'Real-World Projects',
    desc: 'Build actual AI applications and software solutions, not just theoretical concepts—prepare for real careers.',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: FaTrophy,
    title: 'Top Student Refund',
    desc: 'The best student every cohort — ranked by attendance, assessments, and final project — gets a full ₦200,000 refund. We put our money where our standards are.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FaCheckCircle,
    title: 'Attendance Rewards',
    desc: 'Maintain 95%+ attendance throughout the program and earn 10% cashback. Consistency pays.',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    icon: FaCertificate,
    title: 'Industry Recognition',
    desc: 'Receive certification upon completion, showcasing your child\'s proficiency in AI and software engineering.',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Live Interactive Sessions',
    desc: 'Engaging 3-day per week sessions (Mon/Wed/Fri) with hands-on learning and direct instructor interaction.',
    color: 'from-pink-500 to-rose-600'
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 px-6 md:px-16 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#0d1b6e] rounded-full"></span>
            <span className="text-sm font-bold text-[#0d1b6e] uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Elite Training for <span className="text-[#0d1b6e]">Young Innovators</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another coding class. IntelliGeeks provides world-class AI and software engineering education designed specifically for ambitious students aged 12-18.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative px-6 py-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-base text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#0d1b6e] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Transform Your Child's Future?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Join the {CURRENT_COHORT} cohort and give your child the competitive edge in AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0d1b6e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Enroll Now
              </a>
              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/30"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
