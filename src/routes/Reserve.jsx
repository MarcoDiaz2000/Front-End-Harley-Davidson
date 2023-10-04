import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationForm from '../components/Reservation/ReservationForm';
import LoadingScreen from '../components/conditions/LoadingScreen';
import { bikesSelector } from '../redux/store';
import { fetchBikes } from '../redux/bikes/thunk';
import NoRecords from '../components/conditions/NoRecords';

const Reserve = () => {
  const dispatch = useDispatch();
  const {
    isLoading, error, errorMsg, bikes,
  } = useSelector(bikesSelector);
  useEffect(() => {
    if (bikes.length === 0) {
      dispatch(fetchBikes());
    }
  }, [bikes.length, dispatch]);
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
  if (bikes.length < 1) {
    return (
      <NoRecords />
    );
  }
  return (
    <div>
      <ReservationForm bikes={bikes} />
    </div>
  );
};
export default Reserve;
