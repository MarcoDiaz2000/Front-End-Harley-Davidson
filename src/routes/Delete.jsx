import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../redux/bikes/thunk';
import LoadingScreen from '../components/conditions/LoadingScreen';
import NoRecords from '../components/conditions/NoRecords';
import MotorcycleList from '../components/delete/MotorcycleList';

const Delete = () => {
  const dispatch = useDispatch();
  const {
    bikes, isLoading, error, errorMsg,
  } = useSelector((state) => state.bikes);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div>
        <h1 className="text-white text-2xl text-center">Error</h1>
        <p className="text-white text-center">{errorMsg}</p>
      </div>
    );
  }

  if (bikes && bikes.length === 0) {
    return <NoRecords />;
  }

  return (
    <div className="h-screen">
      <div className="flex justify-center bodyBg overflow-y-auto pt-12 pb-12 min-h-screen">
        <div className="bg-customBg p-5 rounded-lg w-full sm:w-1/2 mb-12 white-shadow flex-shrink-0">
          <h2 className="text-white text-3xl mb-4 font-roboto font-bold">Delete Motorcycles</h2>
          <MotorcycleList bikes={bikes} />
        </div>
      </div>
    </div>
  );
};
export default Delete;
