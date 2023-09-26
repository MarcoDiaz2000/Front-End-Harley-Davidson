import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/motor2.png';

function generateUniqueKey() {
  // Generate a random unique key
  return `button_${Math.random().toString(36).substring(2)}`;
}

export default function List() {
  const allReservations = [
    {
      id: 1,
      name: 'Bike 1',
      username_id: '1',
      item_id: '1',
      city: 'London',
      date: '12-12-2012',
      description: 'Description for Bike 1',
      removed: false,
      image: img,
    },
    {
      id: 2,
      name: 'Bike 2',
      username_id: '1',
      item_id: '2',
      city: 'London',
      date: '12-12-2012',
      description: 'Description for Bike 2',
      removed: false,
      image: img,
    },
    {
      id: 3,
      name: 'Bike 3',
      username_id: '1',
      item_id: '3',
      city: 'London',
      date: '12-12-2012',
      description: 'Description for Bike 3',
      removed: false,
      image: img,
    },
    {
      id: 4,
      name: 'Bike 4',
      username_id: '1',
      item_id: '4',
      city: 'London',
      date: '12-12-2012',
      description: 'Description for Bike 4',
      removed: false,
      image: img,
    },
    {
      id: 5,
      name: 'Bike 5',
      username_id: '1',
      item_id: '5',
      city: 'London',
      date: '12-12-2012',
      description: 'Description for Bike 5',
      removed: true,
      image: img,
    },
    {
      id: 6,
      name: 'Bike 6',
      username_id: '1',
      item_id: '6',
      city: 'London',
      date: '12-12-2012',
      description: 'Description for Bike 5',
      removed: true,
      image: img,
    },
    {
      id: 7,
      name: 'Bike 7',
      username_id: '1',
      item_id: '5',
      city: 'London',
      date: '12-12-2012',
      description: 'Description for Bike 5',
      removed: true,
      image: img,
    },
  ];

  // Define the number of reservations per page
  const reservationsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(allReservations.length / reservationsPerPage);

  // Use state to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * reservationsPerPage;
  const endIndex = startIndex + reservationsPerPage;

  // Get the reservations for the current page
  const reservations = allReservations.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="border-collapse border border-gray-300 mx-auto mt-12 bg-white drop-shadow-md w-11/12">
        <thead>
          <tr className="text-center">
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white hidden lg:table-cell">Thumbnail</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white">Bike</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white">Date</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white md:table-cell">City</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white hidden md:table-cell">
              Stat
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="border border-gray-300 hidden lg:table-cell">
                <div className=" bg-customBg flex justify-center items-center">
                  <img className="h-40" src={reservation.image} alt="motor" />
                </div>
              </td>
              <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">{reservation.name}</td>
              <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">{reservation.date}</td>
              <td className="border border-gray-300 md:px-4 px-2 py-2 md:table-cell text-center">{reservation.city}</td>
              <td className="border border-gray-300 md:px-4 px-2 py-2 hidden md:table-cell text-center">
                {reservation.removed ? (
                  <FontAwesomeIcon icon={faCircle} style={{ color: '#f50000' }} />
                ) : (
                  <FontAwesomeIcon icon={faCircle} style={{ color: '#22cc00' }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-center my-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            type="button"
            key={generateUniqueKey()}
            className={`mx-2 px-4 py-2 border ${
              currentPage === index + 1
                ? 'bg-customBg text-white'
                : 'border-gray-300 hover:bg-customBg hover:text-white'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
