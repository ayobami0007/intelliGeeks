

import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode, FaInfinity, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cards = [
  { icon: <FaChalkboardTeacher />, title: 'Expert Instructor', desc: 'Learn from industry experts.' },
  { icon: <FaLaptopCode />, title: 'Interactive Learning', desc: 'Hands-on, engaging learning experiences.' },
  { icon: <FaInfinity />, title: 'Lifetime Access', desc: 'Learn at your own pace, forever.' },
  { icon: <FaCertificate />, title: 'Verified Certificate', desc: 'Showcase your new skills confidently.' },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800 px-6 md:px-16 py-20">
      <div className="text-center mb-12">
        <h5 className="text-2xl text-blue-500 font-medium mb-2">Why Choose Us</h5>
        <h2 className="text-4xl md:text-5xl font-bold">Best Learning Experience</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group px-4 py-10 rounded-lg bg-white shadow hover:bg-blue-600 hover:text-white transition"
          >
            <div className="text-blue-600 text-4xl mb-4 group-hover:text-white transition">{item.icon}</div>
            <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
            <p className="text-lg text-gray-600 group-hover:text-white transition">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
