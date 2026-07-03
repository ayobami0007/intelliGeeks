import React, { useState } from 'react'
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import nurImage from '../assets/team/nur.webp';


const teamMembers = [
  {
    name: 'Tajudeen Nurudeen',
    role: 'Lead Instructor & Program Director',
    desc: 'Computer Science graduate (First Class) with MBA and MSc in AI/ML (Exp. 2026). 7+ years building world-class AI-powered solutions. Specialized in training young minds in cutting-edge technology.',
    image: nurImage,
    website: 'https://tajudeennurudeen.com',
    linkedIn: 'https://linkedin.com/in/tajudeennurudeen',
  },
];

const TeamMemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md flex flex-col items-center rounded-lg p-6 text-center">
      <div className="relative mb-6">
        <div className="absolute -inset-1 bg-[#0d1b6e] rounded-full blur-lg opacity-60"></div>
        <img
          src={member.image}
          alt={member.name}
          className="relative w-32 h-32 rounded-full object-cover object-top border-4 border-white shadow-xl"
          loading="lazy"
        />
      </div>

      <p className="text-xl text-gray-900 font-semibold">{member.name}</p>
      <p className="text-base mb-2 text-gray-600">{member.role}</p>
      <p className={`text-base text-gray-500 mb-2 ${!isExpanded ? 'line-clamp-4' : ''}`}>
        {member.desc}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-sm text-[#0d1b6e] hover:text-[#0d1b6e] font-medium mb-4"
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>

      <div className="flex text-lg text-gray-500 gap-4">
        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#0d1b6e] transition" />
        </a>
        <a href={member.website} target="_blank" rel="noopener noreferrer">
          <FaGlobe className="hover:text-[#0d1b6e] transition" />
        </a>
      </div>
    </div>
  );
};

const team = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white text-center">
      <div className="mb-12">
        <div className="text-2xl text-[#0d1b6e] font-bold mb-2">Our Team</div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Expert CS Graduates Building Tomorrow's AI Engineers
        </h2>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Our instructors are accomplished engineers with 2:1+ CS degrees and real-world experience building AI solutions used globally.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  )
}

export default team;