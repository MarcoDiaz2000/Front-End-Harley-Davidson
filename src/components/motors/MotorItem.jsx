import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MotorItem = ({ motor }) => (
  <div className="w-full h-96 card">
    <div className="w-full flex justify-center items-center h-64 bg-slate-500 p-4 m-2">
      <img className=" max-h-full" src={motor.image_url} alt="motor" />
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
export default MotorItem;

MotorItem.propTypes = {
  motor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};
