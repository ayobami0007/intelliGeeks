


import React from 'react';
import Navbar from '../components/navBar'
import Hero from '../components/heroLand'
import Choose from '../components/whyChooseUs'
import About from '../components/aboutUs'
import Stats from '../components/stats'
import Course from '../components/bestSellingCourse'
import Testimonials from '../components/testimonials'
import Footer from '../components/footer'

const Landing1 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <About/>
      <Stats/>
      <Course/>
      <Testimonials />
      <Footer/>

    </div>
  );
};

export default Landing1;
