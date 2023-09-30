import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/thunk';
import { fetchBikes } from '../redux/bikes/thunk';
import { reservationsSelector, bikesSelector } from '../redux/store';
import LoadingScreen from '../components/conditions/LoadingScreen';
import NoRecords from '../components/conditions/NoRecords';
import List from '../components/myReservations/list';

export default function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector(reservationsSelector);
  const bikes = useSelector(bikesSelector);

  useEffect(() => {
    dispatch(fetchReservations({ userID: 1 }));
    dispatch(fetchBikes());
  }, [dispatch]);

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
          <p className="text-white text-center">{reservations.error}</p>
        </div>
      );
    }
    if (bikes.error) {
      return (
        <div>
          <h1 className="text-white text-2xl text-center">Error</h1>
          <p className="text-white text-center">{bikes.error}</p>
        </div>
      );
    }
  }

  if (reservations.reservations.length < 1) {
    return (
      <NoRecords />
    );
  }

  return (
    <div>
      <List allReservations={reservations.reservations} bikes={bikes.bikes} />
    </div>
  );
}
