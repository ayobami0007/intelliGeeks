import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { COHORT_START_DATE } from '../config/program';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const { userProfile } = useAuth();

  useEffect(() => {
    // Auto-redirect after 10 seconds
    const timer = setTimeout(() => {
      if (userProfile?.role === 'parent') {
        navigate('/parent-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [userProfile, navigate]);

  const handleContinue = () => {
    if (userProfile?.role === 'parent') {
      navigate('/parent-dashboard');
    } else {
      navigate('/student-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
            <svg className="h-16 w-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to IntelliGeeks! Your enrollment is confirmed.
          </p>

          {/* Confirmation Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-[#0d1b6e] mb-4">What's Next?</h2>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#0d1b6e] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Check Your Email</p>
                  <p className="text-gray-600 text-sm">
                    We've sent a confirmation email with your enrollment details and payment receipt.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#0d1b6e] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Mark Your Calendar</p>
                  <p className="text-gray-600 text-sm">
                    Your cohort starts on <span className="font-bold text-[#0d1b6e]">{COHORT_START_DATE}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#0d1b6e] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Access Course Materials</p>
                  <p className="text-gray-600 text-sm">
                    Pre-course materials will be available in your dashboard 2 weeks before the start date.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#0d1b6e] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Join Our Community</p>
                  <p className="text-gray-600 text-sm">
                    You'll receive an invitation to join our student community platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleContinue}
              className="w-full bg-[#0d1b6e] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#0d1b6e] transition-colors"
            >
              Go to Dashboard
            </button>

            <p className="text-sm text-gray-500">
              Redirecting automatically in 10 seconds...
            </p>
          </div>

          {/* Support */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Need help? Contact us at{' '}
              <a href="mailto:info@intelligeeksafrica.com" className="text-[#0d1b6e] hover:underline">
                info@intelligeeksafrica.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
