import React from 'react'
import Navbar from '../components/navBar'
import aboutImage from '../assets/aboutImg.svg';
import Stats from '../components/stats.jsx'
import OurClass from '../components/whyChooseUs.jsx'
import Team from '../components/team.jsx'
import Testimonials from '../components/testimonials.jsx'
import Footer from '../components/footer.jsx'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
         <section className="text-gray-800 bg-gray-50 px-6 md:px-16  py-10 " id="about">
            <div className="flex flex-col gap-12 lg:flex-row  ">
      
                
              <div className="w-full lg:w-1/2">
                <img
                  src={aboutImage}
                  alt="About us illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Left side */}
              <div className="w-full space-y-3 lg:w-1/2  ">
                <h2 className="text-3xl md:text-2xl text-blue-400">About Us</h2>
                <h3 className="text-[34px] md:mb-16 mb-10  font-semibold ">E-Learning Platform for Digital Skills</h3>
                <p className="text-gray-600 text-xl leading-relaxed ">
                 Empower yourself with the knowledge and skills gained through online education! The key to your future! Empower yourself with the knowledge and skills gained through online education! The key to your future!
                </p>
               
              </div>
      
            
            </div>
          </section>
          <Stats/>
          <OurClass/>
          <Team/>
          <Testimonials/>
          <Footer/>
    </div>
  )
}

export default AboutUs