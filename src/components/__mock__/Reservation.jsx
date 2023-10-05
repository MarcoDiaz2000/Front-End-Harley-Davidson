import React from 'react';

const Reservation = () => (
  <tr key={32}>
    <td className="border border-gray-300 hidden lg:table-cell">
      <div className=" bg-customBg flex justify-center items-center">
        <img className="h-40" src="anything" alt="motor" />
      </div>
    </td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">Name</td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">12-12-2012</td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 md:table-cell text-center">London</td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 hidden md:table-cell text-center">
      <h1>False</h1>
    </td>
  </tr>
);

export default Reservation;
