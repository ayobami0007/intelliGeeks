// import React from 'react'
// import Navbar from '../components/navBar'
// import Hero from '../components/heroLand'
// const Landing1 = () => {
//   return (
//     <div>
//         <Navbar/>
//         <Hero/>
//     </div>
//   )
// }

// export default Landing1


import React from 'react';
import Navbar from '../components/navBar'
import Hero from '../components/heroLand'
import Choose from '../components/whyChooseUs'
import About from '../components/aboutUs'
import Stats from '../components/stats'
import Course from '../components/bestSellingCourse'
import Testimonials from '../components/testimonials'

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

    </div>
  );
};

export default Landing1;
