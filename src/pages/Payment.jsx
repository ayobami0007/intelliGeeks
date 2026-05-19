import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { useAuth } from '../context/AuthContext';
import { CURRENT_COHORT, COHORT_START_DATE, COHORT_START_DATE_ISO } from '../config/program';

export default function Payment() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { currentUser, userProfile } = useAuth();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('paystack'); // 'paystack', 'transfer-ngn', 'transfer-usd'
  const [receiptFile, setReceiptFile] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const [uploadingReceipt, setUploadingReceipt] = useState(false);

  const COURSE_PRICE = 250000; // Base price in Naira
  const USD_PRICE = 160; // Price in USD

  useEffect(() => {
    fetchStudentData();
  }, [studentId]);

  const fetchStudentData = async () => {
    try {
      let docRef;
      let data;

      if (studentId && studentId !== currentUser?.uid) {
        // Parent viewing student
        docRef = doc(db, 'students', studentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          data = { id: docSnap.id, ...docSnap.data() };
        }
      } else {
        // Student self-registration
        docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          data = { id: currentUser.uid, ...docSnap.data() };
        }
      }

      setStudent(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateFinalPrice = () => {
    if (!student) return COURSE_PRICE;
    const discount = student.discount || 0;
    return COURSE_PRICE - (COURSE_PRICE * discount) / 100;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid file (JPG, PNG, WEBP, or PDF)');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      setReceiptFile(file);

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setReceiptPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setReceiptPreview(null);
      }
    }
  };

  const handleSubmitReceipt = async () => {
    if (!receiptFile) {
      alert('Please select a receipt file to upload');
      return;
    }

    setUploadingReceipt(true);

    try {
      // Upload file to Firebase Storage
      const timestamp = Date.now();
      const fileName = `payment-receipts/${studentId || currentUser.uid}/${timestamp}_${receiptFile.name}`;
      const storageRef = ref(storage, fileName);

      await uploadBytes(storageRef, receiptFile);
      const downloadURL = await getDownloadURL(storageRef);

      // Update student/user document
      let docRef;
      if (studentId && studentId !== currentUser?.uid) {
        docRef = doc(db, 'students', studentId);
      } else {
        docRef = doc(db, 'users', currentUser.uid);
      }

      await updateDoc(docRef, {
        paymentReceiptURL: downloadURL,
        paymentReceiptUploadedAt: new Date().toISOString(),
        enrollmentStatus: 'pending_verification',
        paymentMethod: paymentMethod,
        paymentAmount: paymentMethod === 'transfer-usd' ? USD_PRICE : calculateFinalPrice()
      });

      alert('Receipt uploaded successfully! Your payment will be verified within 24 hours.');
      navigate('/payment-success');
    } catch (error) {
      console.error('Error uploading receipt:', error);
      alert('Failed to upload receipt. Please try again or contact support.');
    } finally {
      setUploadingReceipt(false);
    }
  };

  const handlePayment = async () => {
    setProcessingPayment(true);

    try {
      // Check if Paystack is loaded
      if (typeof window.PaystackPop === 'undefined') {
        alert('Payment system is loading. Please wait a moment and try again.');
        setProcessingPayment(false);
        return;
      }

      // Check if public key is configured
      const paystackKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
      if (!paystackKey) {
        alert('Payment system is not configured. Please contact support.');
        console.error('VITE_PAYSTACK_PUBLIC_KEY is not set in environment variables');
        setProcessingPayment(false);
        return;
      }

      const finalPrice = calculateFinalPrice();
      const email = student?.email || userProfile?.email;

      if (!email) {
        alert('Email address is required for payment.');
        setProcessingPayment(false);
        return;
      }

      console.log('Initializing Paystack with:', {
        key: paystackKey.substring(0, 10) + '...',
        email,
        amount: finalPrice * 100,
        currency: 'NGN'
      });

      // Initialize Paystack
      const handler = window.PaystackPop.setup({
        key: paystackKey,
        email: email,
        amount: finalPrice * 100, // Convert to kobo
        currency: 'NGN',
        ref: `INTG-${Date.now()}`,
        metadata: {
          custom_fields: [
            {
              display_name: 'Student Name',
              variable_name: 'student_name',
              value: `${student?.firstName || userProfile?.firstName} ${student?.lastName || userProfile?.lastName}`
            },
            {
              display_name: 'Cohort',
              variable_name: 'cohort',
              value: CURRENT_COHORT
            },
            {
              display_name: 'Discount Applied',
              variable_name: 'discount',
              value: `${student?.discount || 0}%`
            }
          ]
        },
        callback: async (response) => {
          // Payment successful
          console.log('Payment successful:', response);
          await handlePaymentSuccess(response);
        },
        onClose: () => {
          console.log('Payment popup closed');
          setProcessingPayment(false);
        }
      });

      handler.openIframe();
    } catch (error) {
      console.error('Error initializing payment:', error);
      alert('Failed to initialize payment. Please try again. Error: ' + error.message);
      setProcessingPayment(false);
    }
  };

  const handlePaymentSuccess = async (response) => {
    try {
      let docRef;

      if (studentId && studentId !== currentUser?.uid) {
        docRef = doc(db, 'students', studentId);
      } else {
        docRef = doc(db, 'users', currentUser.uid);
      }

      await updateDoc(docRef, {
        enrollmentStatus: 'enrolled',
        paymentStatus: 'completed',
        paymentReference: response.reference,
        paymentDate: new Date().toISOString(),
        cohortStartDate: COHORT_START_DATE_ISO,
        amountPaid: calculateFinalPrice()
      });

      // Redirect to success page
      navigate('/payment-success');
    } catch (error) {
      console.error('Error updating payment status:', error);
      alert('Payment successful but failed to update enrollment. Please contact support.');
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
          <p className="text-gray-600">Unable to load student information. Please try again.</p>
        </div>
      </div>
    );
  }

  const finalPrice = calculateFinalPrice();
  const discount = student.discount || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#0d1b6e] text-white p-6">
            <h1 className="text-3xl font-bold">Complete Your Enrollment</h1>
            <p className="mt-2">Join the {CURRENT_COHORT} Cohort</p>
          </div>

          {/* Student Info */}
          <div className="p-8">
            {/* Environment Warning */}
            {!import.meta.env.VITE_PAYSTACK_PUBLIC_KEY && (
              <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Setup Required:</strong> Paystack public key is not configured. Please add <code className="bg-yellow-100 px-1 rounded">VITE_PAYSTACK_PUBLIC_KEY</code> to your <code className="bg-yellow-100 px-1 rounded">.env</code> file. See SETUP.md for instructions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Student Information</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-semibold">
                    {student.firstName} {student.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold">{student.email}</span>
                </div>
                {student.assessmentScore && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assessment Score:</span>
                    <span className="font-semibold text-green-600">
                      {student.assessmentScore.toFixed(1)}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Cohort Info */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cohort Details</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-[#0d1b6e] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Start Date</h3>
                    <p className="text-[#0d1b6e] font-bold">{COHORT_START_DATE}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Classes begin on {COHORT_START_DATE}. You'll receive a welcome email with your schedule and course materials before the start date.
                </p>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Summary</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Course Fee</span>
                    <span>₦{COURSE_PRICE.toLocaleString()}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({discount}%)</span>
                      <span>-₦{((COURSE_PRICE * discount) / 100).toLocaleString()}</span>
                    </div>
                  )}

                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total Amount</span>
                      <span>₦{finalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
              <div className="space-y-3">
                {/* Paystack Option */}
                <div
                  onClick={() => setPaymentMethod('paystack')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === 'paystack'
                      ? 'border-[#0d1b6e] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === 'paystack'
                            ? 'border-[#0d1b6e] bg-[#0d1b6e]'
                            : 'border-gray-300'
                        }`}
                      >
                        {paymentMethod === 'paystack' && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Card Payment (Paystack)</p>
                        <p className="text-sm text-gray-600">Pay with debit/credit card</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bank Transfer NGN Option */}
                <div
                  onClick={() => setPaymentMethod('transfer-ngn')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === 'transfer-ngn'
                      ? 'border-[#0d1b6e] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === 'transfer-ngn'
                            ? 'border-[#0d1b6e] bg-[#0d1b6e]'
                            : 'border-gray-300'
                        }`}
                      >
                        {paymentMethod === 'transfer-ngn' && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Bank Transfer (Naira)</p>
                        <p className="text-sm text-gray-600">Transfer to our NGN account</p>
                      </div>
                    </div>
                    <div className="text-2xl">🏦</div>
                  </div>
                </div>

                {/* Bank Transfer USD Option */}
                <div
                  onClick={() => setPaymentMethod('transfer-usd')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === 'transfer-usd'
                      ? 'border-[#0d1b6e] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === 'transfer-usd'
                            ? 'border-[#0d1b6e] bg-[#0d1b6e]'
                            : 'border-gray-300'
                        }`}
                      >
                        {paymentMethod === 'transfer-usd' && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Bank Transfer (USD)</p>
                        <p className="text-sm text-gray-600">Transfer to our USD account</p>
                      </div>
                    </div>
                    <div className="text-2xl">💵</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Button or Bank Details */}
            {paymentMethod === 'paystack' ? (
              <div className="space-y-4">
                <button
                  onClick={handlePayment}
                  disabled={processingPayment}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {processingPayment ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Pay ₦${finalPrice.toLocaleString()} with Paystack`
                  )}
                </button>

                <div className="flex items-center justify-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure payment powered by Paystack
                </div>
              </div>
            ) : paymentMethod === 'transfer-ngn' ? (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-[#0d1b6e] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Bank Transfer Details (NGN)</h3>
                  <span className="text-2xl">🇳🇬</span>
                </div>

                <div className="space-y-4 bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">Bank Name:</span>
                    <span className="font-bold text-gray-900">First Bank of Nigeria</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">Account Name:</span>
                    <span className="font-bold text-gray-900">IntelliGeeks Limited</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">Account Number:</span>
                    <span className="font-bold text-gray-900 text-lg">1234567890</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Amount to Transfer:</span>
                    <span className="font-bold text-green-600 text-xl">₦{finalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 font-semibold mb-2">📝 Important Instructions:</p>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Transfer the exact amount shown above</li>
                    <li>• Use <strong>{student.firstName} {student.lastName} / {CURRENT_COHORT} Cohort</strong> as reference/narration</li>
                    <li>• Upload proof of payment below</li>
                    <li>• Enrollment will be confirmed within 24 hours of payment verification</li>
                  </ul>
                </div>

                {/* Receipt Upload Section */}
                <div className="mt-6 bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Upload Payment Receipt</h4>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG, WEBP or PDF (MAX. 5MB)</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>

                    {receiptFile && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-green-900">{receiptFile.name}</p>
                              <p className="text-xs text-green-700">{(receiptFile.size / 1024).toFixed(2)} KB</p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setReceiptFile(null);
                              setReceiptPreview(null);
                            }}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}

                    {receiptPreview && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                        <img src={receiptPreview} alt="Receipt preview" className="max-h-64 rounded-lg border border-gray-300" />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleSubmitReceipt}
                  disabled={!receiptFile || uploadingReceipt}
                  className="w-full mt-4 bg-[#0d1b6e] text-white py-3 px-6 rounded-lg text-base font-semibold hover:bg-[#0d1b6e] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingReceipt ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : (
                    'Submit Payment Receipt'
                  )}
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-[#0d1b6e] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Bank Transfer Details (USD)</h3>
                  <span className="text-2xl">🇺🇸</span>
                </div>

                <div className="space-y-4 bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">Bank Name:</span>
                    <span className="font-bold text-gray-900">Bank of America</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">Account Name:</span>
                    <span className="font-bold text-gray-900">IntelliGeeks LLC</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">Account Number:</span>
                    <span className="font-bold text-gray-900 text-lg">9876543210</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">Routing Number:</span>
                    <span className="font-bold text-gray-900">026009593</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-medium">SWIFT Code:</span>
                    <span className="font-bold text-gray-900">BOFAUS3N</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Amount to Transfer:</span>
                    <span className="font-bold text-green-600 text-xl">${USD_PRICE.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-[#0d1b6e]">
                    💱 <strong>Course Price:</strong> ₦{finalPrice.toLocaleString()} (NGN) or ${USD_PRICE} (USD)
                  </p>
                </div>

                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 font-semibold mb-2">📝 Important Instructions:</p>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Transfer the exact USD amount shown above</li>
                    <li>• Use <strong>{student.firstName} {student.lastName}</strong> as reference/narration</li>
                    <li>• Upload proof of payment below</li>
                    <li>• Enrollment will be confirmed within 24 hours of payment verification</li>
                  </ul>
                </div>

                {/* Receipt Upload Section */}
                <div className="mt-6 bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Upload Payment Receipt</h4>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG, WEBP or PDF (MAX. 5MB)</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>

                    {receiptFile && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-green-900">{receiptFile.name}</p>
                              <p className="text-xs text-green-700">{(receiptFile.size / 1024).toFixed(2)} KB</p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setReceiptFile(null);
                              setReceiptPreview(null);
                            }}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}

                    {receiptPreview && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                        <img src={receiptPreview} alt="Receipt preview" className="max-h-64 rounded-lg border border-gray-300" />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleSubmitReceipt}
                  disabled={!receiptFile || uploadingReceipt}
                  className="w-full mt-4 bg-[#0d1b6e] text-white py-3 px-6 rounded-lg text-base font-semibold hover:bg-[#0d1b6e] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingReceipt ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : (
                    'Submit Payment Receipt'
                  )}
                </button>
              </div>
            )}

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900 mb-1">Full Course Access</h3>
                <p className="text-sm text-gray-600">Lifetime access to materials</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">👨‍🏫</div>
                <h3 className="font-semibold text-gray-900 mb-1">Expert Instructors</h3>
                <p className="text-sm text-gray-600">Learn from industry pros</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold text-gray-900 mb-1">Certificate</h3>
                <p className="text-sm text-gray-600">Upon completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
