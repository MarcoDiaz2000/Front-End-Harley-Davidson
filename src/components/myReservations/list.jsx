import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/motor2.png';

export default function List() {
  const reservations = [
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
  ];

  return (
    <table className="border-collapse border border-gray-300 mx-auto mt-12 ">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2 bg-customBg text-white hidden lg:table-cell">Bike</th>
          <th className="border border-gray-300 px-4 py-2 bg-customBg text-white">Bike</th>
          <th className="border border-gray-300 px-4 py-2 bg-customBg text-white">Date</th>
          <th className="border border-gray-300 px-4 py-2 bg-customBg text-white md:table-cell">City</th>
          <th className="border border-gray-300 px-4 py-2 bg-customBg text-white hidden md:table-cell">
            Item
            <br />
            status
          </th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td className="border border-gray-300 px-4 py-2 hidden lg:table-cell"><img className="w-full h-auto" src={reservation.image} alt="motor" /></td>
            <td className="border border-gray-300 px-4 py-2">{reservation.name}</td>
            <td className="border border-gray-300 px-4 py-2">{reservation.date}</td>
            <td className="border border-gray-300 px-4 py-2 md:table-cell">{reservation.city}</td>
            <td className="border border-gray-300 px-4 py-2 hidden md:table-cell text-center">
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
  );
}
