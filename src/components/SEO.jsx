import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component for Dynamic Meta Tags
 * Use this component to set page-specific SEO metadata
 */
const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://intelligeeksafrica.com';

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | IntelliGeeks`;
    }

    // Update meta description
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('property', 'twitter:description', description);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update OG title
    if (title) {
      updateMetaTag('property', 'og:title', `${title} | IntelliGeeks`);
      updateMetaTag('property', 'twitter:title', `${title} | IntelliGeeks`);
    }

    // Update OG image
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
      updateMetaTag('property', 'twitter:image', ogImage);
    }

    // Update canonical URL
    const canonical = canonicalUrl || `${baseUrl}${location.pathname}`;
    updateCanonicalLink(canonical);
    updateMetaTag('property', 'og:url', canonical);
    updateMetaTag('property', 'twitter:url', canonical);

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Cleanup function to remove structured data when component unmounts
    return () => {
      if (structuredData) {
        removeStructuredData();
      }
    };
  }, [title, description, keywords, ogImage, canonicalUrl, structuredData, location]);

  // Helper function to update or create meta tags
  const updateMetaTag = (attribute, key, content) => {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  // Helper function to update canonical link
  const updateCanonicalLink = (url) => {
    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  };

  // Helper function to add structured data
  const addStructuredData = (data) => {
    removeStructuredData(); // Remove existing first
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data-page';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  };

  // Helper function to remove structured data
  const removeStructuredData = () => {
    const existingScript = document.getElementById('structured-data-page');
    if (existingScript) {
      existingScript.remove();
    }
  };

  return null; // This component doesn't render anything
};

export default SEO;

/**
 * Example usage:
 *
 * <SEO
 *   title="About Us"
 *   description="Learn about IntelliGeeks and our mission to provide world-class AI education"
 *   keywords="about intelligeeks, AI education company, tech education Nigeria"
 *   ogImage="https://intelligeeksafrica.com/images/about-og.jpg"
 *   structuredData={{
 *     "@context": "https://schema.org",
 *     "@type": "AboutPage",
 *     "name": "About IntelliGeeks"
 *   }}
 * />
 */
