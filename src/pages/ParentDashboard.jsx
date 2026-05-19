import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { collection, addDoc, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function ParentDashboard() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    grade: ''
  });

  useEffect(() => {
    if (currentUser) {
      fetchStudents();
    }
  }, [currentUser]);

  const fetchStudents = async () => {
    try {
      const q = query(collection(db, 'students'), where('parentId', '==', currentUser.uid));
      const querySnapshot = await getDocs(q);
      const studentList = [];

      for (const docSnap of querySnapshot.docs) {
        const studentData = docSnap.data();
        studentList.push({
          id: docSnap.id,
          ...studentData
        });
      }

      setStudents(studentList);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'students'), {
        ...newStudent,
        parentId: currentUser.uid,
        parentEmail: userProfile.email,
        createdAt: new Date().toISOString(),
        enrollmentStatus: 'pending_payment'
      });

      setNewStudent({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        grade: ''
      });

      setShowAddStudent(false);
      fetchStudents();
    } catch (error) {
      console.error('Error adding student:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const proceedToPayment = (studentId) => {
    navigate(`/payment/${studentId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img src={logo} alt="IntelliGeeks Logo" className="h-16 w-auto" />
              </Link>
              <div className="border-l border-gray-300 pl-4 h-10 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Parent Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">
                  {userProfile?.firstName} {userProfile?.lastName}
                </p>
                <p className="text-xs text-gray-500">Parent Account</p>
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Students</h2>
            <button
              onClick={() => setShowAddStudent(!showAddStudent)}
              className="px-4 py-2 bg-[#0d1b6e] text-white rounded-md hover:bg-[#0d1b6e]"
            >
              {showAddStudent ? 'Cancel' : 'Add Student'}
            </button>
          </div>

          {showAddStudent && (
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Student</h3>
              <form onSubmit={handleAddStudent} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      value={newStudent.firstName}
                      onChange={(e) => setNewStudent({ ...newStudent, firstName: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      value={newStudent.lastName}
                      onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                      type="number"
                      value={newStudent.age}
                      onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Grade</label>
                    <input
                      type="text"
                      value={newStudent.grade}
                      onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 px-4 bg-[#0d1b6e] text-white rounded-md hover:bg-[#0d1b6e] disabled:opacity-50"
                >
                  {loading ? 'Adding...' : 'Add Student'}
                </button>
              </form>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
              <div key={student.id} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {student.firstName} {student.lastName}
                </h3>
                <p className="text-sm text-gray-600 mb-1">Email: {student.email}</p>
                <p className="text-sm text-gray-600 mb-1">Age: {student.age}</p>
                <p className="text-sm text-gray-600 mb-4">Grade: {student.grade}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Status:</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      student.enrollmentStatus === 'enrolled' ? 'bg-green-100 text-green-800' :
                      student.enrollmentStatus === 'pending_payment' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {student.enrollmentStatus?.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  {student.enrollmentStatus === 'pending_payment' && (
                    <button
                      onClick={() => navigate(`/payment/${student.id}`)}
                      className="w-full mt-3 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Complete Payment
                    </button>
                  )}

                  {student.enrollmentStatus === 'enrolled' && student.schedule && (
                    <button
                      onClick={() => navigate(`/schedule/${student.id}`)}
                      className="w-full mt-3 py-2 px-4 bg-[#0d1b6e] text-white rounded-md hover:bg-[#0d1b6e]"
                    >
                      View Schedule
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {students.length === 0 && !showAddStudent && (
            <div className="text-center py-12">
              <p className="text-gray-500">No students added yet. Click "Add Student" to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
