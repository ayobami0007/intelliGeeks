import NavBar from '../components/navBar.jsx'
import Faq from '../components/faq.jsx';
import Footer from '../components/footer.jsx'
import SEO from '../components/SEO'
import { useEffect } from 'react';
import { FaWhatsapp, FaCheckCircle, FaPhone, FaEnvelope, FaCalendarAlt, FaUsers, FaCertificate } from 'react-icons/fa';
import { CURRENT_COHORT, COHORT_START_DATE, WHATSAPP_LINK } from '../config/program';



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
});
  return (
    <div>
      <SEO
        title="Contact Us - Get in Touch"
        description="Have questions about IntelliGeeks AI education program? Contact us to learn more about our 3-month intensive course for ages 12-18. Enroll your child today!"
        keywords="contact intelligeeks, AI education inquiries, enroll child, tech education Nigeria, course information"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact IntelliGeeks"
        }}
      />
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0d1b6e] via-[#0d1b6e] to-[#0d1b6e] text-white py-20 px-6 md:px-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Enrollment Open for {CURRENT_COHORT}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Secure Your Child's Spot in the
            <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-200 to-white bg-clip-text text-transparent">
              Future of Technology
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Only <strong className="text-white">20 seats available</strong> per cohort. Don't miss this opportunity to give your child world-class AI and software engineering training.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <FaCalendarAlt className="text-yellow-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm text-blue-200">Starts</p>
                <p className="font-bold text-lg">{COHORT_START_DATE}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <FaUsers className="text-green-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm text-blue-200">Class Size</p>
                <p className="font-bold text-lg">20 Students Max</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <FaCertificate className="text-purple-400 text-2xl" />
              <div className="text-left">
                <p className="text-sm text-blue-200">Duration</p>
                <p className="font-bold text-lg">12 Weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 px-4 sm:px-8 md:px-16 py-20 overflow-hidden" id='contact-form'>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left Side - Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                  <span className="w-2 h-2 bg-[#0d1b6e] rounded-full"></span>
                  <span className="text-sm font-bold text-[#0d1b6e] uppercase tracking-wide">Get Started</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                  Enroll Your Child Today
                </h2>
                <p className="text-lg text-gray-600">
                  Join our elite AI & Software Engineering program designed exclusively for students aged 12-18.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Only 20 Students Per Cohort</h4>
                    <p className="text-sm text-gray-600">Personalized attention and mentorship</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Expert CS Graduate Instructors</h4>
                    <p className="text-sm text-gray-600">Learn from industry professionals with 2:1+ honors</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">100% Refund for Top Student</h4>
                    <p className="text-sm text-gray-600">Best student every cohort gets a full refund</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-blue-100">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">10% Cashback for Attendance</h4>
                    <p className="text-sm text-gray-600">Maintain 95%+ attendance throughout the program</p>
                  </div>
                </div>
              </div>

              {/* Program Investment */}
              <div className="bg-[#0d1b6e] text-white p-6 rounded-xl shadow-xl">
                <p className="text-sm text-blue-100 mb-1">Program Investment</p>
                <p className="text-4xl font-bold mb-2">₦200,000</p>
                <p className="text-blue-100">or $130 USD</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-[#0d1b6e] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">info@intelligeeksafrica.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-[#0d1b6e] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone / WhatsApp</p>
                    <p className="font-semibold text-gray-900">+234 802 533 4598</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - WhatsApp CTA */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 flex flex-col items-center text-center gap-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full">
                <FaWhatsapp className="text-white text-4xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Chat With Us on WhatsApp
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The fastest way to secure your child's spot is a quick WhatsApp message.
                  Our team typically responds within a few hours during business hours.
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Start a WhatsApp Chat
              </a>

              <div className="w-full border-t border-gray-100 pt-6 space-y-4 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center mb-2">What to mention</p>
                {[
                  "Your child's name and age",
                  "Any questions about the curriculum",
                  "Payment or enrollment details",
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#f5f7ff] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Prefer email or a call?</p>
                <p className="text-sm font-semibold text-[#0d1b6e]">info@intelligeeksafrica.com</p>
                <p className="text-sm font-semibold text-[#0d1b6e]">+234 802 533 4598</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <Footer />
    </div>
  )
}

export default ContactUs