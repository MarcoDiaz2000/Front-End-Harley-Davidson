import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../baseUrl';

const url = `${baseUrl}/reservations`;

// Get reservations for a user
export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async ({ userID }, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userID}/reservations`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`API call error ${error.message}`);
  }
});

// Create bike
export const createReservation = createAsyncThunk('reservations/createReservation', async ({ data }, thunkAPI) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
