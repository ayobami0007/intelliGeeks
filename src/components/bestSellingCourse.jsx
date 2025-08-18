import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import courseOn from '../assets/courseOn.png'
import courseTw from '../assets/courseTw.png'
import courseThr from '../assets/courseThr.png'
import courseF from '../assets/courseF.png'
import comptThinkingImg from '../assets/compt_thinking.png'
import introToAI from '../assets/intro_to_ai.png';
import flutterImg from '../assets/flutter.png';


const categories = ['Artificial Intelligence', 'Mobile App Development',];

const courses = {
  'Artificial Intelligence': [
    {
      title: 'Computational Thinking and Problem Solving',
      lessons: '12 Lessons',
      duration: '8 Weeks',
      price: '50,000 NGN',
      rating: 4.9,
      image: comptThinkingImg
    },
    {
      title: 'Introduction to Artificial Intelligence and Machine Learning',
      lessons: '12 Lessons',
      duration: '8 Weeks',
      price: '50,000 NGN',
      rating: 4.7,
      image: introToAI,
    },
  ],
  'Mobile App Development': [
      {
      title: 'Mobile App Development with Flutter',
      lessons: '8 Lessons',
      duration: '4 Months',
      price: '150,000 NGN',
      rating: 4.8,
      image: flutterImg,
    },
     {
      title: 'Advanced Mobile App Development with Flutter',
      lessons: '17 Lessons',
      duration: '6 Week',
      price: '200,000 NGN',
      rating: 5.0,
      image: flutterImg,
    },
  ],

};

const BestSellingCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('Artificial Intelligence');

  return (
    <section className="bg-white px-6 md:px-16 py-14 text-gray-800" id="our-class">
      <h2  className="text-2xl text-blue-600 font-bold mb-2 text-center"> Our Courses</h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400 ">Best Selling Courses</h2>

      {/* Category  */}
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap py-1 rounded-full px-3 bg-gray-200 flex-wrap  items-center justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2  text-2xl font-medium transition ${
                selectedCategory === cat
                  ? 'bg-white  rounded-full'
                  : 'text-gray-700  hover:rounded'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/*  Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses[selectedCategory].map((course, i) => (
          <div
            key={i}
            className="rounded-lg"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-70 object-cover rounded-t-xl"
            />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-2xl">{course.title}</h3>
              <div className="text-sm text-gray-600 flex justify-between">
                <p> {course.lessons}</p>
                <p>{course.duration}</p>
              </div>
              <div className='flex justify-between'>
                <p className="text-xl font-bold">{course.price}</p>
                <div className="flex items-center gap-1 text-xl">
                  <FaStar className='text-yellow-500 ' />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingCourses;



