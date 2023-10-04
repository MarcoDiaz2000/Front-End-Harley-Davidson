import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import getItemName from './functions/getItemName';
import getItemImage from './functions/getItemImage';
import getItemStat from './functions/getItemStat';
import getYear from './functions/getYear';
import getMonthDay from './functions/getMonthDay';

const Reservation = ({ reservation, bikes }) => (
  <tr key={reservation.id}>
    <td className="border border-gray-300 hidden lg:table-cell">
      <div className=" bg-customBg flex justify-center items-center">
        <img className="h-40" src={getItemImage(bikes, reservation)} alt="motor" />
      </div>
    </td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">{getItemName(bikes, reservation)}</td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 text-center">
      {getYear(reservation.date)}
      <br />
      {getMonthDay(reservation.date)}
    </td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 md:table-cell text-center">{reservation.city}</td>
    <td className="border border-gray-300 md:px-4 px-2 py-2 hidden md:table-cell text-center">
      {getItemStat(bikes, reservation) ? (
        <FontAwesomeIcon icon={faCircle} style={{ color: '#f50000' }} />
      ) : (
        <FontAwesomeIcon icon={faCircle} style={{ color: '#22cc00' }} />
      )}
    </td>
  </tr>
);

export default Reservation;

Reservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    item_id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  bikes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
