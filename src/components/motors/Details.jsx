import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { bikesSelector } from '../../redux/store';
import { fetchBike } from '../../redux/bikes/thunk';
import LoadingScreen from '../conditions/LoadingScreen';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    bike, error, errMsg, isLoading,
  } = useSelector(bikesSelector);

  useEffect(() => {
    dispatch(fetchBike({ id }));
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-white text-2xl text-center">Error</h1>
        <p className="text-white text-center">{ errMsg }</p>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 px-4 py-4 font-roboto mt-10 md:mt-0">
        <div className="flex flex-grow justify-center item-center rounded-2xl bg-gray-100">
          <div className="flex items-center justify-center">
            <img className="w-full h-96" src={bike.image_url} alt="img" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-80 px-4 py-4">
          <div className="flex flex-col mb-10  text-white items-end">
            <h1 className="text-2xl font-bold">
              {bike.name}
            </h1>
            <p className="text-sm font-medium">
              - $
              {bike.deposit}
              {' '}
              deposit upon any purchase
            </p>
          </div>
          <ul>
            <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
              <span>Finance fee</span>
              <span>
                $
                {bike.finance_fee}
              </span>
            </li>
            <li className="py-2 px-2 flex justify-between text-white text-sm">
              <span>Option to purchase fee</span>
              <span>
                $
                {bike.option_to_purchase_fee}
              </span>
            </li>
            <li className="py-2 px-2 flex justify-between text-sm bg-gray-300">
              <span>Total amount of payable</span>
              <span>
                $
                {bike.total_amount_payable}
              </span>
            </li>
            <li className="py-2 px-2 flex justify-between text-white text-sm">
              <span>Duration</span>
              <span>
                {bike.duration}
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
      <div className="absolute md:top-3/4 md:left-6 pb-4 md:mt-20 top-3 right-5">
        <Link to="/motors" className="px-8 pb-2 pt-1 rounded-lg text-white bg-customBg shadow-md hover:bg-customDark" type="button">Back</Link>
      </div>
    </div>
  );
};
export default Details;
