# IntelliGeeks Authentication & Enrollment System Setup Guide

## Overview

This guide will help you set up the complete authentication and enrollment system for IntelliGeeks, including:
- User authentication (Student/Parent roles)
- Critical thinking assessment
- Paystack payment integration
- Enrollment management
- Student schedule viewing

## Prerequisites

1. Node.js and npm installed
2. Firebase account
3. Paystack account

## Step 1: Firebase Setup

### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "IntelliGeeks")
4. Follow the setup wizard

### Enable Authentication

1. In Firebase Console, go to "Authentication"
2. Click "Get Started"
3. Enable "Email/Password" authentication method

### Create Firestore Database

1. Go to "Firestore Database"
2. Click "Create Database"
3. Start in **production mode** (we'll set up rules next)
4. Choose a location close to your users

### Enable Firebase Storage

1. Go to "Storage" in Firebase Console
2. Click "Get Started"
3. Start in **production mode** (we'll set up rules next)
4. Choose the same location as your Firestore database

### Set Up Storage Security Rules

Replace the default storage rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /payment-receipts/{userId}/{fileName} {
      allow write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null;
    }
  }
}
```

### Set Up Firestore Security Rules

Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
      allow update: if request.auth != null && request.auth.uid == userId;
    }

    // Students collection
    match /students/{studentId} {
      allow read: if request.auth != null &&
        (resource.data.parentId == request.auth.uid ||
         request.auth.uid == studentId);
      allow create: if request.auth != null;
      allow update: if request.auth != null &&
        (resource.data.parentId == request.auth.uid ||
         request.auth.uid == studentId);
    }
  }
}
```

### Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click the web icon (</>)
4. Register your app
5. Copy the configuration values

## Step 2: Paystack Setup

