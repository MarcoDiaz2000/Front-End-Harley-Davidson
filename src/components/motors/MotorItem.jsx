import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function MotorItem({ motor }) {
  return (
    <div className="w-full h-96 card">
      <div className="w-full flex justify-center items-center ">
        <img className="w-80 h-auto" src={motor.image} alt="motor" />
      </div>
      <h1 className="font-bold text-white bg-blur">{motor.name}</h1>
      <NavLink
        to={`/motors/${motor.id}`}
        type="button"
        className="px-16 pb-2 pt-1 bg-customBg flex justify-center text-white rounded-md text-center shadow-md hover:bg-customDark"
      >
        See Model
      </NavLink>
    </div>
  );
}

MotorItem.propTypes = {
  motor: PropTypes.node.isRequired,
};
