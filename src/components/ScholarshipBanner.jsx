import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaMedal, FaArrowRight, FaStar } from 'react-icons/fa';
import { FULL_PRICE, CURRENT_COHORT } from '../config/program';

const ScholarshipBanner = () => (
  <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 px-6 md:px-16 py-20 overflow-hidden">
    {/* Decorative background */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
    </div>

    <div className="max-w-4xl mx-auto relative z-10 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 px-4 py-2 rounded-full mb-6">
        <FaTrophy className="text-yellow-600 text-sm" />
        <span className="text-sm font-bold text-yellow-700 uppercase tracking-wide">Top Student Award</span>
      </div>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        The Best Student Every Cohort
        <span className="block mt-1 text-yellow-600">Gets a Full Refund.</span>
      </h2>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12">
        At the end of every cohort, the student who finishes at the top — based on attendance, assessments, and their
        final project — receives a <strong>complete refund of their ₦{FULL_PRICE.toLocaleString()} fee</strong>.
        No conditions. No catches. We put our money where our standards are.
      </p>

      {/* Three pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaStar className="text-yellow-500 text-xl" />
          </div>
          <p className="font-bold text-gray-900 mb-1">Attendance</p>
          <p className="text-sm text-gray-500">Show up. Every session counts toward the final ranking.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaMedal className="text-orange-500 text-xl" />
          </div>
          <p className="font-bold text-gray-900 mb-1">Assessments</p>
          <p className="text-sm text-gray-500">Performance across all module tests throughout the 12 weeks.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaTrophy className="text-green-600 text-xl" />
          </div>
          <p className="font-bold text-gray-900 mb-1">Final Project</p>
          <p className="text-sm text-gray-500">The quality and originality of the AI project built and presented at the end.</p>
        </div>
      </div>

      {/* Highlight box */}
      <div className="bg-yellow-500 text-white rounded-2xl shadow-lg p-8 mb-10">
        <p className="text-2xl font-extrabold mb-2">
          ₦{FULL_PRICE.toLocaleString()} — Fully Refunded.
        </p>
        <p className="text-yellow-100 text-base">
          One student. Every cohort. The one who earns it most gets it all back.
          This is not a lottery — it is a reward for genuine excellence.
        </p>
      </div>

      {/* CTA */}
      <p className="text-gray-500 text-sm mb-5">
        Enrolment for the <strong className="text-gray-700">{CURRENT_COHORT}</strong> cohort is now open. 20 spots available.
      </p>
      <Link
        to="/contact#contact-form"
        className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
      >
        Enrol Your Child <FaArrowRight />
      </Link>
    </div>
  </section>
);

export default ScholarshipBanner;
