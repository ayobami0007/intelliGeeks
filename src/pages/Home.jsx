


import React from 'react';
import Navbar from '../components/navBar'
import Hero from '../components/heroLand'
import Choose from '../components/whyChooseUs'
import About from '../components/aboutUs'
import Stats from '../components/stats'
import Course from '../components/bestSellingCourse'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'
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
      <Navbar />
      <Hero />
      <Choose />
      <About/>
      <Stats/>
       <div ref={ourClassRef}>
        <Course /> 
      </div>
      <Testimonials />
      <Footer/>

    </div>
  );
};

export default Home;
