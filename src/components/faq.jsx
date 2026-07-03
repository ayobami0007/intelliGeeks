import React from 'react';
import FaqItem from './FaqItem';

const faqData = [
  {
    question: 'What age group is this for?',
    answer: 'Ages 12-18 only. Built specifically for young innovators ready to learn AI and software engineering.'
  },
  {
    question: 'How much does it cost?',
    answer: '₦200,000 for 3 months (12 weeks). Maintain 95%+ attendance = 10% cashback. The top student every cohort gets a full ₦200,000 refund.'
  },
  {
    question: 'How many students per class?',
    answer: 'Just 10 students per cohort. Small classes = personalized attention and better results.'
  },
  {
    question: 'Who teaches the program?',
    answer: 'CS graduates with 2:1+ degrees who build world-class AI solutions. Real expertise, real experience.'
  },
  {
    question: 'What will my child learn?',
    answer: 'Computational thinking, AI/ML fundamentals, software engineering, and real-world projects. Skills that matter.'
  },
  {
    question: 'How does the reward system work?',
    answer: 'Attend 95%+ of classes = 10% cashback (₦20,000). Additionally, the single best student per cohort — ranked on attendance, assessments, and final project — receives a full ₦200,000 refund.'
  },
  {
    question: 'How do I enroll?',
    answer: 'Fill out our contact form and we\'ll guide you through the simple enrollment process. Open to all students aged 12-18.'
  },
  {
    question: 'What are the enrollment requirements?',
    answer: 'Students must be aged 12-18 and have a passion for learning technology. No prior coding experience required!'
  },
];

const FaqSection = () => {
  return (
    <section className="bg-blue-50 px-6 md:px-16 py-16">
      <p className="text-center tracking-wide mb-2 text-2xl text-[#0d1b6e] font-bold mb-2">
        Ask your questions
      </p>
      <h2 className="text-2xl md:text-[40px] text-gray-900 mb-10 font-bold text-center ">
        Frequently Asked Questions
      </h2>

      <div className=" mx-auto">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
