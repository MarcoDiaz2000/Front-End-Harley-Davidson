import React from 'react';

const MotorItem = () => (
  <div className="w-full h-96 card">
    <div className="w-full flex justify-center items-center h-64 bg-slate-500 p-4 m-2">
      <img className="w-80 h-auto" src="src/img" alt="motor" />
    </div>
    <h1 className="font-bold text-white bg-blur">Model 1</h1>
    <a
      href="/motors/1"
      className="px-16 pb-2 pt-1 bg-customBg flex justify-center text-white rounded-md text-center shadow-md hover:bg-customDark"
    >
      See Model
    </a>
  </div>
);
export default MotorItem;
