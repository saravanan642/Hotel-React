import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// NotFoundPage.jsx
// TailwindCSS + React Page Not Found component (copy into your React project)
// Usage: place <NotFoundPage /> inside your router's 404 route

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-4xl w-full text-center py-20">
        <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-indigo-50 mx-auto mb-6 shadow-md">
          {/* simple SVG illustration */}
          <svg
            className="w-24 h-24 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M3 7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6l-2-2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 13l2-2 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-3">Page Not Found</p>
        <p className="max-w-xl mx-auto text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Go to Home
          </Link>

          <button
            onClick={() => navigate(0)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Reload Page
          </button>

          <a
            href="mailto:support@example.com"
            className="mt-2 sm:mt-0 inline-flex items-center justify-center px-6 py-3 rounded-lg text-indigo-600 font-medium hover:underline"
          >
            Contact Support
          </a>
        </div>

        <footer className="mt-10 text-sm text-gray-400">
          <p>Hint: Check the URL for typing errors or return to the homepage.</p>
        </footer>
      </div>
    </main>
  );
}
