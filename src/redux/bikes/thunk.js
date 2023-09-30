import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../baseUrl';

const url = `${baseUrl}/items`;

// Get bikes
export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async (thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Create bike
export const createBike = createAsyncThunk('bikes/createBike', async ({ data }, thunkAPI) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Update :removed
export const updateBike = createAsyncThunk('bikes/updateBike', async ({ id, data }, thunkAPI) => {
  try {
    const response = await axios.patch(`${url}/items/${id}`, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
