import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import getItemName from './functions/getItemName';
import getItemImage from './functions/getItemImage';
import getItemStat from './functions/getItemStat';

export default function Reservation({ reservation, allItems }) {
  return (
    <tr key={reservation.id}>
      <td className="border border-gray-300 hidden lg:table-cell">
        <div className=" bg-customBg flex justify-center items-center">
          <img className="h-40" src={getItemImage(allItems, reservation)} alt="motor" />
        </div>
      </td>
      <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">{getItemName(allItems, reservation)}</td>
      <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">{reservation.date}</td>
      <td className="border border-gray-300 md:px-4 px-2 py-2 md:table-cell text-center">{reservation.city}</td>
      <td className="border border-gray-300 md:px-4 px-2 py-2 hidden md:table-cell text-center">
        {getItemStat(allItems, reservation) ? (
          <FontAwesomeIcon icon={faCircle} style={{ color: '#f50000' }} />
        ) : (
          <FontAwesomeIcon icon={faCircle} style={{ color: '#22cc00' }} />
        )}
      </td>
    </tr>
  );
}

Reservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username_id: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  allItems: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
