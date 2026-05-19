import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.svg';
import { COHORT_START_DATE } from '../config/program';

export default function StudentDashboard() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'enrolled':
        return 'bg-green-100 text-green-800';
      case 'pending_payment':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img src={logo} alt="IntelliGeeks Logo" className="h-16 w-auto" />
              </Link>
              <div className="border-l border-gray-300 pl-4 h-10 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Student Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">
                  {userProfile?.firstName} {userProfile?.lastName}
                </p>
                <p className="text-xs text-gray-500">Student Account</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-white bg-[#0d1b6e] rounded-md hover:bg-[#0d1b6e] transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {userProfile?.firstName}!
            </h2>
            <p className="text-gray-600">
              Track your progress and manage your enrollment below.
            </p>
          </div>

          {/* Enrollment Status */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Status</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Status</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(userProfile?.enrollmentStatus)}`}>
                  {userProfile?.enrollmentStatus?.replace('_', ' ').toUpperCase() || 'NOT ENROLLED'}
                </span>
              </div>

              {userProfile?.cohortStartDate && (
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-[#0d1b6e] font-medium">Cohort Start Date</span>
                  <span className="text-lg font-bold text-[#0d1b6e]">
                    {COHORT_START_DATE}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              {userProfile?.enrollmentStatus === 'pending_payment' && (
                <button
                  onClick={() => navigate(`/payment/${currentUser.uid}`)}
                  className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
                >
                  Complete Payment
                </button>
              )}

              {userProfile?.enrollmentStatus === 'enrolled' && (
                <button
                  onClick={() => navigate(`/schedule/${currentUser.uid}`)}
                  className="w-full py-3 px-4 bg-[#0d1b6e] text-white rounded-lg hover:bg-[#0d1b6e] font-semibold"
                >
                  View Course Schedule
                </button>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/contact"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-[#0d1b6e] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Contact Support</p>
                  <p className="text-sm text-gray-600">Get help with your enrollment</p>
                </div>
              </a>

              <a
                href="/about"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-[#0d1b6e] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">About IntelliGeeks</p>
                  <p className="text-sm text-gray-600">Learn more about us</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
