import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode, FaInfinity, FaCertificate } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className=" bg-gray-50 text-gray-800 px-6 md:px-16 py-20 ">
      <h5 className="text-3xl md:text-2xl text-center mb-2">Why Choose Us</h5>
      <h5 className="text-3xl md:text-4xl font-bold text-center mb-12">Best Learning Experience</h5>
    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <FaChalkboardTeacher />, title: 'Expert Instructor', desc: 'Learn from industry leading experts.' },
          { icon: <FaLaptopCode />, title: 'Interactive Learning', desc: 'Empower yourself with the knowledge and skills gained.' },
          { icon: <FaInfinity />, title: 'Lifetime Access', desc: 'Empower yourself with the knowledge and skills gained.' },
          { icon: <FaCertificate />, title: 'Verified Certificate', desc: 'Empower yourself with the knowledge and skills gained.' },
        ].map((item, index) => (
          <div key={index} className="group   w-[70%] h-[200px] p-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            <div className="text-blue-600 text-3xl mb-4 group-hover:text-white transition">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 group-hover:text-white transition">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;




