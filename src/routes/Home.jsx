import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MotorList from '../components/motors/MotorList';
import { bikesSelector } from '../redux/store';
import { fetchBikes } from '../redux/bikes/thunk';
import LoadingScreen from '../components/conditions/LoadingScreen';
import NoRecords from '../components/conditions/NoRecords';

const Home = () => {
  const dispatch = useDispatch();
  const bikes = useSelector(bikesSelector);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  if (bikes.isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (bikes.error) {
    return (
      <div>
        <h1 className="text-white text-2xl text-center">Error</h1>
        <p className="text-white text-center">{bikes.errorMsg}</p>
      </div>
    );
  }

  const bikesWithoutRemoved = bikes.bikes.filter((bike) => bike.removed === false);

  if (bikesWithoutRemoved.length === 0) {
    return <NoRecords message="No bikes available" />;
  }
  return (
    <div className="h-screen flex flex-col justify-center align-center">
      <MotorList motorcycles={bikes.bikes} />
    </div>
  );
};
export default Home;
