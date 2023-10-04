import React from 'react';

const ReservationForm = () => (
  <div className="reservation-form">
    {/* Mock content for the reservation form */}
    <label htmlFor="date" className="block text-gray-600">Date:</label>
    <input
      type="date"
      id="date"
      name="date"
      className="w-full px-4 py-2 rounded-md text-white bg-inputBg focus:bg-inputBg border-gray-300 focus:outline-none focus:border-blue-500"
    />

    <label htmlFor="motorcycle" className="block text-gray-600">Motorcycle:</label>
    <input
      type="text"
      id="item_id"
      name="item_id"
      className="w-full px-4 py-2 rounded-md text-white focus:outline-none focus:border-blue-500  bg-inputBg focus:bg-inputBg"
      value="Mock Motorcycle"
    />

    <label htmlFor="city" className="block text-gray-600">Location:</label>
    <select
      id="city"
      name="city"
      className="w-full border-gray-300 focus:outline-none bg-inputBg focus:bg-inputBg focus:border-customBg"
    >
      <option value="New York">New York</option>
      <option value="Los Angeles">Los Angeles</option>
      <option value="Chicago">Chicago</option>
      {/* Add more mock options as needed */}
    </select>

    <button
      type="submit"
      className="bg-customBg px-4 py-2 rounded-md text-white hover:bg-customDark focus:outline-none"
    >
      Submit
    </button>
    {/* You can add more mock elements here */}
  </div>
);
export default ReservationForm;
