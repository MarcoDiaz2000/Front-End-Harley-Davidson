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

// Create a reservation
export const createReservation = createAsyncThunk('reservations/createReservation', async ({ reservation }, thunkAPI) => {
  try {
    const response = await axios.post(url, reservation);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
