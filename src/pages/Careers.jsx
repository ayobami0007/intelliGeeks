import React, { useRef, useState } from 'react';
import NavBar from '../components/navBar.jsx';
import Footer from '../components/footer.jsx';
import SEO from '../components/SEO';
import { FaSpinner } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Careers = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const degree = formData.get('degree');
    const university = formData.get('university');
    const yearsExperience = formData.get('yearsExperience');
    const currentRole = formData.get('currentRole');
    const linkedin = formData.get('linkedin');
    const portfolio = formData.get('portfolio');
    const coverLetter = formData.get('coverLetter');

    // Validation
    if (!name || !email || !phone || !degree || !university || !yearsExperience || !currentRole) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      // Add application to Firestore
      await addDoc(collection(db, 'career-applications'), {
        name,
        email,
        phone,
        degree,
        university,
        yearsExperience: parseInt(yearsExperience),
        currentRole,
        linkedin: linkedin || '',
        portfolio: portfolio || '',
        coverLetter: coverLetter || '',
        submittedAt: new Date().toISOString(),
        status: 'pending'
      });

      setLoading(false);
      setSubmitted(true);
      form.current.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <SEO
        title="Careers — Teach AI at IntelliGeeks Ilorin, Nigeria"
        description="Join IntelliGeeks as an AI and software engineering instructor. We're looking for first-class CS graduates with 3+ years experience to teach teens in Ilorin, Nigeria. Apply now."
        keywords="tech jobs Ilorin, software engineering instructor Nigeria, AI teacher Ilorin, teach coding Nigeria, careers IntelliGeeks"
      />
      <NavBar />

      {/* Hero Section */}
      <section className="bg-[#0d1b6e] text-white py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-4">
            Shape the Future of Tech Education
          </p>
          <p className="text-lg md:text-xl opacity-90">
            We're looking for exceptional software engineers to inspire the next generation
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
            Position: Software Engineering Instructor
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0d1b6e]">Minimum Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">✓</span>
                  <span>2:1 degree (or higher) in Computer Science or related field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">✓</span>
                  <span>3+ years of professional software engineering experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">✓</span>
                  <span>Strong programming skills in modern languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">✓</span>
                  <span>Passion for teaching and mentoring young minds</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">What We Offer</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">•</span>
                  <span>Competitive compensation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">•</span>
                  <span>Flexible working arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">•</span>
                  <span>Professional development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0d1b6e] font-bold mt-1">•</span>
                  <span>Make a real impact on young lives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-blue-50 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
            Submit Your Application
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Complete the form below to apply for this position
          </p>

          <form ref={form} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+234 911 261 2877"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Degree Classification */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Degree Classification <span className="text-red-500">*</span>
                </label>
                <select
                  name="degree"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select classification</option>
                  <option value="First Class">First Class</option>
                  <option value="2:1">2:1 (Upper Second)</option>
                  <option value="2:2">2:2 (Lower Second)</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              {/* University */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  University <span className="text-red-500">*</span>
                </label>
                <input
                  name="university"
                  type="text"
                  placeholder="University name"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  name="yearsExperience"
                  type="number"
                  min="3"
                  placeholder="e.g., 5"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Current Role */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Current/Most Recent Role <span className="text-red-500">*</span>
                </label>
                <input
                  name="currentRole"
                  type="text"
                  placeholder="e.g., Senior Software Engineer"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  LinkedIn Profile
                </label>
                <input
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Portfolio/GitHub */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Portfolio/GitHub
                </label>
                <input
                  name="portfolio"
                  type="url"
                  placeholder="https://github.com/yourusername"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Cover Letter */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Cover Letter / Why You'd Be a Great Fit
                </label>
                <textarea
                  name="coverLetter"
                  rows="6"
                  placeholder="Tell us about your experience, teaching philosophy, and why you want to join IntelliGeeks..."
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0d1b6e] hover:bg-[#0d1b6e] px-8 py-3 text-white rounded transition w-full text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
                {submitted && (
                  <p className="text-green-600 text-center mt-4 font-semibold">
                    ✅ Application submitted successfully! We'll be in touch soon.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
