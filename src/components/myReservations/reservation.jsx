import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

export default function Reservation({ reservation }) {
  return (
    <div className="border rounded m-4 flex justify-between">
      <h1>{reservation.name}</h1>
      <h2>{reservation.date}</h2>
      <h3>{reservation.city}</h3>
    </div>
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
  }).isRequired,
};
