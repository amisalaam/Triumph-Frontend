import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-black">404</h1>
        <h2 className="text-4xl font-semibold mt-4 text-gray-800">Page Not Found</h2>
        <p className="text-lg mt-2 text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 hover:text-gray-100 focus:outline-none">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
