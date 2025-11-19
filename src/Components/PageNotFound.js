// Simple, clean, error-free 404 Page (React + Tailwind CSS)
// No animations, no framer-motion, no complex effects

import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</p>
      <p className="text-gray-500 max-w-md mb-6">
        The page you are looking for might be missing or unavailable.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}