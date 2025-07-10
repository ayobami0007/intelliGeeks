import React from 'react';
import FaqItem from './FaqItem';

const faqData = [
  {
    question: 'How to enroll for a Course?',
    answer: 'You can enroll by visiting the course page and clicking the Enroll button.'
  },
  {
    question: 'Can I get the recordings of my previous lectures?',
    answer: 'Yes, recordings are available in your student dashboard after class.'
  },
  {
    question: 'Who would be the instructor for enrolled course?',
    answer: 'All our courses are taught by certified industry professionals.'
  },
  {
    question: 'What kind of placement support will be given post completion of program?',
    answer: 'We offer mock interviews, resume reviews, and job referrals.'
  }
];

const FaqSection = () => {
  return (
    <section className="bg-blue-50 px-6 md:px-16 py-16">
      <p className="text-center text-blue-600 text-base mb-2 uppercase tracking-wide">
        Ask your questions
      </p>
      <h2 className="text-2xl md:text-[40px] font-bold text-center text-gray-900 mb-10">
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
