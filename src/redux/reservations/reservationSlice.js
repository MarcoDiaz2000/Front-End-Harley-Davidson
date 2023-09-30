import { createSlice } from '@reduxjs/toolkit';

import { fetchReservations, createReservation } from './thunk';

const initialState = {
  reservations: [],
  isLoading: true,
  error: false,
  errMsg: '',
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: (builder) => {
    builder

      // Fetch reservations for a user
      .addCase(fetchReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      })

      // Create reservation
      .addCase(createReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = [...state.reservations, action.payload];
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      });
  },
});

export default reservationsSlice.reducer;
