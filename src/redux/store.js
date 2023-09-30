import { configureStore } from '@reduxjs/toolkit';

import bikesReducer from './bikes/bikesSlice';
import reservationsReducer from './reservations/reservation';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
    reservations: reservationsReducer,
    users: userReducer,
  },
});

export default store;
