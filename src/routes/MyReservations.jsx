import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/thunk';
import { fetchBikes } from '../redux/bikes/thunk';
import { reservationsSelector, bikesSelector, usersSelector } from '../redux/store';
import LoadingScreen from '../components/conditions/LoadingScreen';
import NoRecords from '../components/conditions/NoRecords';
import List from '../components/myReservations/list';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(reservationsSelector);
  const bikes = useSelector(bikesSelector);
  const { user } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchReservations({ userID: user.id }));
    dispatch(fetchBikes());
  }, [dispatch, user.id]);

  if (reservations.isLoading || bikes.isLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (reservations.error || bikes.error) {
    if (reservations.error) {
      return (
        <div>
          <h1 className="text-white text-2xl text-center">Error</h1>
          <p className="text-white text-center">{reservations.errorMsg}</p>
        </div>
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
  }

  if (reservations.reservations.length < 1) {
    return (
      <NoRecords message="No reservations" />
    );
  }

  return (
    <div>
      <List allReservations={reservations.reservations} bikes={bikes.bikes} />
    </div>
  );
};
export default MyReservations;
