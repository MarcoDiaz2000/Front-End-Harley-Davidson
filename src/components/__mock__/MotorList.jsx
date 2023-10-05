import React from 'react';

const MotorList = () => (
  <div className=" flex flex-col bg-bodyBg">
    <div className="flex flex-col justify-center align-center items-center pb-8 font-roboto">
      <h1 className="font-bold text-white text-2xl">LATEST MODEL</h1>
      <h1 className="text-sm text-gray-500">please select a model</h1>
    </div>
    <div>

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

    </div>
  </div>
);
export default MotorList;
