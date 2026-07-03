


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
        title="AI School in Ilorin Nigeria | Learn AI & Computational Thinking for Kids"
        description={`The #1 AI school in Ilorin, Nigeria. Your child learns computational thinking, AI, and software engineering in a 12-week intensive program. Expert instructors, real projects, small cohorts. Enrolling for ${CURRENT_COHORT}!`}
        keywords="AI school Ilorin, AI school Nigeria, learn AI Ilorin, learn AI Nigeria, learn AI for kids, computational thinking Ilorin, coding classes for kids Nigeria, software engineering for teens, AI education teenagers, tech school Ilorin, STEM Kwara State, AI training Nigeria"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "IntelliGeeks - AI School in Ilorin, Nigeria",
          "description": "The #1 AI school in Ilorin. Computational thinking, AI, and software engineering for teens aged 12-18.",
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
