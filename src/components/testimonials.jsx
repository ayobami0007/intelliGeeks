import React from 'react';
import { FaStar } from 'react-icons/fa';
import testImage from '../assets/testimImage.png'

const testimonials = [
  {
    image: testImage,
    name: 'Aisha Bello',
    field: 'Mobile Development',
    rating: 4.9,
    text: 'IntelliGeeks helped me transition into tech with practical lessons and supportive mentors. I highly recommend it to anyone starting out!',
  },
  {
    image: testImage,
    name: 'Fatima Yusuf',
    field: 'Computational Thinking and Introduction to AI',
    rating: 5.0,
    text: 'The community is amazing and the resources are top-notch. My skills improved greatly after joining IntelliGeeks.',
  },
  {
    image: testImage,
    name: 'Olufunke Adeyemi',
    field: 'Parent of Student (Computational Thinking and Introduction to AI)',
    rating: 5.0,
    text: 'My son enjoyed every lesson and became more confident in problem-solving. The instructors made learning fun and interactive. I am grateful for the positive impact IntelliGeeks had on him.',
  },
];

const StudentTestimonials = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-16 py-20 text-gray-800">
      <h2 className="text-2xl text-blue-500 font-medium mb-2 text-center">Testimonials</h2>
      <h2 className="text-3xl font-bold mb-12 md:text-4xl text-center">Student/Parents Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => {
          // Get initials from name
          const initials = t.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();

            return (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl p-2">
                {initials}
              </div>
              <div>
                <h3 className="font-semibold text-xl">{t.name}</h3>
                <p className="text-base text-gray-600 italic mb-1">{t.field}</p>
                <div className="flex items-center gap-1 text-xl">
                <FaStar className="text-yellow-500" />
                <span>{t.rating}</span>
                </div>
              </div>
              </div>
              <p className="text-base text-gray-700 mt-4">{t.text}</p>
            </div>
            );
        })}
      </div>
    </section>
  );
};

export default StudentTestimonials;
