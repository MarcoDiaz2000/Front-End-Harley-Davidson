import { configureStore } from '@reduxjs/toolkit';

import motorcyclesReducer from './motorcycles/motorcycles';
import reservationsReducer from './reservations/reservation';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    motorcycles: motorcyclesReducer,
    reservations: reservationsReducer,
    users: userReducer,
  },
});

export default store;
