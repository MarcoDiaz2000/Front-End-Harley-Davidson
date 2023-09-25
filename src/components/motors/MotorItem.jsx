import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function MotorItem({ item }) {
  return (
    <div className="w-full h-80 card">
      <div className="w-full h-60">
        <img className="w-full h-auto" src={item.photo} alt="motor" />
      </div>
      <h1 className="font-bold bg-blur">{item.name}</h1>
      <NavLink
        to={`/motors/${item.id}`}
        type="button"
        className="px-16 pb-2 pt-1 bg-customBg flex justify-center text-white rounded-md text-center shadow-md hover:bg-customDark"
      >
        See Model
      </NavLink>
    </div>
  );
}

MotorItem.propTypes = {
  item: PropTypes.node.isRequired,
};
