import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy load all route components
const Home = lazy(() => import('./pages/Home'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Careers = lazy(() => import('./pages/Careers'))
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const ParentDashboard = lazy(() => import('./pages/ParentDashboard'))
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'))
const Assessment = lazy(() => import('./pages/Assessment'))
const Payment = lazy(() => import('./pages/Payment'))
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'))
const Schedule = lazy(() => import('./pages/Schedule'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const JuniorGeeks = lazy(() => import('./pages/JuniorGeeks'))
const OtherPrograms = lazy(() => import('./pages/OtherPrograms'))

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
      <p className="text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <WhatsAppButton />
      <Routes className="scroll-smooth">
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/about" element ={<AboutUs/>}/>
        <Route path = "/contact" element ={<ContactUs/>}/>
        <Route path = "/privacy" element ={<Privacy/>}/>
        <Route path = "/terms" element ={<Terms/>}/>
        <Route path = "/careers" element ={<Careers/>}/>
        <Route path = "/signup" element ={<SignUp/>}/>
        <Route path = "/signin" element ={<SignIn/>}/>
        <Route path = "/parent-dashboard" element ={<ParentDashboard/>}/>
        <Route path = "/student-dashboard" element ={<StudentDashboard/>}/>
        <Route path = "/assessment/:studentId?" element ={<Assessment/>}/>
        <Route path = "/payment/:studentId" element ={<Payment/>}/>
        <Route path = "/payment-success" element ={<PaymentSuccess/>}/>
        <Route path = "/schedule/:studentId" element ={<Schedule/>}/>
        <Route path = "/blog" element ={<Blog/>}/>
        <Route path = "/blog/:slug" element ={<BlogPost/>}/>
        <Route path = "/junior-geeks" element ={<JuniorGeeks/>}/>
        <Route path = "/other-programs" element ={<OtherPrograms/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
