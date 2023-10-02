import React from 'react';
import PropTypes from 'prop-types';
import MotorcycleItem from './MotorcycleItem';

export default function MotorcycleList({ bikes }) {
  return (
    <ul className="divide-customBorder">
      {bikes.map((motorcycle) => (
        <MotorcycleItem key={motorcycle.id} motorcycle={motorcycle} />
      ))}
    </ul>
  );
}

MotorcycleList.propTypes = {
  bikes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      removed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
