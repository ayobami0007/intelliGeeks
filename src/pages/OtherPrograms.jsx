import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../config/program';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import SEO from '../components/SEO';

const programs = [
  {
    badge: 'Weekday Intensive',
    badgeColor: 'bg-orange-100 text-orange-700',
    title: 'Terminal Class Programme',
    subtitle: 'For JSS3 & SS3 Students on Study Break',
    description:
      'Students in terminal classes (JSS3 and SS3) often have extended periods at home before resuming in their new class. This programme makes that time count. Instead of idle months, students spend weekdays building real tech skills — Python, computational thinking, and problem-solving foundations — so they resume ahead of their peers.',
    highlights: [
      { icon: '📅', label: 'Schedule', value: 'Weekdays — tailored around school break calendars' },
      { icon: '🎯', label: 'Target', value: 'JSS3 students moving to SS1, SS3 students awaiting JAMB/post-secondary' },
      { icon: '⏱️', label: 'Duration', value: 'Aligned with break period — typically 4–8 weeks' },
      { icon: '🐍', label: 'Focus', value: 'Python, computational thinking, logical reasoning' },
      { icon: '📍', label: 'Format', value: 'Online, live sessions with assignments' },
    ],
    cta: {
      label: 'Enrol Now — Contact Us',
      href: '/contact',
      external: false,
    },
    note: 'Cohort dates are announced ahead of each school break cycle. Contact us to be notified for the next intake.',
  },
  {
    badge: 'Private Classes',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'One-on-One Private Tutoring',
    subtitle: 'Your Pace. Your Schedule. Your Goals.',
    description:
      'For students who want focused, personal attention outside of the group cohort setting. Private classes are fully customised around the student\'s current level, learning speed, and specific goals — whether that\'s accelerating through the curriculum, getting deeper into AI, or preparing for a specific project or competition.',
    highlights: [
      { icon: '👤', label: 'Format', value: 'Dedicated 1:1 sessions with a senior IntelliGeeks instructor' },
      { icon: '📋', label: 'Curriculum', value: 'Fully customised to the student\'s level and goals' },
      { icon: '🕐', label: 'Schedule', value: 'Flexible — arranged directly with your instructor' },
      { icon: '💰', label: 'Pricing', value: 'Custom — based on frequency and duration of sessions' },
      { icon: '🏆', label: 'Best For', value: 'Fast learners, catch-up students, or goal-specific training' },
    ],
    cta: {
      label: 'Chat With Us on WhatsApp',
      href: WHATSAPP_LINK,
      external: true,
    },
    note: 'Pricing is discussed and agreed upon directly. Reach out via WhatsApp to get started or ask any questions.',
  },
];

export default function OtherPrograms() {
  return (
    <>
      <SEO
        title="Other Programs | IntelliGeeks"
        description="Terminal Class Weekday Programme for JSS3 and SS3 students, and private one-on-one tutoring with custom scheduling and pricing."
      />
      <Navbar />

      {/* Header */}
      <section className="bg-[#0d1b6e] text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Other Programmes</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Beyond our flagship cohort, we offer focused programmes for students at specific
          life stages and those who learn best in a private setting.
        </p>
      </section>

      {/* Programme Cards */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto space-y-14">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-[#f5f7ff] rounded-2xl overflow-hidden shadow-sm">
              {/* Top stripe */}
              <div className="bg-[#0d1b6e] px-8 py-6">
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${prog.badgeColor}`}>
                  {prog.badge}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{prog.title}</h2>
                <p className="text-white/70 mt-1">{prog.subtitle}</p>
              </div>

              <div className="px-8 py-8">
                <p className="text-gray-700 leading-relaxed mb-8">{prog.description}</p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {prog.highlights.map(({ icon, label, value }) => (
                    <div key={label} className="bg-white rounded-xl p-4 flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-[#0d1b6e] uppercase tracking-wide">{label}</p>
                        <p className="text-sm text-gray-700 mt-0.5">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 italic mb-6">{prog.note}</p>

                {prog.cta.external ? (
                  <a
                    href={prog.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#0d1b6e] hover:bg-[#162491] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                  >
                    {prog.cta.label}
                  </a>
                ) : (
                  <Link
                    to={prog.cta.href}
                    className="inline-block bg-[#0d1b6e] hover:bg-[#162491] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                  >
                    {prog.cta.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Junior Geeks Club teaser */}
      <section className="bg-yellow-400 py-12 px-6 md:px-16">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0d1b6e] mb-1">Coming Soon</p>
            <h3 className="text-2xl font-bold text-[#0d1b6e]">Junior Geeks Club — Ages 9–12</h3>
            <p className="text-[#0d1b6e]/80 text-sm mt-1">
              Foundational computational thinking and AI literacy for younger learners.
            </p>
          </div>
          <Link
            to="/junior-geeks"
            className="flex-shrink-0 bg-[#0d1b6e] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#162491] transition-colors text-sm"
          >
            Join the Interest List
          </Link>
        </div>
      </section>

      {/* Main programme CTA */}
      <section className="bg-[#0d1b6e] py-12 px-6 md:px-16 text-center text-white">
        <p className="text-base md:text-lg text-white/80 mb-4">
          Looking for the main 12-week IntelliGeeks cohort for ages 12–18?
        </p>
        <a
          href="/"
          className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#0d1b6e] transition-colors text-sm"
        >
          View the Main Programme
        </a>
      </section>

      <Footer />
    </>
  );
}
