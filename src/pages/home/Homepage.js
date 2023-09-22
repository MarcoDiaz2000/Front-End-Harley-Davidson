import React from 'react';
import { Link } from 'react-router-dom';

// Import the background image
import backgroundImage from '../../images/harley-davidson-HYjJ1_AZnqw-unsplash.jpg';

const HomePage = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-b from-green-500 to-blue-500 w-full"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold text-white mb-6 log-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 rounded-lg">
        BOOK YOUR HARLEY DAVIDSON NOW
      </h1>
      <Link to="/signin">
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300"
        >
          LOGIN
        </button>
      </Link>
      <Link to="/signup" className="mt-4">
        <button
          type="button"
          className="border border-green-500 text-green-500 hover:text-white hover:bg-green-500 font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300"
        >
          SIGNUP
        </button>
      </Link>
    </div>
  </div>
);

export default HomePage;
