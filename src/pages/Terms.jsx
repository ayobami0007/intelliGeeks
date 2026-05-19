import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navBar'
import Footer from '../components/footer.jsx'
import SEO from '../components/SEO'
import { CURRENT_COHORT } from '../config/program'

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Terms and Conditions - IntelliGeeks"
        description="Terms and conditions for IntelliGeeks AI & Software Engineering Program for students aged 12-18."
        keywords="terms and conditions, intelligeeks terms, program terms, enrollment terms"
      />
      <Navbar />
      <section className="text-gray-800 bg-gray-50 px-6 md:px-16 py-10 flex-1" id="terms">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: January 27, 2026</p>

          <div className="space-y-6">
            <div>
              <p className="mb-4 text-lg">
                Welcome to IntelliGeeks! These Terms and Conditions ("Terms") govern your access to and use of our educational services, website, and platform. By enrolling in our program or using our services, you agree to be bound by these Terms.
              </p>
              <p className="mb-4">
                Please read these Terms carefully before using our services. If you do not agree with these Terms, you may not access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using IntelliGeeks services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are under 18 years of age, your parent or legal guardian must review and accept these Terms on your behalf.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">2.1 Age Requirements</h3>
              <p className="mb-4">
                Our program is designed for students aged 12-18 years old. Students under 18 must have parental or guardian consent to enroll and participate in the program.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">2.2 Enrollment Requirements</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Students must be between 12-18 years of age</li>
                <li>Parent/guardian consent required for students under 18</li>
                <li>Access to required technology (laptop and internet connection)</li>
                <li>Commitment to attend scheduled sessions and complete assignments</li>
                <li>Payment of program fees as outlined in Section 4</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">3. Program Structure and Services</h2>

              <h3 className="text-xl font-semibold mt-4 mb-2">3.1 Program Overview</h3>
              <p className="mb-2">The IntelliGeeks program includes:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>3-month intensive AI & Software Engineering curriculum</li>
                <li>Three (3) live sessions per week (Monday, Wednesday, Friday)</li>
                <li>Access to course materials, recordings, and resources</li>
                <li>Expert instruction from CS graduates with 2:1+ degrees</li>
                <li>Limited cohort size of 20 students maximum</li>
                <li>Certificate of completion upon successful program completion</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">3.2 Course Content</h3>
              <p className="mb-2">The program covers three main modules:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li><strong>Module 1:</strong> Computational Thinking (3 weeks)</li>
                <li><strong>Module 2:</strong> Introduction to Software Engineering (3 weeks)</li>
                <li><strong>Module 3:</strong> AI & Machine Learning (6 weeks)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">3.3 Session Schedule</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Sessions: Monday, Wednesday, Friday (5:00 PM - 7:00 PM)</li>
                <li>Each session: 2 hours of instruction</li>
                <li>Total program duration: 3 months (12 weeks)</li>
                <li>Next cohort starts: {CURRENT_COHORT}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">4. Fees and Payment</h2>

              <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Program Fee</h3>
              <p className="mb-4">
                The total program fee is <strong>₦200,000</strong> for the complete 3-month program. This fee includes:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>96 hours of live instruction</li>
                <li>All course materials and resources</li>
                <li>Access to course recordings</li>
                <li>Certificate of completion</li>
                <li>Eligibility for attendance cashback and top student refund (see Section 4.2)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Reward Incentives</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                <p className="mb-2"><strong>Attendance Cashback (10%):</strong></p>
                <ul className="list-disc ml-6 mb-3 space-y-1">
                  <li>Maintain 95% or higher attendance throughout the program</li>
                  <li>Cashback amount: ₦20,000</li>
                  <li>Processed within 30 days of program completion</li>
                </ul>

                <p className="mb-2"><strong>Top Student Full Refund:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>One student per cohort — ranked on attendance, assessments, and final project quality</li>
                  <li>Refund amount: ₦200,000 (full program fee)</li>
                  <li>Winner announced at end-of-cohort presentation; refund processed within 30 days</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Payment Terms</h3>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Payment must be made in full before program start date</li>
                <li>Installment payment plans available upon request</li>
                <li>Accepted payment methods: Bank transfer, card payment</li>
                <li>All fees are non-refundable after the 2-week trial period</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">4.4 Refund Policy</h3>
              <p className="mb-4">
                <strong>2-Week Trial Period:</strong> If you are not satisfied with the program within the first 2 weeks, you may request a full refund minus a ₦25,000 administrative fee. Refund requests must be submitted in writing to <a href="mailto:info@intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">info@intelligeeksafrica.com</a>.
              </p>
              <p className="mb-4">
                After the 2-week trial period, all fees are non-refundable, regardless of whether you complete the program.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">5. Student Responsibilities</h2>
              <p className="mb-2">Students enrolled in the program agree to:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Attend at least 80% of scheduled sessions (95% for attendance cashback)</li>
                <li>Complete all assignments and projects on time</li>
                <li>Actively participate in class discussions and activities</li>
                <li>Treat instructors and fellow students with respect</li>
                <li>Maintain academic integrity and submit original work</li>
                <li>Provide their own laptop and reliable internet connection</li>
                <li>Follow all program policies and code of conduct</li>
                <li>Communicate with instructors regarding absences or challenges</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Attendance Policy</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">6.1 Minimum Attendance</h3>
              <p className="mb-4">
                Students must maintain at least 80% attendance to remain in good standing and receive a certificate of completion.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">6.2 Excused Absences</h3>
              <p className="mb-4">
                Absences may be excused for medical emergencies, family emergencies, or other extraordinary circumstances with proper documentation. Excused absences do not count against attendance requirements.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2">6.3 Make-Up Sessions</h3>
              <p className="mb-4">
                All sessions are recorded and available to students who miss a class. Students are responsible for watching recordings and completing any missed work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">7. Academic Integrity</h2>
              <p className="mb-4">
                IntelliGeeks is committed to maintaining the highest standards of academic integrity. Students are expected to:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Submit original work and properly cite all sources</li>
                <li>Collaborate only when explicitly permitted by instructors</li>
                <li>Not plagiarize, cheat, or engage in dishonest academic behavior</li>
                <li>Not share course materials or assessments with non-enrolled individuals</li>
              </ul>
              <p className="mb-4">
                <strong>Violations of academic integrity</strong> may result in grade penalties, loss of reward eligibility, or dismissal from the program without refund.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">8. Code of Conduct</h2>
              <p className="mb-2">All students must:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Treat all participants with respect, courtesy, and professionalism</li>
                <li>Refrain from harassment, bullying, or discriminatory behavior</li>
                <li>Maintain a safe and inclusive learning environment</li>
                <li>Use appropriate language and behavior in all communications</li>
                <li>Respect intellectual property and confidential information</li>
              </ul>
              <p className="mb-4">
                Violations of the code of conduct may result in warnings, suspension, or dismissal from the program.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">9. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">9.1 Course Materials</h3>
              <p className="mb-4">
                All course materials, including lectures, videos, slides, assignments, and resources, are the intellectual property of IntelliGeeks and are protected by copyright laws. Students may not:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Share, distribute, or sell course materials to third parties</li>
                <li>Post course content on public websites or social media</li>
                <li>Use course materials for commercial purposes</li>
                <li>Record or screenshot sessions without permission</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">9.2 Student Work</h3>
              <p className="mb-4">
                Students retain ownership of their original work and projects created during the program. However, IntelliGeeks may showcase exceptional student projects (with permission) for promotional and educational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">10. Certification and Completion</h2>
              <p className="mb-4">
                To receive a certificate of completion, students must:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Maintain at least 80% attendance</li>
                <li>Complete all required assignments and projects</li>
                <li>Pass the final exam with a minimum score of 60%</li>
                <li>Complete and submit the final capstone project</li>
                <li>Be in good standing with no academic integrity violations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">11. Program Changes and Cancellations</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">11.1 By IntelliGeeks</h3>
              <p className="mb-4">
                IntelliGeeks reserves the right to:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Modify course content, schedule, or instructors as needed</li>
                <li>Cancel or reschedule sessions due to emergencies or unforeseen circumstances</li>
                <li>Cancel the program if minimum enrollment is not met (full refund provided)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4 mb-2">11.2 By Students</h3>
              <p className="mb-4">
                Students who wish to withdraw from the program after the 2-week trial period will not receive a refund. Students may be dismissed from the program for:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Violation of academic integrity policies</li>
                <li>Violation of code of conduct</li>
                <li>Failure to meet attendance requirements</li>
                <li>Non-payment of fees</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">12. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, IntelliGeeks and its instructors, employees, and partners shall not be liable for:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Technical difficulties, internet outages, or platform issues</li>
                <li>Decisions or actions taken based on program content</li>
              </ul>
              <p className="mb-4">
                Our total liability shall not exceed the amount of fees paid by the student for the program.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">13. Disclaimer of Warranties</h2>
              <p className="mb-4">
                IntelliGeeks services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Employment or admission to educational institutions</li>
                <li>Specific learning outcomes or skill mastery</li>
                <li>Uninterrupted or error-free service</li>
                <li>That the program will meet your specific requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">14. Privacy and Data Protection</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our <Link to="/privacy" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">15. Communication</h2>
              <p className="mb-4">
                By enrolling in our program, you consent to receive communications from IntelliGeeks, including:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Program updates and announcements</li>
                <li>Course materials and assignments</li>
                <li>Administrative and billing notifications</li>
                <li>Promotional offers and newsletters (you may opt out)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">16. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Nigeria.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">17. Dispute Resolution</h2>
              <p className="mb-4">
                In the event of any dispute or disagreement, parties agree to first attempt resolution through good-faith negotiation. If negotiation fails, disputes may be escalated to mediation before pursuing legal action.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">18. Severability</h2>
              <p className="mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">19. Entire Agreement</h2>
              <p className="mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and IntelliGeeks regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">20. Amendments</h2>
              <p className="mb-4">
                IntelliGeeks reserves the right to modify these Terms at any time. We will notify enrolled students of significant changes via email. Continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">21. Contact Information</h2>
              <p className="mb-4">
                If you have questions or concerns about these Terms, please contact us:
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="mb-2"><strong>IntelliGeeks Online School</strong></p>
                <p className="mb-1">Email: <a href="mailto:info@intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">info@intelligeeksafrica.com</a></p>
                <p className="mb-1">Support: <a href="mailto:info@intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">info@intelligeeksafrica.com</a></p>
                <p>Website: <a href="https://intelligeeksafrica.com" className="text-[#0d1b6e] underline hover:text-[#0d1b6e]">www.intelligeeksafrica.com</a></p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-8">
              <p className="text-sm">
                <strong>Agreement Acknowledgment:</strong> By enrolling in IntelliGeeks, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you are under 18, your parent or legal guardian has reviewed and accepted these Terms on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Terms
