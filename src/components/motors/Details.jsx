/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import img from '../../images/motor2.png';
import { fetchMotorcycleById } from '../../redux/motorcycles/motorcycles';

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedMotorcycle = useSelector((state) => state.motorcycles.selectedMotorcycle);

  useEffect(() => {
    dispatch(fetchMotorcycleById(id));
  }, [id, dispatch]);

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 px-4 py-4 font-roboto">
        <div className="flex flex-grow justify-center item-center rounded-2xl bg-gray-100">
          <div className="flex items-center justify-center">
            <img className="w-full h-96" src={selectedMotorcycle.image} alt="img" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-80 px-4 py-4">
          <div className="flex flex-col mb-10  text-white items-end">
            <h1 className="text-2xl font-bold">
              {selectedMotorcycle.name}
            </h1>
            <p className="text-sm font-medium">
              - $
              {selectedMotorcycle.deposit}
              {' '}
              deposit upon any Vespa purchase
            </p>
          </div>
          <ul>
            <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
              <span>Finance fee</span>
              <span>
                $
                {selectedMotorcycle.finance_fee}
              </span>
            </li>
            <li className="py-2 px-2 flex justify-between text-white text-sm">
              <span>Option to purchase fee</span>
              <span>
                $
                {selectedMotorcycle.option_to_purchase_fee}
              </span>
            </li>
            <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
              <span>Total amount of payable</span>
              <span>
                $
                {selectedMotorcycle.option_to_purchase_fee}
              </span>
            </li>
            <li className="py-2 px-2 flex justify-between text-white text-sm">
              <span>Duration</span>
              <span>
                {selectedMotorcycle.duration}
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
            <Link to={`/reserve/${id}`} className="px-12 pb-2 pt-2 rounded-lg text-white bg-customBg shadow-md hover:bg-customDark" type="button">Reserve</Link>
          </div>
        </div>
      </div>
      <div className="absolute md:top-3/4 left-6 pb-4 mt-20">
        <Link to="/motors" className="px-8 pb-2 pt-1 rounded-lg text-white bg-customBg shadow-md hover:bg-customDark" type="button">Back</Link>
      </div>
    </div>
  );
}