1. Go to [Paystack Dashboard](https://dashboard.paystack.com/)
2. Sign up or log in
3. Go to Settings → API Keys & Webhooks
4. Copy your **Public Key** (starts with `pk_test_` for test mode)

## Step 3: Environment Configuration

1. Create a `.env` file in the project root (copy from `.env.example`):

```bash
cp .env.example .env
```

2. Fill in your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_public_key_here
```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Features Overview

### 1. User Registration & Authentication

**Routes:**
- `/signup` - User registration with role selection (Student/Parent)
- `/signin` - User login

**Roles:**
- **Student**: Can take assessment, make payment, view own schedule
- **Parent**: Can add multiple students, manage their enrollments

### 2. Parent Dashboard (`/parent-dashboard`)

Features:
- Add multiple students
- View all students and their enrollment status
- Start assessment for students
- Complete payment for students
- View student schedules

### 3. Critical Thinking Assessment (`/assessment/:studentId`)

Features:
- 20 complex questions covering:
  - Computational Thinking
  - Problem Solving
  - Algorithms
  - Pattern Recognition
  - Logic and Reasoning
- 30-minute timer
- Progress tracking
- Question navigator
- Automatic 5% discount for scores ≥ 95%

### 4. Payment Integration (`/payment/:studentId`)

Features:
- Secure Paystack integration
- Course fee: ₦50,000
- Automatic discount application
- Payment confirmation
- Enrollment completion

### 5. Student Dashboard (`/student-dashboard`)

Features:
- View enrollment status
- View assessment score
- View discount earned
- Access to assessment (if pending)
- Access to payment (if assessment completed)
- Access to schedule (if enrolled)

### 6. Schedule Viewing (`/schedule/:studentId`)

Features:
- 12-week comprehensive curriculum
- Weekly topics and sessions
- Session times: Mon/Wed/Fri, 4:00 PM - 6:00 PM
- Course overview and important notes

## Data Structure

### Users Collection

```javascript
{
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  role: "student" | "parent",
  assessmentScore?: number,
  assessmentCompleted?: boolean,
  discount?: number,
  enrollmentStatus?: "pending_assessment" | "pending_payment" | "enrolled",
  paymentStatus?: "completed",
  paymentReference?: string,
  cohortStartDate?: string,
  amountPaid?: number,
  createdAt: string
}
```

### Students Collection

```javascript
{
  firstName: string,
  lastName: string,
  email: string,
  age: string,
  grade: string,
  parentId: string,
  parentEmail: string,
  assessmentScore?: number,
  assessmentCompleted?: boolean,
  discount?: number,
  enrollmentStatus: "pending_assessment" | "pending_payment" | "enrolled",
  paymentStatus?: "completed",
  paymentReference?: string,
  cohortStartDate?: string,
  amountPaid?: number,
  createdAt: string
}
```

## Enrollment Flow

### For Students:
1. Sign up (select "Student")
2. Take critical thinking assessment
3. Receive score and discount (if applicable)
4. Complete payment via Paystack
5. Access course schedule and materials

### For Parents:
1. Sign up (select "Parent")
2. Add student(s) to profile
3. Initiate assessment for each student
4. Students take assessment
5. Complete payment for enrolled students
6. View schedules for all enrolled students

## Testing Payment Integration

### Test Mode
Use Paystack test cards:
- Success: `4084 0840 8408 4081`
- CVV: Any 3 digits
- Expiry: Any future date
- PIN: `0000`

### Production Mode
1. Complete Paystack business verification
2. Update `.env` with live public key (`pk_live_...`)
3. Update course pricing if needed in `/src/pages/Payment.jsx`

## Customization

### Course Pricing
Edit `COURSE_PRICE` in [src/pages/Payment.jsx](src/pages/Payment.jsx:18):
```javascript
const COURSE_PRICE = 50000; // Change to your desired price
```

### Cohort Date
The cohort date is set to March 1st, 2026. To change:
1. Update dates in [src/pages/Payment.jsx](src/pages/Payment.jsx)
2. Update dates in [src/pages/Schedule.jsx](src/pages/Schedule.jsx)
3. Update dates in [src/pages/PaymentSuccess.jsx](src/pages/PaymentSuccess.jsx)

### Assessment Questions
Edit questions in [src/data/assessmentQuestions.js](src/data/assessmentQuestions.js)

### Schedule
Customize the course schedule in [src/pages/Schedule.jsx](src/pages/Schedule.jsx)

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase Hosting

```bash
firebase deploy
```

## Troubleshooting

### Paystack Payment Not Initiating

If the payment popup doesn't appear when clicking the payment button:

1. **Check Environment Variables**
   - Ensure `.env` file exists in project root
   - Verify `VITE_PAYSTACK_PUBLIC_KEY` is set correctly
   - The key should start with `pk_test_` (test mode) or `pk_live_` (production)
   - **Important:** After adding/changing `.env`, restart the dev server (`npm run dev`)

2. **Check Browser Console**
   - Open browser Developer Tools (F12)
   - Look for error messages in the Console tab
   - Common errors:
     - "PaystackPop is undefined" → Paystack script not loaded
     - "VITE_PAYSTACK_PUBLIC_KEY is not set" → Missing environment variable
     - Network errors → Check internet connection

3. **Verify Paystack Script**
   - Check that `index.html` includes: `<script src="https://js.paystack.co/v1/inline.js"></script>`
   - Try accessing `window.PaystackPop` in browser console - should not be undefined

4. **Test with Paystack Test Cards**
   - Card: `4084 0840 8408 4081`
   - CVV: Any 3 digits
   - Expiry: Any future date
   - PIN: `0000`

### Firebase Authentication Issues

1. **Check Firebase Configuration**
   - Verify all Firebase env variables are set in `.env`
   - Check Firebase Console → Authentication → Sign-in method
   - Ensure Email/Password is enabled

2. **Firestore Permission Errors**
   - Check Firestore Security Rules are properly configured
   - Verify user is authenticated before accessing protected routes

### Common Issues

1. **"Payment system is not configured"**
   - Solution: Add `VITE_PAYSTACK_PUBLIC_KEY` to `.env` file
   - Restart dev server after adding

2. **"Email address is required for payment"**
   - Solution: Ensure student/user profile has email field
   - Check if userProfile is properly loaded

3. **Payment successful but enrollment not updated**
   - Check browser console for Firestore errors
   - Verify Firestore security rules allow updates
   - Check network tab for failed API calls

## Support

For issues or questions:
- Check Firebase Console for authentication/database errors
- Check browser console for JavaScript errors
- Verify environment variables are set correctly
- Ensure Firestore rules are properly configured
- Check that `.env` file has been created from `.env.example`
- Restart dev server after changing environment variables

## Security Considerations

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use Firebase Security Rules** - Restrict database access
3. **Validate on backend** - For production, add Cloud Functions to verify payments
4. **Enable reCAPTCHA** - Protect against bot signups
5. **Set up proper CORS** - Configure allowed domains in Firebase

## Next Steps

1. Set up email notifications (using Firebase Cloud Functions or EmailJS)
2. Add webhook handler for Paystack payment verification
3. Implement course content delivery system
4. Add progress tracking for enrolled students
5. Create admin dashboard for managing cohorts

## License

Proprietary - IntelliGeeks
