import React from 'react';

const MotorcycleItem = () => (
  <li className="flex flex-col sm:flex-row justify-between items-center p-2 my-2 rounded-lg bg-white white-shadow-i">
    <span className="font-roboto font-bold text-black">Motorcycle</span>
    <button
      type="button"
      className="p-2 rounded hover:bg-customDark-900 font-roboto font-bold text-white bg-harleyOrange"
    >
      Delete
    </button>
  </li>
);
export default MotorcycleItem;
