import React from 'react';
import { FaStar } from 'react-icons/fa';
import testImage from '../assets/testimImage.png'

const testimonials = [
  {
    image: testImage,
    name: 'Michael Wong',
    field: 'UI/UX Design Student',
    rating: 4.9,
    text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!',
  },
  {
    image: testImage,
    name: 'Avril Song',
    field: 'Web Development Student',
    rating: 4.8,
    text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!',
  },
  {
    image: testImage,
    name: 'Jeane Wood',
    field: 'Data Science Student',
    rating: 5.0,
    text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!',
  },
];

const StudentTestimonials = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-16 py-20 text-gray-800">
      <h2 className="text-3xl  text-blue-400 md:text-2xl text-center mb-2">Testimonials</h2>
      <h2 className="text-3xl font-bold mb-12 md:text-4xl  text-center">Student Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-2">
               <img
              src={t.image}
              alt={t.name}
              className="  rounded-t-xl"
            />
            <div>
              <h3 className="font-semibold text-xl">{t.name}</h3>
            <p className="text-base text-gray-600 italic mb-1">{t.field}</p>

              <div className="flex items-center gap-1  text-xl">
                <FaStar  className='text-yellow-500'/>
                <span>{t.rating}</span>
              </div>
              </div>
            </div>
            <p className="text-base text-gray-700 mt-4">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonials;
