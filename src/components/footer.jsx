import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="text-white">
      {/* Top CTA Section */}
      <div className="bg-black px-6 md:px-16 py-12 text-center flex">
        <h2 className="text-2xl md:text-3xl font-bold">
          Join the world’s largest online learning platform
        </h2>
        {/* <form className="flex flex-col sm:flex-row justify-center bg-red-300 items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="name@email.com"
            className="w-full sm:flex-1 px-4 py-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            Join now
          </button>
        </form> */}
            <div className="flex items-center bg-gray-300 px-4 py-2 rounded-md max-w-md mx-auto">
      {/* Envelope Icon */}
      <FaEnvelope className="text-gray-700 text-lg mr-3" />

      {/* Email Input */}
      <input
        type="email"
        placeholder="name@email.com"
        className="flex-grow bg-transparent outline-none text-sm text-gray-800 placeholder-gray-600"
      />

      {/* Join Now Button */}
      <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Join now
      </button>
    </div>
      </div>

      

     
      <div className=" flex bg-blue-700 flex-col md:flex-row text-white px-6 md:px-16 py-16 justify-between w-full ">
        
        <div>

          <p className="text-xl text-white/80">
           Unlock Digital Mastery Effortlessly! <br/>Explore and enhance your skills<br/> with our user-friendly platform.
          </p>
        </div>
         
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  ">
       
        <div>
          <h4 className=" text-4xl mb-4">Quick links</h4>
          <ul className="space-y-2 text-xl text-white/80">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Our Class</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

    
        <div>
          <h4 className="text-4xl mb-4">Resources</h4>
          <ul className="space-y-2 text-xl text-sm text-white/80">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-4xl mb-4">Social media</h4>
          <div className="flex gap-4 text-white text-lg">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>  
         
        </div>

       
      </div>
 
     </footer>
  );
};

export default Footer;
