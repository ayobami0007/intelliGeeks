import React from 'react'
import NavBar from '../components/navBar.jsx'
import Image from '../assets/contactImg.png'
import Faq from '../components/faq.jsx';
import Footer from '../components/footer.jsx'

const ContactUs = () => {
  return (
    <div>
      <NavBar />
     

<section className="min-h-screen flex items-center justify-center bg-blue-50 px-4 sm:px-8 md:px-16 py-10">
  <div className="   flex flex-col md:flex-row w-full max-w-7xl overflow-hidden">

    {/* Left */}
    <div className="w-full md:w-1/2 bg-gray-100 flex flex-col">
      <div className="w-full px-6 sm:px-10 pt-10">
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
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] "
        />
      </div>
    </div>

    <div className="w-full md:w-1/2 p-6 sm:p-8 bg-blue-50">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 text-gray-800 text-center md:text-left">
        We will be happy to help you
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            placeholder="Enter your company name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

   
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>


        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-700">Subject You Want to Discuss</label>
          <input
            type="text"
            placeholder="e.g. AI training for kids"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="border border-gray-300 rounded px-4 py-2 w-full"
          ></textarea>
        </div>

   
        <div className="md:col-span-2 text-center md:text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded transition w-full md:w-auto text-lg"
          >
            Submit Form
          </button>
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