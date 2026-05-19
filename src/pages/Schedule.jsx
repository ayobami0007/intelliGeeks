import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { CURRENT_COHORT, COHORT_START_DATE, COHORT_START_DATE_ISO } from '../config/program';

const defaultSchedule = {
  cohortStartDate: COHORT_START_DATE_ISO,
  duration: '12 weeks',
  schedule: [
    {
      week: 1,
      topic: 'Introduction to Programming & Computational Thinking',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Introduction to Programming Concepts' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Computational Thinking Workshop' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Hands-on Coding Practice' }
      ]
    },
    {
      week: 2,
      topic: 'Algorithms and Problem Solving',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Understanding Algorithms' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Problem Solving Strategies' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Algorithm Design Project' }
      ]
    },
    {
      week: 3,
      topic: 'Data Structures Fundamentals',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Arrays and Lists' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Stacks and Queues' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Data Structure Applications' }
      ]
    },
    {
      week: 4,
      topic: 'Object-Oriented Programming',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Classes and Objects' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Inheritance and Polymorphism' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'OOP Design Patterns' }
      ]
    },
    {
      week: 5,
      topic: 'Web Development Basics',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'HTML & CSS Fundamentals' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'JavaScript Basics' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Building Your First Website' }
      ]
    },
    {
      week: 6,
      topic: 'Advanced Web Development',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'JavaScript DOM Manipulation' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'APIs and AJAX' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Interactive Web Applications' }
      ]
    },
    {
      week: 7,
      topic: 'Database Fundamentals',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Introduction to Databases' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'SQL Basics' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Database Design Project' }
      ]
    },
    {
      week: 8,
      topic: 'Introduction to AI and Machine Learning',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'What is Artificial Intelligence?' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Machine Learning Concepts' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'AI Applications Workshop' }
      ]
    },
    {
      week: 9,
      topic: 'Mobile App Development',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Introduction to Mobile Development' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Building Mobile Interfaces' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Mobile App Features' }
      ]
    },
    {
      week: 10,
      topic: 'Software Development Best Practices',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Version Control with Git' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Testing and Debugging' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Code Review and Collaboration' }
      ]
    },
    {
      week: 11,
      topic: 'Final Project Development',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Project Planning and Design' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Project Development Workshop' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Project Progress Review' }
      ]
    },
    {
      week: 12,
      topic: 'Final Project and Showcase',
      sessions: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM', activity: 'Final Project Polish' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM', activity: 'Project Presentations' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM', activity: 'Graduation Ceremony' }
      ]
    }
  ]
};

export default function Schedule() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentData();
  }, [studentId]);

  const fetchStudentData = async () => {
    try {
      const docRef = doc(db, 'students', studentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStudent({ id: docSnap.id, ...docSnap.data() });
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Student Not Found</h2>
          <p className="text-gray-600">Unable to load student information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0d1b6e] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/parent-dashboard')}
            className="mb-4 flex items-center text-blue-100 hover:text-white"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold">Course Schedule</h1>
          <p className="mt-2">
            {student.firstName} {student.lastName} - {CURRENT_COHORT} Cohort
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-[#0d1b6e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold text-gray-900">Start Date</h3>
              </div>
              <p className="text-2xl font-bold text-[#0d1b6e]">{COHORT_START_DATE}</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-gray-900">Duration</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">{defaultSchedule.duration}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h3 className="font-semibold text-gray-900">Sessions per Week</h3>
              </div>
              <p className="text-2xl font-bold text-purple-600">3 Sessions</p>
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="space-y-6">
          {defaultSchedule.schedule.map((weekData) => (
            <div key={weekData.week} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#0d1b6e] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Week {weekData.week}</h3>
                <p className="text-blue-100 mt-1">{weekData.topic}</p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {weekData.sessions.map((session, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0 w-32">
                        <div className="font-semibold text-gray-900">{session.day}</div>
                        <div className="text-sm text-gray-600">{session.time}</div>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <div className="h-2 w-2 bg-[#0d1b6e] rounded-full mr-2"></div>
                          <p className="text-gray-900 font-medium">{session.activity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">Important Notes</h3>
          <ul className="space-y-2 text-yellow-800 text-sm">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              All sessions are conducted online via Zoom
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Session recordings will be available for 48 hours after each class
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Homework and projects will be assigned weekly
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certificate of completion awarded upon successful graduation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
