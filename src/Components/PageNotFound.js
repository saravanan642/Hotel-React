import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-5xl font-bold mb-2 text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Page Not Found</h2>
      <p className="text-gray-500 mb-8">
        The page you are looking for might have been removed or temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
