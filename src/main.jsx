import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

// Environment check
console.log('🚀 IntelliGeeks Platform Starting...');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📋 Environment Check:');
console.log('✓ Firebase API Key:', import.meta.env.VITE_FIREBASE_API_KEY ? '✅ Configured' : '❌ Missing');
console.log('✓ Firebase Project:', import.meta.env.VITE_FIREBASE_PROJECT_ID ? '✅ Configured' : '❌ Missing');
console.log('✓ Paystack Key:', import.meta.env.VITE_PAYSTACK_PUBLIC_KEY ? '✅ Configured' : '❌ Missing - Payment will not work!');
if (!import.meta.env.VITE_PAYSTACK_PUBLIC_KEY) {
  console.warn('⚠️  PAYSTACK NOT CONFIGURED!');
  console.warn('   Add VITE_PAYSTACK_PUBLIC_KEY to your .env file');
  console.warn('   See SETUP.md for instructions');
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
