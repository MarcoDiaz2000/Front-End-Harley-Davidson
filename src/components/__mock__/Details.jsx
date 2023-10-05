import React from 'react';

const Details = () => (
  <div className="relative w-full h-full">
    <div className="w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 px-4 py-4 font-roboto">
      <div className="flex flex-grow justify-center item-center rounded-2xl bg-gray-100">
        <div className="flex items-center justify-center">
          <img className="w-full h-96" src="src/img" alt="img" />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-80 px-4 py-4">
        <div className="flex flex-col mb-10  text-white items-end">
          <h1 className="text-2xl font-bold">
            0
          </h1>
          <p className="text-sm font-medium">
            - $0
            {' '}
            deposit upon any Vespa purchase
          </p>
        </div>
        <ul>
          <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
            <span>Finance fee</span>
            <span>
              $0
            </span>
          </li>
          <li className="py-2 px-2 flex justify-between text-white text-sm">
            <span>Option to purchase fee</span>
            <span>
              $0
            </span>
          </li>
          <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
            <span>Total amount of payable</span>
            <span>
              $0
            </span>
          </li>
          <li className="py-2 px-2 flex justify-between text-white text-sm">
            <span>Duration</span>
            <span>
              3
              {' '}
              month
            </span>
          </li>
        </ul>
        <div className="px-2 flex text-sm text-white font-medium">
          <span>
            <span className="font-extrabold">5.4% APR </span>
            Representative
          </span>
        </div>
        <div className="flex item-center justify-center pt-4">
          <a href="/reserve/1" className="px-12 pb-2 pt-2 rounded-lg text-white bg-customBg shadow-md hover:bg-customDark" type="button">Reserve</a>
        </div>
      </div>
    </div>
    <div className="absolute md:top-3/4 left-6 pb-4 mt-20">
      <a href="/motors" className="px-8 pb-2 pt-1 rounded-lg text-white bg-customBg shadow-md hover:bg-customDark" type="button">Back</a>
    </div>
  </div>
);
export default Details;
