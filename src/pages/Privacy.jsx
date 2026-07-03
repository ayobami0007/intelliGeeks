import { useEffect } from 'react'
import Navbar from '../components/navBar'
import Footer from '../components/footer.jsx'
import SEO from '../components/SEO'

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

return (
    <div className="flex flex-col min-h-screen">
        <SEO
          title="Privacy Policy - IntelliGeeks"
          description="Privacy policy for IntelliGeeks AI & Software Engineering Program. Learn how we protect your data and privacy."
          keywords="privacy policy, data protection, intelligeeks privacy"
        />
        <Navbar />
        <section className="text-gray-800 bg-gray-50 px-6 md:px-16 py-10 flex-1" id="privacy">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-8">Effective Date: January 14, 2026</p>

                <div className="space-y-6">
                    <div>
                        <p className="mb-4 text-lg">
                            At IntelliGeeks Online School, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our educational services.
                        </p>
                        <p className="mb-4">
                            By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>

                        <h3 className="text-xl font-semibold mt-4 mb-2">1.1 Personal Information</h3>
                        <p className="mb-2">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc ml-6 mb-4 space-y-1">
                            <li>Name, email address, phone number, and mailing address</li>
                            <li>Date of birth (for age verification and student records)</li>
                            <li>Parent or guardian information (for students under 18)</li>
                            <li>Payment and billing information</li>
                            <li>Profile information and preferences</li>
                            <li>Communications with us, including support requests and feedback</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-4 mb-2">1.2 Automatically Collected Information</h3>
                        <p className="mb-2">When you access our services, we automatically collect certain information, including:</p>
                        <ul className="list-disc ml-6 mb-4 space-y-1">
                            <li>Device information (IP address, browser type, operating system)</li>
                            <li>Usage data (pages visited, time spent, features used)</li>
                            <li>Cookies and similar tracking technologies</li>
                            <li>Location data (with your consent)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-4 mb-2">1.3 Educational Data</h3>
                        <ul className="list-disc ml-6 mb-4 space-y-1">
                            <li>Course enrollment and progress information</li>
                            <li>Assignment submissions and grades</li>
                            <li>Learning preferences and educational history</li>
                            <li>Attendance and participation records</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
                        <p className="mb-2">We use the information we collect to:</p>
                        <ul className="list-disc ml-6 mb-4 space-y-1">
                            <li>Provide, maintain, and improve our educational services</li>
                            <li>Process enrollment, payments, and manage your account</li>
                            <li>Deliver course content and track learning progress</li>
                            <li>Communicate with you about courses, updates, and promotional offers</li>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Personalize your learning experience</li>
                            <li>Analyze usage patterns to improve our platform</li>
                            <li>Detect, prevent, and address technical issues and fraud</li>
                            <li>Comply with legal obligations and enforce our terms of service</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">3. Information Sharing and Disclosure</h2>
                        <p className="mb-4">
                            We do not sell your personal information. We may share your information in the following circumstances:
                        </p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Service Providers</h3>
                        <p className="mb-4">
                            We work with third-party service providers who perform services on our behalf, including payment processing, email delivery, hosting services, customer service, and analytics. These providers have access to your information only to perform specific tasks and are obligated to protect your information.
                        </p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Educational Partners</h3>
                        <p className="mb-4">
                            With your consent, we may share educational progress and completion certificates with educational institutions or employers.
                        </p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">3.3 Legal Requirements</h3>
                        <p className="mb-4">
                            We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                        </p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">3.4 Business Transfers</h3>
                        <p className="mb-4">
                            In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
                        <p className="mb-4">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul className="list-disc ml-6 mb-4 space-y-1">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication procedures</li>
                            <li>Secure payment processing through PCI-DSS compliant providers</li>
                        </ul>
                        <p className="mb-4">
                            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">5. Your Rights and Choices</h2>
                        <p className="mb-2">You have the following rights regarding your personal information:</p>
                        <ul className="list-disc ml-6 mb-4 space-y-1">
                            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                            <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                            <li><strong>Cookie Preferences:</strong> Manage cookie settings through your browser</li>
                        </ul>
                        <p className="mb-4">
                            To exercise these rights, please contact us at <a href="mailto:privacy@intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">info@intelligeeksafrica.com</a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">6. Children's Privacy</h2>
                        <p className="mb-4">
                            We are committed to protecting the privacy of children. Our services may be used by students under the age of 18 with parental consent. We comply with applicable laws regarding children's privacy, including the Children's Online Privacy Protection Act (COPPA) where applicable.
                        </p>
                        <p className="mb-4">
                            If you are a parent or guardian and believe your child has provided personal information without consent, please contact us immediately at <a href="mailto:info@intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">info@intelligeeksafrica.com</a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">7. International Data Transfers</h2>
                        <p className="mb-4">
                            Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">8. Cookies and Tracking Technologies</h2>
                        <p className="mb-4">
                            We use cookies and similar tracking technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our services.
                        </p>
                        <p className="mb-2">Types of cookies we use:</p>
                        <ul className="list-disc ml-6 mb-4 space-y-1">
                            <li><strong>Essential cookies:</strong> Necessary for the website to function</li>
                            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site</li>
                            <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
                            <li><strong>Marketing cookies:</strong> Deliver relevant advertisements (with consent)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">9. Data Retention</h2>
                        <p className="mb-4">
                            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Educational records may be retained longer to maintain transcripts and certificates.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">10. Third-Party Links</h2>
                        <p className="mb-4">
                            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">11. Changes to This Privacy Policy</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by posting the updated policy on this page and updating the effective date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
                        <p className="mb-4">
                            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <p className="mb-2"><strong>IntelliGeeks Online School</strong></p>
                            <p className="mb-1">Email: <a href="mailto:info@intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">info@intelligeeksafrica.com</a></p>
                            <p className="mb-1">Support: <a href="mailto:info@intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">info@intelligeeksafrica.com</a></p>
                            <p>Website: <a href="https://intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">www.intelligeeksafrica.com</a></p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-8">
                        <p className="text-sm">
                            <strong>Your Privacy Matters:</strong> We are committed to transparency and protecting your rights. If you have any concerns about how we handle your information, please don't hesitate to reach out to us.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
)
}

export default Privacy