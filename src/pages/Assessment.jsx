import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { assessmentQuestions } from '../data/assessmentQuestions';
import { COHORT_START_DATE } from '../config/program';
import { useAuth } from '../context/AuthContext';

export default function Assessment() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { currentUser, userProfile } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    assessmentQuestions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / assessmentQuestions.length) * 100;
  };

  const handleSubmit = async () => {
    setLoading(true);
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowResults(true);

    try {
      let docRef;

      if (studentId) {
        // Parent registering a student
        docRef = doc(db, 'students', studentId);
      } else {
        // Student self-registration
        docRef = doc(db, 'users', currentUser.uid);
      }

      await updateDoc(docRef, {
        assessmentScore: finalScore,
        assessmentCompleted: true,
        assessmentDate: new Date().toISOString(),
        enrollmentStatus: 'pending_payment'
      });

      setTimeout(() => {
        if (studentId) {
          navigate('/parent-dashboard');
        } else {
          navigate(`/payment/${currentUser.uid}`);
        }
      }, 5000);
    } catch (error) {
      console.error('Error saving assessment results:', error);
    } finally {
      setLoading(false);
    }
  };

  const question = assessmentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-4">
              <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete!</h2>
            <div className="mb-6">
              <p className="text-5xl font-bold text-[#0d1b6e] mb-2">{score.toFixed(1)}%</p>
              <p className="text-gray-600">Your Score</p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-[#0d1b6e] mb-2">Good Job!</h3>
              <p className="text-[#0d1b6e]">
                Your assessment has been recorded. Proceed to payment to secure your spot.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-[#0d1b6e] mb-2">Next Cohort Starts</h3>
              <p className="text-3xl font-bold text-[#0d1b6e]">{COHORT_START_DATE}</p>
            </div>

            <p className="text-gray-600 mb-6">
              Redirecting to payment page in a few seconds...
            </p>

            {loading && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0d1b6e]"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#0d1b6e] text-white p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Critical Thinking Assessment</h1>
              <div className="flex items-center space-x-4">
                <div className="bg-white text-[#0d1b6e] px-4 py-2 rounded-lg font-semibold">
                  Time: {formatTime(timeRemaining)}
                </div>
              </div>
            </div>
            <div className="w-full bg-indigo-500 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </p>
          </div>

          {/* Question */}
          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block bg-indigo-100 text-[#0d1b6e] text-sm px-3 py-1 rounded-full mb-4">
                {question.category}
              </span>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {question.question}
              </h2>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(question.id, index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    answers[question.id] === index
                      ? 'border-[#0d1b6e] bg-indigo-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                        answers[question.id] === index
                          ? 'border-[#0d1b6e] bg-[#0d1b6e]'
                          : 'border-gray-300'
                      }`}
                    >
                      {answers[question.id] === index && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-8 py-4 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex items-center text-sm text-gray-600">
              {Object.keys(answers).length} / {assessmentQuestions.length} answered
            </div>

            {currentQuestion === assessmentQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== assessmentQuestions.length}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Assessment
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-[#0d1b6e] text-white rounded-lg hover:bg-[#0d1b6e]"
              >
                Next
              </button>
            )}
          </div>
        </div>

        {/* Question Navigator */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Question Navigator</h3>
          <div className="grid grid-cols-10 gap-2">
            {assessmentQuestions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg font-semibold text-sm ${
                  answers[q.id] !== undefined
                    ? 'bg-green-500 text-white'
                    : currentQuestion === index
                    ? 'bg-[#0d1b6e] text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
