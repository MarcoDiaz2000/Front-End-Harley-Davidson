import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Reservation from './reservation';
import Pagination from './pagination'; // Import the Pagination component

const List = ({ allReservations, bikes }) => {
  // Define the number of reservations per page
  const reservationsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = allReservations
    ? Math.ceil(allReservations.length / reservationsPerPage)
    : 0;

  // Use state to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * reservationsPerPage;
  const endIndex = startIndex + reservationsPerPage;

  // Get the reservations for the current page
  const reservations = allReservations ? allReservations.slice(startIndex, endIndex) : [];

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col justify-between">
      <table className=" border border-gray-300 mx-auto mt-12 bg-white drop-shadow-md w-11/12 border-separate rounded-lg">
        <thead>
          <tr className="text-center">
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white hidden lg:table-cell">Thumbnail</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white">Motor</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white">Date</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white md:table-cell">City</th>
            <th className="border border-gray-300 px-4 py-4 bg-customBg text-white hidden md:table-cell">
              Motor
              <br />
              Availability
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <Reservation key={reservation.id} reservation={reservation} bikes={bikes} />
          ))}
        </tbody>
      </table>

      {/* Use the Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default List;

List.propTypes = {
  allReservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item_id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  bikes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
