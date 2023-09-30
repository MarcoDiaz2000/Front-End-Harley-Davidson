import { configureStore } from '@reduxjs/toolkit';

import bikesReducer from './bikes/bikesSlice';
import reservationsReducer from './reservations/reservationSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
    reservations: reservationsReducer,
    users: userReducer,
  },
});

const bikesSelector = (state) => state.bikes;
const reservationsSelector = (state) => state.reservations;
const usersSelector = (state) => state.users;

export default store;
export { bikesSelector, reservationsSelector, usersSelector };
