'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // Redirect authenticated users
  if (isAuthenticated) {
    router.push('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold text-indigo-600">
              Task Manager
            </h1>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/signin')}
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
              >
                Sign In
              </button>

              <button
                onClick={() => router.push('/signup')}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md
                           hover:bg-indigo-700 transition focus:outline-none
                           focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Manage Your Tasks Efficiently
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-xl text-gray-500">
            A secure, authenticated task management application to help you
            stay organized and productive.
          </p>

          <div className="mt-10">
            <button
              onClick={() => router.push('/signup')}
              className="inline-flex items-center px-6 py-3 text-base font-medium
                         rounded-md shadow-sm text-white bg-indigo-600
                         hover:bg-indigo-700 transition
                         focus:outline-none focus:ring-2
                         focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </button>
          </div>

          {/* Info Card */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto overflow-hidden">
            <div className="px-6 py-8 sm:p-10 text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How to Use This App
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Create an account using the Sign Up button</li>
                <li>Log in with your credentials</li>
                <li>Access your personalized dashboard</li>
                <li>Add, update, and complete tasks</li>
                <li>Your data remains private and secure</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
