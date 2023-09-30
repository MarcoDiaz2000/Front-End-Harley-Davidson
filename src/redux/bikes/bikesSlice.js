import { createSlice } from '@reduxjs/toolkit';

import {
  fetchBikes, createBike, markBikeAsRemoved, markBikeAsRestored,
} from './thunk';

const initialState = {
  bikes: [],
  isLoading: true,
  error: false,
  errMsg: '',
};

const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  extraReducers: (builder) => {
    builder

      // Fetch bikes
      .addCase(fetchBikes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bikes = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      })

      // Create bike
      .addCase(createBike.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bikes = [...state.bikes, action.payload];
      })
      .addCase(createBike.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      })

      // Mark bike as removed
      .addCase(markBikeAsRemoved.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markBikeAsRemoved.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bikes = state.bikes.map((bike) => (
          bike.id === action.payload.id ? { ...bike, removed: true }
            : bike
        ));
      })
      .addCase(markBikeAsRemoved.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      })

      // Mark bike as restored
      .addCase(markBikeAsRestored.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markBikeAsRestored.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bikes = state.bikes.map((bike) => (
          bike.id === action.payload.id ? { ...bike, removed: false }
            : bike
        ));
      })
      .addCase(markBikeAsRestored.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      });
  },
});

export default bikesSlice.reducer;
