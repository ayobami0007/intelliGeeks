import React from 'react'
import Navbar from '../components/navBar'
import aboutImage from '../assets/aboutImg.png';
import Stats from '../components/stats.jsx'
import OurClass from '../components/whyChooseUs.jsx'
import Team from '../components/team.jsx'
import Testimonials from '../components/testimonials.jsx'
import Footer from '../components/footer.jsx'

const Privacy = () => {
return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="text-gray-800 bg-gray-50 px-6 md:px-16 py-10 flex-1" id="privacy">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    At IntelliGeeks Online School, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
                </p>
                <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Personal information such as name, email address, and phone number provided during registration or contact forms.</li>
                    <li>Usage data including pages visited, time spent, and interactions with our site.</li>
                    <li>Payment information for course enrollments (processed securely via third-party providers).</li>
                </ul>
                <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>To provide and improve our educational services.</li>
                    <li>To communicate important updates, offers, and information.</li>
                    <li>To ensure the security and integrity of our platform.</li>
                </ul>
                <h2 className="text-xl font-semibold mt-8 mb-2">Sharing of Information</h2>
                <p className="mb-4">
                    We do not sell or share your personal information with third parties except as required by law or to trusted partners who assist in operating our website and delivering services.
                </p>
                <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, update, or delete your personal information. Please contact us at <a href="mailto:support@intelligeeks.com" className="text-blue-600 underline">support@intelligeeks.com</a> for any requests.
                </p>
                <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                </p>
                <p className="mt-8 text-sm text-gray-500">
                    Effective Date: August 16, 2025
                </p>
            </div>
        </section>
        <Footer />
    </div>
)
}

export default Privacy