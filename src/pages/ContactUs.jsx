import React from 'react'
import NavBar from '../components/navBar.jsx'
import Image from '../assets/contactImg.png'
import Faq from '../components/faq.jsx';
import Footer from '../components/footer.jsx'
import { useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { FaSpinner } from 'react-icons/fa';



const ContactUs = () => {
useEffect(()=>{
  const hash = window.location.hash;
  if(hash ===  '#contact-form'){
    const el = document.getElementById('contact-form');
    if (el){
      setTimeout(() => {
        el.scrollIntoView({behavior : 'smooth'})
        
      }, 300);
    }
  }
})



  const form = useRef();
const [loading, setLoading] = useState(false);
const [sent, setSent] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
    const formData = new FormData(form.current);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const company = formData.get('company');
  const title = formData.get('title');
  const message = formData.get('message');

  if (!name || !email || !phone || !company || !title || !message) {
    alert("Please fill in all fields.");
    return;
  }
  setLoading(true);

  emailjs.sendForm(
    'service_5whxf7c',
      'template_nrlb8e9',
    form.current,
    'EzRvhVIDlYg7kkfK7'
  )
    .then(() => {
      setLoading(false);
      setSent(true);
      form.current.reset();
    }, (error) => {
      console.error('Email error:', error.text);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    });
};
  return (
    <div>
      <NavBar />
     

<section className="min-h-screen flex items-center justify-center bg-blue-50 px-4 sm:px-8 md:px-16 py-10">
  <div className="   flex flex-col md:flex-row w-full max-w-7xl overflow-hidden" id='contact-form'>

    {/* Left */}
    <div className="w-full md:w-1/2 bg-gray-100 flex flex-col ">
      <div className="w-full px-6 sm:px-10 pt-10 ">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 text-gray-800">
          What Do You Need?
        </h2>
        <div className="flex flex-col gap-4 text-gray-700 text-base sm:text-lg">
          <label className="flex items-center gap-2">
            <input type="radio" name="need" className="accent-blue-600" />
            Consulting Services
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="need" className="accent-blue-600" />
            Question & help
          </label>
        </div>
      </div>

      <div className="mt-6">
        <img
          src={Image}
          alt="Support"
          className="w-full h-[250px] sm:h-[350px] md:h-[440px]    "
        />
      </div>
    </div>

    <div className="w-full md:w-1/2 p-6 sm:p-8 bg-blue-50">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-8 text-gray-800 text-center md:text-left">
        We will be happy to help you
      </h2>

      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4" >
        
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
          <input name ="name"
            type="text"
            placeholder="Enter your full name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Company Name</label>
          <input
          name ="company"
            type="text"
            placeholder="Enter your company name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

   
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
          <input
          name = "phone"
            type="text"
            placeholder="Enter your phone number"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
          name="email"
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>


        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-700">Subject You Want to Discuss</label>
          <input
          name ="title"
            type="text"
            placeholder="e.g. AI training for kids"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea name = "message"
            rows="6"
            placeholder="Write your message here..."
            className="border border-gray-300 rounded px-4 py-2 w-full"
          ></textarea>
        </div>

   
        <div className="md:col-span-2 text-center md:text-right">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-800 px-6 py-2  text-white rounded transition w-full md:w-auto text-lg"
          >
            {loading ? (
              <>
              <FaSpinner className='animate-spin'/> sending......
              </>
            ) : (
            'Submit Form'
              
            )}
          </button>
          {sent && (
  <p className="text-green-600 text-sm mt-2">✅ Message sent successfully! we wil contact you via your email</p>
)}

        </div>
      </form>
    </div>
  </div>
</section>


      <Faq />
      <Footer />
    </div>
  )
}

export default ContactUs