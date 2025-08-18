import React from 'react'
import Navbar from '../components/navBar'
import aboutImage from '../assets/aboutImg.png';
import Stats from '../components/stats.jsx'
import OurClass from '../components/whyChooseUs.jsx'
import Team from '../components/team.jsx'
import Testimonials from '../components/testimonials.jsx'
import Footer from '../components/footer.jsx'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section
        className="text-gray-800 bg-gray-50 px-6 md:px-16 py-10 flex justify-center items-center"
        id="about"
        style={{ minHeight: '500px' }}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="IntelliGeeks team illustration"
              className="w-full h-auto object-contain rounded-xl max-h-[500px]"
            />
          </div>
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
            <h2 className="text-2xl text-blue-600 font-bold mb-2">About IntelliGeeks</h2>
            <h3 className="text-[34px] md:mb-16 mb-10 font-semibold">
              Unlock Your Potential with Future-Ready Digital Skills
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At IntelliGeeks, our mission is to empower learners of all backgrounds to thrive in the digital economy. We offer hands-on, industry-relevant courses, mentorship, and a vibrant community to help you master in-demand tech skills.
            </p>
            <ul className="list-disc ml-6 text-gray-600 text-base space-y-2">
              <li>Expert-led courses in coding, and Artificial Intelligence</li>
              <li>Personalized learning paths and real-world projects</li>
              <li>Supportive community and career guidance</li>
              <li>Flexible online learning to fit your schedule</li>
            </ul>
          </div>
        </div>
      </section>
      <Stats />
      <OurClass />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default AboutUs