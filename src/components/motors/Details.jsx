import React from 'react';
import { useParams, Link } from 'react-router-dom';
import img from '../../images/motor2.png';

export default function Details() {
  const { id } = useParams();
  return (
    <div className="relative">
      <div className="w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 px-4 py-4 font-roboto">
        <div className="flex flex-grow justify-center item-center mt-16 h-full rounded-2xl bg-gray-100">
          <div className="flex items-center justify-center">
            <img className="w-full h-96" src={img} alt="img" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-80 px-4 py-4">
          <div className="flex flex-col mb-10 items-end">
            <h1 className="text-2xl font-bold">Vespa Model</h1>
            <p className="text-sm font-medium">- $120 deposit upon any Vespa purchase</p>
          </div>
          <ul>
            <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
              <span>Finance fee</span>
              <span>$160</span>
            </li>
            <li className="py-2 px-2 flex justify-between text-sm">
              <span>Option to purchase fee</span>
              <span>$40</span>
            </li>
            <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
              <span>Total amount of payable</span>
              <span>$888</span>
            </li>
            <li className="py-2 px-2 flex justify-between text-sm">
              <span>Duration</span>
              <span>43 month</span>
            </li>
          </ul>
          <div className="px-2 flex text-sm font-medium">
            <span>
              <span className="font-extrabold">5.4% APR </span>
              Representative
            </span>
          </div>
          <div className="flex item-center justify-center pt-4">
            <Link to={`/reserve/${id}`} className="px-12 pb-2 pt-2 rounded-lg text-white bg-customBg shadow-md hover:bg-customDark" type="button">Reserve</Link>
          </div>
        </div>
      </div>
      <div className="absolute md:top-3.5/4 left-6 pb-4">
        <Link to="/motors" className="px-8 pb-2 pt-1 rounded-lg text-white bg-customBg shadow-md hover:bg-customDark" type="button">Back</Link>
      </div>
    </div>
  );
}
