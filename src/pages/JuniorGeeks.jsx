import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { WHATSAPP_LINK } from '../config/program';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import qrCode from '../assets/junior_geeks_qr.jpeg';

const JUNIOR_GEEKS_GROUP = 'https://chat.whatsapp.com/KPlfTOgLmiU3oGyD5NgXlw?mode=gi_t';

export default function JuniorGeeks() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await addDoc(collection(db, 'junior_geeks_interest'), {
        ...form,
        submittedAt: serverTimestamp(),
      });
      setStatus('success');
      setForm({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <SEO
        title="Junior Geeks Club — Coming Soon | IntelliGeeks"
        description="A foundational AI learning club for children aged 9–12. Launching soon. Join the early interest list to get launch updates, enrollment details, and free webinar access."
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0d1b6e] text-white py-20 px-6 md:px-16 text-center">
        <span className="inline-block bg-yellow-400 text-[#0d1b6e] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Launching Soon
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
          Junior Geeks Club
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          A foundational AI learning club for children aged <strong className="text-white">9–12</strong> that develops
          computational thinking, structured problem-solving, and logical reasoning
          through hands-on, guided learning experiences.
        </p>
      </section>

      {/* What it is */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🧠',
              title: 'Computational Thinking',
              desc: 'Children learn to break problems into steps and think like a programmer — before they ever write code.',
            },
            {
              icon: '🔍',
              title: 'Structured Problem-Solving',
              desc: 'Guided exercises that teach kids how to approach challenges systematically, not randomly.',
            },
            {
              icon: '⚙️',
              title: 'Logical Reasoning',
              desc: 'Age-appropriate activities that build the mental models needed for maths, science, and tech careers.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#f5f7ff] rounded-2xl p-7 text-center">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold text-[#0d1b6e] mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interest List */}
      <section className="bg-[#f5f7ff] py-20 px-6 md:px-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b6e] mb-3">
            Be the First to Know
          </h2>
          <p className="text-gray-600 mb-3">
            Join the early interest list and receive:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-8 inline-block text-left">
            {['Launch updates', 'Enrollment details', 'Free webinar access'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0d1b6e] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="text-4xl mb-3">&#127881;</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">You're on the list!</h3>
              <p className="text-green-700 text-sm">
                We'll reach out as soon as Junior Geeks Club is ready to launch. Keep an eye on your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 text-left space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Parent or guardian name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1b6e]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1b6e]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="08012345678"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d1b6e]"
                />
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#0d1b6e] hover:bg-[#162491] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Submitting...' : 'Join the Interest List'}
              </button>
              <p className="text-xs text-gray-400 text-center">No spam. Unsubscribe any time.</p>
            </form>
          )}
        </div>
      </section>

      {/* WhatsApp Group */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1b6e] mb-3">
            Join the WhatsApp Community
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            Stay in the loop with launch announcements, early access details, and parent conversations.
            Scan the QR code or tap the button to join.
          </p>
          <div className="flex flex-col items-center gap-6">
            <img
              src={qrCode}
              alt="Junior Geeks Club WhatsApp Group QR Code"
              className="w-48 h-48 object-cover rounded-2xl shadow-md border border-gray-200"
            />
            <a
              href={JUNIOR_GEEKS_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-colors text-base shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join the WhatsApp Group
            </a>
          </div>
        </div>
      </section>

      {/* Ages 12-18 CTA */}
      <section className="bg-[#0d1b6e] py-12 px-6 md:px-16 text-center text-white">
        <p className="text-base md:text-lg text-white/80 mb-4">
          Do you have a teenager aged 12–18? Our main IntelliGeeks program is already running.
        </p>
        <a
          href="/"
          className="inline-block bg-yellow-400 text-[#0d1b6e] font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors text-sm"
        >
          Learn About the Main Program
        </a>
      </section>

      <Footer />
    </>
  );
}
