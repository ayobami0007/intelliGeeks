import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { FaClock, FaArrowRight, FaTag } from 'react-icons/fa';

const categoryColors = {
  'For Parents': 'bg-blue-100 text-[#0d1b6e]',
  'Education': 'bg-green-100 text-green-700',
  'Teaching & Learning': 'bg-purple-100 text-purple-700',
  'Curriculum': 'bg-orange-100 text-orange-700',
};

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div>
      <SEO
        title="Blog — Insights for Parents & Students"
        description="Practical articles about technology education, parenting in the AI age, and what it takes to prepare young people for a future shaped by software and artificial intelligence."
        keywords="tech education blog, AI for kids, coding for teenagers, parent guide technology, IntelliGeeks blog"
      />
      <Navbar />

      {/* Header */}
      <section className="bg-[#0d1b6e] text-white px-6 md:px-16 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
            <FaTag className="text-yellow-300 text-sm" />
            <span className="text-sm font-semibold uppercase tracking-wide">IntelliGeeks Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Thinking About the Future
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Honest articles for parents and students — about technology, education, and what it actually takes to prepare young people for what is ahead.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Featured post */}
          <Link
            to={`/blog/${featured.slug}`}
            className="group block bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-12 hover:shadow-lg transition-shadow"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category] || 'bg-gray-100 text-gray-600'}`}>
                  {featured.category}
                </span>
                <span className="text-sm text-gray-400">{featured.date}</span>
                <span className="flex items-center gap-1 text-sm text-gray-400">
                  <FaClock className="text-xs" /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-[#0d1b6e] transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[#0d1b6e] font-semibold group-hover:gap-3 transition-all">
                Read article <FaArrowRight className="text-sm" />
              </span>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0d1b6e] transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <FaClock className="text-xs" /> {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
