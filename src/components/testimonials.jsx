import React from 'react';
import { FaStar } from 'react-icons/fa';
import testImage from '../assets/testimImage.png'

const testimonials = [
   {
    image: testImage,
    name: 'Mr. Otunba Akeem',
    field: 'Parent - AI & Software Engineering Program',
    rating: 5.0,
    text: 'My daughters are very happy and have confirmed that they learned a lot from the program. I will definitely recommend IntelliGeeks to other parents.',
  },
   {
    image: testImage,
    name: 'Ishola Olatunde',
    field: 'Parent - AI & Software Engineering Program',
    rating: 5.0,
    text: 'This AI course has been an amazing experience for my child! It breaks down complex concepts like artificial intelligence and machine learning into simple, engaging lessons that are easy for young minds to grasp. My child is now more curious about technology, asking thoughtful questions, and even experimenting with basic AI ideas on their own. The instructors are supportive, patient, and clearly passionate about teaching. I\'ve also seen a noticeable improvement in my child\'s critical thinking and creativity. I highly recommend this course to any parent who wants to prepare their child for the future in a fun and impactful way.',
  },
  {
    image: testImage,
    name: 'Ayodele Ajibola',
    field: 'Parent - AI & Software Engineering Program',
    rating: 5.0,
    text: 'The course has been a fantastic investment in my child\'s future, and I would highly recommend it to any parent looking to equip their child with essential digital and critical thinking skills.',
  },
  {
    image: testImage,
    name: 'Adebayo Kabir Folorunsho',
    field: 'Parent - AI & Software Engineering Program',
    rating: 5.0,
    text: 'The company is exceptional in training on computational thinking. Apart from teaching you programming, they train you to apply a computational mindset to life challenges. To top it all, their AI training simplifies complex topics, making them easy to understand.',
  },
  {
    image: testImage,
    name: 'Abdurrahman Sudais',
    field: 'Student - AI & Software Engineering Program',
    rating: 5.0,
    text: 'A world-class training ground for tomorrow\'s software engineers! The 3-track system (Computational Thinking, Software Engineering, and AI) is rigorous, practical, and perfectly tailored for teenagers. The hands-on project development ensures students don\'t just learn theory, but actually know how to deploy scalable solutions. Five stars all the way!',
  },
  {
    image: testImage,
    name: 'Ahmed Ibrahim',
    field: 'Student - AI & Software Engineering Program',
    rating: 5.0,
    text: 'Class is always fun, educative and interactive. The tutors really break things down.',
  },
  {
    image: testImage,
    name: 'Habeeb Ibrahim',
    field: 'Student - AI & Software Engineering Program',
    rating: 5.0,
    text: 'The tutors are amazing people to learn from.',
  },

];

const StudentTestimonials = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-16 py-20 text-gray-800">
      <h2 className="text-2xl text-[#0d1b6e] font-bold mb-2 text-center">Testimonials</h2>
      <h2 className="text-3xl font-bold mb-4 md:text-4xl text-center">What Parents Are Saying</h2>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Hear from parents whose children are thriving in our elite AI & Software Engineering program.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => {
          // Get initials from name
          const initials = t.name
            .split(' ')
            .map(word => word[0])
            .join('').substring(0, 2)
            .toUpperCase();

            return (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-[#0d1b6e] font-bold text-xl p-2">
                {initials}
              </div>
              <div>
                <h3 className="font-semibold text-xl">{t.name}</h3>
                <p className="text-base text-gray-600 italic mb-1">{t.field}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
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
