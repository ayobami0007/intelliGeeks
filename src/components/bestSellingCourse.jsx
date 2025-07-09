import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import courseOn from '../assets/courseOn.png'
import courseTw from '../assets/courseTw.png'
import courseThr from '../assets/courseThr.png'
import courseF from '../assets/courseF.png'


const categories = ['UI/UX Design', 'Web Development', 'Data Science'];

const courses = {
  'UI/UX Design': [
    {
      title: 'Introduction to Design System in Figma',
      lessons: '12 Lessons',
      duration: '8 Week',
      price: '$350',
      rating: 4.9,
      image: courseOn
    },
    {
      title: 'Introduction to Design Thinking Framework',
      lessons: '17 Lessons',
      duration: '6 Week',
      price: '$360',
      rating: 4.7,
      image: courseTw,
    },
    {
      title: 'Design Principle and Fundamentals',
      lessons: '15 Lessons',
      duration: '8 Week',
      price: '$340',
      rating: 4.8,
      image: courseThr,
    },
    {
      title: 'Designing Responsive Dashboard for Fintech',
      lessons: '17 Lessons',
      duration: '6 Week',
      price: '$380',
      rating: 5.0,
      image: courseF,
    },
  ],
  'Web Development': [],
  'Data Science': [],
};

const BestSellingCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('UI/UX Design');

  return (
    <section className="bg-white px-6 md:px-16 py-20 text-gray-800">
      <h2 className="text-3xl md:text-2xl text-blue-400 text-center "> Our  class</h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Best Selling Class</h2>

      {/* Category  */}
      <div  className="flex justify-center">
      <div className="inline-flex flex-wrap py-1 rounded-full items-center justify-center px-3 bg-gray-200 flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2  text-sm font-medium transition ${
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
      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses[selectedCategory].map((course, i) => (
          <div
            key={i}
            className=" rounded-lg "
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-t-xl"
            />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <div className="text-sm text-gray-600 flex justify-between">
                <p> {course.lessons}</p>
                
                 <p>{course.duration}</p> 
              </div>
              <div className='flex justify-between'>
              <p className=" font-bold">{course.price}</p>
              <div className="flex items-center gap-1 text-sm">
                <FaStar  className='text-yellow-500 '/>
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



