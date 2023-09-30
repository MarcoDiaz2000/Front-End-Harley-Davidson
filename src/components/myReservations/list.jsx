import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservations/reservation';
import { fetchMotorcycles } from '../../redux/bikes/motorcycles';
import Reservation from './reservation';
import Pagination from './pagination'; // Import the Pagination component

export default function List() {
  const dispatch = useDispatch();
  const allReservations = useSelector((state) => state.reservations.reservations);
  const allItems = useSelector((state) => state.motorcycles.motorcycles);

  useEffect(() => {
    dispatch(fetchReservations(1));
    if (allItems.length === 0) dispatch(fetchMotorcycles());
  }, [dispatch, allItems]);

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
            <Reservation key={reservation.id} reservation={reservation} allItems={allItems} />
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
}
