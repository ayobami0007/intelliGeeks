import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { FaClock, FaArrowLeft, FaArrowRight, FaTag } from 'react-icons/fa';

const categoryColors = {
  'For Parents': 'bg-blue-100 text-[#0d1b6e]',
  'Education': 'bg-green-100 text-green-700',
  'Teaching & Learning': 'bg-purple-100 text-purple-700',
  'Curriculum': 'bg-orange-100 text-orange-700',
};

// Render markdown-lite: bold, paragraphs, headers
function renderContent(content) {
  return content
    .trim()
    .split('\n')
    .reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        acc.push(<div key={acc.length} className="mb-4" />);
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2, -2).includes('**')) {
        acc.push(
          <h3 key={acc.length} className="text-xl font-bold text-gray-900 mt-8 mb-3">
            {trimmed.slice(2, -2)}
          </h3>
        );
      } else {
        // inline bold
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={i}>{part.slice(2, -2)}</strong>
            : part
        );
        acc.push(
          <p key={acc.length} className="text-gray-700 leading-relaxed text-lg mb-0">
            {parts}
          </p>
        );
      }
      return acc;
    }, []);
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article not found</h1>
          <p className="text-gray-500 mb-8">This article does not exist or may have been moved.</p>
          <Link to="/blog" className="text-[#0d1b6e] font-semibold hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const prevPost = blogPosts[postIndex + 1] || null;
  const nextPost = blogPosts[postIndex - 1] || null;

  return (
    <div>
      <SEO
        title={`${post.title} — IntelliGeeks Blog`}
        description={post.excerpt}
        keywords={`IntelliGeeks blog, ${post.category}, tech education Nigeria`}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0d1b6e] text-white px-6 md:px-16 py-20">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors text-sm"
          >
            <FaArrowLeft /> Back to Blog
          </button>
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-white/10 text-white'}`}>
              {post.category}
            </span>
            <span className="text-blue-200 text-sm">{post.date}</span>
            <span className="flex items-center gap-1 text-blue-200 text-sm">
              <FaClock className="text-xs" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <main className="bg-white px-6 md:px-16 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt */}
          <p className="text-xl text-gray-500 italic border-l-4 border-blue-500 pl-5 mb-10 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Body */}
          <article className="prose-custom">
            {renderContent(post.content)}
          </article>

          {/* Divider */}
          <hr className="my-14 border-gray-200" />

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex-1 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-xl p-5 transition-colors"
              >
                <p className="text-xs text-gray-400 mb-1 flex items-center gap-1"><FaArrowLeft /> Previous</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0d1b6e] leading-snug">{prevPost.title}</p>
              </Link>
            ) : <div className="flex-1" />}

            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex-1 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-xl p-5 text-right transition-colors"
              >
                <p className="text-xs text-gray-400 mb-1 flex items-center gap-1 justify-end">Next <FaArrowRight /></p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0d1b6e] leading-snug">{nextPost.title}</p>
              </Link>
            ) : <div className="flex-1" />}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-[#0d1b6e] text-white rounded-2xl p-8 text-center">
            <FaTag className="text-yellow-300 text-2xl mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Ready to give your child a head start?</h3>
            <p className="text-blue-100 text-sm mb-5">
              IntelliGeeks teaches children aged 12–18 how to build software and understand AI — in small classes, with experienced instructors.
            </p>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 bg-white text-[#0d1b6e] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Reserve a Spot <FaArrowRight />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
