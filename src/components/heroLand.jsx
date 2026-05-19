import React from "react";
import heroImage from "../assets/hero_image.png";
import {
  FaWhatsapp, FaChalkboardTeacher, FaCertificate,
  FaUserGraduate, FaCalendarAlt, FaTrophy, FaCheckCircle, FaArrowRight
} from "react-icons/fa";
import { CURRENT_COHORT, COHORT_START_DATE, WHATSAPP_LINK } from "../config/program";

const HeroSection = () => {
  return (
    <>
      {/* Trust Bar */}
      <div className="bg-[#0d1b6e] text-white/80 py-2.5 px-6 border-b border-white/10">
        <div className="grid grid-cols-2 md:flex md:justify-between items-center gap-y-2.5 gap-x-4 md:gap-6 text-xs font-medium max-w-screen-xl mx-auto">
          {[
            { icon: FaCertificate, color: "text-yellow-400", text: "Certified Curriculum" },
            { icon: FaUserGraduate, color: "text-green-400", text: "Max 20 Students Per Cohort" },
            { icon: FaChalkboardTeacher, color: "text-yellow-400", text: "Mentorship from Elite Instructors" },
            { icon: FaCalendarAlt, color: "text-green-400", text: `Next Cohort: ${CURRENT_COHORT}` },
          ].map(({ icon: Icon, color, text }, i, arr) => (
            <React.Fragment key={text}>
              <div className="flex items-center gap-1.5">
                <Icon className={`${color} flex-shrink-0`} />
                <span>{text}</span>
              </div>
              {i < arr.length - 1 && <div className="hidden md:block w-px h-3 bg-white/20 flex-shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden">

        {/* Background image */}
        <img
          src={heroImage}
          alt="Students learning AI and technology at IntelliGeeks"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        />

        {/* Brand-blue overlay — matches primary colour, lets image neon glow through */}
        <div className="absolute inset-0 bg-[#0d1b6e]/65" />

        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d1b6e]/70 to-transparent" />

        {/* Bottom vignette — heavier, anchors the stats bar */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0d1b6e] to-transparent" />

        {/* ── MAIN CONTENT — centred ── */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 md:px-16 py-20 pt-28">

          {/* Pulse badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">
              Enrollment Open — {COHORT_START_DATE}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Your Child Could Be Building
            <span className="block mt-2 text-yellow-300">AI. We Make It Happen.</span>
          </h1>

          {/* Sub */}
          <p className="text-base md:text-xl text-white/65 leading-relaxed max-w-2xl mb-10">
            A structured 12-week programme for ages{" "}
            <span className="text-white font-semibold">12–18</span>.{" "}
            Expert instructors, real projects, and incentives that reward excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaWhatsapp className="text-xl" />
              Enroll on WhatsApp
            </a>
            <a
              href="#our-class"
              className="flex items-center gap-2 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:bg-white/8 border border-white/20 hover:border-white/40"
            >
              View Curriculum <FaArrowRight className="text-xs" />
            </a>
          </div>

          {/* Quick benefits — horizontal pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: FaTrophy, text: "Top student gets full ₦200k refund" },
              { icon: FaCheckCircle, text: "10% cashback for 95%+ attendance" },
              { icon: FaChalkboardTeacher, text: "Mentorship from Elite Instructors" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-4 py-2"
              >
                <Icon className="text-yellow-400 text-xs flex-shrink-0" />
                <span className="text-xs text-white/75 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM STATS BAR ── */}
        <div className="relative z-10 border-t border-white/10 backdrop-blur-md bg-white/5">
          <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-5 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
            {[
              { value: "12 Weeks", label: "Intensive programme" },
              { value: "Ages 12–18", label: "Who it's for" },
              { value: "₦200,000", label: "All-inclusive fee" },
              { value: "20 Students", label: "Max per cohort" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-lg md:text-xl font-extrabold text-white">{value}</p>
                <p className="text-xs text-white/40 mt-0.5 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
