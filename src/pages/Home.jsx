


import React from 'react';
import { CURRENT_COHORT } from '../config/program';
import Navbar from '../components/navBar'
import Hero from '../components/heroLand'
import Choose from '../components/whyChooseUs'
import About from '../components/aboutUs'
import Stats from '../components/stats'
import Course from '../components/bestSellingCourse'
import Scholarship from '../components/ScholarshipBanner'
import Team from '../components/team'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
import SEO from '../components/SEO'
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {

   const location = useLocation();
  const ourClassRef = useRef(null);
  
  useEffect(() => {
    if (location.state?.scrollTo === 'our-class') {
      setTimeout(() => {
        ourClassRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    }
  }, [location]);

  return (
    <div>
      <SEO
        title="AI & Computational Thinking Education for Ages 12-18"
        description={`World-class AI and computational thinking education for young learners aged 12-18. Taught by first-class CS graduates with proven AI/ML experience. 3-month intensive program starting ${CURRENT_COHORT}. Enroll now!`}
        keywords="AI education Nigeria, computational thinking, coding classes for kids, machine learning courses, software engineering for teens, tech education Lagos, coding bootcamp Nigeria, STEM education"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "IntelliGeeks - Home",
          "description": "World-class AI and computational thinking education for young learners",
          "url": "https://intelligeeksafrica.com/"
        }}
      />
      <Navbar />
      <Hero />
      <Choose />
      <About/>
      <Stats/>
      <Scholarship />
       <div ref={ourClassRef}>
        <Course />
      </div>
      <Team />
      <Testimonials />
      <Footer/>

    </div>
  );
};

export default Home;
