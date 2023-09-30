import { createSlice } from '@reduxjs/toolkit';

import { fetchBikes, createBike, updateBike } from './thunk';

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

      // Update :removed
      .addCase(updateBike.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bikes = state.bikes.map((bike) => (
          bike.id === action.payload.id
            ? action.payload
            : bike
        ));
      });
  },
});

export default bikesSlice.reducer;
