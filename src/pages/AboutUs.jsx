
import Navbar from '../components/navBar'
import aboutImage from '../assets/aboutImg.webp';
import Stats from '../components/stats.jsx'
import OurClass from '../components/whyChooseUs.jsx'
import Team from '../components/team.jsx'
import Testimonials from '../components/testimonials.jsx'
import Footer from '../components/footer.jsx'
import SEO from '../components/SEO'
import { FaRocket, FaAward, FaBrain, FaUsers, FaCheckCircle, FaGraduationCap, FaChartLine, FaLightbulb } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <div>
      <SEO
        title="About IntelliGeeks — AI School in Ilorin, Nigeria"
        description="IntelliGeeks is the leading AI school in Ilorin, Nigeria. We teach computational thinking, AI, and software engineering to teens aged 12-18. Small cohorts of 20 students, taught by first-class CS graduates. Learn about our mission."
        keywords="about IntelliGeeks, AI school Ilorin, AI education Nigeria, computational thinking school Kwara, tech education Ilorin, elite AI school Nigeria"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About IntelliGeeks — AI School in Ilorin, Nigeria",
          "description": "The leading AI school in Ilorin. We teach computational thinking, AI, and software engineering to teens aged 12-18."
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0d1b6e] via-[#0d1b6e] to-[#0d1b6e] text-white py-20 px-6 md:px-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
            <FaAward className="text-yellow-400" />
            <span className="text-sm font-semibold">Elite AI & Software Engineering Education</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            About
            <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-200 to-white bg-clip-text text-transparent">
              IntelliGeeks
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing tech education for young minds, providing world-class training in AI and software engineering for students aged <strong className="text-white">12-18</strong>.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <FaUsers className="text-4xl text-yellow-400 mb-2 mx-auto" />
              <p className="text-3xl font-bold">20</p>
              <p className="text-sm text-blue-200">Students Per Cohort</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <FaGraduationCap className="text-4xl text-green-400 mb-2 mx-auto" />
              <p className="text-3xl font-bold">2:1+</p>
              <p className="text-sm text-blue-200">CS Graduate Instructors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <FaBrain className="text-4xl text-purple-400 mb-2 mx-auto" />
              <p className="text-3xl font-bold">16</p>
              <p className="text-sm text-blue-200">Weeks Intensive</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <FaRocket className="text-4xl text-pink-400 mb-2 mx-auto" />
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-blue-200">Practical Skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 px-6 md:px-16 py-20 overflow-hidden" id="about">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#0d1b6e] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#0d1b6e] rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src={aboutImage}
                  alt="IntelliGeeks team illustration"
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                  <span className="w-2 h-2 bg-[#0d1b6e] rounded-full"></span>
                  <span className="text-sm font-bold text-[#0d1b6e] uppercase tracking-wide">Our Story</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  Training Tomorrow's
                  <span className="block mt-2 text-[#0d1b6e]">
                    AI Engineers Today
                  </span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At IntelliGeeks, we're on a mission to transform how young people learn technology. Our elite program is designed exclusively for students aged 12-18, providing them with industry-level training in AI and software engineering—skills that will define their future.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe in quality over quantity. That's why we limit each cohort to just 20 students, ensuring every learner receives personalized mentorship and support from our team of expert CS graduates.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                <div className="bg-gradient-to-br from-blue-500 to-[#0d1b6e] text-white p-6 rounded-xl shadow-lg">
                  <FaLightbulb className="text-3xl mb-3" />
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-sm text-blue-100">
                    Empower the next generation with cutting-edge AI and software engineering skills.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
                  <FaChartLine className="text-3xl mb-3" />
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-sm text-purple-100">
                    Build a community of young innovators who shape the future of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#0d1b6e] rounded-full"></span>
              <span className="text-sm font-bold text-[#0d1b6e] uppercase tracking-wide">Our Differentiators</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just another coding class. Here's what sets IntelliGeeks apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-[#0d1b6e] rounded-xl flex items-center justify-center mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Highly Selective</h3>
              <p className="text-gray-600">
                Only 20 students per cohort, ensuring personalized attention and exceptional results for every learner.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                CS graduates with 2:1+ degrees and proven experience building world-class AI solutions in industry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <FaBrain className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intensive Curriculum</h3>
              <p className="text-gray-600">
                3-month program covering computational thinking, AI/ML fundamentals, and software engineering principles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-World Projects</h3>
              <p className="text-gray-600">
                Students build actual AI applications and software solutions, preparing them for real-world challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Incentives</h3>
              <p className="text-gray-600">
                Maintain 95%+ attendance for 10% cashback. The top student every cohort gets a full ₦200,000 refund.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Investment in Excellence</h3>
              <p className="text-gray-600">
                ₦200,000 program fee provides comprehensive, industry-level training worth far more than the cost.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <div className="bg-[#0d1b6e] text-white p-10 rounded-2xl shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                More Than Just Code
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                We don't just teach code—we nurture problem-solvers, innovators, and the AI engineers who will shape tomorrow's world. Join us in building the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <OurClass />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default AboutUs